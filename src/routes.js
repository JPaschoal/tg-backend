import { Router } from 'express';

import apiFatec from './services/fatecAPI.js';

const routes = Router();

routes.get('/', (req, res) => {
  const myaccount = apiFatec("582728691SP", "30100505")
  let loginState;
  myaccount.login().then(loginState = "Logged").catch(loginState = "Fulldeu")
  res.send(loginState)
})

routes.get('/test', (req, res) => {
  res.send('test')
})

export default routes;