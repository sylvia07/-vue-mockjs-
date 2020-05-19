import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import UserList from '../components/user/List.vue'
import UserAdd from '../components/user/Add.vue'
import GoodsAdd from '../components/goods/Add.vue'
import GoodsList from '../components/goods/Add.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/users', component: UserList },
      { path: '/users_add', component: UserAdd },
      { path: '/goods', component: GoodsList },
      { path: '/goods_add', component: GoodsAdd }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
