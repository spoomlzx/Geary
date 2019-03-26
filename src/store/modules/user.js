import { loginByUsername, logout, getUserInfo } from '../../api/login'
import { getToken, setToken, removeToken } from '../../utils/auth'

const user = {
    state: {
        token: getToken(),
        username: '',
        avatar: '',
        email: '',
        mobile: '',
        status: ''
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_USERNAME: (state, username) => {
            state.username = username
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_EMAIL: (state, email) => {
            state.email = email
        },
        SET_MOBILE: (state, mobile) => {
            state.mobile = mobile
        },
        SET_STATUS: (state, status) => {
            state.status = status
        }
    },

    actions: {
        // 用户名登录
        LoginByUsername({ commit }, userInfo) {
            const username = userInfo.username.trim();
            return new Promise((resolve, reject) => {
                loginByUsername(username, userInfo.password).then(response => {
                    commit('SET_TOKEN', response.token);
                    setToken(response.token);
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 获取用户信息
        GetUserInfo({ commit, state }) {
            return new Promise((resolve, reject) => {
                getUserInfo(state.token).then(response => {
                    commit('SET_USERNAME', response.user.username);
                    commit('SET_AVATAR', response.user.avatar);
                    commit('SET_EMAIL', response.user.email);
                    commit('SET_MOBILE', response.user.mobile);
                    commit('SET_STATUS', response.user.status);
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 登出
        Logout({ commit, state }) {
            return new Promise((resolve, reject) => {
                logout(state.token).then(() => {
                    commit('SET_TOKEN', '');
                    removeToken();
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
};

export default user
