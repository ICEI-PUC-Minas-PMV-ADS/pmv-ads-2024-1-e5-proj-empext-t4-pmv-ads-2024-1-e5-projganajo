import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { BsPencil, BsTrash } from 'react-icons/bs';
import styles from './bairrocomponent.module.scss'; // Importe o módulo SCSS

import { Bairro } from '../../../DTOs/Bairro';

interface BairroComponentProps {
  bairro: Bairro;
  onEdit?: () => void;
  onDelete?: () => void;
}

const BairroComponent: React.FC<BairroComponentProps> = ({ bairro, onEdit, onDelete }) => {
  return (
    <Card className={styles['bairro-card']}>
      <Card.Body className={styles['card-body']}>
        <div className={styles['content-container']}>
          <div>
            <h1 className={styles['bairro-name']}>{bairro.Nome}</h1>
            <p className={styles['bairro-id']}>ID: {bairro.Id}</p>
          </div>
          <div className={styles['icon-container']}>
            {onEdit && (
              <Button variant="link" onClick={onEdit} className={`${styles.icon} ${styles['edit-icon']}`}> 
                <BsPencil />
              </Button>
            )}
            {onDelete && (
              <Button variant="link" onClick={onDelete} className={`${styles.icon} ${styles['delete-icon']}`}> 
                <BsTrash />
              </Button>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BairroComponent;
