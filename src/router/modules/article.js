export default [
    {
        path: '/article',
        component: () => import('../../views/children/article/view'),
        meta: { requireAuth: true },
        children: [
            { path: '', redirect: 'list' },
            {
                path: 'list',
                component: () => import('../../views/children/article/children/list'),
                meta: { requireAuth: true, menuCode: 'article' }
            },
            {
                path: 'add',
                component: () => import('../../views/children/article/children/modify'),
                meta: { requireAuth: true, menuCode: 'article' }
            },
            {
                path: 'edit/:id',
                component: () => import('../../views/children/article/children/modify'),
                meta: { requireAuth: true, menuCode: 'article' }
            }
        ]
    }
];
