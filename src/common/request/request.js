import axios from "axios";
import * as config from "../../../config/index";
import store from "src/store";
import * as $account from "src/store/modules/account/types";


const request = axios.create({
    baseURL: process.env.NODE_ENV !== "development" ? config.build.api : config.dev.api ,
    timeout: 50000,
})

// 请求拦截器
request.interceptors.request.use(
    config => {
        config.headers = {
            "authorization": localStorage.getItem("token"),
            "filename": "utf-8"
        };
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);

// let isReset = false;

// 响应拦截器
request.interceptors.response.use(
    response => {
        if (axios.isCancel(response)) {
            return Promise.reject(response);
        }
        response = response.data;
        // if (response.code === 401) {
        //     if (!isReset) {
        //         isReset = true;
        //         MessageBox.alert("登录信息过时，请重新登录！", "登录超时", {
        //             confirmButtonText: "返回登录页",
        //             callback: () => {
        //                 store.dispatch(`${$account.namespace}/${$account.actions.logout}`);
        //                 // router.replace("/login").catch(e => e);
        //                 // 如果使用vue router 更新 url isReset 变量不会刷新，会出现重复弹窗
        //                 window.location.href = `/#/login?redirect=${window.encodeURIComponent(window.location.hash.substring(1))}`;
        //             }
        //         });
        //     }
        //     return Promise.reject();
        // }
        if ((response.code === 500 || response.code === 503) && process.env.NODE_ENV === "production") {
            // Message.error('服务器繁忙')
            return Promise.reject();
        }
        return response;
    }, error => {
        // if (axios.isCancel(error)) {
        //     return Promise.reject({
        //         cancel: true
        //     });
        // }
        // const msg = process.env.NODE_ENV !== "development" ? "服务器繁忙" : '✨ 服务器驾崩了！✨'
        // if  (process.env.NODE_ENV !== "development") {
        //     Message.error(msg)
        // } else {
        //     Notification.success({
        //         title: '祝い✨✨✨✨✨✨✨✨',
        //         message: msg,
        //         duration: 0
        //     })
        // }
        console.log(error)
        return Promise.reject();
    });

export default request;
