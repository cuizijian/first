<template>
  <div class="hello">
    <Head :title='msg' />
    <div class="calendar">
      <el-calendar v-model="value" slot="dateCell" />
    </div>
  </div>
</template>

<script>
import Head from '../components/Head.vue'
export default {
  name: 'Homepage',
  components: {
    Head
  },
  data () {
    return {
      msg: '崔子健的blog',
      value: new Date() + 1
    }
  },
  computed: {
    msg1: function () {
      return this.msg
    }
  },
  // vue生命周期
  beforeCreate () {},
  created () {
    let ss = [2, 3, 3, 3, 8]
    let b = 10
    function ssSS (ss, b) {
      for (let i = 0; i < ss.length; i++) {
        for (let j = 0; j < ss.length; j++) {
          let sum
          sum = ss[i] + ss[j]
          if (sum === b) {
            if (i !== j) {
              return [ss[i], ss[j]]
            }
          }
        }
      }
    }
    console.log(ssSS(ss, b))

    // 冒泡排序
    let ss2 = [3, 5, 8, 7, 9, 3, 2]
    function paopao (ss2) {
      let zhong
      for (let i = 0; i < ss2.length; i++) {
        for (let j = i + 1; j < ss2.length; j++) {
          if (ss2[i] > ss2[j]) {
            zhong = ss2[i]
            ss2[i] = ss2[j]
            ss2[j] = zhong
          }
        }
      }
      return ss2
    }
    console.log(paopao(ss2))
    console.log(paopao(ss2).reverse())
  },
  beforeUpdate () {},
  updated () {},
  beforeMount () {},
  mounted () {},
  beforeDestroy () {},
  destroyed () {}
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
.calendar{
  width: 400px;
  height: 400px;
}
.el-calendar{
  height: 400px !important;
}
</style>
