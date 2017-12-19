<template>
    <div class="search-header">
        <form name="search-form">
            <input @keyup="search" ref="keyword" name="keyword" type="search" placeholder="书名 / 作者 / 标签">
        </form>
    </div>
</template>

<script>
export default {
    name: 'SearchHeader',
    data() {
        return {
            keydownTimer: 0
        }
    },
    methods: {
        search({ target: { value } }) {
            var path = `/search/${value}`;
            if (value === '') { path = '/search'; }
            clearTimeout(this.keydownTimer);
            this.keydownTimer = setTimeout(() => {
                this.$router.push({ path });
            }, 1000)
        }
    },
    mounted() {
        this.$refs.keyword.focus();
    }
}
</script>

<style lang="less" scoped>
.search-header {
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 4px rgba(0, 0, 0, .25);
    background-color: #fff;
    form {
        max-width: 600px;
        margin: 0 auto;
        display: flex;
        padding: 15px 13px;
        justify-content: center;
        input {
            flex-grow: 1;
            font-size: 14px;
            line-height: 21px;
            background-color: #f2f2f2;
            border: none;
            border-radius: 99px;
            padding: 6px 16px;
        }
    }
}
</style>
