<template>
    <base-card-chart-warp
        class="count-sales"
        name="总销售额"
        tooltip="总销售额"
        number="¥ 126,560"
        :total="22343"
    >
        <div><span>周同比</span><span class="percent">12%</span><Icon color="#52c41a" type="md-arrow-dropup" /></div>
        <div><span>日同比</span><span class="percent">11%</span><Icon color="#f5222d" type="md-arrow-dropdown" /></div>
    </base-card-chart-warp>
</template>

<script>
// components
import BaseCardChartWarp from './BaseCardChartWarp';
export default {
    name: 'count-sales',
    components: {
        BaseCardChartWarp
    }
};
</script>

<style lang="less">
.count-sales {
    .percent{
        display: inline-block;
        margin-left: 8px;
        color: rgba(0,0,0,.85);
    }
}
</style>
