<template>
    <div class="info-card">
        <div class="info-card-title">
            <Row type="flex" justify="space-between">
                <div>{{name}}</div>
                <div>
                    <Tooltip :content="tooltip">
                        <Icon type="ios-alert-outline" />
                    </Tooltip>
                </div>
            </Row>
        </div>
        <div class="number">{{number}}</div>
        <div style="min-height: 46px">
            <slot></slot>
        </div>
        <Divider />
        <span>日访问量 {{total}}</span>
    </div>
</template>

<script>
    export default {
        name: 'base-card-chart-warp',
        props: {
            name: String,
            tooltip: String,
            number: Number | String,
            total: Number
        }

    };
</script>

<style scoped>
    .info-card {
        background-color: #ffffff;
        padding: 20px 24px 8px;
    }
    .info-card-title {

    }
    .number {
        color: rgba(0,0,0,.85);
        font-size: 30px;
        line-height: 38px;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    .ivu-divider {
        margin: 12px 0;
    }
</style>
