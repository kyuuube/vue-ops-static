<template>
    <base-content search class="user-list">
        <div slot="header">
            <Breadcrumb>
                <BreadcrumbItem>系统管理</BreadcrumbItem>
                <BreadcrumbItem>用户管理</BreadcrumbItem>
                <BreadcrumbItem>新建列表</BreadcrumbItem>
            </Breadcrumb>
            <h2>用户管理列表</h2>
        </div>

        <div slot="search">
            <Form ref="formInline" inline>
                <FormItem prop="user">
                    <Input
                        clearable
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

        <div>
            <div class="table-toolbar">
                <Row type="flex" justify="space-between">
                    <div>查询表格</div>
                    <div>
                        <Button @click="$router.push('/system/user/add')" type="primary" icon="md-add">新 建</Button>
                    </div>
                </Row>
            </div>
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
                    <Button type="text">修 改</Button>
                    <Button type="text">删 除</Button>
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
            loading: false,
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

}
</style>
