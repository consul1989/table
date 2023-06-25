import { Link, useLocation } from 'react-router-dom';
import PropTypes from "prop-types";
import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.css';

export const CustomLink = ({ children, to }) => {
    const location = useLocation();
    const match = location.pathname === to;

    return (
        <Link
            to={to}
            className={classNames({ [styles.link]: true, [styles.linkActive]: match })}
        >
            {children}
        </Link>
    );
};

CustomLink.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node,
};
