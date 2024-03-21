import React from 'react';
import { Bairro } from '../../../DTOs/Bairro.ts';
import styles from './bairrocomponent.module.scss';
import { BsPencil, BsTrash } from 'react-icons/bs';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

interface BairroComponentProps {
    bairro: Bairro;
    onEdit?: () => void;
    onDelete?: () => void;
}

const BairroComponent = ({ bairro, onEdit, onDelete }: BairroComponentProps) => {
    return (
        <div className={styles.bairroItem}>
            <div>
                <h1 className={styles.nomeStyle}>{bairro.Nome}</h1>
                <p className={styles.idStyle}>ID: {bairro.Id}</p>
            </div>
            <div className={styles.iconContainer}>
                {onEdit && (
                    <Button variant="link" onClick={onEdit} className={`${styles.editIcon} icon`}>
                        <BsPencil />
                    </Button>
                )}
                {onDelete && (
                    <Button variant="link" onClick={onDelete} className={`${styles.deleteIcon} icon`}>
                        <BsTrash />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default BairroComponent;
