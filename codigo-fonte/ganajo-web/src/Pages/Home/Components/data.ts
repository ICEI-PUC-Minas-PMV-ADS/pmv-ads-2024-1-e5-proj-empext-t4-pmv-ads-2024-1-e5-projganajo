import { Produto } from './../../../DTOs/Produto';

function generateProducts(){
    const data : Produto[] = [];
    for(let x = 1; x < 25; x++){
        data.push({Id: x,Nome: 'Nome Produto ' + x,Descricao: 'Descrição Produto importante demais pra ter muito texto entendeu ai preciso testar esse trunc' + x, Valor: 120 * x/3.3, Imagem: 'https://cdn.deliway.com.br/blog/base/219/0a8/771/receita-massa-italiana-penne.jpg' })
    }

    return data;
}

export default generateProducts;