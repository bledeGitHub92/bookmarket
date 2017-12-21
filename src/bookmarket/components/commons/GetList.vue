<template>
    <div class="get-books">
        <scroll-load @getLimit="addList" :scroll-switch="scrollSwitch">
            <component :is="widget" :data-list="dataList" />
        </scroll-load>
        <end-symbol v-if="!scrollSwitch"></end-symbol>
    </div>
</template>

<script>
import ajax from '../../lib/ajax';
import ScrollLoad from './ScrollLoad.vue';
import EndSymbol from './EndSymbol.vue';
import BookList from './GetList/BookList.vue';
import BookStack from './GetList/BookStack.vue';
import SoldLog from './GetList/SoldLog.vue';
import SellerList from './GetList/SellerList.vue';

export default {
    name: 'GetList',
    components: {
        ScrollLoad, EndSymbol,
        BookList, BookStack, SellerList, SoldLog
    },
    props: {
        url: { type: String, required: true },
        widget: { type: String, required: true },
    },
    data() {
        return {
            start: 0,
            // 书单
            scrollSwitch: true,
            dataList: [],
        }
    },
    methods: {
        test() {
            console.log('scroll-load');
        },
        // 初始化书单
        initList() {
            ajax.get(this.url)
                .then(res => {
                    var { start, count, total, result } = JSON.parse(res);
                    this.dataList = result;
                    this.calcRest(start, count, total);
                });
        },
        // 追加书单
        addList() {
            ajax.get(`${this.url}?start=${this.start}`)
                .then(res => {
                    var { start, count, total, result } = JSON.parse(res);
                    this.dataList.push(...result);
                    this.calcRest(start, count, total);
                });
        },
        // 是否还有数据
        calcRest(start, count, total) {
            this.start = start + count;
            if (start >= total) {
                this.scrollSwitch = false;
            }
        },
        reset() {
            this.start = 0;
            this.scrollSwitch = true;
        }
    },
    beforeRouteEnter(to, from, next) {
        console.log('getBooks enter')
        next(vm => {
            vm.reset();
            vm.initList()
        });
    },
    beforeRouteUpdate(to, from, next) {
        console.log('getBooks update')
        this.reset();
        this.initList();
        next();
    },
}
</script>

<style lang="less" scoped>

</style>
