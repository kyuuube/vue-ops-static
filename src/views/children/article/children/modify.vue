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
            <el-form label-width="100px">
                <el-form-item label="标题">
                    <el-input v-model="title" placeholder="标题"></el-input>
                </el-form-item>
                <el-form-item label="内容">
                    <quill-editor v-model="content" ref="myQuillEditor" :options="editorOptions"> </quill-editor>
                    <input type="file" id="getImage" style="display: none;" @change="uploadImage">
                </el-form-item>
                <el-form-item label="文章狀態">
                      <el-radio-group v-model="status">
                        <el-radio :key="statu.value" v-for="statu in statuList" :label="statu.value">{{statu.label}}</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="small" @click="save">保存</el-button>
                </el-form-item>
            </el-form>

        </div>
    </base-content>
</template>

<script>
// apis
import * as contentApi from 'src/apis/contentApi'
import * as commonApi from 'src/apis/commonApi'
// contants
import articleStatus from 'src/common/constants/articleStatus'
// utils
import editorOptions from 'src/common/utils/editorOptions'
export default {
    name: 'article-modify',
    data() {
        return {
            title: '',
            content: '',
            status: '2',
            editorOptions
        };
    },
    computed: {
        statuList() {
            return Object.keys(articleStatus).map(i => articleStatus[i])
        }
    },
    methods: {
        async save() {
            const data = {
                title: this.title,
                content: this.content,
                status: this.status 
            }
            const { code, msg } = await contentApi.addArticle(data).catch(e => e)
            if (code !== 200) {
                return this.$message.error(msg);
            }
            this.$message.success('保存成功');
            this.$router.push('/article/list')
        },
        async uploadImage(e) {
            let file = e.target.files[0]
            const formData = new FormData();
            formData.append('file', file)
            const { code, url } = await commonApi.upload(formData).catch(e => e)
            if (code !== 200) {
                return this.$message('失败')
            }
            this.insertImageIntoDOM(url)
        },
            insertImageIntoDOM (url) {
      let img = document.createElement('img')
      img.src = url
      document.getElementsByClassName('ql-editor')[0].appendChild(img)
    }
    }
};
</script>

<style lang="less">
.article-modify {
    .editor {
        width: 88%;
        margin: 0 auto;
    }
}
</style>
