<template>
    <base-content class="menu-modify">
        <div slot="header">
            <Breadcrumb>
                <BreadcrumbItem>系统管理</BreadcrumbItem>
                <BreadcrumbItem to="/system/menu/list">菜单管理</BreadcrumbItem>
                <BreadcrumbItem>{{ edit ? '编辑菜单' : '新建菜单' }}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{{ edit ? '编辑菜单' : '新建菜单' }}</h2>
        </div>
        <Form :model="menu" :label-width="120" autocomplete="off">
            <FormItem required label="菜单名称:">
                <Input v-model="menu.name" autocomplete="off" placeholder="请输入角色名称"></Input>
            </FormItem>
            <FormItem required label="菜单描述:">
                <Input v-model="menu.description" autocomplete="off" placeholder="请输入角色描述"></Input>
            </FormItem>
            <FormItem required label="上级菜单:">
                <Select v-model="menu.parentId" clearable>
                    <Option v-for="item in list" :value="item.id" :key="item.id">{{ item.name }}</Option>
                </Select>
            </FormItem>
            <FormItem required label="图标:">
                <Input v-model="menu.icon" autocomplete="off" placeholder="请输入图标"></Input>
            </FormItem>
            <FormItem required label="url:">
                <Input v-model="menu.url" autocomplete="off" placeholder="请输入url"></Input>
            </FormItem>
            <FormItem>
                <Button @click="save" type="primary">保 存</Button>
                <Button @click="$router.back()">取 消</Button>
            </FormItem>
        </Form>
<!--        <Tabs>-->
<!--            <TabPane label="基本信息">-->

<!--            </TabPane>-->
<!--            <TabPane :disabled="!edit" label="权限信息">-->

<!--                <Table :columns="columns" :data="menu.permissList" :loading="loading">-->
<!--                    <template slot-scope="{ row }" slot="action">-->
<!--                        <Button type="text" @click="$router.push(`/system/menu/edit/${row.id}`)">修 改</Button>-->
<!--                        <Button type="text">删 除</Button>-->
<!--                    </template>-->
<!--                </Table>-->
<!--            </TabPane>-->
<!--        </Tabs>-->
    </base-content>
</template>

<script>
import * as accountApi from '../../../../../apis/accountApi';

export default {
    name: 'menu-modify',
    data() {
        return {
            menu: {
                name: '',
                description: '',
                url: '',
                icon: '',
                parentId: null,
                permissList: []
            },
            list: [],
            loading:false,
            columns:[
                {
                    title: '名称',
                    key: 'name',
                },
                {
                    title: '标识',
                    slot: 'slug'
                },
                {
                    title: '描述',
                    slot: 'description'
                },
                {
                    title: '操作',
                    slot: 'action'
                }
            ]
        };
    },
    computed: {
        id() {
            return this.$route.params.id;
        },
        edit() {
            return !!this.id;
        }
    },
    methods: {
        save() {
            if (!this.edit) {
                this.addMenu();
            }
        },
        async addMenu() {
            const data = {
                ...this.menu
            };
            const { code, msg } = await accountApi.addMenu(data).catch(e => e);
            if (code !== 200) {
                return this.$Message.error(msg);
            }
            this.$Message.success('保存成功');
            this.$router.back();
        },

        async loadMenuDetail() {

        },

        async loadMenuList() {
            const { code, msg, data } = await accountApi.getMenuList().catch(e => e);
            if (code !== 200) {
                return this.$Message.error(msg);
            }
            this.list = data;
        }
    },
    mounted() {
        this.loadMenuList();
    }
};
</script>

<style scoped></style>
