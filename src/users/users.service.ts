import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { UserSignup } from './dto/user-signup.dto';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(UserEntity) private user:Repository<UserEntity> ){}



async signup(body:UserSignup):Promise<UserEntity>{
  const user=this.user.create(body)
  return await this.user.save(user)

}















 
}
