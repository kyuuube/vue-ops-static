<template>
    <Header class="layout-header-bar">
        <Row justify="space-between">
            <Col span="12">
                <Icon @click.native="collapsedSider" :class="rotateIcon" type="md-menu" size="24"></Icon>
            </Col>
            <Col span="12" style="text-align: right; line-height: 64px">
                <Icon type="md-help" :style="{ margin: '0 10px' }" size="18" />
                <Icon type="md-notifications-outline" :style="{ margin: '0 10px' }" size="18" />
                <Icon type="md-search" :style="{ margin: '0 10px' }" size="20" />

                <Dropdown trigger="click">
                    <div class="user-info">
                        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" style="width: 24px; height: 24px" />
                        <span>evangeline</span>
                    </div>
                    <DropdownMenu slot="list">
                        <DropdownItem>用户数据</DropdownItem>
                        <DropdownItem @click.native="logOut">退出登录</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </Col>
        </Row>
    </Header>
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

<style scoped>
.layout-header-bar {
    background: #fff;
    z-index: 999;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.menu-icon {
    cursor: pointer;
    transition: all 0.3s;
}
.rotate-icon {
    transform: rotate(-90deg);
}
.ivu-layout-header {
    padding: 0 30px;
}
.ivu-icon {
    cursor: pointer;
}
.user-info {
    cursor: pointer;
    margin-right: 30px;
}
</style>
