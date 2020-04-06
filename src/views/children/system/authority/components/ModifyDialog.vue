<template>
    <Modal title="新增权限" :value="value" width="760">
        <Form ref="authorityForm" :model="authority" :rules="ruleAuthority" :label-width="120" autocomplete="off">
            <FormItem prop="name" label="名称:">
                <Input type="text" v-model="authority.name" placeholder="名称"> </Input>
            </FormItem>
            <FormItem prop="menuId" label="菜单:">
                <Select v-model="authority.menuId">
                    <Option v-for="item in menuList" :value="item.id" :key="item.id">{{ item.name }}</Option>
                </Select>
            </FormItem>
            <FormItem prop="slug" label="标识:">
                <Input type="text" v-model="authority.slug" placeholder="标识"> </Input>
            </FormItem>
            <FormItem label="描述:">
                <Input type="text" v-model="authority.description" placeholder="描述"> </Input>
            </FormItem>
            <FormItem label="类型:">
                <RadioGroup v-model="authority.type">
                    <Radio :label="0">页面权限</Radio>
                    <Radio :label="1">接口权限</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="接口路径:" v-if="authority.type === 1">
                <Input type="text" v-model="authority.path" placeholder="描述"> </Input>
            </FormItem>
            <FormItem label="接口方法:" v-if="authority.type === 1">
                <Input type="text" v-model="authority.methods" placeholder="描述"> </Input>
            </FormItem>
        </Form>
        <div slot="footer">
            <Button type="primary" :loading="btnLoading" @click="save">确 认</Button>
            <Button type="info" :loading="btnLoading" @click="$emit('input', false)">取 消</Button>
        </div>
    </Modal>
</template>

<script>
import * as accountApi from '../../../../../apis/accountApi';

export default {
    name: 'modify-dialog',
    props: {
        value: null
    },
    data() {
        return {
            menuList: [],
            btnLoading: false,
            authority: {
                name: '',
                menuId: '',
                description: '',
                path: '',
                methods: '',
                type: 0,
                slug: ''
            },
            ruleAuthority: {
                name: [
                    { required: true, message: '请输入名称', trigger: 'blur' },
                    { type: 'string', max: 10, message: '输入长度超过10', trigger: 'blur' }
                ],
                menuId: [{ required: true, message: '请选择菜单.', trigger: 'blur' }],
                slug: [{ required: true, message: '请输入标识.', trigger: 'blur' }]
            }
        };
    },
    methods: {
        save() {
            if (!this.authority.id) {
                this.add()
            }
        },
        async add() {
            const data = {
                ...this.authority
            };
            this.btnLoading = true;
            const { code, msg } = await accountApi.saveAuthority(data).catch(e => e);
            this.btnLoading = false;
            if (code !== 200) {
                return this.$Message.error(msg);
            }
            this.$Message.success('保存成功');
            this.$emit('input', false);
        },
        async loadMenuList() {
            const { code, data } = await accountApi.getMenuList().catch(e => e);
            if (code !== 200) {
                return this.$Message.error('加载菜单列表');
            }
            this.menuList = data;
        }
    },
    mounted() {
        this.loadMenuList();
    }
};
</script>

<style scoped></style>
