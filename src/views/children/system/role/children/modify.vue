<template>
    <base-content class="role-modify">
        <div slot="header">
            <Breadcrumb>
                <BreadcrumbItem>系统管理</BreadcrumbItem>
                <BreadcrumbItem to="/system/user/list">角色管理</BreadcrumbItem>
                <BreadcrumbItem>{{ edit ? '编辑角色' : '新建角色' }}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{{ edit ? '编辑角色' : '新建角色' }}</h2>
        </div>
        <Form :model="role" :label-width="120" autocomplete="off">
            <FormItem required label="角色名称:">
                <Input v-model="role.name" autocomplete="off" placeholder="请输入角色名称"></Input>
            </FormItem>
            <FormItem required label="角色描述:">
                <Input v-model="role.description" autocomplete="off" placeholder="请输入角色描述"></Input>
            </FormItem>
            <FormItem required label="角色状态:">
                <RadioGroup v-model="role.status">
                    <Radio label="enable">启用</Radio>
                    <Radio label="disable">禁用</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem>
                <Button @click="save" type="primary">保 存</Button>
                <Button @click="$router.back()">取 消</Button>
            </FormItem>
        </Form>
    </base-content>
</template>

<script>
// apis
import * as accountApi from 'src/apis/accountApi';
export default {
    name: 'role-modify',
    data() {
        return {
            role: {
                name: 'developer',
                description: 'font end developer',
                status: 'disable'
                // permissionIdList: [1, 2],
                // menuIdList: [1, 2]
            }
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
                this.addRole();
            }
        },
        async addRole() {
            const data = {
                ...this.role
            };
            const { code, msg } = await accountApi.addRole(data).catch(e => e);
            if (code !== 200) {
                return this.$Message.error(msg);
            }
            this.$Message.success('保存成功');
            this.$router.back();
        }
    }
};
</script>

<style scoped></style>
