<template>
    <base-content search class="article-list">
        <div slot="header">
            <el-breadcrumb>
                <el-breadcrumb-item>系统管理</el-breadcrumb-item>
                <el-breadcrumb-item>内容管理</el-breadcrumb-item>
                <el-breadcrumb-item>文章列表</el-breadcrumb-item>
            </el-breadcrumb>
            <h2>文章管理列表</h2>
        </div>

        <div slot="search">
            <el-form ref="formInline" inline>
                <el-form-item prop="user">
                    <el-input size="small" clearable type="text" v-model="keywords" placeholder="输入关键字"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button size="small" type="primary" @click="submit">搜 索</el-button>
                </el-form-item>
            </el-form>
        </div>

        <div>
            <div class="table-toolbar">
                <el-row type="flex" justify="space-between">
                    <div>查询表格</div>
                    <div>
                        <el-button size="small" @click="$router.push('/article/add')" type="primary" icon="md-add">新 建</el-button>
                    </div>
                </el-row>
            </div>
            <el-table :data="data" style="width: 100%">
                <el-table-column prop="name" label="文章标题"> </el-table-column>
                <el-table-column prop="address" label="地址"> </el-table-column>
            </el-table>
        </div>
    </base-content>
</template>

<script>
export default {
    name: 'article-list',
    data() {
        return {
            loading: false,
            keywords: '',
            data: [
                {
                    name: '超级管理员',
                    status: 0,
                    description: '拥有全站权限'
                }
            ]
        };
    },
    methods: {
        submit() {}
    }
};
</script>

<style lang="less">
.article-list {
}
</style>
