<template>
    <base-content search class="menu-list">
        <div slot="header">
            <Breadcrumb>
                <BreadcrumbItem>系统管理</BreadcrumbItem>
                <BreadcrumbItem>菜单管理</BreadcrumbItem>
                <BreadcrumbItem>菜单列表</BreadcrumbItem>
            </Breadcrumb>
            <h2>菜单管理列表</h2>
        </div>

        <div slot="search">
            <Form ref="formInline" inline>
                <FormItem prop="user">
                    <Input
                        clearable
                        type="text"
                        v-model="keywords"
                        placeholder="输入关键字"
                    ></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="submit">搜 索</Button>
                </FormItem>
            </Form>
        </div>

        <div>
            <div class="table-toolbar">
                <Row type="flex" justify="space-between">
                    <div>查询表格</div>
                    <div>
                        <Button
                            @click="$router.push('/system/user/add')"
                            type="primary"
                            icon="md-add"
                            >新 建</Button
                        >
                    </div>
                </Row>
            </div>
            <Table row-key="menuId" :columns="columns" :data="data" :loading="loading">
                <template slot-scope="{ row, index }" slot="icon">
                    <Icon :custom="`iconfont ${row.icon}`"/>
                </template>

                <template slot-scope="{ row, index }" slot="path">
                    {{ row.path }}
                </template>

                <template slot-scope="{ row, index }" slot="action">
                    <Button type="text">修 改</Button>
                    <Button type="text">删 除</Button>
                </template>
            </Table>
        </div>
    </base-content>
</template>

<script>
export default {
    name: 'menu-list',
    data() {
        return {
            loading: false,
            keywords: '',
            columns: [
                {
                    title: '菜单名称',
                    key: 'name',
                    tree: true
                },
                {
                    title: '图标',
                    slot: 'icon'
                },
                {
                    title: 'url',
                    slot: 'path'
                },
                {
                    title: '操作',
                    slot: 'action'
                }
            ],
            data: [
                {
                    menuId: 1,
                    name: "工作台",
                    path: "/dashboard",
                    icon: "icon-dashboard",
                    parentId: 0
                },
                {
                    menuId: 2,
                    name: "系统管理",
                    icon: "icon-system",
                    parentId: 0,
                    children: [
                        {
                            menuId: 3,
                            name: "用户管理",
                            path: "/system/user",
                            icon: "icon-user",
                            parentId: 2,
                        },
                        {
                            menuId: 4,
                            name: "角色管理",
                            path: "/system/role",
                            icon: "icon-role",
                            parentId: 2,
                        },
                        {
                            menuId: 5,
                            name: "菜单管理",
                            path: "/system/menu",
                            icon: "icon-menu",
                            parentId: 2,
                        },
                    ]
                },
                {
                    menuId: 6,
                    name: '内容管理',
                    path: '/article',
                    icon: "icon-essay",
                    parentId: 0
                }
            ]
        };
    },
    methods: {
        submit() {}
    }
};
</script>

<style lang="less">
.menu-list {
}
</style>
