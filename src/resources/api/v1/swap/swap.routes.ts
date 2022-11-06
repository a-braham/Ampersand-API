import { Router } from 'express';
import asyncHandler from 'middlewares/asyncHandler';
import * as controllers from './swap.controller';
import * as validators from './swap.validator';

const router = Router();

router.post(
  '/',
  validators.swap,
  asyncHandler(controllers.swap),
);

export default router;
