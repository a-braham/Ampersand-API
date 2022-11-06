import 'dotenv/config';
import express, { Application, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import 'models/associations';
import jsonResponse from './helpers/jsonResponse';
import joiErrors from './middlewares/joiErrors';
import { OK, NOT_FOUND, SERVER_ERROR } from './constants/statusCodes';
import routesV1 from './resources/api/v1';

const app: Application = express();
const { NODE_APP_INSTANCE } = process.env;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Routes
app.use('/api/v1', routesV1);

// Application routing
app.get('/', (req: Request, res: Response) => {
  return jsonResponse({
    status: OK,
    res,
    message: 'Rest API',
  });
});

app.use(joiErrors());


// Catch wrong routes
app.use((req: Request, res: Response, next: NextFunction) => {
  const error: ResponseError = new Error('Not found');
  error.status = NOT_FOUND;
  next(error);
});

// Catch all errors
app.use((error: any, req: Request, res: Response) => {
  const status = error.status || SERVER_ERROR;
  const message = error.message || 'Something went wrong. Please try again';
  return jsonResponse({
    res,
    status,
    message,
  });
});

export default app;
