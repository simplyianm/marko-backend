import bodyParser from 'body-parser';
import express from 'express';

import { voiceHandler, fetchLol, reset } from './voice';

const app = express();

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.end('Hello, world!');
});

app.get('/handle_voice', voiceHandler);

app.get('/fetch_lol', fetchLol);

app.get('/reset', reset);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
