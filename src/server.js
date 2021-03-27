import express from 'express';
import "reflect-metadata";

import './Database/connection.js';
import routes from './routes.js';

const app = express();

app.use(express.json());
app.use(routes);


app.listen(3333);