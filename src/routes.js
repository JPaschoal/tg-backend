import { Router } from 'express';
import userController from './controllers/userController.js'

const routes = Router();

routes.post('/login', userController.login);

routes.get('/perfil', userController.perfil);

export default routes;