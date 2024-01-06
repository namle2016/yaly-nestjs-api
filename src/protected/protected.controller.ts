import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist';

@Controller('protected')
export class ProtectedController {
  @Get('protected')
  @UseGuards(AuthGuard('jwt'))
  getProtectedData() {
    console.log("ok");
    return 'This is a protected route';
  }
}
 