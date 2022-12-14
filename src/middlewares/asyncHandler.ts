import { Request, Response, NextFunction } from 'express';
import { SERVER_ERROR } from '../constants/statusCodes';
import jsonResponse from '../helpers/jsonResponse';
import logger from '../helpers/logger';

const isProduction = process.env.NODE_ENV === 'production';

type CallbackFunction = (
  req: Request,
  Res: Response,
  next: NextFunction,
) => void | Promise<Response | undefined>;

const asyncHandler = (cb: CallbackFunction) => async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | undefined> => {
  try {
    await cb(req, res, next);
  } catch (err) {
    console.log(err);
    if (isProduction) {
      logger.error(err.message)
    }

    const status = err.status || SERVER_ERROR;

    return jsonResponse({
      res,
      status,
      message:
        err?.errors && err?.errors[0]
          ? err?.errors[0].message
          : err.message || err.data.errorMessage,
      error: !isProduction ? err : undefined,
    });
  }
};

export default asyncHandler;
