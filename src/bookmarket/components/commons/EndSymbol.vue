<template>
    <footer class="end-symbol">
        <div class="line"></div>
        <svg class="symbol" width="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-jsx="2026822261">
            <rect x="4" y="4" width="16" height="16" data-jsx="2026822261"></rect>
        </svg>
        <div class="line"></div>
    </footer>
</template>

<script>
export default {
    name: 'EndSymbol'
}
</script>

<style lang="less" scoped>
.end-symbol {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    .line {
        width: 42px;
        border-top: 1px solid #f2f2f2;
    }
    .symbol {
        color: #e5e5e5;
        margin: 0 9px;
        transform: rotate(45deg);
    }
}
</style>
