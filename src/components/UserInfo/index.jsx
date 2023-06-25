import React from 'react';
import styles from './styles.module.css';

export const UserInfo = ({ minimised = false }) => (
    <div className={styles.userInfo}>
        <div className={styles.userAvatar}>TA</div>
        {!minimised && <div className={styles.userName}>Tru America</div>}
    </div>
);
