<template>
    <base-content search class="article-list">
        <div slot="header">
            <Breadcrumb>
                <BreadcrumbItem>系统管理</BreadcrumbItem>
                <BreadcrumbItem>内容管理</BreadcrumbItem>
                <BreadcrumbItem>文章列表</BreadcrumbItem>
            </Breadcrumb>
            <h2>文章管理列表</h2>
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
                            @click="$router.push('/article/add')"
                            type="primary"
                            icon="md-add"
                        >新 建</Button
                        >
                    </div>
                </Row>
            </div>
            <Table :columns="columns" :data="data" :loading="loading">
                <template slot-scope="{ row, index }" slot="name">
                    {{ row.name }}
                </template>

                <template slot-scope="{ row, index }" slot="description">
                    {{ row.description }}
                </template>

                <template slot-scope="{ row, index }" slot="status">
                    {{ row.status }}
                </template>

                <template slot-scope="{ row, index }" slot="action">
                    <Button type="text">修 改</Button>
                    <Button type="text">删 除</Button>
                </template>
            </Table>
            <Page :total="100" show-sizer />
        </div>
    </base-content>
</template>

<script>
    export default {
        name: 'article-list',
        data() {
            return {
                loading: false,
                keywords: '',
                columns: [
                    {
                        title: '角色名称',
                        slot: 'name'
                    },
                    {
                        title: '描述',
                        slot: 'description'
                    },
                    {
                        title: '状态',
                        slot: 'status'
                    },
                    {
                        title: '操作',
                        slot: 'action'
                    }
                ],
                data: [
                    {
                        name: '超级管理员',
                        status: 0,
                        description: '拥有全站权限'
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
.article-list {

}
</style>
