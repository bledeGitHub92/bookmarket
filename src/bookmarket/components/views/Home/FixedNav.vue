<template>
    <div class="fixed-nav">
        <div :class="[{'is-fixed':navFixed},'nav-wrapper']">
            <nav-bar :primary-list="categories" :link-active="linkActive"></nav-bar>
        </div>
        <div :style="{height:navHolderHeight?navHolderHeight+'px':'auto'}" v-show="navFixed" class="nav-holder"></div>
    </div>
</template>

<script>
import ajax from '../../../lib/ajax';
import NavBar from './FixedNav/NavBar.vue';

export default {
    name: 'FixedNav',
    components: {
        NavBar
    },
    data() {
        return {
            // categories 的参数
            linkActive: '',
            // 首页导航栏数据
            categories: [],
            // 导航的 position 是否是 fixed
            navFixed: false,
            navHolderHeight: 0,
        }
    },
    watch: {
        $route({ params: { id = '' } }) {
            var refElem = this.$el,
                refTop = refElem.offsetTop,
                scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollTop > refTop) {
                document.documentElement.scrollTop = refTop;
                document.body.scrollTop = refTop;
            }
            if (id === '' || this.categories.some(primary => primary.id === id)) {
                this.linkActive = id;
            }
        }
    },
    methods: {
        // 获取分类
        getCategories() {
            ajax.get('/api/categories', 'categories')
                .then(res => {
                    this.categories = res;
                });
        },
        // 初始化 linkActive
        initLinkActive() {
            var id = this.$route.params.id;
            var [{ id: param } = { id: '' }] = this.categories.filter(
                primary => primary.id === id || primary.subCategories.some(secondary => secondary.id === id)
            );
            this.linkActive = param;
        },
        // 定位导航条
        fixNav() {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
                refElem = this.$el,
                refTop = refElem.offsetTop,
                refHeight = refElem.offsetHeight;

            if (!this.navFixed && scrollTop > refTop) {
                this.navFixed = true;
                this.navHolderHeight = refHeight;
            } else if (this.navFixed && scrollTop <= refTop) {
                this.navFixed = false;
            }
        }
    },
    mounted() {
        this.getCategories();
        this.initLinkActive();
        document.addEventListener('scroll', this.fixNav, false);
    },
    beforeDestroy() {
        document.removeEventListener('scroll', this.fixNav, false);
    },
}
</script>

<style lang="less" scoped>
.fixed-nav {
    .nav-wrapper {
        &.is-fixed {
            max-width: 600px;
            position: fixed;
            top: 0;
            width: 100%;
            background-color: #fff;
            z-index: 9;
        }
    }
}
</style>
