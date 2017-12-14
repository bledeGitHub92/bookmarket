import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/views/Home.vue';
import Books from '../components/views/Books.vue';
import CollectionMenu from '../components/views/CollectionMenu.vue';
import Collection from '../components/views/Collection.vue';
import Users from '../components/views/Users.vue';
import OwningShelf from '../components/views/Users/OwningShelf.vue';
import SoldShelf from '../components/views/Users/SoldShelf.vue';
import ViewNav from '../components/commons/ViewNav.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    components: {
        default: Home,
        ViewNav
    }
}, {
    path: '/categories/:id',
    components: {
        default: Home,
        ViewNav
    },
    props: { default: true }
}, {
    path: '/collections',
    components: {
        default: CollectionMenu,
        ViewNav
    },
}, {
    path: '/collections/:id',
    components: {
        default: Collection,
        ViewNav
    },
    props: { default: true }
}, {
    path: '/users/:id',
    components: {
        default: Users,
        ViewNav
    },
    props: { default: true },
    children: [{
        path: 'owning-bookshelf',
        component: OwningShelf,
        props: true
    }, {
        path: 'sold-bookshelf',
        component: SoldShelf,
        props: true
    }]
}, {
    path: '/books/:id',
    components: {
        default: Books,
        ViewNav
    },
    props: { default: true }
},]

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;