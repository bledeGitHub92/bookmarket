<template>
    <div class="collection">
        <collection-cover></collection-cover>
        <book-list v-bind="bookData" @getBooks="getBooks"></book-list>
    </div>
</template>

<script>
import ajax from '../../lib/ajax';
import CollectionCover from './Collection/CollectionCover.vue';
import BookList from '../commons/BookList.vue';

export default {
    name: 'Collection',
    components: {
        CollectionCover, BookList
    },
    props: {
        id: String
    },
    data() {
        return {
            start: 0,
            bookData: {
                scrollSwitch: true,
                bookList: []
            }
        }
    },
    methods: {
        // 获取书单
        getBooks(isAdd) {
            ajax.get(`/api/collections/${this.id}/books`, 'books')
                .then(({ books, start, count, total }) => {
                    if (isAdd) {
                        this.bookData.bookList.push(...books);
                    } else {
                        this.bookData.bookList = books
                    }
                    if (start >= total) {
                        this.bookData.scrollSwitch = false;
                    }
                });
        },
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
.collection {
    min-height: 100vh;
    padding-bottom: 50px;
    background-color: #fff;
}
</style>
