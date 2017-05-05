import Vue from 'vue'
import VueRouter from 'vue-router'


/**
 * 应用router
 */
import routes from './router/router'

/**
 * 应用store
 */
import store from './store/'

/**
 * hash
 */
import {routerMode} from './config/env'

import './config/rem'
import FastClick from 'fastclick'

/**
 * 绑定FastClick
 */
if('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

/**
 * 向vue对象挂载路由
 */
Vue.use(VueRouter)

/**
 * 新建一个vue-router
 */
const router = new VueRouter({
	routes,
	mode: routerMode,
	strict: process.env.NODE_ENV !== 'production'
})

/**
 * 新建vue对象
 */
new Vue({
	router,
	store,
}).$mount('#app')

