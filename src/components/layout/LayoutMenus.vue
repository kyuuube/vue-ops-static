<script type="text/jsx">
// apis
import * as accountApi from "src/apis/accountApi"
// store
import { mapActions, mapGetters } from "vuex";
import * as $account from 'src/store/modules/account/types'
const mem = require('mem');
export default {
    name: "layout-menus",
    props: {
        isCollapse: Boolean
    },
    data() {
        return {
            list: [
                {
                    id: 1,
                    name: "工作台",
                    url: "/dashboard",
                    icon: "el-icon-s-data",
                    parentId: 0
                },
                {
                    id: 2,
                    name: "系统管理",
                    icon: "el-icon-s-tools",
                    parentId: 0,
                    children: [
                        {
                            id: 3,
                            name: "用户管理",
                            url: "/system/user",
                            icon: "el-icon-user",
                            parentId: 2,
                        },
                        {
                            id: 4,
                            name: "角色管理",
                            url: "/system/role",
                            icon: "el-icon-s-custom",
                            parentId: 2,
                        },
                        {
                            id: 5,
                            name: "菜单管理",
                            url: "/system/menu",
                            icon: "el-icon-s-order",
                            parentId: 2,
                        },
                        {
                            id: 7,
                            name: "权限管理",
                            url: "/system/authority",
                            icon: "el-icon-s-check",
                            parentId: 2,
                        },
                    ]
                },
                {
                    id: 6,
                    name: '内容管理',
                    url: '/article',
                    icon: "el-icon-document",
                    parentId: 0
                }
            ]
        }
    },
    computed: {
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
            this.setCurrentMenuId(item.id);
            this.setCurrentOpenMenuIds([item.parentId]);
            this.$router.push(item.url)
            // const mem = require('mem');

            // const memoized = mem(this.loadCurrentMenus());
            // memoized()
        },
        async loadCurrentMenus() {
            const { code, data } = await accountApi.getCurrentTree().catch(e => e)
            if (code !== 200) {
                return this.$message.error('加载菜单失败');
            }
            this.list = data
        },
        // loadCurrentMenusCaching() {
        //     return
        // }
    },
    mounted() {
        this.loadCurrentMenus()
        // this.loadCurrentMenusCaching()
        // mem(this.loadCurrentMenus(), {maxAge: 80001})
    },
    render() {
        const renderItem = (itemList) => {
            return itemList.map((item, index) => {
                if (item.children && item.children.length > 0) {
                    return (
                        <el-submenu key={item.id.toString()} index={item.id.toString()}>
                            <template slot="title">
                              <i class={`iconfont ${item.icon}`}/>
                                <span>{item.name}</span>
                            </template>
                            {renderItem(item.children)}
                        </el-submenu>
                    );
                } else {
                    return (
                        <el-menu-item key={item.id.toString()} index={item.id.toString()} nativeOnClick={() => this.menuClick(item)}>
                            <i class={`iconfont ${item.icon}`} />
                            <span>{item.name}</span>
                        </el-menu-item>
                    );
                }
            });
        };
        return (
            <el-menu
                collapse-transition={false}
                collapse={this.isCollapse}
                unique-opened
                text-color="#ffffff"
                background-color="#001529"
                default-active={this.currentMenuId.toString()}
                class={['menus']}>
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
