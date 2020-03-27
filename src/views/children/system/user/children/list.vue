<template>
    <base-content search class="user-list">
        <div slot="header">
            <Breadcrumb>
                <BreadcrumbItem>系统管理</BreadcrumbItem>
                <BreadcrumbItem>用户管理</BreadcrumbItem>
                <BreadcrumbItem>用户列表</BreadcrumbItem>
            </Breadcrumb>
            <h2>用户管理列表</h2>
        </div>

        <div slot="search">
            <Form ref="formInline" inline>
                <FormItem prop="user">
                    <Input clearable type="text" v-model="keywords" placeholder="输入关键字" @keypress.enter.native="loadUserList" ></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="loadUserList">搜 索</Button>
                </FormItem>
            </Form>
        </div>

        <div>
            <div class="table-toolbar">
                <Row type="flex" justify="space-between">
                    <div>查询表格</div>
                    <div>
                        <Button @click="$router.push('/system/user/add')" type="primary" icon="md-add">新 建</Button>
                    </div>
                </Row>
            </div>
            <Table :columns="columns" :data="data" :loading="loading">
                <template slot-scope="{ row, index }" slot="name">
                    {{ row.name }}
                </template>

                <template slot-scope="{ row, index }" slot="gender">
                    {{ row.gender }}
                </template>

                <template slot-scope="{ row, index }" slot="avatar">
                    {{ row.avatar }}
                </template>

                <template slot-scope="{ row, index }" slot="action">
                    <Button type="text">修 改</Button>
                    <Button type="text">删 除</Button>
                </template>
            </Table>
            <Page :total="total" :page-size="pageSize" :current.sync="page" show-sizer @on-change="loadUserList" @on-page-size-change="pageSizeChange" />
        </div>
    </base-content>
</template>

<script>
// api
import * as accountApi from 'src/apis/accountApi';
export default {
    name: 'user-list',
    data() {
        return {
            loading: false,
            keywords: '',
            total: 0,
            page: 1,
            pageSize: 10,
            columns: [
                {
                    title: '姓名',
                    slot: 'name'
                },
                {
                    title: '性别',
                    slot: 'gender'
                },
                {
                    title: '头像',
                    slot: 'avatar'
                },
                {
                    title: '操作',
                    slot: 'action'
                }
            ],
            data: []
        };
    },
    methods: {
        // 加载列表数据
        async loadUserList() {
            const params = {
                keywords: this.keywords,
                page: this.page,
                pageSize: this.pageSize
            };
            this.loading = true;
            const { data, code, msg, total } = await accountApi.getUserList(params).catch(e => e);
            this.loading = false;
            if (code === 400) {
                return this.$Message.error(msg);
            }
            this.data = data;
            this.total = total;
        },
        pageSizeChange(v) {
            this.pageSize = v
            this.loadUserList()
        }
    },
    mounted() {
        this.loadUserList();
    }
};
</script>

<style lang="less">
.user-list {
}
</style>
