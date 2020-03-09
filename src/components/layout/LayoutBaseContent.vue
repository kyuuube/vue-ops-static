<template>
    <div class="layout-base-content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "layout-base-content",
        data() {
            return {

            }
        }
    };
</script>

<style lang="less">
    .layout-base-content {
        background-color: #f5f7f9;
        .ivu-form-item {
            margin-bottom: 0;
        }
        .ivu-page {
            margin-top: 15px;
        }
    }
</style>
