<template>
    <div class="cover">
        <div class="background" :style="{backgroundImage:`url(${images})`}"></div>
        <figure>
            <img :src="images">
        </figure>
        <h1 class="title">{{title}}</h1>
        <h2 class="subtitle">{{subtitle}}</h2>
    </div>
</template>

<script>
export default {
    name: 'BookCover',
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        images: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="less" scoped>
.cover {
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 18px 15px 14px;
    .background {
        z-index: -1;
        position: absolute;
        top: -50px;
        bottom: -50px;
        left: -50px;
        right: -50px;
        background-color: #d6babc;
        background-position: center;
        background-size: cover;
        filter: blur(25px);
        &::after {
            content: ' ';
            display: block;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .4);
        }
    }
    figure {
        width: 150px;
        img {
            vertical-align: top;
            box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
            max-width: 100%;
            max-height: 100%;
        }
    }
    .title {
        color: #fff;
        font-size: 20px;
        font-weight: normal;
        text-align: center;
        margin-top: 12px;
    }
    .subtitle {
        color: #fff;
        font-size: 13px;
        text-align: center;
        margin-top: 2px;
        font-weight: normal;
    }
}
</style>
