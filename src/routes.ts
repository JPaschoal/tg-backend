import { Router } from 'express';
import userController from './controllers/userController'

const routes = Router();

routes.post('/login', userController.login);

routes.get('/perfil', userController.perfil);

routes.get('/schedule', userController.schedule);

routes.get('/enrolledDisciplines', userController.enrolledDisciplines);

routes.get('/calendar', userController.calendar);

routes.get('/grades', userController.grades);

routes.get('/logout', userController.logout)

export default routes;