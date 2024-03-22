import React, { useEffect, useState } from 'react'
import Layout from './Layout/Layout.tsx';
import Home from './Pages/Home/Home.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import IdentificacaoCliente from './Pages/Identificacao/IdentificacaoCliente.tsx';
import BairrosdeEntrega from './Pages/BairrosDeEntrega/bairrosdeentrega.tsx';
import MeusPedidos from './Pages/MeusPedidos/MeusPedidos.tsx';
import Carrinho from './Pages/CarrinhoCompras/Carrinho.tsx';

function App() {

  const [isAdmin, setIsAdmin] = useState();

  useEffect(() => {
    setIsAdmin(true);
  }, [])

  
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={ isAdmin ? <MeusPedidos isAdmin={isAdmin}/> : <Home />} />
          <Route path="/bairrosdeentrega" element={<BairrosdeEntrega/>} />
          <Route path="/identificacao" element={<IdentificacaoCliente />} />
          <Route path="/Carrinho" element={<Carrinho />} />
          {
            !isAdmin ? <Route path="/meuspedidos" element={<MeusPedidos isAdmin={isAdmin}/>}/> : ''
          }
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App