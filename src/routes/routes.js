import { Router } from 'express';
import * as imovelController from '../controllers/imovelController.js';

const routes = Router();

routes.post('/imoveis', imovelController.criar);
routes.get('/imoveis', imovelController.listar);
routes.get('/imoveis/:id', imovelController.buscarPorId);
routes.put('/imoveis/:id', imovelController.atualizar);
routes.delete('/imoveis/:id', imovelController.deletar);

export default routes;