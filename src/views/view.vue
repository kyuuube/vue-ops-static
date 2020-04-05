<template>
    <div class="home">
        <layout-side ref="layoutSide" :collapsed.sync="isCollapsed"></layout-side>
        <Layout :class="layoutClass">
            <layout-header :is-collapsed="isCollapsed" @collapsed="collapsedSider"></layout-header>
            <layout-content>
                <transition name="fade-transform" mode="out-in">
                    <router-view></router-view>
                </transition>
            </layout-content>
            <BackTop :height="100" :bottom="100"></BackTop>
            <div class="footer">
                <small>&copy; Copyright {{$moment().format('YYYY')}}, benchiu@yandex.com</small>
            </div>
        </Layout>
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
          return this.isCollapsed  ? 'layout rotate-flat' : 'layout'
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
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    .layout {
        height: 100vh;
        margin-left: 256px;
        transition: all .3s;
    }
    .rotate-flat{
        margin-left: 0;
    }
    .footer {
        padding: 40px;
        text-align: center;
    }
}

</style>
