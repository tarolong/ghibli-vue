<template>
    <div class="movie-box">
        <a @click.stop="detailShow" class="a-img"><img :src="item.image" /></a>
        <a @click.stop="detailShow" class="a-title"><h2>{{item.title}} <small>({{item.original_title}})</small></h2></a>
        <p class="a-desc">
            {{item.description}}
        </p>
        <a @click.stop="detailShow"  class="a-more">more...</a>
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
    .movie-box {
        position: relative;
        display:block;
        cursor: pointer;
    }
    .a-img {
        position: relative;
        display: block;
        width: 100%;
        height: 400px;
        overflow: hidden;
        margin-bottom: 20px;
    }

    .a-img img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }
    .a-title{
        position: relative;
        display: block;
        margin-bottom: 20px;
        font-size: 18px;
    }
    .a-title small{
        position: relative;
        display: block;
        float: right;
        font-size: 12px;
        color: #999;
        margin-top: 10px;

    }
    .a-desc {
        position: relative;
        display: block;
        margin-bottom: 20px;
        font-size: 18px;
        color: #333;
    }
    .a-more {
        position: relative;
        display: block;
        margin-bottom: 20px;
        font-size: 12px;
        color: #333;
        float:right;
    }
</style>