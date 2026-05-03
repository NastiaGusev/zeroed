/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
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
import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Delete } from '@nestjs/common';

@UseGuards(JwtAuthGuard)
@Controller('groups/:groupId/expenses')
export class ExpensesController {
  constructor(private expensesService: ExpensesService) {}

  @Post()
  createExpense(
    @Param('groupId', ParseIntPipe) groupId: number,
    @Body() body: CreateExpenseDto,
    @Req() req: any,
  ) {
    return this.expensesService.createExpense(
      groupId,
      req.user.sub,
      body.description,
      body.amount,
      body.memberIds,
    );
  }

  @Get()
  getExpenses(@Param('groupId', ParseIntPipe) groupId: number) {
    return this.expensesService.getGroupExpenses(groupId);
  }

  @Get('balances')
  getBalances(@Param('groupId', ParseIntPipe) groupId: number) {
    return this.expensesService.getGroupBalances(groupId);
  }

  @Delete(':expenseId')
  deleteExpense(@Param('expenseId', ParseIntPipe) expenseId: number) {
    return this.expensesService.deleteExpense(expenseId);
  }
}
