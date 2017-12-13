<template>
    <div class="book-buy">
        <button type="button">加入购物车</button>
    </div>
</template>

<script>
export default {
    name: 'BookBuy'
}
</script>

<style lang="less" scoped>
.book-buy {
    display: flex;
    justify-content: center;
    button {
        border: none;
        background-color: #f28181;
        width: 70vw;
        height: 40px;
        font-size: 15px;
        max-width: 420px;
        color: #fff;
        border-radius: 99px;
    }
}
</style>
