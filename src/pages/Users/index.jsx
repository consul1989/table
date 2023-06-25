import React from 'react';
import { UsersTable } from './components/UsersTable';
import { useUsers } from '../../hooks/useUsers';

export const Users = () => {
    const { response, loading, error } = useUsers();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <UsersTable users={response} />
    );
};
