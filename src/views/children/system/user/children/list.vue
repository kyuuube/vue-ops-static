<template>
    <base-content class="user-list">
        <div class="content-header">
            <Breadcrumb>
                <BreadcrumbItem>System</BreadcrumbItem>
                <BreadcrumbItem>User</BreadcrumbItem>
                <BreadcrumbItem>List</BreadcrumbItem>
            </Breadcrumb>
            <h2>用户管理列表</h2>
        </div>

        <div class="search">
            <Form ref="formInline" inline>
                <FormItem prop="user">
                    <Input
                        type="text"
                        v-model="keywords"
                        placeholder="输入关键字"
                    ></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="submit">搜 索</Button>
                </FormItem>
            </Form>
        </div>

        <div class="content">
            <Table :columns="columns" :data="data" :loading="loading">
                <template slot-scope="{ row, index }" slot="name">
                    {{ row.name }}
                </template>

                <template slot-scope="{ row, index }" slot="age">
                    {{ row.age }}
                </template>

                <template slot-scope="{ row, index }" slot="birthday">
                    {{ getBirthday(row.birthday) }}
                </template>

                <template slot-scope="{ row, index }" slot="address">
                    {{ row.address }}
                </template>

                <template slot-scope="{ row, index }" slot="action">
                    <Button type="error">删 除</Button>
                </template>
            </Table>
            <Page :total="100" show-sizer />
        </div>
    </base-content>
</template>

<script>
export default {
    name: 'user-list',
    data() {
        return {
            loading: true,
            keywords: '',
            columns: [
                {
                    title: '姓名',
                    slot: 'name'
                },
                {
                    title: '年龄',
                    slot: 'age'
                },
                {
                    title: '出生日期',
                    slot: 'birthday'
                },
                {
                    title: '地址',
                    slot: 'address'
                },
                {
                    title: '操作',
                    slot: 'action'
                }
            ],
            data: [
                {
                    name: '王小明',
                    age: 18,
                    birthday: '919526400000',
                    address: '北京市朝阳区芍药居'
                },
                {
                    name: '张小刚',
                    age: 25,
                    birthday: '696096000000',
                    address: '北京市海淀区西二旗'
                },
                {
                    name: '李小红',
                    age: 30,
                    birthday: '563472000000',
                    address: '上海市浦东新区世纪大道'
                },
                {
                    name: '周小伟',
                    age: 26,
                    birthday: '687024000000',
                    address: '深圳市南山区深南大道'
                }
            ]
        };
    },
    methods: {
        submit() {
            console.info('onsubmit');
        }
    }
};
</script>

<style lang="less">
.user-list {
    .content-header {
        padding: 8px 18px;
        background-color: #ffffff;
        h2 {
            display: block;
            margin-bottom: 0;
            padding-right: 12px;
            color: rgba(0, 0, 0, 0.85);
            font-weight: 600;
            font-size: 20px;
            line-height: 36px;
        }
    }
    .search {
        background-color: #ffffff;
        margin: 20px 18px;
        padding: 10px;
    }
    .content {
        /*position: relative;*/
        background-color: #ffffff;
        margin: 20px 18px;
        padding: 15px;
    }
}
</style>
