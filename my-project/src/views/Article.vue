<template>
    <div class="js_body">
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="数据类型" name="1">
                <div>基本数据类型: String, Null, Undefined, Number, Boolean,Symbol</div>
                <div>引用数据类型: Map, Set, Object, Array, Function</div>
            </el-collapse-item>
            <el-collapse-item title="检测数据类型方法" name="2">
                <div>typeof: 难以区分数组、对象、null</div>
                <div>instanceof: 用法: 需要new Numner(1) instanceof Number,难以区分null和undefined</div>
                <div>constructor: 原型指向可以改变,难以区分null和undefined</div>
                <div>Object.prototype.toString.call(): 可以判断所有数据类型</div>
            </el-collapse-item>
            <el-collapse-item title="this指针指向" name="3">
                <div>作为对象的方法调用,this 指向该对象</div>
                <div>作为普通函数调用,此时的this总是指向全局对象。在浏览器的 JavaScript 里，这个全局对象是 window 对象。</div>
                <div>构造器调用,，构造器里的 this 就指向返回的这个对象</div>
                <div>Function.prototype.call 或 Function.prototype.apply 调用。</div>
            </el-collapse-item>
            <el-collapse-item title="for...in与for...of区别" name="4">
                <div>for … of遍历获取的是对象的键值,for … in 获取的是对象的键名</div>
                <div>for … in会遍历对象的整个原型链,性能非常差不推荐使用,而for … of只遍历当前对象不会遍历原型链</div>
                <div>对于数组的遍历,for … in会返回数组中所有可枚举的属性(包括原型链上可枚举的属性),for … of只返回数组的下标对应的属性值</div>
            </el-collapse-item>
        </el-collapse>
        <!-- <el-tabs type="border-card" class="tabs_js">
            <el-tab-pane label="数据类型">
                基本数据类型: String, Null, Undefined, Number, Boolean,Symbol<br>
                引用数据类型: Map, Set, Object, Array, Function
            </el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs> -->
    </div>
</template>
<script>
export default {
  name: 'Aritcle',
  data () {
    return {
      activeNames: ['1']
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>
<style scoped>
.js_body{
    height: 100%;
}
.tabs_js{
    height: 100%;
}

</style>
