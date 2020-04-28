<template>
    <el-aside :width="collapsed ? '56px' : '256px'" class="layout-side">
        <div v-if="!collapsed" class="layout-logo"></div>
        <layout-menus :isCollapse="collapsed"></layout-menus>
    </el-aside>
</template>

<script>
import LayoutMenus from './LayoutMenus';
import { mapActions, mapGetters } from 'vuex';
import * as $account from '../../store/modules/account/types';
export default {
    name: 'layout-side',
    components: {
        LayoutMenus
    },
    computed: {
        ...mapGetters($account.namespace, {
            collapsed: $account.getters.isCollapsed
        })
    },
    methods: {
        ...mapActions($account.namespace, {
            setCollapsed: $account.actions.setCollapsed
        }),
        toggleCollapse() {
            this.setCollapsed(!this.collapsed);
        }
    }
};
</script>

<style lang="less">
.layout-side {
    height: 100vh;
    background: #001529;
    -webkit-transition-property: all;
    -webkit-transition-duration: 0.9s;
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    .layout-logo {
        width: 230px;
        height: 60px;
        background: #5b6270;
        border-radius: 3px;
        margin: 10px;
    }
    .el-menu {
        border-right: none !important;
    }
}
.layout-side::-webkit-scrollbar {
    display: none;
}
</style>
