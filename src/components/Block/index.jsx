import React from 'react';
import PropTypes from "prop-types";
import styles from './styles.module.css';

export const Block = ({ primary, secondary }) => (
    <React.Fragment>
        {primary && <div className={styles.primary}>{primary}</div>}
        {secondary && <div className={styles.secondary}>{secondary}</div>}
    </React.Fragment>
);

Block.propTypes = {
    primary: PropTypes.string,
    secondary: PropTypes.string,
};
