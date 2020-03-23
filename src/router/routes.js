import user from './modules/user'
import role from './modules/role'
import menu from './modules/menu'
import article from './modules/article'
const routes = [
    {
        path: '/login',
        component: () => import('../views/login.vue'),
        meta: { requireAuth: false }
    },
    {
        path: '/',
        component: () => import('../views/view.vue'),
        meta: { requireAuth: true },
        children: [
            { path: "", redirect: "/dashboard" },
            {
                path: '/dashboard',
                component: () => import('../views/children/dashboard/view'),
                meta: { requireAuth: true },
            },
            ...user,
            ...role,
            ...menu,
            ...article
        ]
    }
];

export default routes;
