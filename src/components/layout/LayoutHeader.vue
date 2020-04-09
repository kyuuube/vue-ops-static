<template>
    <el-header class="header">
        <el-row type="flex" justify="space-between">
            <div>
                <i @click.native="collapsedSider" class="el-icon-s-fold" style="font-size: 24px;"></i>
                <!--                <Icon  :class="rotateIcon" type="md-menu" size="24"></Icon>-->
            </div>
            <div>
                <!--                <Icon type="md-help" :style="{ margin: '0 10px' }" size="18" />-->
                <!--                <Icon type="md-notifications-outline" :style="{ margin: '0 10px' }" size="18" />-->
                <!--                <Icon type="md-search" :style="{ margin: '0 10px' }" size="20" />-->
                <el-avatar size="24" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                <el-dropdown>
                        <span class="user-info">evangeline</span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>用户数据</el-dropdown-item>
                        <el-dropdown-item @click.native="logOut">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </el-row>
    </el-header>
</template>

<script>
// store
import { mapActions } from 'vuex';
import * as $account from 'src/store/modules/account/types';
export default {
    name: 'layout-header',
    props: {
        isCollapsed: Boolean
    },
    computed: {
        rotateIcon() {
            return ['menu-icon', this.isCollapsed ? 'rotate-icon' : ''];
        }
    },
    methods: {
        ...mapActions($account.namespace, {
            logout: $account.actions.logout
        }),
        collapsedSider() {
            this.$emit('collapsed');
        },
        logOut() {
            this.logout();
            this.$router.push('/login');
        }
    }
};
</script>

<style lang="less">
.header {
    height: 60px;
    line-height: 60px;
    background-color: #ffffff;
    .user-info {
        display: inline-block;
        vertical-align: middle;
    }
    .el-dropdown {
        height: 60px;
    }
    .el-avatar {
        vertical-align: middle;
    }
}
</style>
