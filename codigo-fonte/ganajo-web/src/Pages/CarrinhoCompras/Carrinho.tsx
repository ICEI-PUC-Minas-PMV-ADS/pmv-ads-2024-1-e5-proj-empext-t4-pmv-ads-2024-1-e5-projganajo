import React from 'react';
import { Item } from "../../DTOs/Item";
import './Carrinho.css';

const items: Item[] = [
    { Id: 1, IdItem: 1, Item: 'Hambúrguer', Quantidade: 3, Comentario: 'Sem cebola', ValorUnidade: 15.90, Imagem: 'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=828&q=75' },
    { Id: 2, IdItem: 2, Item: 'Batata Frita', Quantidade: 1, Comentario: 'Extra crocante', ValorUnidade: 8.50, Imagem: 'https://www.tendaatacado.com.br/dicas/wp-content/uploads/2022/06/como-fazer-batata-frita-topo.jpg' },
    { Id: 3, IdItem: 3, Item: 'Refrigerante', Quantidade: 2, Comentario: 'Sem gelo', ValorUnidade: 5.50, Imagem: 'https://conteudo.imguol.com.br/c/entretenimento/34/2018/02/26/refrigerante-1519671522034_v2_450x450.jpg' }
];

const CarrinhoCompras: React.FC = () => {
    const valorTotal = items.reduce((total, item) => total + item.Quantidade * item.ValorUnidade, 0);

    return (
        <div className="container">
            <h1>Carrinho de Compras</h1>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantidade</th>
                        <th>Valor Unitário</th>
                        <th>Comentário</th>
                        <th>Imagem</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.Id}>
                            <td>{item.Item}</td>
                            <td>{item.Quantidade}</td>
                            <td>R$ {item.ValorUnidade.toFixed(2)}</td>
                            <td>{item.Comentario}</td>
                            <td><img src={item.Imagem} alt={item.Item} className="itemImage" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3>Total: R$ {valorTotal.toFixed(2)}</h3>
        </div>
    );
};

export default CarrinhoCompras;
