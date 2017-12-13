<template>
    <router-link to="/books/1312321321234/users?type=seller">
        <div class="avatars">
            <span class="avatar"><img width="28" height="28" src="https://img.xjh.me/random_img.php?type=bg&ctype=acg&return=302"></span>
            <span class="avatar"><img width="28" height="28" src="https://img.xjh.me/random_img.php?type=bg&ctype=acg&return=302"></span>
            <span class="avatar"><img width="28" height="28" src="https://img.xjh.me/random_img.php?type=bg&ctype=acg&return=302"></span>
        </div>
        <div class="content">
            笑傲江湖卖过这本书
        </div>
        <svg viewBox="0 0 24 24" fill="none" stroke="rgb(210, 210, 210)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="icon">
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
    </router-link>
</template>

<script>
export default {
    name: 'BookSeller'
}
</script>

<style lang="less" scoped>
a {
    display: flex;
    align-items: center;
    .avatars {
        display: flex;
        margin-right: 10px;
        .avatar {
            // font-size: 0;
            border: 1px solid #f2f2f2;
            border-radius: 99px;
            overflow: hidden;
            margin-left: -12px;
            &:first-child {
                margin-left: 0;
            }
            img {
                vertical-align: top;
            }
        }
    }
    .content {
        font-size: 15px;
        color: #333;
        flex-grow: 1;
    }
    .icon {
        vertical-align: text-bottom;
    }
}
</style>
