// 引入mockjs
import Mock from 'mockjs';
// 使用mockjs模拟数据
Mock.mock('/api/menulist', (req, res) => {
  return [
    {
      id: 1,
      name: '用户管理',
      path: 'users',
      children: [
        {
          id: 101,
          name: '添加用户',
          path: 'users_add'
        },
        {
          id: 102,
          name: '用户列表',
          path: 'users'
        }
      ]
    },
    {
      id: 2,
      name: '商品管理',
      path: 'goods',
      children: [
        {
          id: 201,
          name: '添加商品',
          path: 'goods_add'
        },
        {
          id: 202,
          name: '商品列表',
          path: 'goods'
        }
      ]
    }
  ]
})
