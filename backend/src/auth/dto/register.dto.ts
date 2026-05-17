import {
  IsEmail,
  IsString,
  MinLength,
  IsOptional,
  Matches,
} from 'class-validator';

export class RegisterDto {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsOptional()
  @Matches(/^05\d{8}$/, {
    message: 'Phone must be a valid Israeli mobile number (05XXXXXXXX)',
  })
  phone?: string;

  @IsString()
  @MinLength(6)
  password!: string;
}
