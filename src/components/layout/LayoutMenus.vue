<script type="text/jsx">
import { Menu, Submenu, MenuItem, Icon } from "view-design"
export default {
    name: "layout-menus",
    props: {
        isCollapsed: Boolean
    },
    data() {
        return {
            list: [
                {
                    menuId: 1,
                    name: "工作台",
                },
                {
                    menuId: 2,
                    name: "系统管理",
                    children: [
                        {
                            menuId: 3,
                            name: "用户管理",
                        },
                        {
                            menuId: 4,
                            name: "角色管理",
                        },
                    ]
                }
            ]
        }
    },
    computed: {
        menuitemClasses() {
            return ['menu-item', this.isCollapsed ? 'collapsed-menu' : ''];
        }
    },
    render() {
        const renderItem = (itemList) => {
            console.info(itemList)
            return itemList.map((item, index) => {
                if (item.children && item.children.length > 0) {
                    return (
                        <Submenu name={item.menuId} key={index}>
                            <template slot="title">
                                <span>{item.name}</span>
                            </template>
                            {renderItem(item.children)}
                        </Submenu>
                    );
                } else {
                    return (
                        <MenuItem name={item.menuId} key={index}>
                            <span slot="title">{item.name}</span>
                        </MenuItem>
                    );
                }
            });
        };
        return (
            <Menu
                class={['menus', this.menuitemClasses]}
                active-name="1-2"
                theme="dark"
                width="auto"
                open-names={['1']}>
                {renderItem(this.list)}
            </Menu>
        )
    }
};
</script>

<style lang="less">
.menus {
    background-color: #001529;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened {
    background: #000c17;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:hover,
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title:hover {
    color: #fff;
    background: #000c17 !important;
}
.ivu-menu-dark.ivu-menu-vertical
    .ivu-menu-child-item-active
    > .ivu-menu-submenu-title {
    background: #000c17 !important;
}
</style>
