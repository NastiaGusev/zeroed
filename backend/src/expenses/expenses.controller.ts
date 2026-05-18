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
import { Delete, Patch } from '@nestjs/common';

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
      body.currency,
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

  @Post(':expenseId/members')
  addMemberToExpense(
    @Param('expenseId', ParseIntPipe) expenseId: number,
    @Body('userId') userId: number,
  ) {
    return this.expensesService.addMemberToExpense(expenseId, userId);
  }

  @Patch(':expenseId')
  updateExpense(
    @Param('expenseId', ParseIntPipe) expenseId: number,
    @Body() body: { description: string; amount: number; memberIds: number[] },
  ) {
    return this.expensesService.updateExpense(
      expenseId,
      body.description,
      body.amount,
      body.memberIds,
    );
  }
}
