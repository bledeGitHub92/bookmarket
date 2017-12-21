<template>
    <div class="sold-log-wrapper">
        <div v-for="log of dataList" :key="log.created" class="sold-log">
            <date-line :created="log.created" :sold-count="log.soldCount"></date-line>
            <book-stack :data-list="log.userBooks||[]"></book-stack>
        </div>
    </div>
</template>

<script>
import DateLine from './SoldLog/DateLine.vue';
import BookStack from './BookStack.vue';

export default {
    name: 'SoldLog',
    components: {
        DateLine, BookStack
    },
    props: {
        dataList: { type: Array, required: true }
    },
}
</script>

<style lang="less" scoped>
.sold-log {
    margin-bottom: 10px;
}
</style>
