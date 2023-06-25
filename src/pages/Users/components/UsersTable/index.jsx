import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import { Table } from '../../../../components/Table/TableContainer';
import { TableHeader } from '../../../../components/Table/TableHeader';
import { TableBody } from '../../../../components/Table/TableBody';
import { TableFooter } from '../../../../components/Table/TableFooter';
import { useSortableData } from '../../../../hooks/useSortableData';
import { Controllers } from '../Controllers';
import { Block } from '../../../../components/Block';
import { ExternalLink } from '../../../../components/ExternalLink';
import usersStore from '../../../../stores/users-store';

export const UsersTable = observer(({ users }) => {
    const {
        selectedUsers,
        selectedNames,
        addAllSelectedUsers,
        removeAllSelectedUsers,
        removeSelectedUser,
        addSelectedUser,
    } = usersStore;

    const selectedUsersLength = selectedUsers.length;
    const { order, orderBy, sortedData, handleSort } = useSortableData(users);

    const columns = [
        {
            id: 1,
            title: "Full Name",
            value: 'name',
            sortable: true,
            getData: ({ name }) => name,
        },
        {
            id: 2,
            title: "Phone",
            value: 'phone',
            sortable: true,
            getData: ({ phone }) =>  phone,
        },
        {
            id: 3,
            title: "Username",
            value: 'username',
            sortable: true,
            getData: ({ username }) => username,
        },
        {
            id: 4,
            title: "Website",
            value: "website",
            sortable: true,
            getData: ({ website }) => (
                <ExternalLink
                    href={`https://${website}`}
                    title={website}
                />
            ),
        },
        {
            id: 5,
            title: "Company",
            value: "company_name",
            sortable: true,
            getData: ({ company }) => (
                <Block
                    primary={company.name}
                    secondary={company.bs}
                />
            ),
        },
        {
            id: 6,
            title: "Address",
            value: "address_city",
            sortable: true,
            getData: ({ address }) => (
                <Block
                    primary={address.city}
                    secondary={`${address.street} / ${address.suite}`}
                />
            ),
        },
    ];

    const handleAllCheck = (event) => {
        if (event.target.checked) {
            addAllSelectedUsers();
        } else {
            removeAllSelectedUsers();
        }
    }

    const handleRowClick = (user) => {
        if (selectedUsers.includes(user)) {
            removeSelectedUser(user);
        } else {
            addSelectedUser(user);
        }
    };

    return (
        <React.Fragment>
            <Controllers
                selectAllRows={addAllSelectedUsers}
                clearSelectedRows={removeAllSelectedUsers}
            />
            <Table>
                <TableHeader
                    columns={columns}
                    orderBy={orderBy}
                    order={order}
                    allChecked={Boolean(selectedUsersLength && (selectedUsersLength === users.length))}
                    someChecked={Boolean(selectedUsersLength && (selectedUsersLength < users.length))}
                    handleSort={handleSort}
                    handleAllCheck={handleAllCheck}
                />
                <TableBody
                    rows={sortedData}
                    selectedRows={selectedUsers}
                    columns={columns}
                    handleRowClick={handleRowClick}
                />
                <TableFooter>
                    Selected Users: {selectedNames.join(", ")}
                </TableFooter>
            </Table>
        </React.Fragment>
    );
});

UsersTable.propTypes = {
    users: PropTypes.arrayOf(
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
};
