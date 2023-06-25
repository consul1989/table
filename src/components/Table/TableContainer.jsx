import React from "react";
import PropTypes from 'prop-types';
import TableContainer from "@mui/material/TableContainer";
import TableMU from "@mui/material/Table";

import { tableContainerStyles } from './styles';

export const Table = ({ children }) => {
  return (
    <TableContainer sx={tableContainerStyles}>
      <TableMU>{children}</TableMU>
    </TableContainer>
  );
};

Table.propTypes = {
    children: PropTypes.node,
};
