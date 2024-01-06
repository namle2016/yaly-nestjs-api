// auth.module.ts
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt', // Chắc chắn rằng chiến lược JWT được đăng ký làm chiến lược mặc định
    }),
    JwtModule.register({
      secret: 'your_secret_key', // Thay thế bằng khóa bí mật của bạn
      signOptions: { expiresIn: '1h' }, // Thời gian hết hạn của token
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [JwtModule],
})
export class AuthModule {}
