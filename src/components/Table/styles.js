import { black, blue, grey_dark_1, grey_light_2, grey_light_3 } from '../../settings/muiSettings';

export const tableHeaderStyles = {
    backgroundColor: grey_light_2,
};

export const tableContainerStyles = {
    border: `1px solid ${grey_light_3}`,
    borderRadius: '5px',
};

const cellRowStyle = {
    paddingLeft: 0,
    paddingTop: '8px',
    paddingBottom: '8px',
    fontSize: '14px',
    lineHeight: '20px',
    color: black,
};

export const checkBoxStyle = {
    color: grey_dark_1,
    '&.Mui-checked': {
        color: blue,
    },
    '&.MuiCheckbox-indeterminate':{
        color: blue,
    },
};

const baseCellStyles = {
    fontSize: '12px',
    lineHeight: '18px',
    color: grey_dark_1,
}

const cellHeaderStyle = {
    ...baseCellStyles,
    paddingLeft: 0,
    paddingTop: '1px',
    paddingBottom: '1px',
};

export const cellFooterStyles = {
    ...baseCellStyles,
    width: '100%',
    paddingLeft: '11px',
    paddingTop: '11px',
    paddingBottom: '11px',
    backgroundColor: grey_light_2,
};

export const tableRowStyles = {
    '&:hover': {
        background: grey_light_2,
    },
}

export const TABLE_CELL_TYPE = {
    HEADER: 'header',
    ROW: 'row',
};

export const cellStyles = {
    [TABLE_CELL_TYPE.HEADER]: cellHeaderStyle,
    [TABLE_CELL_TYPE.ROW]: cellRowStyle,
};
