import { FormaPagamento } from "../../../DTOs/FormaPagamento.ts";
import { Item } from "../../../DTOs/Item.ts";
import { Pedido } from "../../../DTOs/Pedido.ts";
import { StatusPedido } from "../../../DTOs/Status.ts";

const items : Item[] = [
    {Id: 1, IdItem: 1, Item: 'Item 1', Quantidade: 3, Comentario: 'Comentario 1', ValorUnidade: 55.90, Imagem: 'https://www.vmcdn.ca/f/files/baytoday/images/police/20180913-molotov-cocktail-adobestock_188331489.jpg;w=630'},
    {Id: 2, IdItem: 2, Item: 'Item 2', Quantidade: 1, Comentario: 'Comentario 2', ValorUnidade: 20.90, Imagem: 'https://www.vmcdn.ca/f/files/baytoday/images/police/20180913-molotov-cocktail-adobestock_188331489.jpg;w=630'},
    {Id: 3, IdItem: 3, Item: 'Item 3', Quantidade: 2, Comentario: 'Comentario 3', ValorUnidade: 11, Imagem: 'https://www.vmcdn.ca/f/files/baytoday/images/police/20180913-molotov-cocktail-adobestock_188331489.jpg;w=630'}
]

const valorTotal = 87.80;

const pedidos : Array<Pedido> = [
    { Id: 1, NomeCliente: 'Cliente 1', CPF: '160.187.022-30', Endereco: 'Endereço Cliente 1', FormaPagamento: FormaPagamento.Cartao, Status: StatusPedido.SaiuParaEntrega, ValorTotal: valorTotal, Items: items},
    { Id: 2, NomeCliente: 'Cliente 2', CPF: '180.150.045-31', Endereco: 'Endereço Cliente 2', FormaPagamento: FormaPagamento.Dinheiro, Status: StatusPedido.Analise, ValorTotal: valorTotal, Items: items},
    { Id: 3, NomeCliente: 'Cliente 3', CPF: '160.197.079-30', Endereco: 'Endereço Cliente 3', FormaPagamento: FormaPagamento.Pix, Status: StatusPedido.EmPreparo, ValorTotal: valorTotal, Items: items},
    { Id: 4, NomeCliente: 'Cliente 1', CPF: '160.187.029-32', Endereco: 'Endereço Cliente 1', FormaPagamento: FormaPagamento.VA, Status: StatusPedido.Negado, ValorTotal: valorTotal, Items: items},
    { Id: 5, NomeCliente: 'Cliente 2', CPF: '160.187.019-30', Endereco: 'Endereço Cliente 2', FormaPagamento: FormaPagamento.Cartao, Status: StatusPedido.Entregue, ValorTotal: valorTotal, Items: items},
    { Id: 6, NomeCliente: 'Cliente 1', CPF: '160.187.019-31', Endereco: 'Endereço Cliente 1', FormaPagamento: FormaPagamento.Cartao, Status: StatusPedido.Entregue, ValorTotal: valorTotal, Items: items}
]

export default pedidos;