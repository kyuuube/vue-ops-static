<template>
    <Table :columns="columns" :data="data"></Table>
</template>

<script>
export default {
    name: 'table-list',
    data() {
        return {
            columns: [
                {
                    title: '排名',
                    key: 'range'
                },
                {
                    title: '搜索关键词',
                    key: 'keyword',
                    render: (h, params) => {
                        return h('div', [
                            h('span', { style: {color: '#1890ff'}}, params.row.keyword)
                        ]);
                    }
                },
                {
                    title: '用户数',
                    key: 'number',
                    sortable: true
                },
                {
                    title: '周涨幅',
                    key: 'increase',
                    sortable: true
                }
            ],
            data: [
                {
                    keyword: 'John Brown',
                    range: 18,
                    number: 12,
                    increase: '16'
                },
                {
                    keyword: 'Jim Green',
                    range: 24,
                    number: 12,
                    increase: '1'
                },
                {
                    keyword: 'Joe Black',
                    range: 30,
                    number: 12,
                    increase: '20'
                },
                {
                    keyword: 'Jon Snow',
                    range: 26,
                    number: 12,
                    increase: '4'
                }
            ]
        };
    }
};
</script>

<style>
    .blue {
        color: #1890ff;
    }
</style>
