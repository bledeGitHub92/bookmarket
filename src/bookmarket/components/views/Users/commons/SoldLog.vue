<template>
    <div class="date-sold">
        <date-line :date="date" :sold-count="soldCount"></date-line>
        <book-stack></book-stack>
    </div>
</template>

<script>
import DateLine from './DateLine.vue';
import BookStack from './BookStack.vue';

export default {
    name: 'DateSold',
    components: {
        DateLine, BookStack
    },
    props: {
        soldLog: { type: Object, required: true }
    },
    computed: {
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
        }
    }
}
</script>

<style lang="less" scoped>
.date-sold {
    margin-bottom: 10px;
}
</style>
