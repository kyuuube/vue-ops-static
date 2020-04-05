<template>
    <base-content search class="role-list">
        <div slot="header">
            <Breadcrumb>
                <BreadcrumbItem>系统管理</BreadcrumbItem>
                <BreadcrumbItem>角色管理</BreadcrumbItem>
                <BreadcrumbItem>角色列表</BreadcrumbItem>
            </Breadcrumb>
            <h2>角色管理列表</h2>
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
                    <Button type="primary" @click="loadRoleList">搜 索</Button>
                </FormItem>
            </Form>
        </div>

        <div>
            <div class="table-toolbar">
                <Row type="flex" justify="space-between">
                    <div>查询表格</div>
                    <div>
                        <Button @click="$router.push('/system/role/add')" type="primary" icon="md-add">新 建</Button>
                    </div>
                </Row>
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
