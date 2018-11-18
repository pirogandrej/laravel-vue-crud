require('./bootstrap');
window.Vue = require('vue');
window.Vuex = require('vuex');
import VueRouter from 'vue-router';
import AllContacts from './components/AllContacts.vue';
import SingleContact from './components/SingleContact.vue';
import EditContact from './components/EditContact.vue';
import StoreData from './store.js';

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store(StoreData);

const routes = [
    { path: '/', component: AllContacts },
    { path: '/contact/:id', component: SingleContact, name: 'single-contact' },
    { path: '/editcontact/:id', component: EditContact, name: 'edit-contact' }
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router,
    store
}).$mount('#app');
