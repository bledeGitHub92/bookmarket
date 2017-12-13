<template>
    <section class="recommand">
        <div class="title">
            <h2>书单推荐</h2>
            <div class="recommand-link">
                <a href="#">
                    全部 {{count}} 个书单
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="icon">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </a>
            </div>
        </div>
        <div class="horizontal-scroll">
            <nav class="horizontal-list">
                <router-link v-for="item of collections" :key="item.id" :to="`/collections/${item.id}`" class="horizontal-item">
                    <h3 class="horizontal-item-title">{{item.name}}</h3>
                    <div class="horizontal-item-more">
                        <span class="horizontal-item-number">{{item.bookCount}}</span>
                        在售
                    </div>
                </router-link>
                <a href="#" class="horizontal-item">
                    <h3 class="horizontal-item-title">全部书单</h3>
                    <div class="horizontal-item-more">
                        <span class="horizontal-item-number">{{count}}</span>
                        个
                    </div>
                </a>
            </nav>
        </div>
    </section>
</template>

<script>
import ajax from '../../../lib/ajax';

export default {
    name: 'HorizontalScroll',
    data() {
        return {
            count: 0,
            collections: [],
        }
    },
    methods: {
        // 获取推荐书单
        getCollections() {
            ajax.get('/api/home_collections', 'collections')
                .then(({ count, data }) => {
                    this.count = count;
                    this.collections = data;
                });
        },
    },
    mounted() {
        this.getCollections();
    }
}
</script>

<style lang="less" scoped>
.recommand {
    padding-bottom: 16px;
    .title {
        padding: 12px 15px;
        display: flex;

        h2 {
            flex: 1 1 auto;
            font-size: 16px;
            font-weight: normal;
        }
        .recommand-link {
            a {
                color: #666;
            }
        }
    }
}

.horizontal-scroll {
    height: 80px;
    overflow: hidden;
    .horizontal-list {
        padding-bottom: 35px;
        white-space: nowrap;
        overflow-x: auto;
        .horizontal-item {
            display: inline-block;
            width: 160px;
            height: 80px;
            background-color: #18c3aa;
            border-radius: 6px;
            margin-left: 8px;
            text-align: center;
            color: #fff;

            &:first-child {
                margin-left: 15px;
            }
            &:last-child {
                margin-right: 15px;
                width: 85px;
                color: #333;
                background-color: #f2f2f2;
            }
            .horizontal-item-title {
                font-weight: normal;
                font-size: 15px;
                margin-top: 22px;
            }
            .horizontal-item-more {
                margin-top: 4px;
                .horizontal-item-number {
                    font-size: 18px;
                }
            }
        }
    }
}
</style>
