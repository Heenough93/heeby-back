import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

import cors from './configs/cors';
import authRoute from './routes/auth';
import usersRoute from './routes/users';
import postsRoute from './routes/posts';
import tracksRoute from './routes/tracks';
import { ErrorHandler } from './http/middlewares/ErrorHandler';
// FIXME: temp data
import tracks from "./tracks";
import posts from "./posts";


const app = express();

// 미들웨어 설정
app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 기본 라우트
app.get('/', (req, res) => {
  res.send('Hello, Heeby Server!');
});

// 라우트 추가
app.use('/auth', authRoute);
app.use('/users', usersRoute);
app.use('/posts', postsRoute);
app.use('/tracks', tracksRoute);

// FIXME: temp api
app.post('/track/find-tracks', (req, res) => {
  res.send({ data: tracks } );
});
app.post('/post/find-posts', (req, res) => {
  res.send({ data: posts } );
});

app.use('*', (req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    message: 'Invalid route',
  });
});

app.use(ErrorHandler.handleErrors);

export default app;