<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-container>
      <el-header>头部</el-header>
      <el-aside>
        侧边
      </el-aside>
      <el-main>主要内容</el-main>
      <el-footer>
        底部
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.el-container{
  border:1px solid red;
}
</style>
