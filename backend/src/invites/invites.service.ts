/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class InvitesService {
  constructor(private prisma: PrismaService) {}

  async createInvite(groupId: number, email: string) {
    // Check group exists
    const group = await this.prisma.group.findUnique({
      where: { id: groupId },
    });
    if (!group) throw new NotFoundException('Group not found');

    // Create invite
    return this.prisma.groupInvite.create({
      data: { groupId, email },
      include: { group: true },
    });
  }

  getPendingInvites(email: string) {
    return this.prisma.groupInvite.findMany({
      where: { email, status: 'PENDING' },
      include: { group: true },
    });
  }

  async respondToInvite(inviteId: number, email: string, accept: boolean) {
    const invite = await this.prisma.groupInvite.findUnique({
      where: { id: inviteId },
    });

    if (!invite || invite.email !== email) {
      throw new NotFoundException('Invite not found');
    }

    // Update invite status
    await this.prisma.groupInvite.update({
      where: { id: inviteId },
      data: { status: accept ? 'ACCEPTED' : 'DECLINED' },
    });

    // If accepted, add user to group
    if (accept) {
      const user = await this.prisma.user.findUnique({ where: { email } });
      if (user) {
        await this.prisma.groupMember.create({
          data: { groupId: invite.groupId, userId: user.id },
        });
      }
    }

    return { success: true };
  }
}
