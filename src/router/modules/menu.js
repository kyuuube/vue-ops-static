export default [
    {
        path: '/menu',
        components: () => import('../../views/children/system/menu/view'),
        meta: { requireAuth: true },
        children: [
            { path: "", redirect: "list" },
            {
                path: 'list',
                components: () => import('../../views/children/system/menu/children/list'),
                meta: { requireAuth: true },
            }
        ]
    }
]
