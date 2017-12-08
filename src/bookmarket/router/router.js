import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../components/views/index.vue';
import ViewNav from '../components/commons/ViewNav.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/', components: {
            default: index,
            ViewNav
        }
    },
    {
        path: '/categories/:id',
        components: {
            default: index,
            ViewNav
        },
        props: { default: true }
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;