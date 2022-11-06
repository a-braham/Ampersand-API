import app from './app';

const { PORT = 3000 } = process.env;

// Start server
const server = app.listen(PORT, () =>
  console.log(
    `Server is listening on port http://localhost:${PORT}/api/v1/ ...`,
  ),
);

export default app;
