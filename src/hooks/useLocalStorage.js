import { useState, useEffect } from 'react';

export const useLocalStorage = (storageKey, fallbackState) => {
    const [value, setValue] = useState(() => {
        return JSON.parse(localStorage.getItem(storageKey)) || fallbackState;
    });

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);

    return [value, setValue];
};
