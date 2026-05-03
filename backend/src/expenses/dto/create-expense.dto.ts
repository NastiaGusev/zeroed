import { IsNumber, IsString, IsArray, Min } from 'class-validator';

export class CreateExpenseDto {
  @IsString()
  description!: string;

  @IsNumber()
  @Min(0)
  amount!: number;

  @IsArray()
  memberIds!: number[];
}
