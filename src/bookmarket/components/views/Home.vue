<template>
    <div class="home">
        <!-- 搜索框  -->
        <search-bar></search-bar>
        <!-- 书单推荐  -->
        <horizontal-scroll></horizontal-scroll>
        <!-- 导航条容器  -->
        <fixed-nav></fixed-nav>
        <!-- 书籍列表  -->
        <book-list v-bind="bookData" @getBooks="getBooks"></book-list>
    </div>
</template>

<script>
import ajax from '../../lib/ajax';
import SearchBar from './Home/SearchBar.vue';
import BookList from '../commons/BookList.vue';
import HorizontalScroll from './Home/HorizontalScroll.vue';
import FixedNav from './Home/FixedNav.vue';

export default {
    name: 'IndexView',
    components: {
        SearchBar, BookList, HorizontalScroll, FixedNav
    },
    props: {
        id: String
    },
    data() {
        return {
            start: 0,
            // 书单
            bookData: {
                scrollSwitch: true,
                bookList: [],
            },
        }
    },
    methods: {
        // 获取书单
        getBooks(isAdd) {
            var id = this.id,
                start = this.start,
                url = id ? `/api/categories/${this.id}/books` : '/api/home_books';

            if (start) { url = `${url}?start=${start}`; }

            ajax.get(url, 'books')
                .then(({ books, start, count, total }) => {
                    if (isAdd) {
                        this.bookData.bookList.push(...books);
                    } else {
                        this.bookData.bookList = books
                    }
                    this.start = start + count;
                    console.log(start, total);
                    if (start >= total) {
                        this.bookData.scrollSwitch = false;
                    }
                });
        },
        resetStart() {
            this.start = 0;
            this.bookData.scrollSwitch = true;
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.resetStart();
            vm.getBooks()
        });
    },
    beforeRouteUpdate(to, from, next) {
        this.resetStart();
        this.getBooks();
        next();
    },
}
</script>

<style lang="less" scoped>
.home {
    background-color: #fff;
    min-height: 100vh;
}
</style>