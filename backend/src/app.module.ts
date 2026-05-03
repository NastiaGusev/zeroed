import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { GroupsModule } from './groups/groups.module';

@Module({
  imports: [AuthModule, GroupsModule],
  providers: [PrismaService],
})
export class AppModule {}
