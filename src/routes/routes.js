import { Router } from 'express';
import * as usuarioController from '../controllers/usuarioController.js';
import * as imovelController from '../controllers/imovelController.js';

const routes = Router();

routes.post('/usuarios', usuarioController.criar);
routes.get('/usuarios', usuarioController.listar);
routes.get('/usuarios/:id', usuarioController.buscarPorId);
routes.delete('/usuarios/:id', usuarioController.deletar);

routes.post('/imoveis', imovelController.criar);
routes.get('/imoveis', imovelController.listar);
routes.get('/imoveis/:id', imovelController.buscarPorId);
routes.get('/usuarios/:usuarioId/imoveis', imovelController.listarPorUsuario);
routes.put('/imoveis/:id', imovelController.atualizar);
routes.delete('/imoveis/:id', imovelController.deletar);

export default routes;