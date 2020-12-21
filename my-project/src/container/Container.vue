<template>
    <div class="app">
        <el-aside class="sss">
            <el-menu :default-active="defaultActive"
            router
            class="el-menu-vertical-demo"
            @open="handleOpen"
            :collapse="isCollapse">
            <template v-for="route in $router.options.routes">
                <template v-for="item in route.children" >
                    <el-menu-item
                    :key="route.path + '/' + item.path"
                    :index="item.path"
                    >
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{ item.name }}</span>
                </el-menu-item>
                </template>
            </template>
            </el-menu>
        </el-aside>
        <el-container>
          <el-header>
            <Head :title='msg' />
          </el-header>
          <el-main class="app-body">
            <template>
              <router-view/>
            </template>
          </el-main>
        </el-container>
    </div>
</template>
<script>
import Head from '../components/Head.vue'
export default {
  components: {
    Head
  },
  created () {
    this.defaultActive = this.$router.options.routes.children.path
    console.log(this.$router.options.routes)
  },
  data () {
    return {
      isCollapse: false,
      defaultActive: 'first',
      msg: '崔子健的blog'
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>
html {
  height: 100%;
}

body {
  position: relative;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-size: 1em;
  width: 100%;
  height: 100%;
  min-width: 900px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: row;
}
.sss{
    padding-top: 80px;
    height:100%
}
</style>
