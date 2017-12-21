<template>
    <div class="tags">
        <tag-meta v-bind="tagInfo"></tag-meta>
        <router-view></router-view>
    </div>
</template>

<script>
import ajax from '../../lib/ajax';
import TagMeta from './Tags/TagMeta.vue';

export default {
    name: 'Tags',
    components: {
        TagMeta
    },
    props: {
        id: String
    },
    data() {
        return {
            tagInfo: {
                id: '',
                name: '',
                bookCount: 0
            },
        }
    },
    methods: {
        getTagInfo() {
            ajax.get(`/api/tags/${this.id}`, 'tag')
                .then(res => {
                    this.tagInfo = res;
                });
        },
    },
    beforeRouteEnter(to, from, next) {
        next(vm => vm.getTagInfo());
    },
}
</script>

<style lang="less" scoped>
.tags {
    min-height: 100vh;
    padding-bottom: 50px;
    background-color: #fff;
}
</style>
