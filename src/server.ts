import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/index';
import { PORT } from './config/env';


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

// API 라우트 추가
app.use('/api', router);

// 서버 실행
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
