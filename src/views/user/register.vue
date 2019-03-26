<template>
    <div class="hello">
        <p>
            For a guide and recipes on how to configure / customize this project,<br>
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
        <h3 @click="openModal">Installed CLI Plugins</h3>
        <a-button @click="login">login</a-button>
        <a-button>{{res}}</a-button>
    </div>
</template>

<script>
    import { Modal } from 'ant-design-vue';
    import { loginByUsername } from '../../api/login';

    export default {
        name: 'HelloWorld',
        data() {
            return {
                res: {}
            }
        },
        methods: {
            openModal() {
                Modal.error({
                    title: '错误',
                    content: '你已经登出，请重新登录',
                    onOk() {
                        console.log('OK');
                    }
                });
            },
            login() {
                loginByUsername('123', '123').then(res => {
                    this.res = res;
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
