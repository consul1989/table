import React from "react";
import PropTypes from 'prop-types';
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import TableBodyMU from "@mui/material/TableBody";
import { TableCell } from './TableCell';
import { checkBoxStyle, tableRowStyles } from './styles';

export const TableBody = ({
  rows,
  selectedRows,
  columns,
  handleRowClick,
}) => {
  return (
    <TableBodyMU>
      {rows.map((row) => (
        <TableRow key={row.id} sx={tableRowStyles}>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              checked={selectedRows.includes(row)}
              onClick={() => handleRowClick(row)}
              size='small'
              disableRipple
              sx={checkBoxStyle}
            />
          </TableCell>
          {columns.map((column) => (
            <TableCell key={column.id}>{column.getData(row)}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBodyMU>
  );
};

TableBody.propTypes = {
  rows: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        phone: PropTypes.string,
        username: PropTypes.string,
        email: PropTypes.string,
        company: PropTypes.object,
        address: PropTypes.object,
        website: PropTypes.string,
      })
  ),
  selectedRows: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        value: PropTypes.string,
        sortable: PropTypes.bool,
        getData: PropTypes.func,
      })
  ),
  handleRowClick: PropTypes.func,
}
