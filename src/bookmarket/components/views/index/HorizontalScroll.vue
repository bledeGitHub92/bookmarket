<template>
    <div class="horizontal-scroll">
        <nav class="horizontal-list">
            <a href="#" class="horizontal-item">
                <h3 class="horizontal-item-title">啊！设计</h3>
                <div class="horizontal-item-more">
                    <span class="horizontal-item-number">123</span>
                    在售
                </div>
            </a>
            <a href="#" class="horizontal-item">
                <h3 class="horizontal-item-title">啊！设计</h3>
                <div class="horizontal-item-more">
                    <span class="horizontal-item-number">123</span>
                    在售
                </div>
            </a>
            <a href="#" class="horizontal-item">
                <h3 class="horizontal-item-title">啊！设计</h3>
                <div class="horizontal-item-more">
                    <span class="horizontal-item-number">123</span>
                    在售
                </div>
            </a>
            <a href="#" class="horizontal-item">
                <h3 class="horizontal-item-title">啊！设计</h3>
                <div class="horizontal-item-more">
                    <span class="horizontal-item-number">123</span>
                    在售
                </div>
            </a>
            <a href="#" class="horizontal-item">
                <h3 class="horizontal-item-title">啊！设计</h3>
                <div class="horizontal-item-more">
                    <span class="horizontal-item-number">123</span>
                    在售
                </div>
            </a>
            <a href="#" class="horizontal-item">
                <h3 class="horizontal-item-title">啊！设计</h3>
                <div class="horizontal-item-more">
                    <span class="horizontal-item-number">123</span>
                    在售
                </div>
            </a>
            <a href="#" class="horizontal-item">
                <h3 class="horizontal-item-title">啊！设计</h3>
                <div class="horizontal-item-more">
                    <span class="horizontal-item-number">123</span>
                    在售
                </div>
            </a>
            <a href="#" class="horizontal-item">
                <h3 class="horizontal-item-title">全部书单</h3>
                <div class="horizontal-item-more">
                    <span class="horizontal-item-number">58</span>
                    个
                </div>
            </a>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'HorizontalScroll'
}
</script>

<style lang="less" scoped>
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
