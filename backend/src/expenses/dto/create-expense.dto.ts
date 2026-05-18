import { IsNumber, IsString, IsArray, Min, IsOptional } from 'class-validator';

export class CreateExpenseDto {
  @IsString()
  description!: string;

  @IsNumber()
  @Min(0)
  amount!: number;

  @IsOptional()
  @IsString()
  currency?: string;

  @IsArray()
  memberIds!: number[];
}
