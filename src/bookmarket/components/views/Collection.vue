<template>
    <div class="collection">
        <collection-cover></collection-cover>
        <router-view></router-view>
    </div>
</template>

<script>
import CollectionCover from './Collection/CollectionCover.vue';

export default {
    name: 'Collection',
    components: {
        CollectionCover
    }
}
</script>

<style lang="less" scoped>
.collection {
    min-height: 100vh;
    padding-bottom: 50px;
    background-color: #fff;
}
</style>
