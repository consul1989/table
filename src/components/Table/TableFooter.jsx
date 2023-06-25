import React from "react";
import PropTypes from 'prop-types';
import TableFooterMU from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import { TableCell } from "./TableCell";
import { cellFooterStyles } from './styles';

export const TableFooter = ({ children }) => (
    <TableFooterMU>
      <TableRow>
        <TableCell colSpan={10} sx={cellFooterStyles}>
            {children}
        </TableCell>
      </TableRow>
    </TableFooterMU>
);

TableFooter.propTypes = {
    children: PropTypes.node,
};
