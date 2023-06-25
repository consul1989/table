import React from 'react';
import PropTypes from 'prop-types';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import { TableSortLabel } from './TableSortLabel';
import { TableCell } from './TableCell';
import { checkBoxStyle, TABLE_CELL_TYPE, tableHeaderStyles } from './styles';

export const TableHeader = ({ columns, handleAllCheck, orderBy, order, handleSort, allChecked, someChecked }) => {
    return (
        <TableHead sx={tableHeaderStyles}>
            <TableRow>
                <TableCell padding="checkbox" type={TABLE_CELL_TYPE.HEADER}>
                    <Checkbox
                        color="primary"
                        indeterminate={someChecked}
                        checked={allChecked}
                        onChange={handleAllCheck}
                        size='small'
                        sx={checkBoxStyle}
                        disableRipple
                    />
                </TableCell>

                {columns.map(column=> (
                    <TableCell key={column.id} type={TABLE_CELL_TYPE.HEADER}>
                        {column.sortable ? (
                            <TableSortLabel
                                active={orderBy === column.value}
                                direction={orderBy === column.value ? order : 'asc'}
                                onClick={() => handleSort(column.value)}
                            >
                                {column.title}
                            </TableSortLabel>
                        ) : column.title }
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};


TableHeader.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            value: PropTypes.string,
            sortable: PropTypes.bool,
            getData: PropTypes.func,
        })
    ),
    orderBy: PropTypes.string,
    allChecked: PropTypes.bool,
    someChecked: PropTypes.bool,
    order: PropTypes.oneOf(['desc', 'asc']),
    handleAllCheck: PropTypes.func,
    handleSort: PropTypes.func,
};
