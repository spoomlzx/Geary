import request from "../utils/request";

export function loginByUsername(username, password) {
    const data = {
        username,
        password
    };
    return request({
        url: '/sys/login',
        method: 'post',
        data
    })
}

export function logout() {
    return request({
        url: '/sys/logout',
        method: 'post'
    })
}

export function getUserInfo() {
    return request({
        url: '/sys/userInfo',
        method: 'get'
    })
}
