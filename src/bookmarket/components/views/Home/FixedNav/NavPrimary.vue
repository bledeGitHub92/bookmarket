<template>
    <nav class="nav-primary">
        <router-link class="nav-item" to="/" exact>
            <span class="nav-text">新上架</span>
        </router-link>
        <router-link v-for="nav of navList" :class="[{'router-link-active':linkActive===nav.id},'nav-item']" :key="nav.id" :to="`/categories/${nav.id}`">
            <span class="nav-text ">{{nav.name}}</span>
        </router-link>
    </nav>
</template>

<script>
export default {
    name: 'NavPrimary',
    props: {
        navList: {
            type: Array,
            required: true
        },
        linkActive: {
            type: String,
            required: true
        }
    },
    methods: {
    }

}
</script>

<style lang="less" scoped>
.nav-primary {
    height: 50px;
    padding: 0 15px;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #f2f2f2;
    .nav-item {
        color: #333;
        font-size: 16px;
        flex: 1 1 auto;
        display: flex;
        justify-content: center;
        &.router-link-active .nav-text {
            color: #18c3aa;
            &::after {
                content: ' ';
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                height: 3px;
                background-color: #18c3aa;
            }
        }
        .nav-text {
            display: flex;
            align-items: center;
            position: relative;
            top: 0;
            left: 0;
        }
    }
}
</style>