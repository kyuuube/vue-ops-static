<template>
    <Header class="layout-header-bar">
        <Row justify="space-between">
            <Col span="12">
                <Icon
                    @click.native="collapsedSider"
                    :class="rotateIcon"
                    type="md-menu"
                    size="24"
                ></Icon>
            </Col>
            <Col span="12" style="text-align: right; line-height: 64px">
                <Icon type="md-help" :style="{ margin: '0 10px' }" size="18" />
                <Icon
                    type="md-notifications-outline"
                    :style="{ margin: '0 10px' }"
                    size="18"
                />
                <Icon
                    type="md-search"
                    :style="{ margin: '0 10px' }"
                    size="20"
                />
                <Avatar
                    src="https://i.loli.net/2017/08/21/599a521472424.jpg"
                    style="width: 24px; height: 24px"
                />
                <span>evangeline</span>
            </Col>
        </Row>
    </Header>
</template>

<script>
export default {
    name: 'layout-header',
    props: {
        isCollapsed: Boolean
    },
    computed: {
        rotateIcon() {
            return ['menu-icon', this.isCollapsed ? 'rotate-icon' : ''];
        },
    },
    methods: {
        collapsedSider () {
            this.$emit('collapsed');
        }
    }
};
</script>

<style scoped>
.layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.menu-icon{
    cursor: pointer;
    transition: all .3s;
}
.rotate-icon{
    transform: rotate(-90deg);
}
.ivu-layout-header{
    padding: 0 30px;
}
</style>
