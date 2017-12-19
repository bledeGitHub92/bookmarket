<template>
    <div class="search-hint">
        <h2>你可以试试搜</h2>
        <div class="search-labels">
            <span v-for="label of labels" :key="label" class="label">{{label}}</span>
        </div>
    </div>
</template>

<script>
import ajax from '../../../../lib/ajax';

export default {
    name: 'SearchHint',
    data() {
        return {
            labels: []
        }
    },
    methods: {
        getLabels() {
            ajax.get('/api/search/recommendations', 'labels')
                .then(res => {
                    this.labels = res;
                });
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => vm.getLabels());
    }
}
</script>

<style lang="less" scoped>
.search-hint {
    margin-top: 16px;
    padding: 15px;
    background-color: #fff;
    h2 {
        color: #aaa;
        font-size: 13px;
        margin-bottom: 12px;
        font-weight: normal;
    }
    .search-labels {
        margin: -5px;
        .label {
            color: #666;
            display: inline-flex;
            align-items: center;
            margin: 5px;
            height: 30px;
            padding: 0 9px;
            font-size: 15px;
            border: 1px solid #f2f2f2;
            border-radius: 5px;
        }
    }
}
</style>
