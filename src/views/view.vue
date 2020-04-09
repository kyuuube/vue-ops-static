<template>
    <div class="home">
        <!--        <el-container>-->
        <!--            <layout-side ref="layoutSide" :collapsed.sync="isCollapsed"></layout-side>-->
        <!--            <el-container :class="layoutClass">-->
        <!--                <layout-header :is-collapsed="isCollapsed" @collapsed="collapsedSider"></layout-header>-->
        <!--                <layout-content>-->
        <!--                    <transition name="fade-transform" mode="out-in">-->
        <!--                        <router-view></router-view>-->
        <!--                    </transition>-->
        <!--                </layout-content>-->
        <!--                <el-backtop :visibility-height="100" target=".layout-content"></el-backtop>-->
        <!--                &lt;!&ndash;            <BackTop :height="100" :bottom="100"></BackTop>&ndash;&gt;-->
        <!--                <div class="footer">-->
        <!--                    <small>&copy; Copyright {{$moment().format('YYYY')}}, benchiu@yandex.com</small>-->
        <!--                </div>-->
        <!--            </el-container>-->
        <!--        </el-container>-->
        <el-container class="layout">
            <layout-side></layout-side>
            <el-container>
                <layout-header></layout-header>
                <layout-content>
                    <transition name="fade-transform" mode="out-in">
                        <router-view></router-view>
                    </transition>
                    <el-backtop :visibility-height="100" target=".layout-content"></el-backtop>
                </layout-content>
                <el-footer class="footer"><small>&copy; Copyright {{$moment().format('YYYY')}}, benchiu@yandex.com</small></el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import LayoutHeader from 'src/components/layout/LayoutHeader';
import LayoutSide from 'src/components/layout/LayoutSide';
import LayoutContent from 'src/components/layout/LayoutContent';
export default {
    name: 'home',
    components: {
        LayoutHeader,
        LayoutSide,
        LayoutContent
    },
    data() {
        return {
            isCollapsed: false
        };
    },
    computed: {
        layoutClass() {
            return this.isCollapsed ? 'layout rotate-flat' : 'layout';
        }
    },
    methods: {
        collapsedSider() {
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
    /*position: relative;*/
    /*border-radius: 4px;*/
    .layout {
        height: 100vh;
    }
    /*.rotate-flat{*/
    /*    margin-left: 0;*/
    /*}*/
    .footer {
        padding: 40px;
        text-align: center;
    }
}
</style>
