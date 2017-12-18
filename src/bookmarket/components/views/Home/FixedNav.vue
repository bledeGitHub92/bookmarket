<template>
    <div class="fixed-nav" ref="fixed-nav">
        <div :class="[{'is-fixed':navFixed},'nav-wrapper']">
            <nav-primary :nav-list="categories" :link-active="linkActive"></nav-primary>
            <nav-secondary v-if="subCategoriesState" :nav-list="subCategories"></nav-secondary>
        </div>
        <div :style="{height:navHolderHeight?navHolderHeight+'px':'auto'}" v-show="navFixed" class="nav-holder"></div>
    </div>
</template>

<script>
import NavPrimary from './FixedNav/NavPrimary.vue';
import NavSecondary from './FixedNav/NavSecondary.vue';

export default {
    name: 'FixedNav',
    components: {
        NavPrimary, NavSecondary,
    },
    data() {
        return {
            // categories 的参数
            linkActive: '',
            // 首页导航栏数据
            categories: [
                {
                    id: '76343795494420782',
                    name: '文化',
                    subCategories: [
                        { id: '76343795494420782', name: '文学' },
                        { id: '76343796392004130', name: '社科' },
                        { id: '76343797138590270', name: '艺术' },
                        { id: '76343797587379753', name: '心理' },
                    ]
                },
                {
                    id: '76343797952285675',
                    name: '工作',
                    subCategories: [
                        { id: '76343797952285675', name: '商业' },
                        { id: '76343798069726178', name: '管理' },
                        { id: '76343798308800311', name: '技能' },
                        { id: '76343798526903665', name: '编程' },
                        { id: '76343798820507050', name: '金融' },
                    ]
                },
                {
                    id: '76343799101522341',
                    name: '生活',
                    subCategories: [
                        { id: '76343799101522341', name: '旅行' },
                        { id: '76343799286072315', name: '居家' },
                        { id: '76343799458038655', name: '美食' },
                        { id: '76343799558704248', name: '健美' },
                        { id: '76343799667754416', name: '育儿' },
                    ]
                },
                {
                    id: '74509287543540328',
                    name: '外文',
                    subCategories: [
                        { id: '74509287543540328', name: '英语' },
                        { id: '74509287556121722', name: '日语' },
                        { id: '74509287577093414', name: '繁体中文' },
                        { id: '76343799902636452', name: '语言学习' },
                    ]
                }
            ],
            // 导航的 position 是否是 fixed
            navFixed: false,
            navHolderHeight: 0,
        }
    },
    computed: {
        // 子组件 nav-secondary 的 props
        subCategories() {
            var [{ subCategories } = { subCategories: [] }] = this.categories.filter(primary => primary.id === this.linkActive);
            return subCategories;
        },
        // 子组件 nav-secondary 的显隐
        subCategoriesState() {
            return this.subCategories.length > 0;
        }
    },
    watch: {
        $route({ params: { id = '' } }) {
            var elemTop = this.$refs['fixed-nav'].offsetTop,
                scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                
            if (scrollTop > elemTop) {
                document.documentElement.scrollTop = elemTop;
                document.body.scrollTop = elemTop;
            }
            if (id === '' || this.categories.some(primary => primary.id === id)) {
                this.linkActive = id;
            }
        }
    },
    methods: {
        // 初始化 linkActive
        initLinkActive() {
            var id = this.$route.params.id;
            var [{ id: param } = { id: '' }] = this.categories.filter(
                primary => primary.id === id || primary.subCategories.some(secondary => secondary.id === id)
            );
            this.linkActive = param;
        },
        fixNav() {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
                refElem = this.$refs['fixed-nav'],
                refTop = refElem.offsetTop,
                refHeight = refElem.offsetHeight;

            // 定位导航条
            if (!this.navFixed && scrollTop >= refTop) {
                this.navFixed = true;
                this.navHolderHeight = refHeight;
            } else if (this.navFixed && scrollTop < refTop) {
                this.navFixed = false;
            }
        }
    },
    mounted() {
        this.initLinkActive();
        document.addEventListener('scroll', this.fixNav, false);
    },
    beforeDestroy() {
        document.removeEventListener('scroll', this.fixNav, false);
    },
}
</script>

<style lang="less" scoped>
.fixed-nav {
    .nav-wrapper {
        &.is-fixed {
            max-width: 600px;
            position: fixed;
            top: 0;
            width: 100%;
            background-color: #fff;
            z-index: 9;
        }
    }
}
</style>
