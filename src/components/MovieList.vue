<template>
    <div>
        <a @click.stop="detailShow"><img :src="item.image" /></a>
        <a @click.stop="detailShow"><h2>{{item.title}} <small>({{item.original_title}})</small></h2></a>
        <p>
            {{item.description}}
        </p>
        <a @click.stop="detailShow">more...</a>
    </div>
</template>
<script>
    import { useRouter } from 'vue-router';
    export default {
        props: ['item'],
        setup(props) {
            const router = useRouter();
            const detailShow = () => {
                router.push('/detail/' + props.item.id)
            }
            return {
                detailShow
            }
        }
    }
</script>
<style scoped>

</style>