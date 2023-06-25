export const handleSorting = (data, sortField, sortOrder) => {
    if (!sortField) {
        return [...data];
    }

    return [...data].sort((a, b) => {
        let valueA = a[sortField];
        let valueB = b[sortField];

        if (sortField.includes('_')) {
            const [key, value] = sortField.split('_');

            valueA = a[key][value];
            valueB = b[key][value];
        }

        if (valueA === null) return 1;
        if (valueB === null) return -1;

        return (
            valueA.toString().localeCompare(valueB.toString(), "en", {
                numeric: true,
            }) * (sortOrder === "asc" ? 1 : -1)
        );
    });
};
