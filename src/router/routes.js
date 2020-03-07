const routes = [
    {
        path: '/login',
        component: () => import('../views/login.vue'),
        meta: { notLogin: true }
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
            {
                path: '/system/user',
                component: () => import('../views/children/system/user/view'),
                meta: { requireAuth: true },
                children: [
                    { path: "", redirect: "list" },
                    {
                        path: "list",
                        component: () => import('../views/children/system/user/children/list'),
                        meta: { requireAuth: true },
                    }
                ]
            },
            {
                path: '/role',
                component: () => import('../views/children/system/role/view'),
                meta: { requireAuth: true },
            }
        ]
    }
];

export default routes;
