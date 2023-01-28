<template>
  <div class="card">
    <img :src="'https://image.tmdb.org/t/p/w500' + data.poster_path" alt="">
    <div class="title">{{data.title}}</div>
    <div class="info">
        <div>2h22 | {{genre}} | {{data.release_date}}</div>
    </div>
    <div class="rating">
        <div>{{data.vote_average}}/10 </div>
        <StarIcon />
    </div>
  </div>
</template>

<script>
import StarIcon from '@/assets/imgs/Star.vue'
export default {
    name: "Card",
    props: ['data'],
    components: {
        StarIcon,
    },
    computed: {
        genre() {
            return this.$store.state.genreList.values.find(el => el.id == this.data.genre_ids[0]) ? this.$store.state.genreList.values.find(el => el.id == this.data.genre_ids[0]).name : 'Drama'
        }
    }

}
</script>

<style lang="scss">
.card {
    width: 240px;
    text-align: left;
    margin-bottom: 40px;
    img {
        width: 240px;
        height: 362px;
        border-radius: 12px;
        margin-bottom: 24px;
    }
    .title {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 8px
    }
    .info {
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: rgba(255, 255, 255, 0.6);
        margin-bottom:18px;
    }
    .rating {
        background: rgba(255, 255, 255, 0.08);
        border-radius: 8px;
        font-weight: 400;
        font-size: 14px;
        width: 70px;
        line-height: 17px;
        padding: 6px 8px;
        display: flex;
        justify-content: space-between;
    }

}
</style>