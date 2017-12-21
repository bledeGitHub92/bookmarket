import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/views/Home.vue';
import GetList from '../components/commons/GetList.vue';
import Books from '../components/views/Books.vue';
import CollectionMenu from '../components/views/CollectionMenu.vue';
import Collection from '../components/views/Collection.vue';
import Users from '../components/views/Users.vue';
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
    children: [{
        path: '',
        component: GetList,
        props: { url: '/api/home_books', widget: 'bookList' }
    }, {
        path: 'categories/:id',
        component: GetList,
        props: ({ params: { id } }) => ({ url: `/api/categories/${id}/books`, widget: 'bookList' })
    }]
}, {
    path: '/collections',
    components: {
        default: CollectionMenu,
        ViewNav
    },
}, {
    path: '/collections',
    components: {
        default: Collection,
        ViewNav
    },
    children: [{
        path: ':id',
        component: GetList,
        props: ({ params: { id } }) => ({ url: `/api/collections/${id}/books`, widget: 'bookList' })
    }]
}, {
    path: '/users/:id',
    components: {
        default: Users,
        ViewNav
    },
    props: { default: true },
    children: [{
        path: 'owning-bookshelf',
        component: GetList,
        props: ({ params: { id } }) => ({ url: `/api/users/${id}/owning-books`, widget: 'bookStack' })
    }, {
        path: 'sold-bookshelf',
        component: GetList,
        props: ({ params: { id } }) => ({ url: `/api/users/${id}/sold-books`, widget: 'soldLog' })
    }]
}, {
    path: '/books/:id',
    components: {
        default: Books,
        ViewNav
    },
    props: { default: true }
}, {
    path: '/tags',
    components: {
        default: Tags,
        ViewNav
    },
    children: [{
        path: ':id',
        component: GetList,
        props: ({ params: { id } }) => ({ url: `/api/tags/${id}/books`, widget: 'bookList' })
    }],
    props: { default: true }
}, {
    path: '/books/:id/users',
    components: {
        default: Sellers,
        ViewNav
    },
    children: [{
        name: 'sellerView',
        path: '',
        component: GetList,
        props: ({ params: { id } }) => ({ url: `/api/books/${id}/sellers`, widget: 'sellerList' })
    }],
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