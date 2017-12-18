<template>
    <div class="sold-log">
        <date-line :date="date" :sold-count="soldCount"></date-line>
        <book-stack :books="books"></book-stack>
    </div>
</template>

<script>
import DateLine from './DateLine.vue';
import BookStack from '../commons/BookStack.vue';

export default {
    name: 'SoldLog',
    components: {
        DateLine, BookStack
    },
    props: {
        soldLog: { type: Object, required: true }
    },
    computed: {
        // date-line
        date() {
            var date = new Date(this.soldLog.created);
            return {
                year: date.getFullYear(),
                month: date.getMonth() + 1,
                day: date.getDay()
            }
        },
        soldCount() {
            return this.soldLog.soldCount;
        },
        // book-stack
        books() {
            return this.soldLog.userBooks;
        }
    },
}
</script>

<style lang="less" scoped>
.sold-log {
    margin-bottom: 10px;
}
</style>
