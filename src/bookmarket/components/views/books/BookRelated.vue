<template>
    <div class="book-related">
        <header>
            <h2>相关推荐</h2>
            <div class="line"></div>
        </header>
        <div class="tags-container">
            <router-link to="/tags/1">摄影</router-link>
            <router-link to="/tags/2">美国纽约摄影学院摄影教材</router-link>
            <router-link to="/tags/3">我是一只摄影狗</router-link>
            <router-link to="/tags/4">教程</router-link>
            <router-link to="/tags/5">艺术</router-link>
            <router-link to="/tags/6">摄影理论</router-link>
            <router-link to="/tags/7">艺术是个人表达</router-link>
            <router-link to="/tags/8">豆瓣8.5分以上</router-link>
        </div>
        <div class="books-container">
            <router-link to="/books/123345345">
                <figure>
                    <div class="cover"></div>
                    <figcaption>非凡摄影</figcaption>
                </figure>
            </router-link>
            <router-link to="/books/123345345">
                <figure>
                    <div class="cover"></div>
                    <figcaption>非凡摄影</figcaption>
                </figure>
            </router-link>
            <router-link to="/books/123345345">
                <figure>
                    <div class="cover"></div>
                    <figcaption>非凡摄影</figcaption>
                </figure>
            </router-link>
            <router-link to="/books/123345345">
                <figure>
                    <div class="cover"></div>
                    <figcaption>非凡摄影</figcaption>
                </figure>
            </router-link>
            <router-link to="/books/123345345">
                <figure>
                    <div class="cover"></div>
                    <figcaption>非凡摄影</figcaption>
                </figure>
            </router-link>
            <router-link to="/books/123345345">
                <figure>
                    <div class="cover"></div>
                    <figcaption>非凡摄影</figcaption>
                </figure>
            </router-link>
            <router-link to="/books/123345345">
                <figure>
                    <div class="cover"></div>
                    <figcaption>非凡摄影</figcaption>
                </figure>
            </router-link>
            <router-link to="/books/123345345">
                <figure>
                    <div class="cover"></div>
                    <figcaption>非凡摄影</figcaption>
                </figure>
            </router-link>
            <router-link to="/books/123345345">
                <figure>
                    <div class="cover"></div>
                    <figcaption>非凡摄影</figcaption>
                </figure>
            </router-link>
        </div>
        <footer>
            <svg width="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-jsx="2026822261">
                <rect x="4" y="4" width="16" height="16" data-jsx="2026822261"></rect>
            </svg>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'BookRelated'
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
            width: calc(~"(100vw - 80px) / 3");
            color: #333;
            margin: 10px;
            font-size: 13px;
            figure {
                display: flex;
                flex-direction: column;
                .cover {
                    height: calc(~"(100vw - 80px) / 3 * 1.42");
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
        align-items: flex-start;
        padding-top: 30px;
        svg {
            color: #e5e5e5;
            transform: rotate(45deg);
        }
    }
}
</style>
