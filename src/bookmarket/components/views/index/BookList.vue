<template>
    <nav class="book-list">
        <router-link v-for="book of bookList" :key="book.id" :to="`/books/${book.id}`" class="book-item">
            <figure>
                <img :src="book.images">
            </figure>
            <aside>
                <div class="book-info">
                    <div class="book-describe">
                        <h3 class="book-title">{{book.title}}</h3>
                        <div class="book-author">{{book.author}}</div>
                        <div class="book-rating">豆瓣评分 {{book.rating}}</div>
                    </div>
                    <div class="book-seller">
                        <figure>
                            <img src="" alt="">
                        </figure>
                    </div>
                </div>
                <div class="book-price-area">
                    <span class="price-type">二手价</span>
                    <span class="book-price">￥{{book.price}}</span>
                    <span class="book-discount">{{Math.round(book.price/book.originalPrice*10)}}折</span>
                </div>
            </aside>
        </router-link>
    </nav>
</template>

<script>
export default {
    name: 'BookList',
    props: {
        bookList: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="less" scoped>
.book-list {
    .book-item {
        display: flex;
        padding: 25px 15px;
        border-bottom: 1px solid #f2f2f2;
        height: 178px;
        figure {
            flex: 0 1 90px;
        }
        aside {
            margin-left: 12px;
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;
            .book-info {
                flex-grow: 1;
                display: flex;
                .book-describe {
                    flex-grow: 1;
                    .book-title {
                        color: #333;
                        font-weight: normal;
                        font-size: 16px;
                    }
                    .book-author {
                        color: #aaa;
                        font-size: 12px;
                        margin-top: 4px;
                    }
                    .book-rating {
                        color: #d6ba8c;
                        font-size: 13px;
                        margin-top: 5px;
                    }
                }
                .book-seller {
                    position: relative;
                    padding-left: 15px;
                    top: 0;
                    left: 0;
                    &::before {
                        content: ' ';
                        position: absolute;
                        display: block;
                        left: -11px;
                        top: 18px;
                        width: 60px;
                        height: 15px;
                        border-top: 1px solid #f2f2f2;
                        background-color: #fff;
                        transform: rotate(45deg);
                    }
                    figure {
                        display: inline-block;
                        vertical-align: top;
                        width: 30px;
                        height: 30px;
                        background-color: #f2f2f2;
                        border: 1px solid #f2f2f2;
                        border-radius: 99px;
                        overflow: hidden;
                    }
                }
            }
            .book-price-area {
                display: flex;
                align-items: baseline;
                .price-type {
                    color: #aaa;
                    font-size: 13px;
                }
                .book-price {
                    color: #333;
                    font-size: 20px;
                    flex-grow: 1;
                }
                .book-discount {
                    color: #f28181;
                    border: 1px solid #f28181;
                    font-size: 12px;
                    border-radius: 4px;
                    padding: 0 6px;
                }
            }
        }
    }
}
</style>
