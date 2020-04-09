<template>
    <el-aside width="256px" class="layout-side">
        <div class="layout-logo"></div>
        <layout-menus :collapsed="collapsed"></layout-menus>
    </el-aside>
<!--    <Sider-->
<!--        ref="side"-->
<!--        width="256"-->
<!--        hide-trigger-->
<!--        collapsible-->
<!--        :collapsed-width="0"-->
<!--        v-model="isCollapsed"-->

<!--    >-->
<!--    </Sider>-->
</template>

<script>
import LayoutMenus from './LayoutMenus';
export default {
    name: 'layout-side',
    components: {
        LayoutMenus
    },
    props: {
        collapsed: Boolean
    },
    data() {
        return {
            isCollapsed: false
        };
    },
    methods: {
        toggleCollapse() {
            this.$refs.side.toggleCollapse();
            this.$emit('update:collapsed', this.isCollapsed);
        }
    }
};
</script>

<style lang="less">
.layout-side {
    /*position: fixed;*/
    height: 100vh;
    /*left: 0;*/
    /*overflow: auto;*/
    background: #001529;
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
</style>
