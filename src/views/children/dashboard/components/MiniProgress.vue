<template>
    <base-card-chart-warp
        class="mini-progress"
        name="总销售额"
        tooltip="总销售额"
        number="¥ 126,560"
        :total="22343"
    >
        <Progress class="mini-progress-stroke" :percent="65" :stroke-color="['#13c2c2', '#109a9a']" :stroke-width="16" status="wrong" text-inside />
    </base-card-chart-warp>
</template>

<script>
    // components
    import BaseCardChartWarp from './BaseCardChartWarp';
    export default {
        name: 'mini-progress',
        components: {
            BaseCardChartWarp
        }
    };
</script>

<style lang="less">
    .mini-progress {
        .mini-progress-stroke {
            line-height: 40px;
        }
    }
</style>
