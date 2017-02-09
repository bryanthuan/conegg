import VueRouter from 'vue-router';

let routes = [

    {
        path: '/',
        name: 'dashboard',
        component: require('./views/Dashboard')
    },

    {
        path: '/employees',
        name: 'employees',
        component: require('./views/employees/Employee')
    },
    {
        path: '/clients',
        name: 'clients',
        component: require('./views/clients/Client')
    },
    {
        path: '/documents',
        name: 'documents',
        component: require('./views/documents/Document')
    },
    {
        path: '/settings',
        name: 'settings',
        component: require('./views/Setting')
    },

    {
        path: '/about',
        name: 'about',
        component: require('./views/About')
    }
];

export default new VueRouter({
    mode: 'hash',
    base: window.location.pathname,
    routes
});