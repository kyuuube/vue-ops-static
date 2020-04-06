<script type="text/jsx">
// store
import { mapActions, mapGetters } from "vuex";
import * as $account from 'src/store/modules/account/types'
import { Menu as menus, Submenu, MenuItem, Icon } from "view-design"
export default {
    name: "layout-menus",
    components: {
        menus,
        Submenu,
        MenuItem,
        Icon
    },
    props: {
        isCollapsed: Boolean
    },
    data() {
        return {
            list: [
                {
                    menuId: 1,
                    name: "工作台",
                    path: "/dashboard",
                    icon: "icon-dashboard",
                    parentId: 0
                },
                {
                    menuId: 2,
                    name: "系统管理",
                    icon: "icon-system",
                    parentId: 0,
                    children: [
                        {
                            menuId: 3,
                            name: "用户管理",
                            path: "/system/user",
                            icon: "icon-user",
                            parentId: 2,
                        },
                        {
                            menuId: 4,
                            name: "角色管理",
                            path: "/system/role",
                            icon: "icon-role",
                            parentId: 2,
                        },
                        {
                            menuId: 5,
                            name: "菜单管理",
                            path: "/system/menu",
                            icon: "icon-menu",
                            parentId: 2,
                        },
                        {
                            menuId: 7,
                            name: "权限管理",
                            path: "/system/authority",
                            icon: "icon-menu",
                            parentId: 2,
                        },
                    ]
                },
                {
                    menuId: 6,
                    name: '内容管理',
                    path: '/article',
                    icon: "icon-essay",
                    parentId: 0
                }
            ]
        }
    },
    computed: {
        menuitemClasses() {
            return ['menu-item', this.isCollapsed ? 'collapsed-menu' : ''];
        },
        ...mapGetters($account.namespace, {
            currentMenuId: $account.getters.currentMenuId,
            currentOpenMenuIds: $account.getters.currentOpenMenuIds,
        })
    },
    methods: {
        ...mapActions($account.namespace, {
            setCurrentMenuId: $account.actions.setCurrentMenuId,
            setCurrentOpenMenuIds: $account.actions.setCurrentOpenMenuIds,
        }),
        menuClick(item) {
            this.setCurrentMenuId(item.menuId);
            this.setCurrentOpenMenuIds([item.parentId]);
            this.$router.push(item.path)
        },
    },
    render() {
        const renderItem = (itemList) => {
            return itemList.map((item, index) => {
                if (item.children && item.children.length > 0) {
                    return (
                        <Submenu name={item.menuId} key={index}>
                            <template slot="title">
                                <Icon custom={`iconfont ${item.icon}`} />
                                <span>{item.name}</span>
                            </template>
                            {renderItem(item.children)}
                        </Submenu>
                    );
                } else {
                    return (
                        <menu-item name={item.menuId} key={index} nativeOnClick={() => this.menuClick(item)}>
                            <Icon custom={`iconfont ${item.icon}`} />
                            <span>{item.name}</span>
                        </menu-item>
                    );
                }
            });
        };
        return (
            <menus
                class={['menus', this.menuitemClasses]}
                active-name={this.currentMenuId}
                open-names={this.currentOpenMenuIds}
                theme="dark"
                width="auto">
                {renderItem(this.list)}
            </menus>
        )
    }
};
</script>

<style lang="less">
.menus {
    margin-top: 40px;
    background-color: #001529;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened {
    background: #000c17;
}

.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu),
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):hover {
    color: #fff;
    background-color: #2d8cf0;
}

.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:not(.ivu-menu-item-active):hover {
    color: #fff;
    background: #000c17 !important;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-child-item-active > .ivu-menu-submenu-title {
    background: #000c17 !important;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened .ivu-menu-submenu-title {
    color: #fff;
    background: #000c17 !important;
}

.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    color: #fff;
    background-color: #2d8cf0;
}
/*.ivu-menu-item.ivu-menu-item-active.ivu-menu-item-selected{*/
/*    color: #fff;*/
/*    background-color: #2d8cf0!important;*/
/*}*/
</style>
