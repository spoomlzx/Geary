<template>
    <div class="userLayout">
        <div class="container">
            <div class="top">
                <div class="header">
                    <a-badge :count="'Alpha 1.0'">
                        <a href="/">
                            <img src="../../assets/image/logo.png" class="logo" alt="logo">
                            <span class="title">Gear Project</span>
                        </a>
                    </a-badge>
                </div>
                <div class="desc">{{desc}}</div>
            </div>

            <router-view/>
            <slot></slot>

            <div class="footer">
                <!--  <div class="links">
                      <a href="_self">帮助</a>
                      <a href="_self">隐私</a>
                      <a href="_self">条款</a>
                  </div>-->
                <div class="copyright">
                    Copyright &copy; 2019 Spoom
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UserLayout',
        props: {
            desc: {
                type: [String],
                default() {
                    return '';
                }
            }
        }
    }
</script>

<style lang="less">
    .userLayout {
        height: 100%;
        overflow: auto;

        &.mobile {
            .container {
                .main {
                    max-width: 368px;
                    width: 98%;
                }
            }
        }

        .container {
            width: 100%;
            min-height: 100%;
            background: #f0f2f5 url(../../assets/image/background.svg) no-repeat 50%;
            background-size: 100%;
            padding: 110px 0 144px;
            position: relative;

            a {
                text-decoration: none;
            }

            .top {
                text-align: center;

                .header {
                    height: 44px;
                    line-height: 44px;

                    .badge {
                        position: absolute;
                        display: inline-block;
                        line-height: 1;
                        vertical-align: middle;
                        margin-left: -12px;
                        margin-top: -10px;
                        opacity: 0.8;
                    }

                    .logo {
                        height: 44px;
                        vertical-align: top;
                        margin-right: 12px;
                        border-style: none;
                    }

                    .title {
                        font-size: 33px;
                        color: rgba(0, 0, 0, .85);
                        font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                        font-weight: 600;
                        position: relative;
                        top: 2px;
                    }
                }

                .desc {
                    font-size: 14px;
                    color: rgba(0, 0, 0, 0.45);
                    margin-top: 12px;
                    margin-bottom: 40px;
                }
            }

            .main {
                min-width: 260px;
                width: 368px;
                margin: 0 auto;
            }

            .footer {
                position: absolute;
                width: 100%;
                bottom: 0;
                padding: 0 16px;
                margin: 48px 0 24px;
                text-align: center;

                .links {
                    margin-bottom: 8px;
                    font-size: 14px;

                    a {
                        color: rgba(0, 0, 0, 0.45);
                        transition: all 0.3s;

                        &:not(:last-child) {
                            margin-right: 40px;
                        }
                    }
                }

                .copyright {
                    color: rgba(0, 0, 0, 0.45);
                    font-size: 14px;
                }
            }
        }
    }
</style>
