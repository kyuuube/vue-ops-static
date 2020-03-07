<template>
    <base-content class="user-list">
        <div class="content-header">
            <Breadcrumb>
                <BreadcrumbItem>System</BreadcrumbItem>
                <BreadcrumbItem>User</BreadcrumbItem>
                <BreadcrumbItem>List</BreadcrumbItem>
            </Breadcrumb>
            <h2>用户管理列表</h2>
        </div>
    </base-content>
</template>

<script>
    export default {
        name: "user-list"
    };
</script>

<style lang="less">
    .user-list {
        .content-header {
            padding: 8px 18px;
            h2 {
                display: block;
                margin-bottom: 0;
                padding-right: 12px;
                color: rgba(0,0,0,.85);
                font-weight: 600;
                font-size: 20px;
                line-height: 36px;
            }
        }
    }
</style>
