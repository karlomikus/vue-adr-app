import Vue from 'Vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Login from './pages/Login.vue';
import Categories from './pages/Categories.vue';

// Vue Plugins
Vue.use(VueResource);
Vue.use(VueRouter);

// Initiate router
let App = Vue.extend({
    events: {
        signedIn(token) {
            console.log('User logged in!');
            localStorage.setItem('token', token);
        }
    },
    data() {
        return {
            'token': null,
            'authenticated': false
        };
    }
});
let router = new VueRouter();

// Map routes
router.map({
    '/': { component: Login },
    '/categories': { component: Categories }
});

// Run application
router.start(App, '#app');