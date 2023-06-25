import useFetch from './useFetch';

export const useUsers = () => {
    return useFetch('/users', 'GET');
};
