import React from 'react';
import PropTypes from 'prop-types';
import { ArrowDown } from './icons/ArrowDown';
import { ArrowUp } from './icons/ArrowUp';
import { grey_dark_1, grey_dark_2 } from '../../settings/muiSettings';
import styles from './styles.module.css';

export const TableSortLabel = ({ active, direction = 'asc', onClick, children }) => {
    const getCurrentColor = (currentDirection) =>
        active && currentDirection === direction ? grey_dark_1 : grey_dark_2;

    return (
        <div className={styles.sortIconWrapper}>
            <div>{children}</div>
            <button className={styles.sortIconButton} onClick={onClick}>
                <ArrowUp fill={getCurrentColor('asc')} />
                <ArrowDown fill={getCurrentColor('desc')} />
            </button>
        </div>
    );
};

TableSortLabel.propTypes = {
    active: PropTypes.bool,
    direction: PropTypes.oneOf(['desc', 'asc']),
    onClick: PropTypes.func,
    children: PropTypes.node,
};
