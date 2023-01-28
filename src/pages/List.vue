<template>
  <div class="section">
    <div class="row">
        <div class="result_info">
            <div class="result_name">Results for '{{query}}'</div>
            <div class="result_count">We found {{count}} results for '{{query}}'</div>
        </div>
        <div class="order">
            <select name="order">
                <option value="asc">Sort by Name: Ascending</option>
                <option value="desc">Sort by Name: Descending</option>
            </select>
        </div>
    </div>
    <div class="movie_list" v-if="movieList.length > 0">
        <Card v-for="(movie, i) in movieList"  :key="i" :data="movie"/>
    </div>
    <div class="section" v-else>
        <h2>No movie found</h2>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card/Card.vue'
export default {
    name:"List",
    components: {
        Card,
    },
    data() {
        return {
        }
    },
    computed: {
        movieList() {
            return this.$store.state.movies;
        },
        query() {
            return this.$store.state.query ? this.$store.state.query : 'No Search';
        },
        count() {
            return this.$store.state.count ? this.$store.state.count : 0;
        }
    }

}
</script>

<style lang="scss">
.section {
    margin-top: 10rem;
}
.row {
    display: flex;
    justify-content: space-between;
    padding: 0 40px;

    .result_info {
        text-align: left;
        .result_name {
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
        }
        .result_count {
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: rgba(255, 255, 255, 0.6);
        }
    }
    .order {
        width: 253px;
        height: 40px;
        select {
            background-color: #09131A;
            border: 1px solid rgba(102, 105, 106, 0.2);
            border-radius: 8px;
            width: 100%;
            height: 100%;
            color: #ffffff;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
        }
    }
}
</style>