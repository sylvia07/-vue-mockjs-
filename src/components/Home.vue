<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <img src="../assets/heima.png" alt />
        <span>XX后台管理系统通用模板</span>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <!-- 一级菜单 -->
          <el-submenu :index="item.id+''" v-for="item in menulist" :key="item.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.name}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              :index="'/'+subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
              @click="saveNavState('/'+subItem.path)"
            >
              <template slot="title">
                <!-- 二级菜单图标 -->
                <i class="el-icon-menu"></i>
                <span>{{subItem.name}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      menulist: [],
      activePath: ""
    };
  },
  mounted: function() {
    this.$axios.get("/api/menulist").then(res => {
      this.menulist = res.data;
      console.log(this.menulist);
    });
    this.activePath = window.sessionStorage.getItem("activePath");
  },
  methods: {
    saveNavState(activePath) {
      this.activePath = activePath;
      window.sessionStorage.setItem("activePath", activePath);
    }
  }
};
</script>
<style lang="less" scoped>
.home-container {
  height: 790px;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      padding-left: 15px;
    }
  }
}
.el-aside {
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: #eaedf1;
}
</style>