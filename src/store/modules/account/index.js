// utils
import persistedState from "src/common/persistedState";
// import * as doorControlApi from "../../../apis/doorControlApi";
// import * as userApi from "../../../apis/userApi";
import {
    namespace,
    getters as $getters,
    actions as $actions,
    mutations as $mutations
} from "./types";

const state = persistedState(namespace, {
    permissions: [],
    islogin: 1,
    user: {},
    token: undefined,
    routerTab: [],
    routerList: [],
    companyList: [],
    superAdmin: false,
    currentMenuId: 1
}, {
    selectedRouter: []
    // ...other
});

const mutations = {
    [$mutations.token]: (state, data) => {
        window.sessionStorage.setItem('token', data.token)
        state.token = data.token;
    },
    [$mutations.iframelogin]: (state) => {
        state.islogin = true;
    },
    [$mutations.logout]: (state) => {
        state.islogin = false;
        state.token = null;
        state.user = null
        state.selectedRouter = []
        state.currentMenuId = 1
        sessionStorage.removeItem('selectedRouter')
    },
    [$mutations.user]: (state, data) => {
        state.user = data;
    },
    [$mutations.routerList]: (state, data) => {
        state.routerList = data;
    },
    [$mutations.companyList]: (state, data) => {
        state.companyList = data;
    },
    [$mutations.selectedRouter]: (state, data) => {
        state.selectedRouter = data;
        sessionStorage.selectedRouter = JSON.stringify(data);
    },
    [$mutations.currentMenuId]: (state, data) => {
        state.currentMenuId = data;
    }
};

const actions = {
    // [$actions.getCompanyList]: async ({ commit }) => {
    //     const { data } = await doorControlApi.getCompanyListById().catch(e => e);
    //     commit($mutations.companyList, data);
    // },
    // [$actions.getCurrentUserInfo]: async ({ commit }) => {
    //     const { data, code, msg } = await userApi.getCurrentUserInfo().catch(e => e);
    //         if (code !== 0) {
    //             $msg.err(msg)
    //         }
    //     sessionStorage.setItem("companyId", data.companyId);
    //     window.localStorage.setItem("permissions", data.permissions);
    //     window.localStorage.setItem("user", JSON.stringify(data));
    //     commit($mutations.user, data);
    // },
    [$actions.setToken]: ({ commit }, token) => {
        commit($mutations.token, token);
    },
    [$actions.logout]: ({ commit }) => {
        commit($mutations.logout);
    },
    [$actions.iframelogin]: ({ commit }) => {
        commit($mutations.iframelogin);
    },
    [$actions.setUserInfo]: ({ commit }, user) => {
        commit($mutations.user, user);
    },
    [$actions.setRouterList]: ({ commit }, list) => {
        commit($mutations.routerList, list);
    },
    [$actions.setSelectedRouter]: ({ commit }, list) => {
        commit($mutations.selectedRouter, list);
    },
    [$actions.setCurrentMenuId]: ({ commit }, list) => {
        commit($mutations.currentMenuId, list);
    },
};

const getters = {
    [$getters.islogin]: (state) => state.islogin,
    [$getters.token]: (state) => state.token,
    [$getters.user]: (state) => state.user,
    [$getters.companyList]: (state) => state.companyList,
    [$getters.selectedRouter]: (state) => {
        return  state.selectedRouter > 0 ? state.selectedRouter : JSON.parse(sessionStorage.selectedRouter || '[]')
    },
    [$getters.currentMenuId]: (state) => state.currentMenuId
};


export default {

    namespaced: true,

    state,

    getters,

    actions,

    mutations
};
