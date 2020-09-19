import Login from 'pages/login';
import Dashboard from 'pages/dashboard';
import UsersList from 'pages/users/user-list';
import GiftList from 'pages/gifts/gift-list';

export const MAIN_ROUTER = [
  {
    name: 'login',
    displayName: 'Đăng nhập',
    path: '/login',
    exact: true,
    component: Login,
    hidden: true
  },

  {
    name: 'dashboard',
    displayName: 'Trang chủ',
    icon: 'home',
    path: '/',
    component: Dashboard,
    exact: true
  },

  {
    name: 'users',
    displayName: 'Người dùng',
    icon: 'user',
    path: '/users',
    component: UsersList
  },

  {
    name: 'gifts',
    displayName: 'Quà tặng',
    icon: 'gift',
    path: '/gifts',
    component: GiftList
  },

  {
    name: 'gift-exchange',
    displayName: 'Đổi quà',
    icon: 'gift',
    path: '/gift-exchange'
  },

  {
    name: 'transactions',
    displayName: 'Giao dịch',
    icon: 'credit-card',
    path: '/transactions'
  }
];
