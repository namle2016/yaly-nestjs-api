import { 
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Request,
 } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  //Test

  @Get('getListItem')
  getListItem() {
    return this.usersService.getListItem();
  }

  @Post()
  postRoute1(@Body() createUserDto: CreateUserDto) {
    // Ở đây, bạn có thể thực hiện xử lý tạo người dùng với dữ liệu từ DTO
    const { username, email } = createUserDto;
    // Thực hiện xử lý, ví dụ: in thông tin người dùng ra console
    const data = `Log from controller data trong NestJS-User: ${username} -email: ${email}`;
    console.log(data);
    // Trả về thông báo hoặc dữ liệu phản hồi tùy thuộc vào logic của bạn
    return this.usersService.postListItem(createUserDto);
  }
  
  @Post('postRoute2')
  postRoute2(@Body() createUserDto: CreateUserDto) {
    // Ở đây, bạn có thể thực hiện xử lý tạo người dùng với dữ liệu từ DTO
    const { username, email } = createUserDto;
    // Thực hiện xử lý, ví dụ: in thông tin người dùng ra console
    const data = `Log from controller data trong NestJS-User: ${username} -email: ${email}`;
    console.log(data);
    // Trả về thông báo hoặc dữ liệu phản hồi tùy thuộc vào logic của bạn
    return this.usersService.postListItem(createUserDto);
  }

  @Post('postString')
  postString(@Body() createUserDto: CreateUserDto) {
    // Ở đây, bạn có thể thực hiện xử lý tạo người dùng với dữ liệu từ DTO
    const { username, email } = createUserDto;
    // Thực hiện xử lý, ví dụ: in thông tin người dùng ra console
    const data = `Log from controller data trong NestJS-User: ${username} -email: ${email}`;
    console.log(data);
    // Trả về thông báo hoặc dữ liệu phản hồi tùy thuộc vào logic của bạn
    return this.usersService.postString(username, email);
  }
}
