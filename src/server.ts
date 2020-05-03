import express from 'express';

// Create a new express app instance
const server: express.Application = express();

// Routes:
// i.e.
// server.use('/users', usersRoutes)

server.get('/', (req, res) => {
  res.status(200).json({ message: "GET request to '/' working" });
});

export default server;
