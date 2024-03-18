import React, { useCallback } from 'react'
import { Pedido } from '../../../DTOs/Pedido.ts'
import PedidoItem from './PedidoItem.tsx';
import styles from './PedidoComponent.module.scss'
import { FormaPagamento } from '../../../DTOs/FormaPagamento.ts';
import { StatusPedido } from '../../../DTOs/Status.ts';
import { Item } from '../../../DTOs/Item.ts';

interface PedidoProps {
  Pedido : Pedido
}

const PedidoComponent = ({Pedido} : PedidoProps) => {

  const getTotal = useCallback((items : Item[]) => {
      var value = 0;
      items.map(m => value = value + m.ValorUnidade * m.Quantidade)
      return value;
  }, [])

  function getFormaPagamento(formaPagamento : FormaPagamento){
      if(formaPagamento === FormaPagamento.Cartao)
        return <h1 className={styles.greenStyle}>Cartão</h1>

      if(formaPagamento === FormaPagamento.Dinheiro)
        return <h1 className={styles.greenStyle}>Dinheiro</h1>

      if(formaPagamento === FormaPagamento.Pix)
        return <h1 className={styles.greenStyle}>Pix</h1>

      if(formaPagamento === FormaPagamento.VA)
        return <h1 className={styles.greenStyle}>Vale Alimentação/Refeição</h1>
  }

  function getStatus(statusPedido : StatusPedido){
    if(statusPedido === StatusPedido.Analise)
      return <h1 className={styles.orangeStyle}>Análise</h1>

    if(statusPedido === StatusPedido.EmPreparo)
      return <h1 className={styles.orangeStyle}>Em Preparo</h1>

    if(statusPedido === StatusPedido.Entregue)
      return <h1 className={styles.greenStyle}>Entregue</h1>

    if(statusPedido === StatusPedido.Negado)
      return <h1 className={styles.redStyle}>Negado</h1>

    if(statusPedido === StatusPedido.SaiuParaEntrega)
      return <h1 className={styles.greenStyle}>Saiu para Entrega</h1>
  } 

  return (
    <div className={styles.container}>
        <div className={styles.orderInfo}>
          <div>
              <img className={styles.image} alt="Indiano kk" src={Pedido.Items[0].Imagem}/>
          </div>
          <div>
              <h3 className={styles.primaryColorStyle}>Informações do Cliente</h3>
              <p className={styles.greenItemStyle}>{Pedido.NomeCliente}</p>
              <p className={styles.greenItemStyle}>{Pedido.CPF}</p>
              <p className={styles.greenItemStyle}>{Pedido.Endereco}</p>
          </div>
          <div>
            <h3 className={styles.primaryColorStyle}>Informações do Pedido</h3>
            <div>
              {
                Pedido.Items.map(m => <p className={styles.greenItemStyle}>{m.Quantidade}x {m.Item} - {m.ValorUnidade} R$ unidade</p>)
              }
            </div>
          </div>
          <div>
              <h3 className={styles.primaryColorStyle}>Forma de Pagamento</h3>
              {
                getFormaPagamento(Pedido.FormaPagamento)
              }
          </div>
          <div>
            <h3 className={styles.primaryColorStyle}>Valor total</h3>
            <div>
              <h2 className={styles.greenStyle}>{getTotal(Pedido.Items)} R$</h2>
            </div>
          </div>
        </div>
        <div>
          <h3 className={styles.primaryColorStyle}>Status do Pedido</h3>
            <p>{getStatus(Pedido.Status)}</p>
        </div>
    </div>
  )
}

export default PedidoComponent