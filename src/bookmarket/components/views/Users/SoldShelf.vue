<template>
    <div class="sold-shelf">
        <div class="sold-content">
            <sold-log v-for="log of soldBooks" :key="log.created" :sold-log="log"></sold-log>
        </div>
        <end-symbol v-if="isAllBook"></end-symbol>
    </div>
</template>

<script>
import ajax from '../../../lib/ajax';
import SoldLog from './SoldShelf/SoldLog.vue';
import EndSymbol from '../../commons/EndSymbol.vue';

export default {
    name: 'SoldShelf',
    props: ['id'],
    data() {
        return {
            start: 0,
            soldBooks: [],
            prevCreated: '',
            isAllBook: false
        }
    },
    computed: {
        lastBooks() {
            return this.soldBooks[this.soldBooks.length - 1].userBooks;
        }
    },
    components: {
        SoldLog, EndSymbol
    },
    methods: {
        getSoldShelf(isAdd) {
            var start = this.start,
                id = this.id,
                url = start ? `/api/users/${id}/sold-books?start=${start}` : `/api/users/${id}/sold-books`;

            ajax.get(url, 'sold')
                .then(({ books, start, count, total }) => {

                    if (isAdd) {
                        if (books[0].created === this.prevCreated) {
                            this.lastBooks.push(...books[0].userBooks);
                            this.soldBooks.push(...books.slice(1));
                        } else {
                            this.soldBooks.push(...books);
                        }
                    } else {
                        this.soldBooks = books;
                        this.prevCreated = books[books.length - 1].prevCreated;
                    }
                    this.start = start + count;
                    if (start >= total) {
                        this.isAllBook = true;
                        document.removeEventListener('scroll', this.scrollLoad, false);
                    }
                });
        },
        scrollLoad() {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
                viewportHeight = document.documentElement.clientHeight,
                browserHeight = document.documentElement.scrollHeight;

            if ((browserHeight - viewportHeight - scrollTop) <= 120) {
                this.getSoldShelf(true);
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
        console.log('sold enter');
        next(vm => vm.getSoldShelf());
    },
}
</script>

<style lang="less" scoped>
.sold-shelf {
    padding: 20px;
    .sold-content {
        margin: -10px;
    }
}
</style>
