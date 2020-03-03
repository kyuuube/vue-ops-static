<template>
    <Table :columns="columns1" :data="data1">
        <template slot-scope="{ row }" slot="range">
            <span class="blue">{{ row.range + 1 }}</span>
        </template>
        <template slot-scope="{ row }" slot="keyword">
            <span class="blue">{{ row.keyword + 1 }}</span>
        </template>
        <template slot-scope="{ row }" slot="number">
            <span class="blue">{{ row.number + 1 }}</span>
        </template>
        <template slot-scope="{ row }" slot="increase">
            <span class="blue">{{ row.increase + 1 }}</span>
        </template>
    </Table>
</template>

<script>
export default {
    name: 'table-list',
    data() {
        return {
            columns1: [
                {
                    title: '排名',
                    key: 'range'
                },
                {
                    title: '搜索关键词',
                    key: 'keyword'
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
            data1: [
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
