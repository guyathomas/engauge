import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import router from './router';

const app = express();
app.use(bodyParser.json())
app.use(router)

export default app
