import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user/domain/services/user.service';
import { User } from 'src/user/domain/entities/user.entity';

@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService){

    }

    @Post()
    async register(@Body() user: User){
        return this.userService.register(user);
    }
}
