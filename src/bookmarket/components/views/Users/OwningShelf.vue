<template>
    <div class="owning-shelf">
        <div class="bookshelf-content">
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'OwningShelf',
    props: ['id'],
    beforeRouteEnter(to, from, next) {
        console.log('owning enter');
        next();
    },
}
</script>

<style lang="less" scoped>

</style>

