import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import { AppDataSource } from './data-source';
import cors from './configs/cors';
import authRoute from './routes/auth';
import usersRoute from './routes/users';
import postsRoute from './routes/posts';
import tracksRoute from './routes/tracks';
import { ErrorHandler } from './http/middlewares/ErrorHandler';


// 환경변수 로드
dotenv.config();
const PORT = process.env.APP_PORT || 3000;

const app = express();

// 미들웨어 설정
app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 기본 라우트
app.get('/', (req, res) => {
  res.send('Hello, TypeScript Server!');
});

// 라우트 추가
app.use('/auth', authRoute);
app.use('/users', usersRoute);
app.use('/posts', postsRoute);
app.use('/tracks', tracksRoute);

app.use('*', (req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    message: 'Invalid route',
  });
});

app.use(ErrorHandler.handleErrors);

// 데이터베이스 연결
AppDataSource.initialize()
    .then(() => {
      console.log('📌 Database connected successfully!');
    })
    .catch((error) => {
      console.error('❌ Database connection failed:', error);
      console.error('Error message:', error.message);
    });

// 서버 실행
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});