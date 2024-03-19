import React, { useCallback } from 'react'
import { Pedido } from '../../../DTOs/Pedido.ts'
import styles from './PedidoComponent.module.scss'
import { FormaPagamento } from '../../../DTOs/FormaPagamento.ts';
import { Item } from '../../../DTOs/Item.ts';
import { StatusDropdown } from '../../../Share/StatusDropdown.tsx';
import { KeyValue } from './../../../DTOs/KeyValue';

interface PedidoProps {
  Pedido : Pedido,
  isAdmin : boolean
}

const PedidoComponent = ({Pedido, isAdmin} : PedidoProps) => {

  const options : KeyValue[] = [
    {Id: 0, Value: 'Analise' },
    {Id: 1, Value: 'Em Preparo' },
    {Id: 2, Value: 'Saiu Para Entrega' },
    {Id: 3, Value: 'Entregue' },
    {Id: 4, Value: 'Negado' }
  ]

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
          <StatusDropdown Disabled={!isAdmin} Options={options} PlaceHolder={'Informe o status do pedido'} Default={{Id: Pedido.Status, Value: Pedido.Status.toString()}}/>
            
        </div>
    </div>
  )
}

export default PedidoComponent