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
        background-color: #ffffff;
    }
</style>
