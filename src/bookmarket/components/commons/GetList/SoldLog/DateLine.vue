<template>
    <div class="date-line">
        <div class="line"></div>
        <span class="text">
            <span class="year" v-if="isThisYear">{{year}} 年</span>
            {{month}} 月 {{day}} 日 卖了 {{soldCount}} 本书
        </span>
        <div class="line"></div>
    </div>
</template>

<script>
export default {
    name: 'DateLine',
    props: ['created', 'soldCount'],
    computed: {
        date() {
            var date = new Date(this.created);
            return {
                year: date.getFullYear(),
                month: date.getMonth() + 1,
                day: date.getDay()
            }
        },
        isThisYear() {
            return new Date().getFullYear() > this.year;
        },
        year() {
            return this.date.year;
        },
        month() {
            return this.date.month;
        },
        day() {
            return this.date.day;
        }
    }
}
</script>

<style lang="less" scoped>
.date-line {
    height: 40px;
    display: flex;
    align-items: center;
    .line {
        flex-grow: 1;
        border-top: 1px solid #f2f2f2;
    }
    .text {
        font-size: 15px;
        margin: 0 10px;
    }
}
</style>
