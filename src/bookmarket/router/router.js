import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/views/Home.vue';
import Books from '../components/views/Books.vue';
import CollectionMenu from '../components/views/CollectionMenu.vue';
import Collection from '../components/views/Collection.vue';
import Users from '../components/views/Users.vue';
import OwningShelf from '../components/views/Users/OwningShelf.vue';
import SoldShelf from '../components/views/Users/SoldShelf.vue';
import Tags from '../components/views/Tags.vue';
import Sellers from '../components/views/Sellers.vue';
import Search from '../components/views/Search.vue';
import SearchHint from '../components/views/Search/router/SearchHint.vue';
import SearchResult from '../components/views/Search/router/SearchResult.vue';
import ViewNav from '../components/commons/ViewNav.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    components: {
        default: Home,
        ViewNav
    },
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
}, {
    path: '/tags/:id',
    components: {
        default: Tags,
        ViewNav
    },
    props: { default: true }
}, {
    name: 'sellerView',
    path: '/books/:id/users',
    components: {
        default: Sellers,
        ViewNav
    },
    props: { default: true }
}, {
    path: '/search',
    component: Search,
    children: [{
        path: '',
        component: SearchHint
    }, {
        path: ':keyword',
        component: SearchResult,
        props: true
    }]
}]

const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (to.path.includes('/categories') || from.path.includes('/categories')) {
            return false;
        } else {
            return savedPosition || { x: 0, y: 0 };
        }
    },
    routes,
});

export default router;