<template>
    <div class="css_body">
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="div盒模型" name="1">
                <div>css盒子模型 又称为框模型（Box Model），包含了元素内容（content）、内边距（padding）、边框（border）、外边距（margin）几个要素</div>
                <div>和w3c盒子模型不同的是，IE盒子模型的content部分包含了padding和border</div>
            </el-collapse-item>
            <el-collapse-item title="CSS的优先级" name="2">
                <div>无条件优先的属性只需要在属性后面使用 !important 。它会覆盖页面内任何位置定义的元素样式。IE 6不支持这个属性；</div>
                <div>第二高位的优先属性是在html中给元素标签加style。由于该方法会造成CSS的难以管理，所以不推荐使用。</div>
                <div>第三级优先的属性是由一个或多个id选择器来定义的。例如 #id{margin:0;} 会覆盖 .classname{margin:3px;}。</div>
                <div>第四级的属性由一个或多个 类选择器、属性选择器、伪类选择器定义。如 .classname{margin:3px;} 会覆盖 div{margin:6px;}</div>
                <div>第五级由一个或多个 类型选择器定义。如 div{margin:6px;}  覆盖  *{margin:10px;}</div>
                <div>最低一级的选择器是为一个通配选择器，用*{margin:10px;}这样的类型来定义。</div>
                <div>比较多个相同级别的CSS选择器优先级时，它们定义的位置将决定一切。</div>
            </el-collapse-item>
            <el-collapse-item title="CSS3有哪些新特性" name="3">
                <div>新增各种CSS选择器（:not(.input) 所有class不是“input”的节点）</div>
                <div>圆角（border-radius: 8px;）</div>
                <div>多列布局（multi-columnlayout）</div>
                <div>阴影和反射（Shadow/Reflect）</div>
                <div>文字特效(text-shadow)</div>
                <div>文字渲染(Text-decoration)</div>
                <div>线性渐变(gradient)</div>
                <div>旋转(transform)</div>
                <div>缩放，定位，倾斜，动画，多背景</div>
            </el-collapse-item>
            <el-collapse-item title="CSS 创建一个三角形" name="4">
                <div>#demo{
                    width: 0;
                    height: 0;
                    border-width: 20px;
                    border-style: solid;
                    border-color: transparent transparent red transparent;
                    }</div>
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
.css_body{
    height: 100%;
}
</style>
