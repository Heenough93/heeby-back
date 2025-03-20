import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { DBTable } from '../constants/DBTable';
import { User } from './User';


@Entity(DBTable.POSTS)
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  dateAndTime: string;

  @Column('text')
  title: string;

  @Column('text')
  content: string;

  @Column('numeric')
  lat: number;

  @Column('numeric')
  lng: number;

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column('text')
  userId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  toResponse(): Post {
    const responsePost = new Post();
    responsePost.id = this.id;
    responsePost.dateAndTime = this.dateAndTime;
    responsePost.title = this.title;
    responsePost.content = this.content;
    responsePost.lat = this.lat;
    responsePost.lng = this.lng;
    responsePost.createdAt = this.createdAt;
    responsePost.updatedAt = this.updatedAt;
    return responsePost;
  }
}
