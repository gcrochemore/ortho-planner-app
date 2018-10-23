
export const environment = {
    production: false,
    api: {
        url: 'www.monserveur-prod.com',
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
