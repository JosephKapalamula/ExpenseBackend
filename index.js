import exp from 'constants';
import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config({path: './config.env'});


app.get('/', (req, res) => {
  res.send('Hello World!');
}
)
 
export default app; 