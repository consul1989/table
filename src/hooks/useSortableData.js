import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { handleSorting } from '../helpers';

export const useSortableData = rows => {
    const [searchParams, setSearchParams] = useSearchParams();
    const orderBy = searchParams.get('orderBy');
    const order = searchParams.get('order');

    const sortedData = useMemo(() =>
        handleSorting(rows, orderBy, order), [rows, order, orderBy]
    );

    const handleSort = (title) => {
        const isAsc = orderBy === title && order === 'asc';

        setSearchParams({
            order: isAsc ? 'desc' : 'asc',
            orderBy: title,
        });
    };

    return { sortedData, order, orderBy, handleSort };
};
