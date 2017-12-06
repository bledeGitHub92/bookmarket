import Vue from 'vue';
import BookMarket from './bookmarket.vue';
// import initStore from './store/store';
// import router from './router/router';
// import { sync } from 'vuex-router-sync';

window.addEventListener('load', () => {
    // initStore.then(store => {
    // document.body.removeChild(document.querySelector('.loading'));
    // sync(store, router);

    new Vue({
        el: 'book-market',
        // store,
        // router,
        components: {
            BookMarket
        }
    });

    // });
}, false);