import 'dotenv/config';
import { Request, Response } from 'express';

import * as statusCodes from '../../../../constants/statusCodes';
import asyncHandler from '../../../../middlewares/asyncHandler';
import jsonResponse from '../../../../helpers/jsonResponse';

const swapp = asyncHandler(
  async (req: Request, res: Response): Promise<Response> => {
    return jsonResponse({
      res,
      status: statusCodes.OK,
    });
  },
);

export default swapp;