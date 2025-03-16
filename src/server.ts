import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import { PORT } from './config/env';
import { AppDataSource } from './data-source';


// 환경변수 로드
dotenv.config();

const app = express();

// 미들웨어 설정
app.use(cors());
app.use(express.json());

// 기본 라우트
app.get('/', (req, res) => {
  res.send('Hello, TypeScript Server!');
});

// 라우트 추가
app.use('/users', userRoutes);

// 데이터베이스 연결
AppDataSource.initialize()
    .then(() => {
      console.log('📌 Database connected successfully!');

      // 서버 실행
      app.listen(PORT, () => {
        console.log(`🚀 Server is running on http://localhost:${PORT}`);
      });
    })
    .catch((error) => console.error('❌ Database connection failed:', error));
