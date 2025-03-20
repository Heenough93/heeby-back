import {IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength} from 'class-validator';

import { Post } from '../../entities/Post';
import { IsUnique } from '../validators/IsUniqueValidator';


export class CreatePostDTO {
  id?: number;

  @IsNotEmpty()
  @IsDateString()
  @IsUnique(Post, 'dateAndTime')
   dateAndTime: string;

  @IsNotEmpty()
  @IsString()
   title: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
   content: string;

  @IsNotEmpty()
  @IsNumber()
   lat: number;

  @IsNotEmpty()
  @IsNumber()
   lng: number;

  @IsNotEmpty()
  @IsString()
   userId: string;
}

export class UpdatePostDTO {
  id?: number;

  @IsNotEmpty()
  @IsDateString()
  @IsUnique(Post, 'dateAndTime')
  dateAndTime: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  content: string;

  @IsNotEmpty()
  @IsNumber()
  lat: number;

  @IsNotEmpty()
  @IsNumber()
  lng: number;

  @IsNotEmpty()
  @IsString()
  userId: string;
}
