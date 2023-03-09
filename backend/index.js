import express from 'express';
import packageJson from './package.json' assert { type: "json" };
import cors from 'cors';

const app = express();
app.use(cors());

const HTTP_PORT = process.env.HTTP_PORT || 3000;

app.get('/', (req, res) => {
  res.json({message: "Hello World!", version: packageJson.version});
})

app.listen(HTTP_PORT, () => {
  console.log(`Listening on port ${HTTP_PORT}`);
})