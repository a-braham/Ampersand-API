import { NextFunction, Response } from 'express';
import { isCelebrate, CelebrateInternalError } from 'celebrate';
import { BAD_REQUEST } from '../constants/statusCodes';
import jsonResponse from '../helpers/jsonResponse';

const joiErrors = () => (
  err: CelebrateInternalError,
  req: Request,
  res: Response,
  next: NextFunction,
): void | Response<any> => {
  if (!isCelebrate(err)) return next(err);
  const joiError = err.joi.details[0];
  return jsonResponse({
    res,
    status: BAD_REQUEST,
    message: joiError.message,
    errors: err.joi.details,
  });
};

export default joiErrors;
