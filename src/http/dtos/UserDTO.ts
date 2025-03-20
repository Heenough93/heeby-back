import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

import { User } from '../../entities/User';
import { IsUnique } from '../validators/IsUniqueValidator';


export class CreateUserDTO {
  id?: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(20)
    name: string;

  @IsNotEmpty()
  @IsEmail()
  @IsUnique(User, 'email')
    email: string;
}

export class UpdateUserDTO {
  id?: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(20)
    name: string;

  @IsNotEmpty()
  @IsEmail()
  @IsUnique(User, 'email')
    email: string;
}
