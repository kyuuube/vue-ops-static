export const namespace = "account";

export const getters = {
    login: "login",
    logout: "logout",
    user: "user",
    routerList: "routerList",
    companyList: "companyList",
    selectedRouter: "selectedRouter",
    currentMenuId: "currentMenuId",
    currentOpenMenuIds: "currentOpenMenuIds",
    isCollapsed: "isCollapsed"
};

export const actions = {
    login: "login",
    setToken: "setToken",
    logout: "logout",
    user: "user",

    getCompanyList: "getCompanyList",
    getCurrentUserInfo: "getCurrentUserInfo",
    setUserInfo: "setUserInfo",
    setRouterList: "setRouterList",
    setSelectedRouter: "setSelectedRouter",
    setCurrentMenuId: "setCurrentMenuId",
    setCurrentOpenMenuIds: "setCurrentOpenMenuIds",
    setCollapsed: "setCollapsed"
};

export const mutations = {
    token: "token",
    logout: "logout",
    user: "user",
    routerList: "routerList",
    companyList: "companyList",
    selectedRouter: "selectedRouter",
    currentMenuId: "currentMenuId",
    currentOpenMenuIds: "currentOpenMenuIds",
    isCollapsed: "isCollapsed"
};
