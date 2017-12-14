<template>
    <div class="collection-cover">
        <div class="bg"></div>
        <div class="content">
            <h1>最新出版的书</h1>
            <span class="description">新书好卖不骄傲，二手好卖才算俏</span>
            <span class="meta">225 本在售，13 分钟前更新</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CollectionCover'
}
</script>

<style lang="less" scoped>
.collection-cover {
    position: relative;
    overflow: hidden;
    .bg {
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        background-color: #18c3aa;
        background-size: cover;
        background-position: center;
        filter: blur(6px);
    }
    .content {
        position: relative;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 35px;
        h1 {
            font-size: 24px;
            font-weight: normal;
        }
        .description {
            font-size: 14px;
            margin-top: 10px;
        }
        .meta {
            color: rgba(255, 255, 255, .8);
            margin-top: 14px;
        }
    }
}
</style>
