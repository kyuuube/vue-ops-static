<template>
    <Content class="layout-content">
        <slot></slot>
    </Content>
</template>

<script>
    export default {
        name: 'layout-content'
    };
</script>

<style scoped>
.layout-content {
    background: #f5f7f9;
}
</style>
