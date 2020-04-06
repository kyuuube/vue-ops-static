<template>
    <base-content search class="authority-list">
        <div slot="header">
            <Breadcrumb>
                <BreadcrumbItem>系统管理</BreadcrumbItem>
                <BreadcrumbItem>权限管理</BreadcrumbItem>
                <BreadcrumbItem>权限列表</BreadcrumbItem>
            </Breadcrumb>
            <h2>权限管理列表</h2>
        </div>

        <div slot="search">
            <Form ref="formInline" inline>
                <FormItem prop="user">
                    <Input clearable type="text" v-model="keywords" placeholder="输入关键字"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="loadAuthorityList">搜 索</Button>
                </FormItem>
            </Form>
        </div>

        <div>
            <div class="table-toolbar">
                <Row type="flex" justify="space-between">
                    <div>查询表格</div>
                    <div>
                        <Button @click="showDialog = true" type="primary" icon="md-add">新 建</Button>
                    </div>
                </Row>
            </div>
            <Table row-key="id" :columns="columns" :data="data" :loading="loading">
                <template slot-scope="{ row }" slot="slug">
                    {{ row.slug }}
                </template>

                <template slot-scope="{ row }" slot="action">
                    <Button type="text" @click="$router.push(`/system/menu/edit/${row.id}`)">修 改</Button>
                    <Button type="text">删 除</Button>
                </template>
            </Table>
            <Page
                :total="total"
                :page-size="pageSize"
                :current.sync="page"
                show-sizer
                @on-change="loadAuthorityList"
                @on-page-size-change="pageSizeChange"
            />
        </div>
        <modify-dialog v-model="showDialog"></modify-dialog>
    </base-content>
</template>

<script>
// apis
import * as accountApi from 'src/apis/accountApi';
// components
import ModifyDialog from './components/ModifyDialog'
export default {
    name: 'authority-list',
    components: {
        ModifyDialog
    },
    data() {
        return {
            showDialog: false,
            loading: false,
            keywords: '',
            total: 0,
            page: 1,
            pageSize: 10,
            columns: [
                {
                    title: '权限名称',
                    key: 'name'
                },
                {
                    title: '权限标识',
                    slot: 'slug'
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
        async loadAuthorityList() {
            const params = {
                keywords: this.keywords,
                page: this.page,
                pageSize: this.pageSize
            };
            this.loading = true;
            const { code, data, total, msg } = await accountApi.getAuthorityList(params).catch(e => e);
            this.loading = false;
            if (code !== 200) {
                return this.$Message.error(msg);
            }
            this.data = data;
            this.total = total;
        },
        // 变更页数
        pageSizeChange(v) {
            this.pageSize = v;
            this.loadAuthorityList();
        }
    },
    mounted() {
        this.loadAuthorityList();
    }
};
</script>

<style lang="less">
.authority-list {
}
</style>
