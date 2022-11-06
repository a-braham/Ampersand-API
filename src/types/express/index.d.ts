interface UserI {
  id?: number;
}
declare namespace Express {
  interface Request {
  }
}

interface ResponseError extends Error {
  status?: number;
}
