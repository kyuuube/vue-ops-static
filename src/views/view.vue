<template>
    <div class="home">
        <el-container class="layout">
            <layout-side ref="layoutSide" :collapsed.sync="isCollapsed"></layout-side>
            <el-container direction="vertical">
                <layout-header @collapsed="collapsedSide" :is-collapsed="isCollapsed"></layout-header>
                <layout-content>
                    <transition name="fade-transform" mode="out-in">
                        <router-view></router-view>
                    </transition>
                    <el-backtop :visibility-height="100" target=".layout-content"></el-backtop>
                    <div class="footer">
                        <small>&copy; Copyright {{ $moment().format('YYYY') }}, benchiu@yandex.com</small>
                    </div>
                </layout-content>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import LayoutHeader from 'src/components/layout/LayoutHeader';
import LayoutSide from 'src/components/layout/LayoutSide';
import LayoutContent from 'src/components/layout/LayoutContent';
import { mapGetters } from 'vuex';
import * as $account from '../store/modules/account/types';
export default {
    name: 'home',
    components: {
        LayoutHeader,
        LayoutSide,
        LayoutContent
    },
    computed: {
        ...mapGetters($account.namespace, {
            isCollapsed: $account.getters.isCollapsed
        })
    },
    methods: {
        collapsedSide() {
            this.$refs.layoutSide.toggleCollapse();
        }
    }
};
</script>

<style lang="less">
.home {
    height: 100vh;
    width: 100%;
    background: #f5f7f9;
    .layout {
        height: 100vh;
    }
    .footer {
        padding: 40px;
        text-align: center;
    }
}
</style>
