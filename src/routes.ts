import { Router } from 'express';
import multer from 'multer'

import userController from './controllers/user/userController'
import notebooksController from './controllers/notebook/notebooksController'
import notesController from './controllers/notebook/notesController'
import notesFilesController from './controllers/notebook/notesFilesController'
import topicsController from './controllers/forums/topicsController'
import commentController from './controllers/forums/commentController'

import multerConfig from './config/upload'

const routes = Router();

routes.post('/login', userController.login)

routes.get('/perfil', userController.perfil)

routes.get('/schedule', userController.schedule)

routes.get('/enrolledDisciplines', userController.enrolledDisciplines)

routes.get('/calendar', userController.calendar)

routes.get('/grades', userController.grades)

routes.get('/logout', userController.logout)

// Notebook

routes.get('/notebooks/show/:id', notebooksController.show)

routes.get('/notebooks/list/:student', notebooksController.list)

routes.post('/notebooks/create', notebooksController.create)

routes.delete('/notebooks/delete', notebooksController.delete)

routes.put('/notebooks/update', notebooksController.update)

// Notes

routes.get('/note/show/:id', notesController.show)

routes.get('/notes/list/:notebook', notesController.list)

routes.post('/notes/create', notesController.create)

routes.delete('/notes/delete', notesController.delete)

routes.put('/notes/update', notesController.update)

// Notes files 

routes.get('/notes/files/list/:note', notesFilesController.list)

routes.post('/notes/files/save', multer(multerConfig).array("files"), notesFilesController.create)

routes.get('/notes/files/show/:id', notesFilesController.show)

routes.delete('/notes/files/delete', notesFilesController.delete)

// Topicos

routes.get('/forums/topics/list/:course/:subject', topicsController.list)

routes.post('/forums/topics/create', topicsController.create)

routes.get('/forums/topics/show/:id', topicsController.show)

routes.delete('/forums/topics/delete', topicsController.delete)

// Coments

routes.get('/forums/topics/comments/:topic', commentController.list)

routes.post('/forums/topics/comments/create', commentController.create)

export default routes;