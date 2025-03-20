import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { DBTable } from '../constants/DBTable';


@Entity(DBTable.TRACKS)
export class Track {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  dateAndTime: string;

  @Column('text')
  city: string;

  @Column('text')
  country: string;

  @Column('text')
  flag: string;

  @Column('numeric')
  lat: number;

  @Column('numeric')
  lng: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  toResponse(): Track {
    const responseTrack = new Track();
    responseTrack.id = this.id;
    responseTrack.dateAndTime = this.dateAndTime;
    responseTrack.city = this.city;
    responseTrack.country = this.country;
    responseTrack.flag = this.flag;
    responseTrack.lat = this.lat;
    responseTrack.lng = this.lng;
    responseTrack.createdAt = this.createdAt;
    responseTrack.updatedAt = this.updatedAt;
    return responseTrack;
  }
}
