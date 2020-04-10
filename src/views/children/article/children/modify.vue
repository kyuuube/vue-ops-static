<template>
    <base-content class="article-modify">
        <div slot="header">
            <el-breadcrumb>
                <el-breadcrumb-item>系统管理</el-breadcrumb-item>
                <el-breadcrumb-item>内容管理</el-breadcrumb-item>
                <el-breadcrumb-item>新增文章</el-breadcrumb-item>
            </el-breadcrumb>
            <h2>新增文章</h2>
        </div>
        <div class="editor">
            <quill-editor v-model="content" ref="myQuillEditor"> </quill-editor>
        </div>
    </base-content>
</template>

<script>
export default {
    name: 'article-modify',
    data() {
        return {
            content: ''
        };
    }
};
</script>

<style scoped>
.article-modify {
}
</style>
