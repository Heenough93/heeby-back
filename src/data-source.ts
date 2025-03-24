import 'reflect-metadata';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'mariadb',
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '1234',
  database: process.env.DB_DATABASE || 'test',
  synchronize: false,
  // dropSchema: true,
  logging: true,
  entities: [__dirname + '/entities/*.ts'], // 엔티티 경로
  extra: {
    connectTimeout: 10000, // 10초 (기본값보다 늘림)
    acquireTimeout: 10000,
    waitForConnections: true,
    connectionLimit: 10, // 적절히 조정
    queueLimit: 0
  }
});
