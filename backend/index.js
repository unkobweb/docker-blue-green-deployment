import express from 'express';
import packageJson from './package.json';

const app = express();
const HTTP_PORT = process.env.HTTP_PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Hello World! Version: ${packageJson.version}`);
})

app.listen(HTTP_PORT, () => {
  console.log(`Listening on port ${HTTP_PORT}`);
})