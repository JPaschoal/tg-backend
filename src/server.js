import express from 'express';
import bodyParser from "body-parser";

import routes from './routes.js';

const app = express();

app.use(express.json());
app.use(routes)
app.use(bodyParser.urlencoded({extended: false}));


app.listen(3333);