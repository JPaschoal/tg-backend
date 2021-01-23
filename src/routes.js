import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('Ta la menininho')
})

routes.get('/test', (req, res) => {
  res.send('test')
})

export default routes;