import { Router } from 'express';
import swap from './swap.controller';

const router = Router();

router.post('/', swap);

export default router;
