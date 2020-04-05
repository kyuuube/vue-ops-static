<template>
    <base-content class="user-modify">
        <div slot="header">
            <Breadcrumb>
                <BreadcrumbItem>系统管理</BreadcrumbItem>
                <BreadcrumbItem to="/system/user/list">用户管理</BreadcrumbItem>
                <BreadcrumbItem>{{ edit ? '编辑用户' : '新建用户' }}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{{ edit ? '编辑用户' : '新建用户' }}</h2>
        </div>
        <Form :model="user" :label-width="120" autocomplete="off">
            <FormItem required label="邮箱:">
                <Input v-model="user.email" autocomplete="off" placeholder="请输入邮箱" ></Input>
            </FormItem>
            <FormItem required label="用户名:">
                <Input v-model="user.name" autocomplete="off"  placeholder="请输入用户名"></Input>
            </FormItem>
            <FormItem label="性别:">
                <RadioGroup v-model="user.gender">
                    <Radio label="male">男</Radio>
                    <Radio label="female">女</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem v-if="!edit" required label="密码:">
                <Input v-model="user.password" autocomplete="new-password"  placeholder="输入密码" type="password"></Input>
            </FormItem>
            <FormItem v-if="!edit" required label="确认密码:">
                <Input v-model="user.rePassword" autocomplete="new-password" placeholder="确认秘密" type="password"></Input>
            </FormItem>
            <FormItem label="头像:">
                <Upload
                    ref="upload"
                    action="https://sm.ms/api/v2/upload"
                    :show-upload-list="false"
                    :default-file-list="defaultList"
                    :format="['jpg', 'jpeg', 'png']"
                    :max-size="2048"
                    type="drag"
                    style="display: inline-block;width:58px;"
                >
                    <img v-if="user.avatar" :src="user.avatar" class="avatar">
                    <div v-else style="width: 58px;height:58px;line-height: 58px;">
                        <Icon type="ios-camera" size="20"></Icon>
                    </div>
                </Upload>
            </FormItem>
            <FormItem>
                <Button @click="save" type="primary">保 存</Button>
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
                gender: 'male',
                password: '',
                rePassword: '',
                avatar: 'https://i.loli.net/2020/04/05/xUmnIHdZMv8epXo.jpg'
            },
            defaultList: []
        };
    },
    computed: {
        id() {
            return this.$route.params.id;
        },
        edit() {
            return !!this.id;
        }
    },
    methods: {
        save() {
          if (this.edit) {
              this.editUser()
          }  else {
              this.addUser()
          }
        },
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
        },
        async editUser() {
            const data = {
                ...this.user
            };
            const { code, msg } = await accountApi.editUser(data).catch(e => e);
            if (code !== 200) {
                return this.$Message.error(msg);
            }
            this.$Message.success('保存成功');
            this.$router.back();
        },
        async detail() {
            const { code, data } = await accountApi.userDetail(this.id).catch(e => e);
            if (code !== 200) {
                this.$Message.error('获取用户详情失败');
            }
            this.user = data;
        },
    },
    mounted() {
        if (this.edit) {
            this.detail()
        }
    }
};
</script>

<style lang="less">
.user-modify {
    .avatar {
        height: 48px;
        width: 48px;
    }
}
</style>
