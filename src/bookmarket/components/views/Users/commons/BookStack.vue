<template>
    <div class="book-stack">
        <div v-for="book of books" :key="book.id" class="book">
            <router-link :to="`/books/${book.id}`">
                <div class="bg-wrapper">
                    <div class="cover" :style="{'backgroundImage':`url(${book.image})`}"></div>
                </div>
                <div v-if="book.stock" class="meta">
                    <span>在售</span>
                </div>
                <div class="title">{{book.title}}</div>
                <div class="wishCount">{{book.wishCount}} 人想买</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BookStack',
    props: {
        books: { type: Array, required: true }
    },
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
        @media (min-width: 480px) {
            width: calc(~"(100% - (10px * 8)) / 4");
        }
        @media (max-width: 360px) {
            width: calc(~"(100% - (10px * 4)) / 2");
        }
        display: inline-block;
        vertical-align: top;
        margin: 10px;
        a {
            color: #333;
            .bg-wrapper {
                height: calc(~"(100vw - (10px * 8)) / 3 * 1.42");
                @media (min-width: 480px) {
                    height: calc(~"(100vw - (10px * 10)) / 4 * 1.42");
                }
                @media (min-width:600px) {
                    height: calc(~"(600px - (10px * 10)) / 4 * 1.42");
                }
                @media (max-width: 360px) {
                    height: calc(~"(100vw - (10px * 6)) / 2 * 1.42")
                }
                box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
                .cover {
                    width: 100%;
                    height: 100%;
                    background-position: center;
                    background-size: cover;
                    max-width: 100%;
                    max-height: 100%;
                }
            }
            .meta {
                position: absolute;
                top: 0;
                left: 0;
                background-color: #ef8080;
                color: #fff;
                padding: 2px 4px;
                border-bottom-right-radius: 5px;
                font-size: 11px;
            }
            .title {
                margin-top: 6px;
                font-size: 13px;
            }
            .wishCount {
                color: #aaa;
                font-size: 12px;
            }
        }
    }
}
</style>
