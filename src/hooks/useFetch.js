import { useState, useEffect } from 'react';

const API = 'https://jsonplaceholder.typicode.com';

export default function useFetch (path, method, body='') {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setResponse(null);
        setError(null);

        const abortController = new AbortController();
        const signal = abortController.signal;

        fetch(`${API}${path}`, {
            method,
            ...(body ? { body } : {}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (!signal.aborted) {
                    setResponse(data);
                    setLoading(false);
                }
            })
            .catch((error) => setError(error));

        return () => abortController.abort();
    }, [path, method, body]);

    return { response, loading, error };
};
