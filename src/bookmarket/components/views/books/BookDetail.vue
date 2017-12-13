<template>
    <div class="book-detail">
        <div class="description">
            <div class="author">
                <router-link to="/search/阿梅里·挪动">[英]阿梅里·挪动</router-link>
            </div>
            <div class="brief">
                <span class="press">上海译文出版社</span>
                <span class="date">2010-4</span>
                <span class="type">平装</span>
            </div>
        </div>
        <a class="rating" href="#">
            <div class="media">豆瓣</div>
            <div class="score">7.2</div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'BookDetail'
}
</script>

<style lang="less" scoped>
.book-detail {
    display: flex;
    .description {
        font-size: 15px;
        display: flex;
        flex-grow: 1;
        justify-content: space-between;
        flex-direction: column;
        .author {
            a {
                color: #18c3aa;
            }
        }
        .brief {
            .date,
            .type {
                &::before {
                    content: ' / ';
                    color: #dedede;
                }
            }
        }
    }
    .rating {
        display: flex;
        flex: 0 1 72px;
        padding-left: 15px;
        border-left: 1px solid #f2f2f2;
        margin-left: 10px;
        flex-direction: column;
        color: #d6ba8c;
        align-items: center;
        .meida {
            font-size: 15px;
        }
        .score {
            font-size: 26px;
        }
    }
}
</style>
