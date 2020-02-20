const routes = [
    {
        path: '/',
        component: () => import('../views/home.vue'),
        meta: { notLogin: true }
    }
];

export default routes;
