import { Router } from 'express';

import multer from 'multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import CargoController from './app/controllers/CargoController';

import authMiddleware from './app/middleware/auth';

import multerConfig from '../src/config/multer';
const upload = multer(multerConfig);

const routes = new Router();

routes.get('/status', (req, res) => {
  return res.json('Serviço rodando na porta 3333');
});

routes.post('/usuarios', UserController.store);
routes.post('/sessions', SessionController.store);

routes.post('/cargos', CargoController.store);
routes.get('/cargos', CargoController.list);

routes.use(authMiddleware);

routes.get('/usuarios/:id', UserController.index);
routes.get('/usuarios', UserController.list);
routes.put('/usuarios/:id', UserController.update);
routes.delete('/usuarios/:id', UserController.delete);

routes.post('/uploads/', upload.single('file'), FileController.store);

routes.delete('/usuarios/:id', UserController.delete);

export default routes;
