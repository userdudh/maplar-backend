import * as imovelRepo from '../repositories/imovelRepo.js';
import * as usuarioRepo from '../repositories/usuarioRepo.js';

export function criar(req, res) {
  const { usuarioId, titulo, valor, tipo, imagem, descricao } = req.body;

  if (!usuarioId || !titulo || !valor || !tipo) {
    return res.status(400).json({ erro: 'Campos obrigatórios em falta.' });
  }

  const usuarioExiste = usuarioRepo.buscarUsuarioPorId(usuarioId);
  if (!usuarioExiste) {
    return res.status(404).json({ erro: 'O utilizador criador do anúncio não existe.' });
  }

  const novoImovel = imovelRepo.criarImovel(usuarioId, titulo, valor, tipo, imagem, descricao);
  return res.status(201).json(novoImovel);
}

export function listar(req, res) {
  const imoveis = imovelRepo.listarImoveis();
  return res.status(200).json(imoveis);
}

export function buscarPorId(req, res) {
  const { id } = req.params;
  const imovel = imovelRepo.buscarImovelPorId(id);

  if (!imovel) {
    return res.status(404).json({ erro: 'Imóvel não encontrado.' });
  }

  return res.status(200).json(imovel);
}

export function listarPorUsuario(req, res) {
  const { usuarioId } = req.params;
  const imoveis = imovelRepo.buscarImoveisPorUsuario(usuarioId);
  return res.status(200).json(imoveis);
}

export function deletar(req, res) {
  const { id } = req.params;
  const imovel = imovelRepo.buscarImovelPorId(id);

  if (!imovel) {
    return res.status(404).json({ erro: 'Imóvel não encontrado.' });
  }

  imovelRepo.deletarImovel(id);
  return res.status(204).send();
}

export function atualizar(req, res) {
  const { id } = req.params;
  const dados = req.body;
  const imovelAtualizado = imovelRepo.atualizarImovel(id, dados);

  if (!imovelAtualizado) {
    return res.status(404).json({ erro: 'Imóvel não encontrado.' });
  }

  return res.status(200).json(imovelAtualizado);
}