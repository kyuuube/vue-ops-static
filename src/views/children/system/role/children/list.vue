<template>
    <base-content search class="role-list">
        <div slot="header">
            <el-breadcrumb>
                <el-breadcrumb-item>系统管理</el-breadcrumb-item>
                <el-breadcrumb-item>角色管理</el-breadcrumb-item>
                <el-breadcrumb-item>角色列表</el-breadcrumb-item>
            </el-breadcrumb>
            <h2>角色管理列表</h2>
        </div>

        <div slot="search">
            <el-form ref="formInline" inline>
                <el-form-item prop="user">
                    <el-input
                        clearable
                        type="text"
                        v-model="keywords"
                        placeholder="输入关键字"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="loadRoleList">搜 索</el-button>
                </el-form-item>
            </el-form>
        </div>

        <div>
            <div class="table-toolbar">
                <el-row type="flex" justify="space-between">
                    <div>查询表格</div>
                    <div>
                        <el-button @click="$router.push('/system/role/add')" type="primary" icon="md-add">新 建</el-button>
                    </div>
                </el-row>
            </div>
            <Table :columns="columns" :data="data" :loading="loading">
                <template slot-scope="{ row }" slot="name">
                    {{ row.name }}
                </template>

                <template slot-scope="{ row }" slot="description">
                    {{ row.description }}
                </template>

                <template slot-scope="{ row }" slot="status">
                    {{ row.status }}
                </template>

                <template slot-scope="{ row }" slot="action">
                    <Button @click="$router.push(`/system/role/edit/${row.id}`)" type="text">修 改</Button>
                    <Button type="text">删 除</Button>
                </template>
            </Table>
            <Page :total="total" :page-size="pageSize" :current.sync="page" show-sizer @on-change="loadRoleList" @on-page-size-change="pageSizeChange" />
        </div>
    </base-content>
</template>

<script>
    // apis
    import * as accountApi from 'src/apis/accountApi'
    export default {
        name: 'role-list',
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
                data: [],
                pageSize: 10,
                page: 1,
                total: 0
            };
        },
        methods: {
            submit() {
                console.info('onsubmit');
            },
            async loadRoleList() {
                const params = {
                    keywords: this.keywords,
                    page: this.page,
                    pageSize: this.pageSize
                };
                const { data, total, msg, code } = await accountApi.getRoleList(params).catch(e => e)
                if (code !== 200) {
                    return this.$Message.error(msg);
                }
                this.data = data;
                this.total = total;
            },
            // 变更页数
            pageSizeChange(v) {
                this.pageSize = v;
                this.loadRoleList();
            }
        },
        mounted() {
            this.loadRoleList()
        }
    };
</script>

<style scoped>

</style>
