<template>
    <div class="seller-list">
        <router-link v-for="seller of dataList" :key="seller.id" :to="`/users/${seller.id}/sold-bookshelf`" class="seller">
            <figure class="avatar"><img :src="seller.avatar"></figure>
            <span class="name">{{seller.name}}</span>
            <span class="sold-book">卖过 {{seller.soldBookCount}} 本
                <svg viewBox="0 0 24 24" fill="none" stroke="rgb(210, 210, 210)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="icon">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'SellerList',
    props: {
        dataList: { type: Array, required: true }
    }
}
</script>

<style lang="less" scoped>
.seller {
    padding: 15px;
    display: flex;
    color: #333;
    border-bottom: 1px solid #f2f2f2;
    align-items: center;
    .avatar {
        height: 40px;
        width: 40px;
        margin-right: 10px;
        border-radius: 99px;
        overflow: hidden;
        img {
            width: 100%;
            vertical-align: top;
        }
    }
    .name {
        flex-grow: 1;
    }
    .sold-book {
        color: #aaa;
    }
}
</style>
