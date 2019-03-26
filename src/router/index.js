import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import { getToken } from "../utils/auth";
import notification from 'ant-design-vue/es/notification';

Vue.use(Router);

import Home from './home'

export const constRouter = [].concat(
    Home
);

const router = new Router({
    routes: constRouter
});
const whiteList = ['login','register']; // 不重定向白名单
router.beforeEach((to, from, next) => {
    if (!to.name) {
        next({ path: '/404' });
        return false;
    }
    if (getToken()) {
        if (to.path === '/user/login') {
            next({ path: '/' });
        } else {
            if (!store.getters.username) {
                store.dispatch('GetUserInfo').then(res => { // 拉取用户信息
                    next()
                }).catch((err) => {
                    store.dispatch('FedLogOut').then(() => {
                        notification.error({
                            message: '错误',
                            description: '请求用户信息失败，请重试'
                        });
                        next({ path: '/' })
                    })
                })
            } else {
                next()
            }
        }
    } else {
        if (whiteList.includes(to.name)) {
            next()
        } else {
            next({ path: '/user/login' }); // 否则全部重定向到登录页
        }
    }
});
router.afterEach(route => {
    //预留
    // window.scrollTo(0,0)
});

export default router;