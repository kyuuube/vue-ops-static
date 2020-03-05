<template>
    <div class="sample-mini-chart-box">
        <mini-chart-box
            title="搜索用户数"
            description="指数说明"
            :count="1267"
            :increase="21.1"
        >
            <div :id="id"></div>
        </mini-chart-box>
    </div>
</template>

<script>
import MiniChartBox from './MiniChartBox';
import { View } from "@antv/data-set";
import G2 from "@antv/g2";
export default {
    name: 'sample-mini-chart-box',
    components: { MiniChartBox },
    data() {
        return {
            id: ""
        }
    },
    created() {
        this.id = Date.now()
    },
    mounted() {
        this.$nextTick(() => {
            const data = [
                { year: '1986', Compitor: 42 },
                { year: '1987', Compitor: 54 },
                { year: '1988', Compitor: 26 },
                { year: '1989', Compitor: 32 },
                { year: '1990', Compitor: 68 },
                { year: '1991', Compitor: 54 },
                { year: '1992', Compitor: 35 },
                { year: '1993', Compitor: 66 },
            ];
            const dv = new View().source(data);
            dv.transform({
                type: 'fold',
                fields: [ 'Compitor' ],
                key: 'type',
                value: 'value'
            });
            const chart = new G2.Chart({
                container: this.id + "",
                forceFit: true,
                height: 40,
                padding: [0, 0, 0, 0],
            });
            chart.source(dv, {
                value: {
                    tickCount: 2,
                },
                year: {
                    tickCount: 1
                }
            });
            chart.area()
                .position('year*value')
                .color('type',['#975fe4'])
                .shape('smooth');
            chart.line()
                .position('year*value')
                .color('type' ,['#975fe4'])
                .size(2)
                .shape('smooth');
            chart.render();
        })
    }
};
</script>

<style lang="less">
.sample-mini-chart-box {
}
</style>
