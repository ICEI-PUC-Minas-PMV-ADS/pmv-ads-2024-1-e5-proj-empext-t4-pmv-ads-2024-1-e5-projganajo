import React, { useCallback, useState } from 'react'
import { KeyValue } from '../DTOs/KeyValue';
import styles from './StatusDropdown.module.scss'
import { StatusPedido } from '../DTOs/Status.ts';

interface StatusDropdownProps {
    Options : KeyValue[]
    Default? : KeyValue
    PlaceHolder? : string
    Disabled : boolean
}

export const StatusDropdown = ({Options, Default, PlaceHolder, Disabled} : StatusDropdownProps) => {

    const [selectedItem, setSelectedItem] = useState<KeyValue>(PlaceHolder ? Default ?? Options[0] : {Id: -1, Value: PlaceHolder ?? ''});
    const [dropwdownIsVisible, setDropwdownIsVisible] = useState(false);

    const dropdownSelectedItem = useCallback((keyValue : KeyValue) => {
        setSelectedItem(keyValue);
        setDropwdownIsVisible(false);
    }, [])

    const dropdownIsVisibleHandle = useCallback(() => {
        setDropwdownIsVisible(!dropwdownIsVisible);
    }, [dropwdownIsVisible])

    const getStatusCallBack = useCallback((statusPedido : StatusPedido) => {
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
    }, []);

  return (
    <div className={styles.container}>
        <div onClick={_ => !Disabled ? dropdownIsVisibleHandle() : _}>
            {
                getStatusCallBack(selectedItem.Id)
            }
        </div>

        <div hidden={!dropwdownIsVisible}>
            {
                Options
                      .filter(f => f.Id !== selectedItem.Id)
                      .map(m => (
                                    <div onClick={_ => dropdownSelectedItem(m)}>
                                      {getStatusCallBack(m.Id)}
                                    </div>
                                )
                          )
            }
        </div>
    </div>
  )
}
