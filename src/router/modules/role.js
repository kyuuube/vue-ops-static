export default [
    {
        path: '/system/role',
        component: () => import('../../views/children/system/role/view'),
        meta: { requireAuth: true },
        children: [
            { path: "", redirect: "list" },
            {
                path: "list",
                component: () => import('../../views/children/system/role/children/list'),
                meta: { requireAuth: true },
            },
            {
                path: "add",
                component: () => import('../../views/children/system/role/children/modify'),
                meta: { requireAuth: true },
            },
            {
                path: "edit/:id",
                component: () => import('../../views/children/system/role/children/modify'),
                meta: { requireAuth: true },
            }
        ]
    }
]
