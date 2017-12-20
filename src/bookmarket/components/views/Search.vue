<template>
    <div class="search">
        <search-header :keyword="keyword"></search-header>
        <router-view></router-view>
    </div>
</template>

<script>
import SearchHeader from './Search/SearchHeader.vue';

export default {
    name: 'Search',
    components: {
        SearchHeader
    },
    data() {
        return {
            keyword: ''
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => vm.keyword = to.params.keyword);
    },
    beforeRouteUpdate(to, from, next) {
        this.keyword = to.params.keyword;
        next()
    }
}
</script>

<style lang="less" scoped>
.search {
    padding-top: 63px;
}
</style>
