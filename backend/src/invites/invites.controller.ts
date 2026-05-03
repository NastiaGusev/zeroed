/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  ParseIntPipe,
  Req,
  UseGuards,
} from '@nestjs/common';
import { InvitesService } from './invites.service';
import { CreateInviteDto } from './dto/create-invite.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('invites')
export class InvitesController {
  constructor(private invitesService: InvitesService) {}

  @Post('groups/:groupId')
  createInvite(
    @Param('groupId', ParseIntPipe) groupId: number,
    @Body() body: CreateInviteDto,
  ) {
    return this.invitesService.createInvite(groupId, body.email);
  }

  @Get('pending')
  getPendingInvites(@Req() req: any) {
    return this.invitesService.getPendingInvites(req.user.email);
  }

  @Post(':id/accept')
  acceptInvite(@Param('id', ParseIntPipe) id: number, @Req() req: any) {
    return this.invitesService.respondToInvite(id, req.user.email, true);
  }

  @Post(':id/decline')
  declineInvite(@Param('id', ParseIntPipe) id: number, @Req() req: any) {
    return this.invitesService.respondToInvite(id, req.user.email, false);
  }
}
