import { useState } from 'react';
import React from 'react'
import { Produto } from '../../../DTOs/Produto.ts';
import styles from './ProdutoComponent.module.scss';
import formatValue from '../../../Utils/formatValue.ts';
import formatStringLimit from '../../../Utils/formatStringLimit.ts';
import { DetalheProdutoComponent } from './DetalheProduto.tsx';
import ReactDOM from 'react-dom';

interface ProdutoProps {
  Produto: Produto
}

export const ProdutoComponent = ({ Produto }: ProdutoProps) => {
  const [showDetailPedido, setShowDetailPedido] = useState<boolean>(false);

  const closeModalDetailPedido = () => {
    setShowDetailPedido(false);
  }

  const openModalDetailPedido = () => {
    setShowDetailPedido(true);
  }

  const cardProduto = (
    <div className={styles.container} onClick={openModalDetailPedido}>
      <div>
        <h1 className={styles.nomeStyle}>{formatStringLimit(Produto.Nome, 0, 70, "...")}</h1>
        <h3 className={styles.descricaoStyle}>{formatStringLimit(Produto.Descricao, 0, 70, "...")}</h3>
        <h2 className={styles.valorStyle}>A partir de {formatValue(Produto.Valor, 2, "R$")}</h2>
      </div>
      <div>
        <img src={Produto.Imagem} alt={Produto.Nome} />
      </div>
    </div>
  );

  return (
    <div>
      {cardProduto}
      {showDetailPedido &&
        ReactDOM.createPortal(
          <DetalheProdutoComponent Produto={Produto} onClick={closeModalDetailPedido} />,
          document.body
        )}
    </div>
  );
}