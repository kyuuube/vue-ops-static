<template>
    <base-content class="article-modify">
        <div slot="header">
            <Breadcrumb>
                <BreadcrumbItem>系统管理</BreadcrumbItem>
                <BreadcrumbItem>内容管理</BreadcrumbItem>
                <BreadcrumbItem>新增文章</BreadcrumbItem>
            </Breadcrumb>
            <h2>新增文章</h2>
        </div>
        <div class="editor">
            <quill-editor v-model="content"
                          ref="myQuillEditor">
            </quill-editor>
        </div>
    </base-content>
</template>

<script>
export default {
    name: 'article-modify',
    data() {
        return {
            content: ""
        }
    },
};
</script>

<style scoped>
.article-modify {
}
</style>
