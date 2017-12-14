<template>
    <div class="sold-shelf">
        <div class="sold-content">
            <sold-log v-for="log of soldBooks" :key="log.created" :sold-log="log"></sold-log>
        </div>
        <end-symbol></end-symbol>
    </div>
</template>

<script>
import ajax from '../../../lib/ajax';
import SoldLog from './commons/SoldLog.vue';
import EndSymbol from '../../commons/EndSymbol.vue';

export default {
    name: 'SoldShelf',
    props: ['id'],
    data() {
        return {
            soldBooks: []
        }
    },
    components: {
        SoldLog, EndSymbol
    },
    methods: {
        getSoldShelf() {
            ajax.get(`/api/users/${this.id}/sold-books`, 'sold')
                .then(res => {
                    this.soldBooks = res;
                });
        }
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
