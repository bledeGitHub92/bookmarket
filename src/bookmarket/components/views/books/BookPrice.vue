<template>
    <div class="book-price">
        <span class="type">二手价</span>
        <span class="price">￥34.00</span>
        <span class="discount">5折</span>
        <span class="original">￥68.00</span>
    </div>
</template>

<script>
export default {
    name: 'BookPrice'
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
