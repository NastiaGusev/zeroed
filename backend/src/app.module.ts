import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { GroupsModule } from './groups/groups.module';
import { ExpensesModule } from './expenses/expenses.module';

@Module({
  imports: [AuthModule, GroupsModule, ExpensesModule],
  providers: [PrismaService],
})
export class AppModule {}
