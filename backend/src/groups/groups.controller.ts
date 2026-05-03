import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  ParseIntPipe,
  Req,
  UseGuards,
} from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('groups')
export class GroupsController {
  constructor(private groupsService: GroupsService) {}

  @Post()
  createGroup(@Body() body: CreateGroupDto, @Req() req: any) {
    return this.groupsService.createGroup(body.name, req.user.sub);
  }

  @Get(':id')
  getGroup(@Param('id', ParseIntPipe) id: number) {
    return this.groupsService.getGroup(id);
  }

  @Post(':id/members')
  addMember(
    @Param('id', ParseIntPipe) groupId: number,
    @Body('userId') userId: number,
  ) {
    return this.groupsService.addMember(groupId, userId);
  }
}
