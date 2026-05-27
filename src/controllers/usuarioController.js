import * as usuarioRepo from '../repositories/usuarioRepo.js';

export function criar(req, res) {
  const { nome, sobrenome, email, senha } = req.body;

  if (!nome || !sobrenome || !email || !senha) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios.' });
  }

  const novoUsuario = usuarioRepo.criarUsuario(nome, sobrenome, email, senha);
  return res.status(201).json(novoUsuario);
}

export function listar(req, res) {
  const usuarios = usuarioRepo.listarUsuarios();
  return res.status(200).json(usuarios);
}

export function buscarPorId(req, res) {
  const { id } = req.params;
  const usuario = usuarioRepo.buscarUsuarioPorId(id);

  if (!usuario) {
    return res.status(404).json({ erro: 'Utilizador não encontrado.' });
  }

  return res.status(200).json(usuario);
}

export function deletar(req, res) {
  const { id } = req.params;
  const usuario = usuarioRepo.buscarUsuarioPorId(id);

  if (!usuario) {
    return res.status(404).json({ erro: 'Utilizador não encontrado.' });
  }

  usuarioRepo.deletarUsuario(id);
  return res.status(204).send();
}