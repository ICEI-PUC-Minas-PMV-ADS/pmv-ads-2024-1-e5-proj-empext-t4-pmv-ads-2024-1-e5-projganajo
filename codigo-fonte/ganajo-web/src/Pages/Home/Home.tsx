import React, { useCallback, useEffect, useState } from 'react'
import generateProducts from './Components/data.ts';
import { Produto } from '../../DTOs/Produto';
import styles from './Home.module.scss';
import { FaMotorcycle } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { ProdutoComponent } from './Components/ProdutoComponent.tsx';

const Home = () => {

  const [itens, setItems] = useState<Produto[]>();
  const [screenItens, setScreenItems] = useState<Produto[]>();

  const searchingHandleCallBack = useCallback((value : string) => {
    setScreenItems(itens?.filter(f => f.Nome.includes(value.toLowerCase()) || f.Descricao.includes(value.toLowerCase())));
  }, [])

  useEffect(() => {
    const mockItens = generateProducts();
    setItems(mockItens);
    setScreenItems(mockItens);
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.deliveryContainer}>
        <div>
          <FaMotorcycle className={styles.iconTheme}/>
        </div>
        <div>
          <h1 className={styles.deliveryTime}>Tempo médio de preparo: 40 min</h1>
        </div>
        <div className={styles.inputStyle}>
            <CiSearch className={styles.searchIconStyle}/>
            <input type='text' onChange={_ => searchingHandleCallBack(_.currentTarget.value)} placeholder='Busque por um item'/>
        </div>
      </div>
      <div className={styles.itemsStyle}>
        {
          screenItens?.map(m => <div><ProdutoComponent Produto={m}/></div>)
        }
      </div>
    </div>
  )
}

export default Home