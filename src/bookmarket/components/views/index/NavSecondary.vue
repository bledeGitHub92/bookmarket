<template>
    <nav class="nav-secondary">
        <router-link v-for="nav of navList" :key="nav.id" :to="`/categories/${nav.id}`" class="nav-item">
            <span class="nav-text">{{nav.name}}</span>
        </router-link>
    </nav>
</template>

<script>
export default {
    name: 'NavSecondary',
    props: {
        navList: {
            type: Array,
            required: true
        }
    }

}
</script>

<style lang="less" scoped>
.nav-secondary {
    padding: 0 15px;
    display: flex;
    height: 45px;
    border-bottom: 1px solid #f2f2f2;
    justify-content: space-around;
    .nav-item {
        color: #333;
        display: flex;
        justify-content: center;
        &.router-link-active .nav-text {
            color: #18c3aa;
        }
        .nav-text {
            display: flex;
            align-items: center;
        }
    }
}
</style>
