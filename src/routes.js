import { Router } from 'express';
import userController from './controllers/userController.js'

const routes = Router();

routes.post('/login', userController.login);

routes.get('/perfil', userController.perfil);

routes.get('/schedule', userController.schedule);

routes.get('/enrolledDisciplines', userController.enrolledDisciplines);

routes.get('/calendar', userController.calendar);

export default routes;