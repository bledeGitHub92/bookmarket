<template>
    <div class="index">
        <!-- 搜索框  -->
        <section class="search-bar">
            <input type="text" placeholder="搜索">
            <span class="search-icon">
                <svg width="1.4em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="icon">
                    <circle cx="10.5" cy="10.5" r="7.5"></circle>
                    <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
                </svg>
            </span>
        </section>
        <!-- 书单推荐  -->
        <horizontal-scroll></horizontal-scroll>
        <!-- 导航条容器  -->
        <div class="nav-container" ref="nav-container">
            <div :class="[{'is-fixed':navFixed},'nav-wrapper']">
                <nav-primary @changeNav="changePrimary" :nav-list="categories" :link-active="linkActive"></nav-primary>
                <nav-secondary v-if="subCategoriesState" :nav-list="subCategories"></nav-secondary>
            </div>
            <div :style="{height:navHolderHeight?navHolderHeight+'px':'auto'}" v-show="navFixed" class="nav-holder"></div>
        </div>
        <!-- 书籍列表  -->
        <book-list :book-list="bookList"></book-list>
    </div>
</template>

<script>
import ajax from '../../lib/ajax';
import HorizontalScroll from './index/HorizontalScroll.vue';
import NavPrimary from './index/NavPrimary.vue';
import NavSecondary from './index/NavSecondary.vue';
import BookList from './index/BookList.vue';

export default {
    name: 'IndexView',
    components: {
        HorizontalScroll, NavPrimary, NavSecondary,
        BookList
    },
    props: {
        id: String
    },
    data() {
        return {
            // categories 的参数
            linkActive: '',
            // 首页导航栏数据
            categories: [
                {
                    id: '76343795494420782',
                    name: '文化',
                    subCategories: [
                        { id: '76343795494420782', name: '文学' },
                        { id: '76343796392004130', name: '社科' },
                        { id: '76343797138590270', name: '艺术' },
                        { id: '76343797587379753', name: '心理' },
                    ]
                },
                {
                    id: '76343797952285675',
                    name: '工作',
                    subCategories: [
                        { id: '76343797952285675', name: '商业' },
                        { id: '76343798069726178', name: '管理' },
                        { id: '76343798308800311', name: '技能' },
                        { id: '76343798526903665', name: '编程' },
                        { id: '76343798820507050', name: '金融' },
                    ]
                },
                {
                    id: '76343799101522341',
                    name: '生活',
                    subCategories: [
                        { id: '76343799101522341', name: '旅行' },
                        { id: '76343799286072315', name: '居家' },
                        { id: '76343799458038655', name: '美食' },
                        { id: '76343799558704248', name: '健美' },
                        { id: '76343799667754416', name: '育儿' },
                    ]
                },
                {
                    id: '74509287543540328',
                    name: '外文',
                    subCategories: [
                        { id: '74509287543540328', name: '英语' },
                        { id: '74509287556121722', name: '日语' },
                        { id: '74509287577093414', name: '繁体中文' },
                        { id: '76343799902636452', name: '语言学习' },
                    ]
                }
            ],
            // 书单
            bookList: [],
            // 导航的 position 是否是 fixed
            navFixed: false,
            navHolderHeight: 0,
        }
    },
    computed: {
        // 子组件 nav-secondary 的 props
        subCategories() {
            var [{ subCategories } = { subCategories: [] }] = this.categories.filter(primary => primary.id === this.linkActive);
            return subCategories;
        },
        // 子组件 nav-secondary 的显隐
        subCategoriesState() {
            return this.subCategories.length > 0;
        }
    },
    methods: {
        // 初始化 linkActive
        initLinkActive() {
            var id = this.id;
            var [{ id: param } = { id: '' }] = this.categories.filter(
                primary => primary.id === id || primary.subCategories.some(secondary => secondary.id === id)
            );
            this.linkActive = param;
        },
        // 子组件 nav-primary 的点击事件
        changePrimary(navId) {
            var scrollTop = this.$refs['nav-container'].offsetTop;
            if (document.documentElement.scrollTop > scrollTop) {
                document.documentElement.scrollTop = scrollTop;
            }
            if (document.body.scrollTop > scrollTop) {
                document.body.scrollTop = scrollTop;
            }
            this.linkActive = navId;
        },
        // 获取书单
        getBooks(isAdd) {
            var id = this.id,
                url = id ? `/api/categories/${id}/books` : '/api/home_books';

            ajax.get(url, 'books')
                .then(res => {
                    if (isAdd) {
                        this.bookList.push(...res);
                    } else {
                        this.bookList = res
                    }
                });
        },
        scrollListener() {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
                viewportHeight = document.documentElement.clientHeight,
                browserHeight = document.documentElement.scrollHeight,
                refElem = this.$refs['nav-container'],
                refTop = refElem.offsetTop,
                refHeight = refElem.offsetHeight;

            // 定位导航条
            if (!this.navFixed && scrollTop >= refTop) {
                this.navFixed = true;
                this.navHolderHeight = refHeight;
            } else if (this.navFixed && scrollTop < refTop) {
                this.navFixed = false;
            }
            // 滑倒底部获取数据
            if (viewportHeight + scrollTop === browserHeight) {
                console.log('loaded');
                this.getBooks(true);
            }
        }
    },
    mounted() {
        this.initLinkActive();
        document.addEventListener('scroll', this.scrollListener);
    },
    beforeDestroy() {
        document.removeEventListener('scroll', this.scrollListener);
    },
    beforeRouteEnter(to, from, next) {
        next(vm => vm.getBooks());
    },
    beforeRouteUpdate(to, from, next) {
        this.getBooks();
        next();
    },
}
</script>

<style lang="less" scoped>
.index {
    background-color: #fff;
}

.search-bar {
    position: relative;
    top: 0;
    left: 0;
    padding: 16px 13px;

    input {
        width: 100%;
        height: 35px;
        border-radius: 171px;
        background-color: #f2f2f2;
        border: none;
        padding: 6px 16px;
    }

    .search-icon {
        color: #aaa;
        position: absolute;
        padding: 6px;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
    }
}



.nav-container {
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
