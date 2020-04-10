<template>
    <div class="layout-base-content">
        <div class="content-header">
            <slot name="header"></slot>
        </div>

        <div v-if="search" class="search">
            <slot name="search"></slot>
        </div>

        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'layout-base-content',
    props: {
        search: {
            type: Boolean,
            default: () => false
        }
    },
    data() {
        return {};
    }
};
</script>

<style lang="less">
.layout-base-content {
    background-color: #f5f7f9;
    .content-header {
        padding: 8px 18px;
        background-color: #ffffff;
        h2 {
            display: block;
            margin-bottom: 0;
            padding-right: 12px;
            color: rgba(0, 0, 0, 0.85);
            font-weight: 600;
            font-size: 20px;
            line-height: 36px;
        }
    }
    .search {
        background-color: #ffffff;
        margin: 20px 18px;
        padding: 10px;
    }
    .content {
        /*position: relative;*/
        background-color: #ffffff;
        margin: 20px 18px;
        padding: 15px;
        .table-toolbar {
            color: #000c17;
            font-size: 16px;
            padding: 0 0 10px 0;
            line-height: 32px;
        }
    }
    .el-form-item {
        margin-bottom: 4px !important;
    }
    .el-pagination {
        margin-top: 10px;
    }
}
</style>
