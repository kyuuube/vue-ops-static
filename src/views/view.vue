<template>
    <div class="layout">
        <Sider
            ref="side1"
            :style="{
                position: 'fixed',
                height: '100vh',
                left: 0,
                overflow: 'auto'
            }"
        >
            <div class="layout-logo"></div>
            <Menu
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
        <Layout :style="{ marginLeft: '200px' }">
            <Header class="layout-header-bar">
                <Row justify="space-between">
                    <Col span="12">
                        <Icon
                            @click.native="collapsedSider"
                            :class="rotateIcon"
                            :style="{ margin: '0 20px' }"
                            type="md-menu"
                            size="24"
                        ></Icon>
                    </Col>
                    <Col span="12" style="text-align: right; line-height: 64px">
                        <Icon
                            type="md-help"
                            :style="{ margin: '0 10px' }"
                            size="18"
                        />
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
            <Content :style="{ padding: '0 16px 16px' }">
                <!--                <router-view></router-view>-->
                <Breadcrumb :style="{ margin: '16px 0' }">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <template>
                        <div style="height: 900px">
                            <BackTop></BackTop>
                        </div>
                    </template>
                </Card>
            </Content>
        </Layout>
    </div>
</template>

<script>
export default {
    name: 'home',
    methods: {
        collapsedSider() {
            this.$refs.side1.toggleCollapse();
        }
    }
};
</script>

<style scoped>
.layout {
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo {
    width: 180px;
    height: 60px;
    background: #5b6270;
    border-radius: 3px;
    margin: 10px;
}

.layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
