<template>
    <Sider
        ref="side"
        hide-trigger collapsible :collapsed-width="0" v-model="isCollapsed"
        :style="{
                position: 'fixed',
                height: '100vh',
                left: 0,
                overflow: 'auto'
            }"
    >
        <div class="layout-logo"></div>
        <Menu
            :class="menuitemClasses"
            active-name="1-2"
            theme="dark"
            width="auto"
            :open-names="['1']"
        >
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-navigate"></Icon>
                    Item 1
                </template>
                <MenuItem name="1-1">Option 1</MenuItem>
                <MenuItem name="1-2">Option 2</MenuItem>
                <MenuItem name="1-3">Option 3</MenuItem>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-keypad"></Icon>
                    Item 2
                </template>
                <MenuItem name="2-1">Option 1</MenuItem>
                <MenuItem name="2-2">Option 2</MenuItem>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-analytics"></Icon>
                    Item 3
                </template>
                <MenuItem name="3-1">Option 1</MenuItem>
                <MenuItem name="3-2">Option 2</MenuItem>
            </Submenu>
        </Menu>
    </Sider>
</template>

<script>
    export default {
        name: 'layout-side',
        props: {
            collapsed:Boolean
        },
        data () {
            return {
                isCollapsed: false
            }
        },
        computed: {
            menuitemClasses() {
                return ['menu-item', this.isCollapsed ? 'collapsed-menu' : ''];
            }
        },
        methods: {
            toggleCollapse () {
                this.$refs.side.toggleCollapse();
                this.$emit('update:collapsed', this.isCollapsed)
            }
        }

    };
</script>

<style scoped>
    .layout-logo {
        width: 180px;
        height: 60px;
        background: #5b6270;
        border-radius: 3px;
        margin: 10px;
    }
</style>
