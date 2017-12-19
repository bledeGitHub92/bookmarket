<template>
    <router-link :to="`/books/${id}/users?type=sellers`">
        <div class="avatars">
            <span v-for="seller of latestSellers" :key="seller.name" class="avatar"><img width="28" height="28" :src="seller.avatar"></span>
        </div>
        <div class="content">
            {{seller}}
            <span v-show="sellerCount>1">等 {{sellerCount}} 人</span>卖过这本书
        </div>
        <svg viewBox="0 0 24 24" fill="none" stroke="rgb(210, 210, 210)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="icon">
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
    </router-link>
</template>

<script>
export default {
    name: 'BookSeller',
    props: {
        id: { type: String, required: true },
        sellerCount: { type: Number, required: true },
        latestSellers: { type: Array, required: true }
    },
    computed: {
        seller() {
            return this.latestSellers[0] ? this.latestSellers[0].name : '';
        }
    }
}
</script>

<style lang="less" scoped>
a {
    display: flex;
    align-items: center;
    .avatars {
        display: flex;
        margin-right: 10px;
        .avatar {
            // font-size: 0;
            border: 1px solid #f2f2f2;
            border-radius: 99px;
            overflow: hidden;
            margin-left: -12px;
            &:first-child {
                margin-left: 0;
            }
            img {
                vertical-align: top;
            }
        }
    }
    .content {
        font-size: 15px;
        color: #333;
        flex-grow: 1;
    }
    .icon {
        vertical-align: text-bottom;
    }
}
</style>
