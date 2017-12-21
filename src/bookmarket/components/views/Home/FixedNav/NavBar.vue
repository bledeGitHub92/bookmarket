<template>
    <div class="nav-wrapper">
        <nav class="nav-primary">
            <router-link class="nav-item" to="/" exact>
                <span class="nav-text">新上架</span>
            </router-link>
            <router-link v-for="nav of primaryList" :key="nav.id" :to="`/categories/${nav.id}`" :class="[{'router-link-active':linkActive===nav.id},'nav-item']">
                <span class="nav-text ">{{nav.name}}</span>
            </router-link>
        </nav>
        <nav v-show="secondaryListState" class="nav-secondary">
            <router-link v-for="nav of secondaryList" :key="nav.id" :to="`/categories/${nav.id}`" class="nav-item">
                <span class="nav-text">{{nav.name}}</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    props: {
        primaryList: {
            type: Array,
            required: true
        },
        linkActive: {
            type: String,
            required: true
        },
    },
    computed: {
        // 子组件 nav-secondary 的 props
        secondaryList() {
            var [{ subCategories } = { subCategories: [] }] = this.primaryList.filter(primary => primary.id === this.linkActive);
            return subCategories;
        },
        // 子组件 nav-secondary 的显隐
        secondaryListState() {
            return this.secondaryList && this.secondaryList.length > 0;
        }
    },
    methods: {
    }

}
</script>

<style lang="less" scoped>
.nav-primary {
    display: flex;
    justify-content: space-around;
    height: 50px;
    padding: 0 15px;
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

.nav-secondary {
    display: flex;
    justify-content: space-around;
    height: 45px;
    padding: 0 15px;
    border-bottom: 1px solid #f2f2f2;
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