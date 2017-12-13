<template>
    <div class="book-market">
        <!-- 路由出口 / 路由匹配到的组件将渲染到这里  -->
        <router-view name="default"></router-view>
        <router-view name="ViewNav"></router-view>
    </div>
</template>

<script>
import 'normalize.css';

export default {
    name: 'BookMarket'
}
</script>

<style lang="less">
* {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
    font: 300 14px PingFang SC, Helvetica Neue, Helvetica, Microsoft YaHei, Arial, sans-serif;
    color: #333;
    background-color: #f2f2f2;
}

input,
textarea,
button:focus {
    outline: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
ul,
figure {
    margin: 0;
}

ul {
    padding: 0;
    list-style: none;
}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
    color: #aaa;
}

input:-moz-placeholder,
textarea:-moz-placeholder {
    color: #aaa;
}

input::-moz-placeholder,
textarea::-moz-placeholder {
    color: #aaa;
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
    color: #aaa;
}

.book-market {
    padding-bottom: 50px;
    max-width: 600px;
    min-height: 100vh;
    margin: 0 auto;
}

.icon {
    width: 20px;
    vertical-align: -5px;
}

a {
    text-decoration: none;
}
</style>