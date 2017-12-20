<template>
    <div class="books">
        <book-cover v-bind="bookCover"></book-cover>
        <div class="book-content">
            <div v-if="isSold" class="book-row">
                <book-seller v-bind="bookSeller" :id="id"></book-seller>
            </div>
            <div :class="[{'bordered':isSold},'book-row']">
                <book-detail v-bind="bookDetail"></book-detail>
            </div>
            <div class="book-row bordered">
                <book-price v-bind="bookPrice"></book-price>
            </div>
            <div class="book-row">
                <book-buy></book-buy>
            </div>
            <div class="book-row">
                <book-brief v-bind="bookBrief"></book-brief>
            </div>
            <div class="book-row">
                <book-related v-bind="bookRelated"></book-related>
            </div>
        </div>
    </div>
</template>

<script>
import ajax from '../../lib/ajax';
import BookCover from './Books/BookCover.vue';
import BookSeller from './Books/BookSeller.vue';
import BookDetail from './Books/BookDetail.vue';
import BookPrice from './Books/BookPrice.vue';
import BookBuy from './Books/BookBuy.vue';
import BookBrief from './Books/BookBrief.vue';
import BookRelated from './Books/BookRelated.vue';

export default {
    name: 'BookView',
    components: {
        BookCover, BookSeller, BookDetail,
        BookPrice, BookBuy, BookBrief,
        BookRelated
    },
    props: {
        id: String
    },
    data() {
        return {
            bookCover: {
                title: '',
                subtitle: '',
                images: ''
            },
            bookSeller: {
                sellerCount: 0,
                latestSellers: []
            },
            bookDetail: {
                author: '',
                publisher: '',
                publishDate: '',
                bingding: '',
                rating: 0
            },
            bookPrice: {
                price: 0,
                originalPrice: 0
            },
            bookBrief: {
                summary: '',
                authorIntro: '',
                catalog: ''
            },
            bookRelated: {
                relatedTags: [],
                relatedBooks: []
            }
        }
    },
    computed: {
        isSold() {
            return this.bookSeller.sellerCount > 0;
        }
    },
    methods: {
        getBookDetail() {
            ajax.get(`/api/books/${this.id}`, 'detail')
                .then(res => {
                    // book-cover
                    this.bookCover.title = res.title;
                    this.bookCover.subtitle = res.subtitle;
                    this.bookCover.images = res.images;
                    // book-seller
                    this.bookSeller.sellerCount = res.sellerCount;
                    this.bookSeller.latestSellers = res.latestSellers;
                    // book-detail
                    this.bookDetail.author = res.author;
                    this.bookDetail.publisher = res.publisher;
                    this.bookDetail.publishDate = res.publishDate;
                    this.bookDetail.bingding = res.bingding;
                    this.bookDetail.rating = res.rating;
                    // book-price
                    this.bookPrice.price = res.price;
                    this.bookPrice.originalPrice = res.originalPrice;
                    // book-brief
                    this.bookBrief.summary = res.summary;
                    this.bookBrief.authorIntro = res.authorIntro;
                    this.bookBrief.catalog = res.catalog;
                    // book-related
                    this.bookRelated.relatedTags = res.relatedTags;
                    this.bookRelated.relatedBooks = res.relatedBooks;
                });
        },
    },
    beforeRouteEnter(to, from, next) {
        console.log('beforeRouteEnter');
        next(vm => vm.getBookDetail());
    },
    beforeRouteUpdate(to, from, next) {
        this.getBookDetail();
        console.log('beforeRouteUpdate');
        next();
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
