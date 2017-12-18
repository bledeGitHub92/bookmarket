<template>
    <div class="owning-shelf">
        <div class="owning-content">
            <empty-shelf v-if="isEmptyShelf"></empty-shelf>
            <book-stack :books="books"></book-stack>
            <end-symbol v-if="isAllBook"></end-symbol>
        </div>
    </div>
</template>

<script>
import ajax from '../../../lib/ajax';
import EmptyShelf from './OwningShelf/EmptyShelf.vue';
import BookStack from './commons/BookStack.vue';
import EndSymbol from '../../commons/EndSymbol.vue';

export default {
    name: 'OwningShelf',
    props: ['id'],
    components: {
        EmptyShelf, BookStack, EndSymbol
    },
    data() {
        return {
            start: 0,
            books: [],
            isAllBook: false
        };
    },
    computed: {
        isEmptyShelf() {
            return this.books.length === 0;
        },
    },
    methods: {
        getOwningShelf(isAdd) {
            var start = this.start,
                url = start ? `/api/users/${this.id}/owning-books?start=${start}` : `/api/users/${this.id}/owning-books`;

            ajax.get(url, 'owning')
                .then(res => {
                    if (isAdd) {
                        this.books.push(...res.books);
                    } else {
                        this.books = res.books;
                    }
                    this.start = res.start + res.count;
                    if (res.start >= res.total) {
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
                this.getOwningShelf(true);
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
        next(vm => vm.getOwningShelf());
    },
}
</script>

<style lang="less" scoped>
.owning-shelf {
    padding: 20px;
    .owning-content {
        margin: -10px;
    }
}
</style>