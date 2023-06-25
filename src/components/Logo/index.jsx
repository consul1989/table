import React from 'react';
import svgIcon from '../../logo.svg';
import styles from './styles.module.css';

export const Logo = () => (
    <div className={styles.logo}>
        <img src={svgIcon} alt="Intelas Logo" />
    </div>
);
