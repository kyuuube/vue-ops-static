<template>
    <Card class="base-dashboard-card" :bordered="false" :dis-hover="true">
        <p slot="title">{{title}}</p>
        <div slot="extra">
            <slot name="extra"></slot>
        </div>
        <div class="card-warp">
            <slot></slot>
        </div>
    </Card>
</template>

<script>
    export default {
        name: "base-dashboard-card",
        props: {
            title: String,
        }
    };
</script>

<style lang="less">
.base-dashboard-card {
    .card-warp {
        min-height: 487px;
    }
}
</style>
