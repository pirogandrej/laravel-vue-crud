require('./bootstrap');

window.Vue = require('vue');
window.VueRouter = require('vue-router').default;
window.Vuex = require('vuex');

Vue.use(VueRouter);
Vue.use(Vuex);

const AllContacts = require('./components/AllContacts.vue');
const SingleContact = require('./components/SingleContact.vue');
const EditContact = require('./components/EditContact.vue');

import StoreData from './store.js';

const store = new Vuex.Store(StoreData);

const routes = [
    {
        name: 'all-contact',
        path: '/',
        component: AllContacts
    },
    {
        name: 'single-contact',
        path: '/contact/:id',
        component: SingleContact
    },
    {
        name: 'edit-contact',
        path: '/editcontact/:id',
        component: EditContact
    }
];

const router = new VueRouter({
    routes: routes
});

const app = new Vue({
    router,
    store
}).$mount('#app');
