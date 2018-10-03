<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">Home</el-menu-item>
    <el-submenu index="2">
      <template slot="title">Mon pets</template>
      <el-menu-item index="2-1">pet1</el-menu-item>
      <el-menu-item index="2-2">pet2</el-menu-item>
      <el-menu-item index="2-3">pet3</el-menu-item>
      <el-menu-item index="2-4">pet4</el-menu-item>
    </el-submenu>
    <el-menu-item index="3" >Message</el-menu-item>
    <el-menu-item index="4">Mangenement</el-menu-item>
  </el-menu>
</template>

<script>
    export default {
        name: "navigation"
    }
</script>

<style scoped>

</style>
