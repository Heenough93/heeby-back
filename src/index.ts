import 'reflect-metadata';
import * as dotenv from 'dotenv';

import { AppDataSource } from './data-source';
import app from './server';


// 환경변수 로드
dotenv.config();

const PORT = process.env.APP_PORT || 3000;

// 데이터베이스 연결
AppDataSource.initialize()
    .then(async () => {
      console.log('📌 Database connected successfully!');
    })
    .catch((error) => console.error('❌ Database connection failed:', error));

// 서버 실행
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});