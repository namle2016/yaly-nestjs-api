import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserModel } from './entities/usersmodule';

@Injectable()
export class UsersService {
  private userList: UserModel[] = [];
  jwtService: any;
  
  postListItem(createUserDto: CreateUserDto) {
    const { username, email } = createUserDto;
    const data = `Log from service data trong NestJS-User: ${username} -email: ${email}`;
    console.log(data);
    return 'Post data is successfull!';
  }

  postString(username: string, email: string) {
    const data = `Log from string service data trong NestJS-User: ${username} -email: ${email}`;
    console.log(data);
    return 'Post string data is successfull!';
  }

  getListItem() {
    console.log('getListItem');
    const rawData = [
      { id: 1, username: 'user1', email: 'user1@example.com' },
      { id: 2, username: 'user2', email: 'user2@example.com' },
      { id: 3, username: 'user3', email: 'user3@example.com' },
    ];

    rawData.forEach((data) => {
      const user = new UserModel();
      user.id = data.id;
      user.username = data.username;
      user.email = data.email;

      this.userList.push(user);
    });
    return this.userList;
  }
}
