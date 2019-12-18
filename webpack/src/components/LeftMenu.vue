<template>
    <div>
        <Layout :style="{height: '100vh'}">
            <div class="topBar">
<!--                <Button @click="change">修改Sider绑定的变量来控制收缩</Button>-->
            </div>
            <Layout>
                <Sider
                    v-model="isCollapsed"
                    collapsed-width="0"
                    hide-trigger
                    breakpoint="sm"
                    @on-collapse="changed"
                    collapsible
                    ref="side"
                    width="240">
                    <Menu width="auto" theme="dark" active-name="1">
                        <MenuGroup title="内容管理">
                            <MenuItem name="1">
                                <Icon type="document-text"></Icon>
                                文章管理
                            </MenuItem>
                            <MenuItem name="2">
                                <Icon type="chatbubbles"></Icon>
                                评论管理
                            </MenuItem>
                        </MenuGroup>
                        <MenuGroup title="统计分析">
                            <MenuItem name="3">
                                <Icon type="heart"></Icon>
                                用户留存
                            </MenuItem>
                            <MenuItem name="4">
                                <Icon type="heart-broken"></Icon>
                                流失用户
                            </MenuItem>
                        </MenuGroup>
                    </Menu>
<!--                     <div slot="trigger"><Icon type="document-text"></Icon></div>-->
                </Sider>
                <Layout class-name="test-class">
                    <Header :style="{background: '#eee'}"><Button @click="toggleCollapse">菜单</Button></Header>
                    <Content :style="{background:'#FFFFFF'}">
<!--                        <p v-for="i in 10" :key="i" align="left">{{ i }}</p>-->
                    </Content>
                    <Footer>sdfsdsdfsdfs</Footer>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                isCollapsed: false
            };
        },
        methods: {
            toggleCollapse () {
                this.$refs.side.toggleCollapse();
            },
            change () {
                this.isCollapsed = !this.isCollapsed;
            },
            changed (res) {
                console.log(res)
            }
        },
        watch: {
            isCollapsed (val) {
                // console.log(val)
            }
        }
    };
</script>
<style lang="less" scoped>
    .layout-demo-con{
        height: 100%;
    }
    .container{ padding: 0px 0px 0px; }
</style>
<style lang="css" scoped>
    .topBar {
        padding: 9px 50px 11px 35px;
        width: 100%;
        height: 44px;
        box-sizing: border-box;
        overflow: hidden;
        color: #fff;
        background-color: blue;
    }
</style>
