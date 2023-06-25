import React from 'react';
import styles from './styles.module.css';

export const ExternalLink = ({ href, title }) => (
    <a href={href} className={styles.externalLink} target="_blank" rel="noopener noreferrer">
        {title}
    </a>
);
