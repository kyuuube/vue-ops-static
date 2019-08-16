import Vue from 'vue'
import {Store, install} from 'vuex'

install(Vue)

const store = new Store({
    /**
     * 要开启严格模式，只需要在创建 Vuex store 实例时传入 strict: true
     * 在严格模式中，每当 Vuex state 在 mutation handlers 外部被改变时都会抛出错误。
     * 不要在生产环境中开启严格模式！ 为了检测在不合适的地方发生的状态修改, 严格模式会对 state 树进行一个深观察 (deep watch)。
     * 所以为了避免不必要的性能损耗，请在生产环境中关闭严格模式。
     */
    strict: process.env.NODE_ENV !== 'production'
})

export default store
