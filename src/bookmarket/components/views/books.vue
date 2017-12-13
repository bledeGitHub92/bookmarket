<template>
    <div class="books">
        <book-cover v-bind="bookCover"></book-cover>
        <div class="book-content">
            <div class="book-row">
                <book-seller></book-seller>
            </div>
            <div class="book-row bordered">
                <book-detail></book-detail>
            </div>
            <div class="book-row bordered">
                <book-price></book-price>
            </div>
            <div class="book-row">
                <book-buy></book-buy>
            </div>
            <div class="book-row">
                <book-brief></book-brief>
            </div>
            <div class="book-row">
                <book-related></book-related>
            </div>
        </div>
    </div>
</template>

<script>
import ajax from '../../lib/ajax';
import BookCover from './books/BookCover.vue';
import BookSeller from './books/BookSeller.vue';
import BookDetail from './books/BookDetail.vue';
import BookPrice from './books/BookPrice.vue';
import BookBuy from './books/BookBuy.vue';
import BookBrief from './books/BookBrief.vue';
import BookRelated from './books/BookRelated.vue';

export default {
    name: 'BooksView',
    components: {
        BookCover, BookSeller, BookDetail,
        BookPrice, BookBuy, BookBrief,
        BookRelated
    },
    data() {
        return {
            // BookCover 的数据
            bookCover: {
                title: '',
                subtitle: '',
                images: ''
            }
        }
    },
    props: {
        id: String
    },
    methods: {
        getBookDetail() {
            ajax.get(`/api/books/${this.id}`, 'detail')
                .then(res => {
                    this.bookCover.title = res.title;
                    this.bookCover.subtitle = res.subtitle;
                    this.bookCover.images = res.images;
                });
        },
    },
    beforeRouteEnter(to, from, next) {
        console.log(to);
        next(vm => {
            vm.getBookDetail()
        });
    }
}
</script>

<style lang="less" scoped>
.book-content {
    background-color: #fff;
    padding: 18px 0;
}

.book-row {
    margin: 0 15px;
    padding-bottom: 15px;
    &.bordered {
        border-top: 1px solid #f2f2f2;
        padding-top: 15px;
    }
}
</style>
