<template>
    <base-content class="role-modify">
        <div slot="header">
            <el-breadcrumb>
                <el-breadcrumb-item>系统管理</el-breadcrumb-item>
                <el-breadcrumb-item to="/system/role/list">角色管理</el-breadcrumb-item>
                <el-breadcrumb-item>{{ edit ? '编辑角色' : '新建角色' }}</el-breadcrumb-item>
            </el-breadcrumb>
            <h2>{{ edit ? '编辑角色' : '新建角色' }}</h2>
        </div>
        <h4>基本信息</h4>
        <el-form :model="role" :label-width="120" autocomplete="off">
            <el-form-item required label="角色名称:">
                <el-input size="small" v-model="role.name" autocomplete="off" placeholder="请输入角色名称"></el-input>
            </el-form-item>
            <el-form-item required label="角色描述:">
                <el-input size="small" v-model="role.description" autocomplete="off" placeholder="请输入角色描述"></el-input>
            </el-form-item>
            <el-form-item required label="角色状态:">
                <el-radio-group v-model="role.status" size="small">
                    <el-radio label="enable">启用</el-radio>
                    <el-radio label="disable">禁用</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button size="small" @click="save" type="primary">保 存</el-button>
                <el-button size="small" @click="$router.back()">取 消</el-button>
            </el-form-item>
        </el-form>
        <h4>权限信息</h4>
        <el-tree :data="tree" show-checkbox></el-tree>
    </base-content>
</template>

<script>
// apis
import * as accountApi from 'src/apis/accountApi';
export default {
    name: 'role-modify',
    data() {
        return {
            tree: [],
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
                return this.$message.error(msg);
            }
            this.$Message.success('保存成功');
            this.$router.back();
        },
        async getAuthorityTree() {
            const { code, data } = await accountApi.getAuthorityTree().catch(e => e);
            if (code !== 200) {
                return this.$message.error('加载权限列表失败');
            }
            this.tree = data;
        }
    },
    mounted() {
        this.getAuthorityTree();
    }
};
</script>

<style scoped></style>
