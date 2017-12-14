<template>
    <div class="collection">
        <collection-cover></collection-cover>
        <book-list :book-list="bookList" @getBooks="getBooks"></book-list>
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
    props: ['id'],
    data() {
        return {
            bookList: []
        }
    },
    methods: {
        // 获取书单
        getBooks(isAdd) {
            ajax.get(`/api/collections/${this.id}/books`, 'books')
                .then(res => {
                    if (isAdd) {
                        this.bookList.push(...res);
                    } else {
                        this.bookList = res
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
</style>
