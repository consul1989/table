import React from 'react';
import PropTypes from 'prop-types';
import TableCellMU from "@mui/material/TableCell";
import { cellStyles, TABLE_CELL_TYPE } from './styles';

export const TableCell = ({ type = TABLE_CELL_TYPE.ROW, sx, children, ...props}) => {
    return (
        <TableCellMU {...props} sx={sx || cellStyles[type]}>
            {children}
        </TableCellMU>
    );
};

TableCell.propTypes = {
    type: PropTypes.oneOf([TABLE_CELL_TYPE.HEADER, TABLE_CELL_TYPE.ROW]),
    sx: PropTypes.object,
    children: PropTypes.node,
};
