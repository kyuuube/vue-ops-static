<template>
    <div class="project-select">
        <el-select v-model="selectdCommunity" placeholder="请选择" multiple popper-class="project" collapse-tags>
            <el-option value="1" disabled>
                <el-tree
                    ref="treeRef"
                    :data="communityTreeList"
                    node-key="id"
                    accordion
                    show-checkbox
                    @check="handleCheckChange"
                    :default-checked-keys="defaultSelectdOpyions"
                ></el-tree>
            </el-option>
            <el-option v-for="(item, index) in selectdCommunity" :key="index" :value="item">{{ item }}</el-option>
        </el-select>
    </div>
</template>

<script>
import * as contractApi from 'src/apis/contract/contractApi';
// import * as baseDataApi from 'src/apis/baseDataApi';
// stroe
import { mapGetters } from 'vuex';
import * as $account from 'src/store/modules/account/types';
export default {
    props: ['value'],
    data() {
        return {
            communityTreeList: [], // 项目列表
            selectdCommunity: [], // 已选择的项目
            defaultSelectdOpyions: []
        };
    },
    watch: {
        value: {
            handler(value) {
                let that = this;
                if (value && value.length > 0) {
                    that.defaultSelectdOpyions = [];
                    that.selectdCommunity = [];
                    value.forEach(item => {
                        that.selectdCommunity.push(item.projectName);
                        that.defaultSelectdOpyions.push(item.projectId);
                    });
                } else {
                    value = [];
                    that.defaultSelectdOpyions = [];
                    that.selectdCommunity = [];
                    this.$nextTick(() => {
                        that.$refs.treeRef.setCheckedKeys([]);
                    });
                }
            }
        }
    },
    computed: {
        ...mapGetters($account.namespace, {
            user: $account.getters.user
        })
    },
    methods: {
        // 获取项目树
        async getTreeList() {
            // console.log(this.user.companyId);
            const { code, data, msg } = await contractApi.getTreeList(this.user.parentCompanyId).catch(e => e);
            if (code !== 0) {
                return this.$msg.err(msg);
            }
            this.communityTreeList = data;
        },
        handleCheckChange(val, val1) {
            // console.log('项目树变化', val1);
            this.selectdCommunity = [];
            let selectdList = [];
            // this.selectdCommunity = val1.checkedNodes;
            for (let i = 0; i < val1.checkedNodes.length; i++) {
                if (!val1.checkedNodes[i].children) {
                    this.selectdCommunity.push(val1.checkedNodes[i].label);
                    selectdList.push({
                        projectName: val1.checkedNodes[i].label,
                        projectId: val1.checkedNodes[i].id
                    });
                }
            }
            this.$emit('input', selectdList);
            // console.log('this.selectdCommunity', this.selectdCommunity);
        }
    },
    mounted() {
        this.getTreeList();
    }
};
</script>

<style lang="postcss">
.project-select {
    & .el-tag.el-tag--info .el-tag__close {
        display: none !important;
    }
    & .el-select .el-tag__close.el-icon-close::before {
        display: none;
    }
}
.project {
    & .el-select-dropdown__item {
        height: auto !important;
        line-height: auto !important;
    }
    & .el-select-dropdown__item.hover,
    & .el-select-dropdown__item:hover {
        background-color: #fff;
    }
    & .el-select-dropdown__item.selected {
        display: none;
    }
}
</style>
