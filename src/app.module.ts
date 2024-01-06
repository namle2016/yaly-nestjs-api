import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './Users/Users.service';
import { AuthModule } from './auth/auth.module';
import { ProtectedController } from './protected/protected.controller';
import { ProtectedModule } from './protected/protected.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';


@Module({
  imports: [
    UsersModule, 
    AuthModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
    secret: 'your_secret_key',
    signOptions: { expiresIn: '1h' }
   }),
  ],
  providers: [AuthService], // Đăng ký chiến lược xác thực ở đây
  controllers: [ProtectedController],
})
export class AppModule {}
