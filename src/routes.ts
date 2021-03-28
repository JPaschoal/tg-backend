import { Router } from 'express';
import userController from './controllers/userController'

const routes = Router();

routes.post('/login', userController.login)

routes.get('/perfil', userController.perfil)

routes.get('/schedule', userController.schedule)

routes.get('/enrolledDisciplines', userController.enrolledDisciplines)

routes.get('/calendar', userController.calendar)

routes.get('/grades', userController.grades)

routes.get('/logout', userController.logout)

// routes.get('/notebooks/list', notebooksController.list)

// routes.post('/notebooks/create', notebooksController.create)

// routes.delete('/notebooks/delete', notebooksController.delete)

// routes.post('/notebooks/update', notebooksController.update)

// routes.get('/notes/list', notesController.list)

// routes.post('/notes/create', notesController.create)

// routes.delete('/notes/delete', notesController.delete)

// routes.post('/notes/update', notesController.update)

// routes.get('/notes/files/list' notesController.listFiles)

// routes.post('/notes/files/save' notesController.saveFiles)

// routes.delete('/notes/files/delete' notesController.deleteFiles)

export default routes;