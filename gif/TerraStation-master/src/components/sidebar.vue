<template >

  <el-aside>
    <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span>Sondes</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1"><router-link to="/homepage2">Homepage2</router-link></el-menu-item>
          <el-menu-item indexz="1-2">Profile</el-menu-item>
          <el-menu-item index="1-3">Weather</el-menu-item>
          <el-menu-item index="1-4">Calendar</el-menu-item>
        </el-menu-item-group>
        </el-submenu>


      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-search"></i>
          <span>Interrupteur</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">Temperature</el-menu-item>
          <el-menu-item indexz="2-2">Humidity</el-menu-item>
          <el-menu-item index="2-3">Moisture</el-menu-item>
          <el-menu-item index="2-4">Canductivity</el-menu-item>
          <el-menu-item index="2-5">Distance</el-menu-item>
          <el-menu-item index="2-6">Distance</el-menu-item>
        </el-menu-item-group>
      </el-submenu>


      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>Programmeur</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">Status</el-menu-item>
          <el-menu-item index="3-2">Settings</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-circle-check"></i>
          <span>Notifications</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">Status</el-menu-item>
          <el-menu-item index="3-2">Settings</el-menu-item>
        </el-menu-item-group>
      </el-submenu>


      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-circle-check"></i>
          <span>Agenda</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">Status</el-menu-item>
          <el-menu-item index="5-2">Settings</el-menu-item>
        </el-menu-item-group>
      </el-submenu>


      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-circle-check"></i>
          <span>Camera</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">Status</el-menu-item>
          <el-menu-item index="5-2">Settings</el-menu-item>
        </el-menu-item-group>
      </el-submenu>


      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-circle-check"></i>
          <span>Pré-reglages</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">Status</el-menu-item>
          <el-menu-item index="5-2">Settings</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
  </el-col>
  </el-aside>
</template>

<script>


export default {

  name: 'sidebar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
  .el-submenu{
   width: 220px;
    /*margin-right: auto;*/


  }
</style>
