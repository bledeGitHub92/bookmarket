<template>
    <div class="book-brief">
        <header>
            <h2>简介和目录</h2>
            <div class="line"></div>
        </header>
        <div>
            <div :class="{'collapsed':switchState}">
                <div class="content">
                    <section>在这里，雪域之天堂触手可及。 在这里，记忆冲破时空的枷锁。 在这里，人们思索过去和未来。 在这里，失落的信仰终被寻回。 一本书，一个人，一份坚定的信仰，一种彻悟的力量。 一百余幅穿越时空的藏地影像，带你探寻三十年秘境记忆。
                    </section>
                    <section>徐家树，澳籍华人，摄影家，翻译家，旅行家。 国内最早深入拍摄藏地的摄影家之一。 英国皇家摄影学会高级会士，澳大利亚职业摄影家协会会员，中国摄影家协会会员。 曾获英国皇家摄影学会第130届国际摄影展银奖（曾在CCTV《新闻联播》中报道）、澳大利亚职业摄影协会全国摄影展览银 奖（1991年）、美国“Communication Arts”杰出摄影奖（1992年）等。作品曾登上《经济学家》杂志2003年1月封面。 二十世纪八十年代，因机缘巧合，有幸前往西藏，并为此着迷。三十年间，不惜远渡重洋，多次往返信仰之地，用无数张影像和随行记录，向藏地虔诚朝圣。 出版作品：《水云木石：风光摄影之道》（清华大学出版社，2014年） 译著：《世界的眼睛》（中国摄影出版社，2013年）《 美国〈生活〉杂志摄影师访谈录（1-4）》（中国摄影出版社，2013年）</section>
                    <section>【推荐序】朝圣记：影像与文字镌刻的天路心经 【缘•生】 夏河的夜 唤起内心的诉求 晒佛节上的信徒 与神耳语 【漫•行】 沱沱河边 停靠那曲 经幡 宫殿的山 记忆拉萨 那一瞬的虔诚 哲蚌寺里凝固的时光 朝圣布达拉宫 绿松石镶成的雍仲 “318”往事 白居寺佛眼 藏王的子孙 寻找昌珠寺 桑耶寺渡船 再逢晒佛节 藏地那些人儿 老朋友贡太 郎木寺法会 梵天的云 【尘•隐】 远离喧嚣的小镇 被遗忘的古城 六月血祭 约瑟夫•洛克曾经来过 【后记】我与西藏
                    </section>
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
