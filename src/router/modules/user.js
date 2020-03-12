export default [
    {
        path: '/system/user',
        component: () => import('../../views/children/system/user/view'),
        meta: { requireAuth: true },
        children: [
            { path: "", redirect: "list" },
            {
                path: "list",
                component: () => import('../../views/children/system/user/children/list'),
                meta: { requireAuth: true },
            },
            {
                path: "detail/:id",
                component: () => import('../../views/children/system/user/children/detail'),
                meta: { requireAuth: true },
            },
            {
                path: "add",
                component: () => import('../../views/children/system/user/children/modify'),
                meta: { requireAuth: true },
            },
            {
                path: "edit/:id",
                component: () => import('../../views/children/system/user/children/modify'),
                meta: { requireAuth: true },
            },
        ]
    },
]
