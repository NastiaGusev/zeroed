import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class GroupsService {
  constructor(private prisma: PrismaService) {}

  async createGroup(name: string, ownerId: number) {
    const group = await this.prisma.group.create({
      data: {
        name,
        ownerId,
        members: {
          create: { userId: ownerId }, // owner is automatically a member
        },
      },
      include: {
        members: true,
      },
    });
    return group;
  }

  async getGroup(groupId: number) {
    const group = await this.prisma.group.findUnique({
      where: { id: groupId },
      include: {
        members: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
              },
            },
          },
        },
        expenses: true,
      },
    });

    if (!group) {
      throw new NotFoundException(`Group ${groupId} not found`);
    }

    return group;
  }

  async addMember(groupId: number, userId: number) {
    return this.prisma.groupMember.create({
      data: { groupId, userId },
    });
  }
}
