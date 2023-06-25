import React from 'react';
import PropTypes from "prop-types";
import { Button as ButtonMU } from '@mui/material';
import { buttonVariant } from './styles';

export const Button = ({ variant = 'contained', children, ...props}) => {
    return (
        <ButtonMU sx={buttonVariant[variant]} {...props} disableRipple>
            {children}
        </ButtonMU>
    );
};

Button.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.node,
};
