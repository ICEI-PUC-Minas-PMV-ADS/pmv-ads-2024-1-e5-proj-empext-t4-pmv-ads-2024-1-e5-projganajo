import React from 'react'
import PedidoComponent from './Components/PedidoComponent.tsx'
import pedidos from './Components/data.tsx'

interface MeusPedidosParams {
    isAdmin: boolean
}
  

const MeusPedidos = ({isAdmin} : MeusPedidosParams) => {
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>Meus Pedidos</h1>
        <div style={{display: 'flex', flexDirection:'column', gap: '15px'}}>
            {
                pedidos.map(m => <PedidoComponent Pedido={m}/> )
            }   
        </div>
    </div>
    
  )
}

export default MeusPedidos