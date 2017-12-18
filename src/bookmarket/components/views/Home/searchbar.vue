<template>
    <section class="search-bar">
        <input type="text" placeholder="搜索">
        <span class="search-icon">
            <svg width="1.4em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="icon">
                <circle cx="10.5" cy="10.5" r="7.5"></circle>
                <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
            </svg>
        </span>
    </section>
</template>

<script>
export default {
    name: 'SearchBar'
}
</script>

<style lang="less" scoped>
.search-bar {
    position: relative;
    top: 0;
    left: 0;
    padding: 16px 13px;

    input {
        width: 100%;
        height: 35px;
        border-radius: 171px;
        background-color: #f2f2f2;
        border: none;
        padding: 6px 16px;
    }

    .search-icon {
        color: #aaa;
        position: absolute;
        padding: 6px;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>
