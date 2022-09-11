<template>
    <div>
        <a href="#"><img :src="item.image" /></a>
        <a href="#"><h2>{{item.title}} <small>({{item.original_title}})</small></h2></a>
        <p>
            {{item.description}}
        </p>
        <a href="#">more...</a>
    </div>
</template>
<script>
    export default {
        props: ['item'],
        setup() {
            return {}
        }
    }
</script>
<style scoped>

</style>