import { blue, blue_dark, blue_dark_1, white, grey, grey_light_1, grey_light_2 } from '../../settings/muiSettings';

const commonButtonStyles = {
    boxShadow: 'none',
    textTransform: 'none',
    padding: '6px 16px',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '600',
    borderRadius: '4px',
    border: '1px solid',
};

const buttonContained = {
    ...commonButtonStyles,
    borderColor: blue,
    backgroundColor: blue,
    color: white,
    '&:hover': {
        backgroundColor: blue_dark,
        borderColor: blue_dark,
        boxShadow: 'none',
    },
    '&:active': {
        backgroundColor: blue_dark_1,
        borderColor: blue_dark_1,
        boxShadow: 'none',
    },
    '&:disabled': {
        backgroundColor: grey,
        borderColor: grey,
        color: white,
    },
};

const buttonOutlined = {
    ...commonButtonStyles,
    borderColor: blue,
    backgroundColor: 'none',
    color: blue,
    '&:hover': {
        backgroundColor: grey_light_2,
        borderColor: blue_dark,
        boxShadow: 'none',
    },
    '&:active': {
        backgroundColor: grey_light_1,
        borderColor: blue_dark_1,
        boxShadow: 'none',
    },
    '&:disabled': {
        backgroundColor: 'none',
        borderColor: grey,
        color: grey,
    },
};

export const buttonVariant = {
    contained: buttonContained,
    outlined: buttonOutlined,
};
