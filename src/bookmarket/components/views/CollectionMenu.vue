<template>
    <div class="collection-menu">
        <header>
            <router-link v-for="item of collections" :key="item.id" :to="`/collections/${item.id}`" class="collection" :style="{'background':`url(${item.image})`}">
                <h2>{{item.name}}</h2>
                <div class="meta">
                    <span class="count">{{item.availableCount}}</span>
                    在售
                </div>
            </router-link>
        </header>
        <footer>
            <div class="line"></div>
            <svg class="end-sybol" width="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-jsx="2026822261">
                <rect x="4" y="4" width="16" height="16" data-jsx="2026822261"></rect>
            </svg>
            <div class="line"></div>
        </footer>
    </div>
</template>

<script>
import ajax from '../../lib/ajax';

export default {
    name: 'CollectionMenu',
    data() {
        return {
            collections: []
        }
    },
    methods: {
        getCollections() {
            ajax.get('/api/collections', 'collections')
                .then(({ data }) => {
                    this.collections = data;
                    console.log(data);
                });
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => vm.getCollections())
    }
}
</script>

<style lang="less" scoped>
.collection-menu {
    padding: 14px;
    padding-bottom: 0;
    .collection {
        border-radius: 5px;
        margin-top: 14px;
        padding: 16px 20px;
        display: flex;
        align-items: center;
        background-size: cover;
        background-position: center;
        &:first-child {
            margin-top: 0;
        }
        h2 {
            flex-grow: 1;
            color: #fff;
            font-weight: 400;
            font-size: 22px;
            margin-right: 18px;
        }
        .meta {
            color: #fff;
            min-width: 68px;
            min-height: 68px;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 100%;
            border: 1px solid #aaa;
            .count {
                font-size: 36px;
                letter-spacing: 1.5px;
            }
        }
    }
    footer {
        color: rgba(0, 0, 0, .1);
        padding: 30px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        .line {
            flex-basis: 42px;
            border-top: 1px solid currentColor;
        }
        .end-sybol {
            transform: rotate(45deg);
            margin: 0 9px;
        }
    }
}
</style>
