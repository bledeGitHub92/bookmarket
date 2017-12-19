<template>
    <div class="search-result">
        <section v-if="tagData">
            <router-link class="tag" :to="`/tags/${tagData.id}`">
                <div class="tag-symbol">
                    <svg width="15" viewBox="0 0 31 30" xmlns="http://www.w3.org/2000/svg">
                        <g fill="currentColor" transform="translate(-64.000000, -343.000000)">
                            <path d="M92.5058744,350.599669 L87.7616885,350.599669 L88.6287981,345.117941 C88.7506758,344.606673 88.6319951,344.067741 88.3066285,343.654963 C87.981262,343.242184 87.4849565,343.00091 86.959363,343.000001 C85.7758266,343.065123 84.7981712,343.947297 84.612187,345.117941 L83.7450774,350.599669 L76.8480677,350.599669 L77.7201607,345.117941 C77.8422406,344.605823 77.7229531,344.066 77.3964465,343.653008 C77.0699399,343.240016 76.5722101,342.999385 76.0457421,343.000001 C74.8602134,343.058003 73.8801735,343.944209 73.7035495,345.117941 L72.8314565,350.599669 L68.0872707,350.599669 C66.9392747,350.634136 65.9704624,351.463954 65.7600282,352.593024 C65.6610696,353.092061 65.7950691,353.608988 66.1239994,353.997106 C66.4529297,354.385225 66.9408877,354.602171 67.4493969,354.586379 L72.1935828,354.586379 L71.1022207,361.513289 L66.3580349,361.513289 C65.2100389,361.547757 64.2412265,362.377574 64.0307924,363.506645 C63.9338255,364.005387 64.068559,364.521181 64.3970543,364.908786 C64.7255495,365.296391 65.2122692,365.513876 65.7201611,365.5 L70.4743138,365.5 L69.6221543,370.88206 C69.5002766,371.393328 69.6189574,371.93226 69.9443239,372.345038 C70.2696904,372.757817 70.7659959,372.999091 71.2915895,373 C72.4743551,372.933029 73.4510207,372.051749 73.6387655,370.88206 L74.4610246,365.529901 L81.3779678,365.529901 L80.5307918,370.88206 C80.4107415,371.393954 80.5308135,371.93265 80.8568948,372.345105 C81.1829761,372.757559 81.6794293,372.998693 82.2052103,373 C83.386836,372.932611 84.3618306,372.050967 84.5474029,370.88206 L85.394579,365.529901 L90.1387648,365.529901 C91.2860397,365.493572 92.2538443,364.664617 92.4660073,363.536545 C92.5649659,363.037508 92.4309664,362.520581 92.1020361,362.132463 C91.7731058,361.744345 91.2851478,361.527398 90.7766386,361.54319 L86.0324527,361.54319 L87.1238148,354.64618 L91.8680006,354.64618 C93.0159966,354.611713 93.984809,353.781895 94.1952431,352.652825 C94.3155942,352.145003 94.1915397,351.610119 93.8599434,351.207117 C93.528347,350.804115 93.0273672,350.579371 92.5058744,350.599669 Z M82.0158416,361.513289 L75.1188319,361.513289 L76.2101939,354.61628 L83.1072036,354.61628 L82.0158416,361.513289 Z"></path>
                        </g>
                    </svg>
                </div>
                <div class="tag-name">{{tagData.name}} 标签</div>
                <div class="sold-count">{{tagData.bookCount}} 本在售
                    <svg width="6.5px" viewBox="0 0 13 24" xmlns="http://www.w3.org/2000/svg" class="tag-icon">
                        <g fill="currentColor" transform="translate(-707.000000, -346.000000)">
                            <path d="M720.039467,358 C720.054396,357.701471 719.947859,357.398 719.719857,357.169998 L719.719857,357.169998 L708.870845,346.320986 L708.870845,346.320986 C708.442863,345.893005 707.748968,345.893005 707.320986,346.320986 C706.893005,346.748968 706.893005,347.442863 707.320986,347.870845 L717.450141,358 L707.320986,368.129155 C706.893005,368.557137 706.893005,369.251032 707.320986,369.679014 C707.748968,370.106995 708.442863,370.106995 708.870845,369.679014 L719.719857,358.830002 L719.719857,358.830002 C719.947859,358.602 720.054396,358.298529 720.039467,358 Z"></path>
                        </g>
                    </svg>
                </div>
            </router-link>
        </section>
        <section v-if="onSale.length>0">
            <router-link class="on-sale" v-for="book of onSale" :key="book.id" :to="`/books/${book.id}`">
                <figure><img :src="book.image"></figure>
                <div class="on-sale-meta">
                    <h2 class="on-sale-title">{{book.title}}</h2>
                    <div class="on-sale-detail">
                        <div class="on-sale-price">
                            <span class="on-sale-author">{{book.author}}</span>
                            <span>￥{{book.price/100}}</span>
                        </div>
                        <div class="on-sale-button">
                            <button type="button">加入购物车</button>
                        </div>
                    </div>
                </div>
            </router-link>
        </section>
        <section v-if="stockOut.length>0" class="stockout-section">
            <div class="stockout-tips">～ 以下书暂时无货，请订阅到货提醒 ～</div>
            <router-link class="on-sale" v-for="book of stockOut" :key="book.id" :to="`/books/${book.id}`">
                <figure class="darken"><img :src="book.image"></figure>
                <div class="on-sale-meta">
                    <h2 class="on-sale-title">{{book.title}}</h2>
                    <div class="on-sale-detail">
                        <div class="on-sale-price">
                            <span class="on-sale-author">{{book.author}}</span>
                            <span>￥{{book.price/100}}</span>
                        </div>
                        <div class="on-sale-button stockout">
                            <button type="button">到货提醒</button>
                        </div>
                    </div>
                </div>
                <div class="book-meta">
                    <span v-if="book.receivedCount">收过 {{book.receivedCount}} 本</span>
                    <span v-else>{{book.wishCount}} 人想买</span>
                </div>
            </router-link>
        </section>
    </div>
</template>

<script>
import ajax from "../../../../lib/ajax";

export default {
    name: 'SearchResult',
    props: {
        keyword: String
    },
    data() {
        return {
            tagData: null,
            onSale: [],
            stockOut: []
        }
    },
    methods: {
        getResult() {
            ajax.get(`/api/search?q=${this.keyword}`, 'result')
                .then((res) => {
                    if (res[0].type === 'tag') {
                        this.tagData = res.shift().tag;
                    }
                    this.onSale = res.filter(item => item.stock);
                    this.stockOut = res.filter(item => !item.stock);
                })
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => vm.getResult());
    }
}
</script>

<style lang="less" scoped>
section {
    .stockout-tips {
        color: #666;
        font-size: 13px;
        margin-bottom: 5px;
        height: 26px;
        text-align: center;
    }
    margin-top: 16px;
    .tag {
        padding: 12px 15px;
        background-color: #fff;
        display: flex;
        align-items: center;
        .tag-symbol {
            color: #fff;
            display: flex;
            justify-content: center;
            margin-right: 12px;
            background-color: #18c3aa;
            border-radius: 3px;
            width: 50px;
            height: 50px;
        }
        .tag-name {
            font-size: 15px;
            flex-grow: 1;
            color: #333;
        }
        .sold-count {
            font-size: 15px;
            color: #aaa;
            .tag-icon {
                vertical-align: -1px;
            }
        }
    }
    .on-sale {
        position: relative;
        border-bottom: 1px solid rgba(0, 0, 0, .06);
        padding: 15px;
        display: flex;
        background-color: #fff;
        figure {
            margin-right: 12px;
            width: 50px;
            height: 70px;
            &.darken {
                position: relative;
                &::after {
                    content: '无货';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                img {
                    filter: brightness(0.5)
                }
            }
            img {
                width: 100%;
                max-width: 100%;
                vertical-align: top;
            }
        }
        .on-sale-meta {
            display: flex;
            flex-direction: column;
            color: #333;
            flex-grow: 1;
            .on-sale-title {
                font-size: 14px;
                font-weight: normal;
                margin-bottom: 4px;
            }
            .on-sale-detail {
                display: flex;
                flex-grow: 1;
                .on-sale-price {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    flex-grow: 1;
                    .on-sale-author {
                        color: #aaa;
                        font-size: 12px;
                    }
                }
                .on-sale-button {
                    display: flex;
                    align-items: flex-end;
                    &.stockout {
                        button {
                            border: 1px solid #f2f2f2;
                            background-color: transparent;
                            color: #333;
                        }
                    }
                    button {
                        border: none;
                        min-width: 92px;
                        padding: 6px 15px;
                        font-size: 12px;
                        background-color: #f28181;
                        border: 1px solid #f28181;
                        color: #fff;
                        border-radius: 99px;
                    }
                }
            }
        }
        .book-meta {
            position: absolute;
            bottom: 4px;
            left: 15px;
            font-size: 10px;
            color: #aaa;
        }
    }
}

.stockout-section {
    .on-sale {
        padding-bottom: 20px;
    }
}
</style>
