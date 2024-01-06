// auth.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() createUserDto: CreateUserDto){
    const { username, email } = createUserDto;
    console.log(username);
    // Thực hiện xác thực người dùng và sinh token
    const token = await this.authService.generateToken({ sub: username });
    return { access_token: token };
  }
}


//{
//   "username":"username1",
//   "email":"email1"
//   }
