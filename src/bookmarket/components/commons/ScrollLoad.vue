<template>
    <div class="scroll-load">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ScrollLoad',
    props: {
        limit: { type: Number, default: 120 },
        scrollSwitch: { type: Boolean, required: true }
    },
    methods: {
        triggerEvent() {
            if (this.scrollSwitch) {
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
                    viewportHeight = document.documentElement.clientHeight,
                    browserHeight = document.documentElement.scrollHeight;

                if ((browserHeight - viewportHeight - scrollTop) <= this.limit) {
                    this.$emit('getLimit')
                }
            }
        }
    },
    mounted() {
        console.log('scroll-load mounted');
        document.addEventListener('scroll', this.triggerEvent, false);
    },
    beforeDestroy() {
        document.removeEventListener('scroll', this.triggerEvent, false);
    },
}
</script>

<style lang="less" scoped>

</style>
