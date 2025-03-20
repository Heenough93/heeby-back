import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { hash } from 'bcryptjs';

import { DBTable } from '../constants/DBTable';
import { Roles } from '../constants/Role';
import { Post } from './Post';


@Entity(DBTable.USERS)
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  password: string;

  @Column('text', { unique: true })
  email: string;

  @Column('numeric', { default: Roles.USER })
  role: number;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await hash(this.password, 12);
  }

  toResponse(): User {
    const responseUser = new User();
    responseUser.id = this.id;
    responseUser.name = this.name;
    responseUser.password = this.password;
    responseUser.email = this.email;
    responseUser.role = this.role;
    responseUser.createdAt = this.createdAt;
    responseUser.updatedAt = this.updatedAt;
    return responseUser;
  }
}
