import React from 'react'
import Layout from './Layout/Layout.tsx';
import Home from './Pages/Home/Home.tsx';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

import IdentificacaoCliente from './Pages/Identificacao/IdentificacaoCliente.tsx';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/identificacao" element={<IdentificacaoCliente />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App