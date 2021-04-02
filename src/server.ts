import express from 'express';
import "reflect-metadata";
import path from 'path'
import morgan from 'morgan';

import './Database/connection';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(morgan('dev'))
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))


app.listen(3333);