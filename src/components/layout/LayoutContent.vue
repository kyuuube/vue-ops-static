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
    padding: 16px 16px 16px 16px;
}
</style>
