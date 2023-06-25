import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../../../components/Button';

import styles from './styles.module.css';

export const Controllers = ({ selectAllRows, clearSelectedRows }) => (
    <div className={styles.controllers}>
        <Button variant="contained" onClick={selectAllRows}>
            Select All
        </Button>
        <Button variant="outlined" onClick={clearSelectedRows}>
            Reset
        </Button>
    </div>
);

Controllers.propTypes = {
    selectAllRows: PropTypes.func,
    clearSelectedRows: PropTypes.func,
};
