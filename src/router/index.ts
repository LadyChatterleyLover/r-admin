import { RouterItem } from '../types'
import Login from '../page/login/login'
import NotFound from '../page/notFound/notFound'
import Home from '../page/home/home'
import User from '../page/user/user';

export const noAuthRoutes: RouterItem[] = [
  {
    path: '/login',
    component: Login,
    title: '登录'
  },
  {
    path: '/err',
    component: NotFound,
    title: '出错啦'
  }
]

export const authRoutes: RouterItem[] = [
  {
    path: '/admin/home',
    component: Home,
    exact: true,
    title: '首页'
  },
  {
    path: '/admin/user',
    component: User,
    title: '用户管理'
  }
]