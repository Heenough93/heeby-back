import {IsDateString, IsNotEmpty, IsNumber, IsString} from 'class-validator';


export class CreateTrackDTO {
  id?: number;

  @IsNotEmpty()
  @IsDateString()
  dateAndTime: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsString()
  flag: string;

  @IsNotEmpty()
  @IsNumber()
  lat: number;

  @IsNotEmpty()
  @IsNumber()
  lng: number;
}

export class UpdateTrackDTO {
  id?: number;

  @IsNotEmpty()
  @IsDateString()
  dateAndTime: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsString()
  flag: string;

  @IsNotEmpty()
  @IsNumber()
  lat: number;

  @IsNotEmpty()
  @IsNumber()
  lng: number;
}
