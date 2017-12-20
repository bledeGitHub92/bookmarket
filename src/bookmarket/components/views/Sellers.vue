<template>
    <div class="sellers-wrapper">
        <router-link v-for="seller of sellers" :key="seller.id" class="seller" :to="`/users/${seller.id}/sold-bookshelf`">
            <figure class="avatar"><img :src="seller.avatar"></figure>
            <span class="name">{{seller.name}}</span>
            <span class="sold-book">卖过 {{seller.soldBookCount}} 本
                <svg viewBox="0 0 24 24" fill="none" stroke="rgb(210, 210, 210)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="icon">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </span>
        </router-link>
         <end-symbol v-if="!scrollSwitch"></end-symbol> 
    </div>
</template>

<script>
import ajax from '../../lib/ajax';
import EndSymbol from '../commons/EndSymbol.vue';

export default {
    name: 'Sellers',
    components: {
        EndSymbol
    },
    data() {
        return {
            start: 0,
            scrollSwitch: true,
            sellers: []
        }
    },
    props: {
        id: String
    },
    methods: {
        getSellers(isAdd) {
            var id = this.id,
                start = this.start,
                url = `/api/books/${id}/sellers`;

            if (start) { url = `${url}?start=${start}`; }

            ajax.get(url, 'sellers')
                .then(({ sellers, start, count, total }) => {
                    if (isAdd) {
                        this.sellers.push(...sellers);
                    } else {
                        this.sellers = sellers;
                    }
                    this.start = start + count;
                    if (start >= total) {
                        this.scrollSwitch = false;
                    }
                });
        },
        scrollLoad() {
            if (this.scrollSwitch) {
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
                    viewportHeight = document.documentElement.clientHeight,
                    browserHeight = document.documentElement.scrollHeight;

                if ((browserHeight - viewportHeight - scrollTop) <= 120) {
                    this.getSellers(true);
                }
            }
        }
    },
    mounted() {
        document.addEventListener('scroll', this.scrollLoad, false);
    },
    beforeDestroy() {
        document.removeEventListener('scroll', this.scrollLoad, false);
    },
    beforeRouteEnter(to, from, next) {
        next(vm => vm.getSellers())
    }
}
</script>

<style lang="less" scoped>
.sellers-wrapper {
    min-height: 100vh;
    padding-bottom: 50px;
    background-color: #fff;
    .seller {
        padding: 15px;
        display: flex;
        color: #333;
        border-bottom: 1px solid #f2f2f2;
        align-items: center;
        .avatar {
            height: 40px;
            width: 40px;
            margin-right: 10px;
            border-radius: 99px;
            overflow: hidden;
            img {
                width: 100%;
                vertical-align: top;
            }
        }
        .name {
            flex-grow: 1;
        }
        .sold-book {
            color: #aaa;
        }
    }
}
</style>
