<template>
    <div class="book-price">
        <span class="type">二手价</span>
        <span class="price">￥{{price/100}}</span>
        <span class="discount">{{Math.round(price/originalPrice*10)}}折</span>
        <span class="original">￥{{originalPrice/100}}</span>
    </div>
</template>

<script>
export default {
    name: 'BookPrice',
    props: {
        price: { type: Number, required: true },
        originalPrice: { type: Number, required: true },
    },
}
</script>

<style lang="less" scoped>
.book-price {
    display: flex;
    justify-content: center;
    align-items: center;
    .type {
        color: #aaa;
        font-size: 13px;
        margin-right: 4px;
    }
    .price {
        font-size: 24px;
        line-height: 1;
    }
    .discount {
        color: #f28181;
        font-size: 12px;
        border: 1px solid #f28181;
        border-radius: 4px;
        padding: 0 6px;
        margin-left: 8px;
    }
    .original {
        color: #aaa;
        font-size: 13px;
        text-decoration: line-through;
        margin-left: 8px;
    }
}
</style>
