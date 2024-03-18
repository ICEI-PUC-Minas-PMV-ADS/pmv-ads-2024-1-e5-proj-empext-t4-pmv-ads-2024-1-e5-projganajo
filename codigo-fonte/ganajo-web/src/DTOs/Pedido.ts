import { FormaPagamento } from "./FormaPagamento";
import { Item } from "./Item";
import { StatusPedido } from "./Status";

export interface Pedido {
    Id : number,
    NomeCliente : string,
    CPF : string,
    Endereco : string,
    FormaPagamento: FormaPagamento,
    Status : StatusPedido,
    Items : Item[],
    ValorTotal : number
}