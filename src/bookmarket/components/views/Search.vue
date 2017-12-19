<template>
    <div class="search">
        <search-header></search-header>
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
}
</script>

<style lang="less" scoped>
.search {
    padding-top: 63px;
}
</style>
