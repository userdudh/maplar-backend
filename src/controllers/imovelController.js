import * as imovelRepo from '../repositories/imovelRepo.js';

export function criar(req, res) {
  try{
  const { usuarioId, titulo, valor, tipo, imagem, descricao, quarto, banheiro } = req.body;

  if (!usuarioId || !titulo || !valor || !tipo) {
    return res.status(400).json({ erro: 'Campos obrigatórios em falta.' });
  }

  const novoImovel = imovelRepo.criarImovel(usuarioId, titulo, valor, tipo, imagem, descricao, quarto, banheiro);
  return res.status(201).json(novoImovel);
} catch (error) {
  return res.status(500).json({ erro: 'Erro interno do servidor.' });
}}


export function listar(req, res) {
  try{
  const imoveis = imovelRepo.listarImoveis();
  return res.status(200).json(imoveis);
} catch (error) {
  return res.status(500).json({ erro: 'Erro interno do servidor.' });
}}


export function buscarPorId(req, res) {
  try {
  const { id } = req.params;
  const imovel = imovelRepo.buscarImovelPorId(id);

  if (!imovel) {
    return res.status(404).json({ erro: 'Imóvel não encontrado.' });
  }

  return res.status(200).json(imovel);
} catch (error) {
  return res.status(500).json({ erro: 'Erro interno do servidor.' });
}}

export function deletar(req, res) {
  try {
  const { id } = req.params;
  const imovel = imovelRepo.buscarImovelPorId(id);

  if (!imovel) {
    return res.status(404).json({ erro: 'Imóvel não encontrado.' });
  }

  imovelRepo.deletarImovel(id);
  return res.status(204).send();
} catch (error) {
  return res.status(500).json({ erro: 'Erro interno do servidor.' });
}}

export function atualizar(req, res) {
  try {
  const { id } = req.params;
  const dados = req.body;
  const imovelAtualizado = imovelRepo.atualizarImovel(id, dados);

  if (!imovelAtualizado) {
    return res.status(404).json({ erro: 'Imóvel não encontrado.' });
  }

  return res.status(200).json(imovelAtualizado);
} catch (error) {
  return res.status(500).json({ erro: 'Erro interno do servidor.' });
}}