import { Router } from 'express';
import auth from './swap/swap.routes'

const router = Router();
router.use('/swap', auth);

export default router;
