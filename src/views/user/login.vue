<template>
    <div class="main">
        <a-form
                class="user-layout-login"
                ref="formLogin"
                id="formLogin"
                :form="form"
        >
            <a-tabs
                    :activeKey="customActiveKey"
                    :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }"
                    @change="handleTabClick"
            >
                <a-tab-pane key="tab1" tab="账号密码登录">
                    <a-form-item>
                        <a-input size="large" type="text" placeholder="帐户名或邮箱地址 / 123456"
                                 v-decorator="['username',{rules: [{ required: true, message: '请输入帐户名或邮箱地址' }], validateTrigger: 'blur'}]">
                            <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                        </a-input>
                    </a-form-item>

                    <a-form-item>
                        <a-input size="large" type="password" autocomplete="false" placeholder="密码 / 123456"
                                 v-decorator="[
                                'password',
                                {rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur'}
                            ]">
                            <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                        </a-input>
                    </a-form-item>
                </a-tab-pane>
                <a-tab-pane key="tab2" tab="手机号登录">
                    <a-form-item>
                        <a-input size="large" type="text" placeholder="手机号"
                                 v-decorator="['mobile',{rules: [{ required: true, pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号' }], validateTrigger: 'change'}]">
                            <a-icon slot="prefix" type="mobile" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                        </a-input>
                    </a-form-item>

                    <a-row :gutter="16">
                        <a-col class="gutter-row" :span="16">
                            <a-form-item>
                                <a-input size="large" type="text" placeholder="验证码"
                                         v-decorator="['captcha',{rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}]">
                                    <a-icon slot="prefix" type="mail" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                                </a-input>
                            </a-form-item>
                        </a-col>
                        <a-col class="gutter-row" :span="8">
                            <a-button
                                    class="getCaptcha"
                                    tabindex="-1"
                                    v-text="'获取验证码' || (state.time+' s')"
                            ></a-button>
                        </a-col>
                    </a-row>
                </a-tab-pane>
            </a-tabs>

            <a-form-item>
                <a-checkbox v-model="formLogin.rememberMe">自动登录</a-checkbox>
                <a class="forge-password" style="float: right;">忘记密码</a>
            </a-form-item>

            <a-form-item style="margin-top:24px">
                <a-button
                        size="large"
                        type="primary"
                        htmlType="submit"
                        class="login-button"
                        :loading="loginBtn"
                        @click.stop.prevent="handleSubmit"
                        :disabled="loginBtn"
                >登录
                </a-button>
            </a-form-item>

            <div class="user-login-other">
                <span>其他登录方式</span>
                <a>
                    <a-icon class="item-icon" type="alipay-circle"></a-icon>
                </a>
                <a>
                    <a-icon class="item-icon" type="taobao-circle"></a-icon>
                </a>
                <a>
                    <a-icon class="item-icon" type="weibo-circle"></a-icon>
                </a>
                <router-link class="register" :to="{ name: 'register' }">注册账户</router-link>
            </div>
        </a-form>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { timeFix } from '../../utils/tool';

    export default {
        components: {},
        data() {
            return {
                customActiveKey: 'tab1',
                loginBtn: false,
                // login type: 0 email, 1 account, 2 telephone
                loginType: 1,
                form: this.$form.createForm(this),
                formLogin: {
                    username: '',
                    password: '',
                    rememberMe: true
                }
            }
        },
        computed: {
            ...mapGetters([
                'username'
            ])
        },
        created() {

        },
        methods: {
            handleTabClick(key) {
                this.customActiveKey = key
                // this.form.resetFields()
            },
            handleSubmit() {
                this.form.validateFields(['username', 'password'], { force: true }, (err, values) => {
                    if (!err) {
                        this.formLogin.username = values.username;
                        this.formLogin.password = values.password;
                        this.$store.dispatch('LoginByUsername', this.formLogin)
                            .then((res) => this.loginSuccess(res))
                            .catch(err => this.requestFailed(err))
                            .finally(() => this.loginBtn = false)
                    } else {
                        setTimeout(() => {
                            state.loginBtn = false
                        }, 600)
                    }
                })
            },
            loginSuccess(res) {
                this.$router.push({ name: 'index' });
                setTimeout(() => {
                    if (this.username) {
                        this.$notification.success({
                            message: '欢迎',
                            description: `${this.username}，${timeFix()}，欢迎回来`,
                        })
                    }
                }, 1000);
            },
            requestFailed(err) {
                this.$notification['error']({
                    message: '错误',
                    description: ((err.response || {}).data || {}).message || '请求出现错误，请稍后再试',
                    duration: 4
                })
            }
        }
    }
</script>

<style lang="less">
    .user-layout-login {
        label {
            font-size: 14px;
        }

        .getCaptcha {
            display: block;
            width: 100%;
            height: 40px;
        }

        .forge-password {
            font-size: 14px;
        }

        button.login-button {
            padding: 0 15px;
            font-size: 16px;
            height: 40px;
            width: 100%;
        }

        .user-login-other {
            text-align: left;
            margin-top: 24px;
            line-height: 22px;

            .item-icon {
                font-size: 24px;
                color: rgba(0, 0, 0, 0.2);
                margin-left: 16px;
                vertical-align: middle;
                cursor: pointer;
                transition: color 0.3s;

                &:hover {
                    color: #1890ff;
                }
            }

            .register {
                float: right;
            }
        }
    }
</style>
