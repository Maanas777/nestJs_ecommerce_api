import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';

import { UserSignup } from './dto/user-signup.dto';
import { UserEntity } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


@Post('signup')
 async signup(@Body() body:UserSignup):Promise<UserEntity>{
  return await this.usersService.signup(body)
}














}
