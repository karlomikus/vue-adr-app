import Vue from 'Vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Login from './pages/Login.vue';
import Projects from './pages/Projects.vue';
import Project from './pages/Project.vue';

// Vue Plugins
Vue.use(VueResource);
Vue.use(VueRouter);

// Initiate router
let App = Vue.extend({
    ready() {
        let localToken = localStorage.getItem('token');
        if (localToken) {
            this.$route.router.go('/projects');
        }
    },
    events: {
        signedIn(token) {
            console.log('User logged in!');
            this.token = token;
            this.authenticated = true;
            localStorage.setItem('token', token);
        }
    },
    data() {
        return {
            token: null,
            authenticated: false
        };
    }
});
let router = new VueRouter();

// Map routes
router.map({
    '/': { component: Login },
    '/projects': { component: Projects },
    '/project/:id': { component: Project }
});

// Run application
router.start(App, '#app');