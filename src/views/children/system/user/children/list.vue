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
                    <Input clearable type="text" v-model="keywords" placeholder="输入关键字" @keypress.enter.native="loadUserList"></Input>
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
                <template slot-scope="{ row }" slot="name">
                    {{ row.name }}
                </template>

                <template slot-scope="{ row }" slot="gender">
                    {{ row.gender | genderFilter }}
                </template>

                <template slot-scope="{ row }" slot="avatar">
                    <div class="img-warp">
                        <img :src="row.avatar" alt="" class="avatar-img" />
                    </div>
                </template>

                <template slot-scope="{ row }" slot="action">
                    <Button @click="$router.push(`/system/user/edit/${row.id}`)" type="text">修 改</Button>
                    <Button @click="deleteUser(row.id)" type="text">删 除</Button>
                </template>
            </Table>
            <Page :total="total" :page-size="pageSize" :current.sync="page" show-sizer @on-change="loadUserList" @on-page-size-change="pageSizeChange" />
        </div>
    </base-content>
</template>

<script>
// api
import * as accountApi from 'src/apis/accountApi';
// filters
import genderFilter from 'src/common/filters/genderFilter';
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
    filters: {
        genderFilter: genderFilter
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
            if (code !== 200) {
                return this.$Message.error(msg);
            }
            this.data = data;
            this.total = total;
        },
        // 删除用户
        async deleteUser(id) {
            this.$Modal.confirm({
                title: '提示',
                content: '是否删除该用户',
                onOk: async () => {
                    const { code, msg } = await accountApi.delUser(id).catch(e => e);
                    if (code !== 200) {
                        return this.$Message.error(msg);
                    }
                    this.$Message.success('删除成功')
                    this.loadUserList()
                },
                onCancel: () => {
                    this.$Message.info('Clicked cancel');
                }
            });

        },
        // 变更页数
        pageSizeChange(v) {
            this.pageSize = v;
            this.loadUserList();
        }
    },
    mounted() {
        this.loadUserList();
    }
};
</script>

<style lang="less">
.user-list {
    .img-warp {
        width: 56px;
        height: 56px;
        .avatar-img {
            margin: 4px auto;
            width: 48px;
            height: 48px;
        }
    }
}
</style>
