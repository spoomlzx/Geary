import axios from 'axios'
import store from '../store/index'
import { getToken } from "./auth";
import { Modal } from 'ant-design-vue'

// 创建axios实例
const service = axios.create({
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
});

// request拦截器
service.interceptors.request.use(
    config => {
        if (getToken()) {
            config.headers.Authorization = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
        }
        return config
    },
    error => {
        // Do something with request error
        Promise.reject(error);
    }
);

// response 拦截器
service.interceptors.response.use(
    response => {
        /**
         * code为非20000是抛错 可结合自己业务进行修改
         */
        const res = response.data;
        if (res.code !== 200) {
            // 501,token验证出错
            if (res.code === 501) {
                Modal.error({
                    title: '错误',
                    content: '你已经登出，请重新登录',
                    onOk() {
                        console.log('OK');
                        store.dispatch('FedLogOut').then(() => {
                            location.reload() // 为了重新实例化vue-router对象 避免bug
                        })
                    }
                });
            }
            return Promise.reject('error')
        } else {
            return Promise.resolve(res);
        }
    },
    error => {
        console.log('err' + error); // for debug
        return Promise.reject(error)
    }
);

export default service
