import { v4 as uuidv4 } from 'uuid';
import { usuariosDB } from '../../database/db.js';
import Usuario from '../models/Usuario.js';

export function criarUsuario(nome, sobrenome, email, senha) {
  const usuario = new Usuario(nome, sobrenome, email, senha);
  usuario.id = uuidv4();
  usuariosDB.push(usuario);
  return usuario;
}

export function listarUsuarios() {
  return usuariosDB;
}

export function buscarUsuarioPorId(id) {
  return usuariosDB.find(usuario => usuario.id === id);
}

export function deletarUsuario(id) {
  const index = usuariosDB.findIndex(usuario => usuario.id === id);
  
  if (index !== -1) {
    usuariosDB.splice(index, 1);
  }
}