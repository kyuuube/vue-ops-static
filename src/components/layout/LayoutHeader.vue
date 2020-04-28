<template>
    <el-header class="header">
        <el-row type="flex" justify="space-between">
            <div>
                <i
                    @click="collapsedSider"
                    :class="isCollapsed ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
                    class="icon-button"
                    style="font-size: 24px;"
                ></i>
            </div>
            <div>
                <el-row type="flex">
                    <div>
                        <transition name="el-fade-in-linear">
                            <el-input
                                v-if="search"
                                @blur="search = false"
                                size="small"
                                placeholder="请输入内容"
                                prefix-icon="el-icon-search"
                                v-model="keywords"
                            >
                            </el-input>
                        </transition>
                    </div>
                    <div>
                        <i v-if="!search" @click="search = true" class="el-icon-search header-icon icon-button"></i>
                        <i class="el-icon-question header-icon icon-button"></i>
                        <i class="el-icon-bell header-icon icon-button"></i>
                        <el-avatar v-if="user" :size="24" :src="user.avatar"></el-avatar>
                        <el-dropdown>
                            <span class="user-info icon-button">{{ user.name }}</span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>用户数据</el-dropdown-item>
                                <el-dropdown-item @click.native="logOut">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </el-row>
            </div>
        </el-row>
    </el-header>
</template>

<script>
// store
import { mapActions, mapGetters } from 'vuex';
import * as $account from 'src/store/modules/account/types';
export default {
    name: 'layout-header',
    props: {
        isCollapsed: Boolean
    },
    data() {
        return {
            search: false,
            keywords: ''
        };
    },
    computed: {
        ...mapGetters($account.namespace, {
            user: $account.getters.user
        })
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
    z-index: 999;
    height: 60px;
    line-height: 60px;
    background-color: #ffffff;
    box-shadow: 0 5px 5px -1px #eaebee;
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
    .header-icon {
        color: #5b6270;
        font-size: 16px;
        margin-left: 12px;
    }
    .icon-button {
        cursor: pointer;
    }
}
</style>
