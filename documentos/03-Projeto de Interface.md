# Projeto de Interface
## Diagrama de Fluxo
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-projganajo/blob/main/documentos/img/Ganajo-user-flow.jpg)
## Wireframes

# Arquitetura da Solução
Pré-requisitos: LINK DO PROJETO DE INTERFACE AQUI
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-projganajo/assets/16859514/6051fdd1-9c5a-4a64-845e-15ff9f3a47e4)


## Diagrama de Classes
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-projganajo/assets/16859514/2c01d257-4fde-45a0-91cb-5ee2432040dc)


## Modelo ER

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-projganajo/assets/16859514/3b7e12b4-ea25-4f54-ac82-e95145dacb1f)


## Esquema Relacional
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-projganajo/assets/16859514/ca221702-707a-42b6-8b16-bcbca4902dd6)



## Modelo Fisico

Table Cliente {
  Id integer [primary key]
  CPF string
  Nome string
  NumeroCasa string
  Complemento string
  NumeroTelefone string
  RegiaoPostalId integer
}


Table RegiaoPostal {
  Id integer [primary key]
  Bairro string
  Cep string
  PrecoDelivery float
  EditadoPor datetime
  EditadoData datetime
}


Table Pedido {
  Id integer [primary key]
  Descricao string
  ValorTotal float
  StatusPedido integer
  TipoPagamento integer
  ClienteId integer
  EditadoPor datetime
  EditadoData datetime
}


Table PedidoProduto {
  Id integer [primary key]
  PedidoId integer
  ProdutoId integer
  Descricao string
  EditadoPor datetime
  EditadoData datetime
}


Table Produto {
  Id integer [primary key]
  Nome string
  Descricao string
  TempoPreparo timespan
  Valor float
  EnderecoImagem string
  UsuarioId integer
  EditadoPor datetime
  EditadoData datetime
}


Table Usuario {
  Id integer [primary key]
  Nome string
  Email string
  Senha string
  EditadoData datetime
}


Ref: Cliente.RegiaoPostalId > RegiaoPostal.Id
Ref: Pedido.ClienteId > Cliente.Id
Ref: PedidoProduto.PedidoId > Pedido.Id
Ref: PedidoProduto.ProdutoId > Produto.Id
Ref: Produto.UsuarioId > Usuario.Id

## Tecnologias Utilizadas

Tecnologias Usadas:
React.js
React Native
React Native Paper
JSON
VS Code
Visual Studio
SQL Server
SignalR
EF Core
.NET 8
Minimal API
## Hospedagem

A aplicação usará uma MINIMAL API em .NET e podendo, a depender da evolução do projeto, ser migrado para uma estrutura de back-end mais moderna (Creational and Structutal Patterns) e o uso de injeções de dependência em todo o escopo. O planejamento é hospedar o back-end na infraestrutura local de um participante do grupo.

## Qualidade de Software

De acordo com a norma ISO/IEC 25010:2011, as características de qualidade do software são:
Funcionalidade - Atende às necessidades do usuário
Confiabilidade - Executa suas funções de forma correta e consistente
Usabilidade - Fácil de usar e aprender
Eficiência - Desempenho adequado em relação aos recursos utilizados
Manutenibilidade - Capacidade de ser modificado e corrigido facilmente
Portabilidade - Pode ser utilizado em diferentes ambientes
Segurança - Protege informações e funcionalidades contra acesso não autorizado.

Diante disso, nossa aplicação tem como meta de desenvolvimento ser capaz de cumprir todos esses requisitos de qualidade de software para que seus stakeholders sejam corretamente satisfeitos.

# Template Padrão da Aplicação
# Programação de Funcionalidades
## Login do Usuario (Dono do restaurante)
O usuário poderá realizar o login e fazer o CRUD de seus produtos, podendo editar campos como preço, podendo remover e arquivar esses produtos.	
## Acompanhar pedido (Dono do restaurante e cliente)
Tanto o usuário quando o cliente terá acesso a tela para acompanhar seu pedido, podendo ver o status desse pedido como: ANALISE, EM PREPARO, SAIU PARA ENTREGA, ENTREGUE.
A única diferença do usuário para o cliente, é que o usuário (dono do restaurante) poderá atualizar esse status do pedido.
## Criar um pedido (cliente)
Após escolher seus produtos na tela inicial, o cliente poderá ir para o carrinho e prosseguir com o pedido, que irá consultar no serviço pelo telefone se ele já é cadastrado, caso não, irá informar seus dados sobre sua localização. Após isso ele irá escolher o método de pagamento para acertar com o motoboy quando o pedido chegar.


<!--
# Projeto de Interface

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

Visão geral da interação do usuário com as funcionalidades que fazem parte do sistema sociotécnico (protótipo de telas).

-->
