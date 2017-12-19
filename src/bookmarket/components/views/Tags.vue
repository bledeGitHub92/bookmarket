<template>
    <div class="tags">
        <tag-meta v-bind="tagInfo"></tag-meta>
        <book-list v-bind="bookData" @getBooks="getBooks"></book-list>
    </div>
</template>

<script>
import ajax from '../../lib/ajax';
import TagMeta from './Tags/TagMeta.vue';
import BookList from '../commons/BookList.vue';

export default {
    name: 'Tags',
    components: {
        TagMeta, BookList
    },
    props: {
        id: String
    },
    data() {
        return {
            tagInfo: {
                id: '',
                name: '',
                bookCount: 0
            },
            start: 0,
            bookData: {
                scrollSwitch: true,
                bookList: []
            }
        }
    },
    methods: {
        getTagInfo() {
            ajax.get(`/api/tags/${this.id}`, 'tag')
                .then(res => {
                    this.tagInfo = res;
                });
        },
        getBooks(isAdd) {
            var start = this.start,
                url = `/api/tags/${this.id}/books`;

            if (start) { url = `${url}?start=${start}`; }

            ajax.get(url, 'books')
                .then(({ books, start, count, total }) => {
                    if (isAdd) {
                        this.bookData.bookList.push(...books);
                    } else {
                        this.bookData.bookList = books;
                    }
                    this.start = start + count;
                    if (start >= total) {
                        this.bookData.scrollSwitch = false;
                    }
                });
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.getTagInfo();
            vm.getBooks();
        });
    },
}
</script>

<style lang="less" scoped>
.tags {
    min-height: 100vh;
    background-color: #fff;
}
</style>
