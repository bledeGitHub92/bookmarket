<template>
    <div class="home">
        <!-- 搜索框  -->
        <search-bar></search-bar>
        <!-- 书单推荐  -->
        <horizontal-scroll></horizontal-scroll>
        <!-- 导航条容器  -->
        <fixed-nav ref="fixed-nav"></fixed-nav>
        <!-- 书籍列表  -->
        <router-view></router-view>
    </div>
</template>

<script>
import SearchBar from './Home/SearchBar.vue';
import HorizontalScroll from './Home/HorizontalScroll.vue';
import FixedNav from './Home/FixedNav.vue';

export default {
    name: 'IndexView',
    components: {
        SearchBar, HorizontalScroll, FixedNav
    },
}
</script>

<style lang="less" scoped>
.home {
    background-color: #fff;
    min-height: 100vh;
    padding-bottom: 50px;
}
</style>