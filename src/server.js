import express from 'express';

import routes from './routes.js';

const app = express();

app.use(express.json());
app.use(routes)
app.use(db);


app.listen(3333);