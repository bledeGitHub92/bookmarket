<template>
    <div class="sellers-wrapper">
         <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'Sellers',
}
</script>

<style lang="less" scoped>
.sellers-wrapper {
    min-height: 100vh;
    padding-bottom: 50px;
    background-color: #fff;
}
</style>
