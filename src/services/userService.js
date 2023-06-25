const API = 'https://jsonplaceholder.typicode.com';

export const userService = {
    getUsers: async () => {
        const result = await fetch(`${API}/users`);

        return await result.json();
    }
};
