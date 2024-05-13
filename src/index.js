import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();
var corsOptions = {
  origin: 'http://example.com',
  // optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
// app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://superman.com');
  res.setHeader('Cross-origin-Embedder-Policy', 'require-corp');
  res.setHeader('Cross-origin-Opener-Policy','same-origin');
  res.setHeader('Cross-origin-Resource-Policy','same-origin');
  res.send('Hello World!');
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
