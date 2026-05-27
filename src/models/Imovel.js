export default class Imovel {
  constructor(usuarioId, titulo, valor, tipo, imagem, descricao, quarto, banheiro) {
    this.usuarioId = usuarioId;
    this.titulo = titulo;
    this.valor = valor;
    this.tipo = tipo;
    this.imagem = imagem; //TODO 
    this.descricao = descricao;
    // this.tamanho = tamanho;
    this.quarto = quarto;
    this.banheiro = banheiro;
    // this.garagem = garagem;
    // this.cep = cep;
    // this.bairro = bairro;
    // this.rua = rua;
    // this.numero = numero;
  }
}
