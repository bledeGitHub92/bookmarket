<template>
    <div class="book-brief">
        <header>
            <h2>简介和目录</h2>
            <div class="line"></div>
        </header>
        <div>
            <div :class="{'collapsed':switchState}">
                <div class="content">
                    <section>{{summary}}</section>
                    <section>{{authorIntro}}</section>
                    <section>{{catalog}}</section>
                </div>
            </div>
            <div @click="toggleContent" class="switch">
                <button v-show="switchState" type="button">
                    <span>查看简介和目录</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="icon">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
                <button v-show="!switchState" type="button">
                    <span>收起</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="icon">
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BookBrief',
    props: {
        summary: { type: String, required: true },
        authorIntro: { type: String, required: true },
        catalog: { type: String, required: true },
    },
    data() {
        return {
            switchState: true,
        }
    },
    methods: {
        toggleContent() {
            this.switchState = !this.switchState;
        }
    }
}
</script>

<style lang="less" scoped>
.book-brief {
    header {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        h2 {
            color: #aaa;
            font-size: 13px;
            font-weight: normal;
        }
        .line {
            flex-grow: 1;
            margin-left: 12px;
            border-top: 1px solid #f2f2f2;
        }
    }
    .collapsed {
        max-height: 110px;
        overflow: hidden;
    }
    .content {
        font-size: 15px;
        section {
            text-indent: 2em;
            line-height: 1.8;
            // white-space: pre-wrap;
            overflow-wrap: break-word;
            margin-bottom: 24px;
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
    .switch {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 12px;
        button {
            color: #18c3aa;
            font-size: 13px;
            border: none;
            background-color: transparent;
            padding: 5px 13px;
        }
    }
}
</style>