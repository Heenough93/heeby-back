import { Router } from 'express';

const router = Router();

router.get('/data', (req, res) => {
  res.json({ message: 'This is some data!' });
});

export default router;
