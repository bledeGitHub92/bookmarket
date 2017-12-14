<template>
    <div class="book-related">
        <header>
            <h2>相关推荐</h2>
            <div class="line"></div>
        </header>
        <div class="tags-container">
            <router-link v-for="tag of relatedTags" :key="tag.id" :to="`/tags/${tag.id}`">{{tag.name}}</router-link>
        </div>
        <div class="books-container">
            <router-link v-for="book of relatedBooks" :key="book.id" :to="`/books/${book.id}`">
                <figure>
                    <div class="cover" :style="{'background':`url(${book.images})`}"></div>
                    <figcaption>{{book.title}}</figcaption>
                </figure>
            </router-link>
        </div>
        <footer>
            <div class="line"></div>
            <svg width="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-jsx="2026822261">
                <rect x="4" y="4" width="16" height="16" data-jsx="2026822261"></rect>
            </svg>
            <div class="line"></div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'BookRelated',
    props: {
        relatedTags: { type: Array, required: true },
        relatedBooks: { type: Array, required: true },
    }
}
</script>

<style lang="less" scoped>
.book-related {
    header {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        h2 {
            color: #aaa;
            font-size: 13px;
            font-weight: normal;
        }
        .line {
            flex-grow: 1;
            border-bottom: 1px solid #f2f2f2;
            margin-left: 12px;
        }
    }
    .tags-container {
        display: flex;
        flex-wrap: wrap;
        a {
            display: flex;
            align-items: center;
            margin: 5px;
            color: #333;
            border: 1px solid #e6e6e6;
            border-radius: 5px;
            padding: 0 9px;
            height: 30px;
        }
    }
    .books-container {
        padding: 20px 5px 0;
        margin: -10px;
        display: flex;
        flex-wrap: wrap;
        a {
            width: calc(~"(100% - 60px) / 3");
            @media (max-width: 360px) {
                width: calc(~"(100% - 40px) / 2");
            }
            @media (min-width: 480px) {
                width: calc(~"(100% - 80px) / 4");
            }
            color: #333;
            margin: 10px;
            font-size: 13px;
            figure {
                display: flex;
                flex-direction: column;
                .cover {
                    height: calc(~"(100vw - 80px) / 3 * 1.42");
                    @media (max-width: 360px) {
                        height: calc(~"(100vw - 60px) / 2 * 1.42");
                    }
                    @media (min-width: 480px) {
                        height: calc(~"(100vw - 100px) / 4 * 1.42");
                    }
                    @media (min-width: 600px) {
                        height: calc(~"(600px - 100px) / 4 * 1.42");
                    }
                    background-color: pink;
                    flex-grow: 1;
                    background-position: center;
                    background-size: cover;
                }
            }
            figcaption {
                margin-top: 6px;
                text-align: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 30px;
        .line {
            flex-basis: 42px;
            border-top: 1px solid #e5e5e5;
        }
        svg {
            margin: 0 9px;
            color: #e5e5e5;
            transform: rotate(45deg);
        }
    }
}
</style>
