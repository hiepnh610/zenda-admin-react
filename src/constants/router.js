import Login from 'pages/login';
import Dashboard from 'pages/dashboard';
import UsersList from 'pages/users/user-list';
import GiftList from 'pages/gifts/gift-list';

export const MAIN_ROUTER = [
  {
    name: 'Login',
    path: '/login',
    exact: true,
    component: Login,
    hidden: true,
    auth: false,
  },

  {
    name: 'Dashboard',
    icon: 'home',
    path: '/',
    component: Dashboard,
    exact: true,
    auth: true,
  },

  {
    name: 'Users',
    icon: 'user',
    path: '/users',
    component: UsersList,
    auth: true,
  },

  {
    name: 'Gifts',
    icon: 'gift',
    path: '/gifts',
    component: GiftList,
    auth: true,
  },

  {
    name: 'Gift Exchange',
    icon: 'gift',
    path: '/gift-exchange',
    auth: true,
  },

  {
    name: 'Transactions',
    icon: 'credit-card',
    path: '/transactions',
    auth: true,
  },
];
