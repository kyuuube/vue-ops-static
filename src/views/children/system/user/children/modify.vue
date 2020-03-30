<template>
    <base-content class="user-modify">
        <div slot="header">
            <Breadcrumb>
                <BreadcrumbItem>系统管理</BreadcrumbItem>
                <BreadcrumbItem to="/system/user/list">用户管理</BreadcrumbItem>
                <BreadcrumbItem>新建用户</BreadcrumbItem>
            </Breadcrumb>
            <h2>新建用户</h2>
        </div>
        <Form :model="user" :label-width="120">
            <FormItem required label="邮箱:">
                <Input v-model="user.email" placeholder="请输入邮箱"></Input>
            </FormItem>
            <FormItem required label="用户名:">
                <Input v-model="user.name" placeholder="请输入用户名"></Input>
            </FormItem>
            <FormItem label="性别:">
                <RadioGroup v-model="user.gender">
                    <Radio label="male">男</Radio>
                    <Radio label="female">女</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem required label="密码:">
                <Input v-model="user.password" placeholder="输入密码" type="password"></Input>
            </FormItem>
            <FormItem required label="确认密码:">
                <Input v-model="user.rePassword" placeholder="确认秘密" type="password"></Input>
            </FormItem>
            <FormItem label="头像:">
                <Upload
                    ref="upload"
                    :show-upload-list="false"
                    :default-file-list="defaultList"
                    :format="['jpg', 'jpeg', 'png']"
                    :max-size="2048"
                    type="drag"
                    action="//jsonplaceholder.typicode.com/posts/"
                    style="display: inline-block;width:58px;"
                >
                    <div style="width: 58px;height:58px;line-height: 58px;">
                        <Icon type="ios-camera" size="20"></Icon>
                    </div>
                </Upload>
            </FormItem>
            <FormItem>
                <Button @click="addUser" type="primary">保 存</Button>
                <Button @click="$router.back()">取 消</Button>
            </FormItem>
        </Form>
    </base-content>
</template>

<script>
// apis
import * as accountApi from 'src/apis/accountApi';
export default {
    name: 'user-modify',
    data() {
        return {
            user: {
                email: '',
                name: '',
                gender: 0,
                password: '',
                rePassword: '',
                avatar: ''
            },
            defaultList: []
        };
    },
    methods: {
        async addUser() {
            const data = {
                ...this.user
            };
            const { code, msg } = await accountApi.addUser(data).catch(e => e);
            if (code !== 200) {
                return this.$Message.error(msg);
            }
            this.$Message.success('保存成功');
            this.$router.back();
        }
    }
};
</script>

<style lang="less">
.user-modify {
}
</style>
