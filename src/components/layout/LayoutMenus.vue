<script type="text/jsx">
// store
import { mapActions, mapGetters } from "vuex";
import * as $account from 'src/store/modules/account/types'
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
                        <el-submenu key={item.menuId} index={item.menuId}>
                            <template slot="title">
                              <i className={`iconfont ${item.icon}`}/>
                                <span>{item.name}</span>
                            </template>
                            {renderItem(item.children)}
                        </el-submenu>
                    );
                } else {
                    return (
                        <el-menu-item key={item.menuId} index={item.menuId} nativeOnClick={() => this.menuClick(item)}>
                            <i class={`iconfont ${item.icon}`} />
                            <span>{item.name}</span>
                        </el-menu-item>
                    );
                }
            });
        };
        return (
            <el-menu
                unique-opened
                text-color="#ffffff"
                background-color="#001529"
                default-active={this.currentMenuId}
                class={['menus', this.menuitemClasses]}>
                {renderItem(this.list)}
            </el-menu>
        )
    }
};
</script>

<style lang="less">
.menus {
    color: #ffffff;
    margin-top: 40px;
    background-color: #001529;
    i {
        color: #ffffff;
        margin-right: 8px;
    }
}
</style>
