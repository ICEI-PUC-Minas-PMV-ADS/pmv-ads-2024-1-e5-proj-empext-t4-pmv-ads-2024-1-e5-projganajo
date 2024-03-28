import React from 'react';
import { Produto } from '../../../DTOs/Produto.ts';
import styles from './DetalheProdutoComponent.module.scss';
import formatValue from '../../../Utils/formatValue.ts';
import formatStringLimit from '../../../Utils/formatStringLimit.ts';

interface DetalheProdutoComponentProps {
    Produto: Produto,
    onClick: any
}

export const DetalheProdutoComponent = ({ Produto, onClick }: DetalheProdutoComponentProps) => {
    return (
        <div className={styles.modalBackground}>
            <div className={styles.container}>
                <div className={styles.leftColumn}>
                    <img className={styles.imgDetalhe} src={Produto.Imagem} alt={Produto.Nome} />
                    <h1 className={styles.nomeStyle}>{formatStringLimit(Produto.Nome, 0, 70, "...")}</h1>
                    <h3 className={styles.descricaoStyle}>{formatStringLimit(Produto.Descricao, 0, 999, "...")}</h3>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.observacaoItem}>
                        <input type="text" className={styles.inputObservacao} placeholder="Adicione uma observação" />
                    </div>
                    <div>
                        <button onClick={onClick} className={styles.buttonPedir}>Acrescentar {formatValue(Produto.Valor, 2, "R$")}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
