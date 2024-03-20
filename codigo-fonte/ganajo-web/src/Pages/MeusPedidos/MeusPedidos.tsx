import React from 'react'
import PedidoComponent from './Components/PedidoComponent.tsx'
import pedidos from './Components/data.tsx'
import styles from './MeusPedidos.module.scss'

interface MeusPedidosParams {
    isAdmin: boolean
}
  

const MeusPedidos = ({isAdmin} : MeusPedidosParams) => {
  return (
    <div className={styles.container}>
        <h1 style={{textAlign: 'center'}}>Meus Pedidos</h1>
        <div style={{display: 'flex', flexDirection:'column', gap: '15px'}}>
            {
                pedidos.map(m => <PedidoComponent Pedido={m} isAdmin={isAdmin}/> )
            }   
        </div>
    </div>
    
  )
}

export default MeusPedidos