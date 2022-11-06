import { Response } from 'express';

interface ResponseParams {
  res: Response;
  status: number;
  data?: any;
  [x: string]: number | string | any;
}
/**
 * @param  {Object} data
 * @param  {ServerResponse} res
 * @return {ServerResponse} Response
 */
const jsonResponse = ({
  status,
  res,
  ...data
}: ResponseParams): Response => {
  return res.status(status).json({
    status,
    ...data,
  });
};

export default jsonResponse;
