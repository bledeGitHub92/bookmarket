<template>
    <div class="users">
        <header>
            <div v-if="isSold" class="books-bg">
                <div class="wrapper">
                    <div v-for="(imgs,i) of modImgs" :key="+new Date()+i" class="col">
                        <div v-for="(img,n) of imgs" :key="+new Date()+n" class="cover">
                            <div class="img" :style="{'backgroundImage':`url(${img})`}"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shadow-wrapper">
                <div class="blue-wrapper">
                    <div class="user-info">
                        <figure class="avatar">
                            <img :src="avatar">
                        </figure>
                        <div class="nickname">{{name}}</div>
                        <div class="income">卖书收入 {{income/100}} 元</div>
                    </div>
                    <div class="split-line">
                        <div class="line"></div>
                        <div class="circle"></div>
                        <div class="line"></div>
                    </div>
                    <div class="shelf-tabs">
                        <router-link :to="`/users/${id}/owning-bookshelf`">他的书架 {{owningBookCount}}</router-link>
                        <router-link :to="`/users/${id}/sold-bookshelf`">卖书动态 {{soldBookCount}}</router-link>
                    </div>
                </div>
            </div>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
import ajax from '../../lib/ajax';

export default {
    name: 'Users',
    props: ['id'],
    data() {
        return {
            name: '',
            avatar: '',
            income: 0,
            owningBookCount: 0,
            soldBookCount: 0,
            backgroundImages: [],
        }
    },
    computed: {
        isSold() {
            return this.backgroundImages.length > 0;
        },
        modImgs() {
            var origin = this.backgroundImages.slice(0, 15),
                ret = [], next;
            for (let i = 0; i < 5; i++) {
                for (let n = 0; n < 3; n++) {
                    if (!ret[i]) { ret[i] = []; }
                    if (origin.length) { next = origin.shift(); }
                    ret[i].push(next);
                }
            }
            return ret;
        }
    },
    methods: {
        getUserInfo(isFromSeller) {
            ajax.get(`/api/users/${this.id}`, 'user')
                .then(res => {
                    var nextPath = '';

                    this.name = res.name;
                    this.avatar = res.avatar;
                    this.income = res.income;
                    this.owningBookCount = res.owningBookCount;
                    this.soldBookCount = res.soldBookCount;
                    this.backgroundImages = res.backgroundImages;
                    if (res.owningBookCount && !isFromSeller) {
                        nextPath = 'owning-bookshelf';
                    } else {
                        nextPath = 'sold-bookshelf';
                    }
                    this.$router.push(`/users/${this.id}/${nextPath}`);
                });
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => vm.getUserInfo(from.name === 'sellerView'));
    },
}
</script>

<style lang="less" scoped>
.users {
    padding-bottom: 50px;
    min-height: 100vh;
    background-color: #fff;
    header {
        position: relative;
        .books-bg {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            .wrapper {
                position: relative;
                display: flex;
                width: 115%;
                left: -50px;
                top: -50px;
                transform: rotate(20deg);
                .col {
                    .cover {
                        margin: 1px;
                        width: calc(~"115vw / 5");
                        height: calc(~"115vw / 5 * 1.42");
                        .img {
                            width: 100%;
                            height: 100%;
                            background-size: cover;
                            background-position: center;
                        }
                    }
                    &:nth-child(2) {
                        margin-top: -5px;
                    }
                    &:nth-child(4) {
                        margin-top: -7px;
                    }
                }
            }
        }
        .shadow-wrapper {
            position: relative;
            z-index: 1;
            background-image: radial-gradient( circle at top center, rgba(93, 93, 93, 0.5) 0%, rgba(93, 93, 93, 1) 82%);
            .blue-wrapper {
                background-image: radial-gradient( circle at top center, rgba(189, 194, 232, 0.6) 0%, rgba(189, 194, 232, 0.8) 82%);
                .user-info {
                    color: #fff;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 32px 0 16px;
                    .avatar {
                        width: 80px;
                        height: 80px;
                        border: 2px solid #fff;
                        overflow: hidden;
                        border-radius: 100%;
                        box-shadow: 0 0 8px 0 rgba(0, 0, 0, .2);
                    }
                    .nickname {
                        margin: 8px 0;
                        font-size: 20px;
                    }
                    .income {
                        font-size: 15px;
                    }
                }
                .split-line {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 5%;
                    .line {
                        flex-grow: 1;
                        border-top: 1px solid rgba(255, 255, 255, .5);
                    }
                    .circle {
                        width: 3px;
                        height: 3px;
                        border-radius: 100%;
                        background-color: #fff;
                        margin: 0 5px;
                    }
                }
                .shelf-tabs {
                    display: flex;
                    align-items: stretch;
                    height: 56px;
                    a {
                        position: relative;
                        color: #fff;
                        font-size: 16px;
                        displaY: flex;
                        flex-grow: 1;
                        align-items: center;
                        justify-content: center;
                        &.router-link-active::before {
                            content: ' ';
                            border-bottom: 8px solid #fff;
                            border-left: 8px solid transparent;
                            border-right: 8px solid transparent;
                            position: absolute;
                            left: 50%;
                            transform: translateX(-50%);
                            bottom: 0;
                        }
                    }
                }
            }
        }
    }
}
</style>
