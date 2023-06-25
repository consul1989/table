import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { UsersTable } from './components/UsersTable';
import usersStore from '../../stores/users-store';

export const Users = observer(() => {
    const { users, isLoading, error, getUsersAction } = usersStore;

    useEffect(() => {
        getUsersAction();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <UsersTable users={users} />
    );
});
