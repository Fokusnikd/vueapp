import Vue from "vue";
import Guard from './auth-guard'
import Router from "vue-router";
import Home from '@/components/Home';
import Ad from '@/components/Ads/Ad';
import AdList from '@/components/Ads/AdList';
import NewAd from '@/components/Ads/NewAd';
import Login from '@/components/Auth/Login';
import Registration from '@/components/Auth/Registration';
import Orders from '@/components/User/Orders';



Vue.use(Router);

export default new Router({
  routes: [{
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/ad/:id',
      props: true,
      name: 'ad',
      component: Ad,
      beforeEnter: Guard
    },
    {
      path: '/list',
      name: 'adlist',
      component: AdList,
      beforeEnter: Guard
    },
    {
      path: '/new',
      name: 'newad',
      component: NewAd,
      beforeEnter: Guard
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
      beforeEnter: Guard
    }

  ],
  mode: 'history'
});