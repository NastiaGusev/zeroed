import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async register(name: string, email: string, password: string) {
    // Check if user already exists
    const existing = await this.prisma.user.findUnique({ where: { email } });
    if (existing) {
      throw new ConflictException('Email already in use');
    }

    // Hash the password — never store plain text
    const passwordHash = await bcrypt.hash(password, 10);

    // Create the user in the database
    const user = await this.prisma.user.create({
      data: { name, email, passwordHash },
    });

    // Return a JWT token
    return this.signToken(user.id, user.email);
  }

  async login(email: string, password: string) {
    // Find the user
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Compare the password against the stored hash
    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.signToken(user.id, user.email);
  }

  private signToken(userId: number, email: string) {
    const payload = { sub: userId, email };
    return {
      access_token: this.jwt.sign(payload),
    };
  }

  async getMe(userId: number) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true },
    });
  }
}
