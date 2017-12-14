<template>
    <div class="book-stack">
        <div class="book">
            <router-link to="/books/12312434">
                <div class="bg-wrapper">
                    <div class="cover"></div>
                </div>
            </router-link>
        </div>
        <div class="book">
            <router-link to="/books/12312434">
                <div class="bg-wrapper">
                    <div class="cover"></div>
                </div>
            </router-link>
        </div>
        <div class="book">
            <router-link to="/books/12312434">
                <div class="bg-wrapper">
                    <div class="cover"></div>
                </div>
            </router-link>
        </div>
        <div class="book">
            <router-link to="/books/12312434">
                <div class="bg-wrapper">
                    <div class="cover"></div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BookStack'
}
</script>

<style lang="less" scoped>
.book-stack {
    display: flex;
    flex-wrap: wrap;
    .book {
        position: relative;
        text-align: center;
        width: calc(~"(100% - (10px * 6)) / 3");
        display: inline-block;
        vertical-align: top;
        margin: 10px;
        .bg-wrapper {
            height: calc(~"(100vw - (10px * 8)) / 3 * 1.42");
            box-shadow: 1px 1px 3px rgba(0,0,0,0.2);
            .cover {
                width: 100%;
                height: 100%;
                background-position: center;
                background-size: cover;
                max-width: 100%;
                max-height: 100%;
            }
        }
    }
}
</style>
