let Vue = require('vue');
let VueResource = require('vue-resource');
let VueRouter = require('vue-router');

// Vue Plugins
Vue.use(VueResource);
Vue.use(VueRouter);

// Components
import Login from './pages/Login.vue';
import Categories from './pages/Categories.vue';

// Initiate router
let App = Vue.extend({});
let router = new VueRouter();

// Map routes
router.map({
    '/': { component: Login },
    '/categories': { component: Categories }
});

// Run application
router.start(App, '#app');