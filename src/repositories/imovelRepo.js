import { v4 as uuidv4 } from 'uuid';
import { imoveisDB } from '../../database/db.js';
import Imovel from '../models/Imovel.js';

export function criarImovel(usuarioId, titulo, valor, tipo, imagem, descricao, quarto, banheiro) {
  const imovel = new Imovel(usuarioId, titulo, valor, tipo, imagem, descricao, quarto, banheiro);
  imovel.id = uuidv4();
  imoveisDB.push(imovel);
  return imovel;
}

export function listarImoveis() {
  return imoveisDB;
}

export function buscarImovelPorId(id) {
  return imoveisDB.find(imovel => imovel.id === id);
}

export function buscarImoveisPorUsuario(usuarioId) {
  return imoveisDB.filter(imovel => imovel.usuarioId === usuarioId);
}

export function atualizarImovel(id, dadosAtualizados) {
  const index = imoveisDB.findIndex(imovel => imovel.id === id);
  if (index !== -1) {
    imoveisDB[index] = { ...imoveisDB[index], ...dadosAtualizados };
    return imoveisDB[index];
  }
  return null;
}

export function deletarImovel(id) {
  const index = imoveisDB.findIndex(imovel => imovel.id === id);
  
  if (index !== -1) {
    imoveisDB.splice(index, 1);
  }
}