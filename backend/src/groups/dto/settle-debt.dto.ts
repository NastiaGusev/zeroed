import { IsNumber, Min } from 'class-validator';

export class SettleDebtDto {
  @IsNumber()
  toUserId!: number;

  @IsNumber()
  @Min(0)
  amount!: number;
}
