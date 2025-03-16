import { Router } from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../entities/User';

const router = Router();
const userRepo = AppDataSource.getRepository(User);

router.get('/', async (req, res) => {
  const users = await userRepo.find();
  res.json(users);
});

router.post('/', async (req, res) => {
  const { name, email } = req.body;
  const user = userRepo.create({ name, email });
  await userRepo.save(user);
  res.status(201).json(user);
});

export default router;
