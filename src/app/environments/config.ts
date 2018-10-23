export const config = {
    api: {
        entities: {
            user: {
                authenticate: '/users/authenticate',
                register: '/users/register'
            },
            note: '/notes',
        }
    },
    offLineDatabaseName: 'todo'
};
