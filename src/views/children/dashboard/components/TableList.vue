<template>
    <div class="table-list">
        <Table :columns="columns" :data="data">
            <template slot-scope="{ row }" slot="range">
                <span>{{ row.range }}</span>
            </template>

            <template slot-scope="{ row }" slot="keyword">
                <span class="blue">{{ row.keyword }}</span>
            </template>

            <template slot-scope="{ row }" slot="number">
                <span>{{ row.number }}</span>
            </template>

            <template slot-scope="{ row }" slot="increase">
                <span>{{ row.increase }} %</span>
            </template>
        </Table>
        <div class="table-list-page">
            <Page :total="40" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'table-list',
    data() {
        return {
            columns: [
                {
                    title: '排名',
                    slot: 'range'
                },
                {
                    title: '搜索关键词',
                    slot: 'keyword'
                },
                {
                    title: '用户数',
                    slot: 'number',
                    sortable: true
                },
                {
                    title: '周涨幅',
                    slot: 'increase',
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
                },
                {
                    keyword: 'Jon Snow',
                    range: 26,
                    number: 12,
                    increase: '4'
                },
                {
                    keyword: 'Joe Black',
                    range: 30,
                    number: 12,
                    increase: '20'
                }
            ]
        };
    }
};
</script>

<style lang="less">
    .table-list {
        .table-list-page {
            margin-top: 10px;
            text-align: right;
        }
    }
    .blue {
        color: #1890ff;
    }
</style>
