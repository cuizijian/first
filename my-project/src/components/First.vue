<template>
  <div class="hello">
    <h1>崔子健的blog</h1>
    <el-calendar v-model="value">
    </el-calendar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value: new Date()
    }
  }
}
</script>

<style scoped>
h1, h2 {
  margin: 20px 0;
  font-weight: bold;
  font-size: 20px;
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
