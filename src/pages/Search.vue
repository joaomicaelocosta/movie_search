<template>
  <div class="section">
    <img src="../assets/imgs/background_image.png" alt="">
    <h3>Search by movie name:</h3>
    <div class="input-field">
      <SearchIcon class="icon"/>
      <input v-model="query" type="text"  v-on:keyup.enter="search">
    </div>
  </div>
</template>

<script>
import SearchIcon from '@/assets/imgs/SearchIcon.vue'
import axios from "axios";

export default {
  name: 'Search',
  components: {
    SearchIcon,
  },
  data() {
    return {
      query:'',
    }
  },
  methods: {
    async search() {
      if(this.query) {
        await axios.get('https://api.themoviedb.org/3/search/movie?api_key=37806dd1300837fa217e0539b5252818&query='+this.query, {
            headers: {
                'Content-Type' : 'application/json;charset=utf-8',
            }
        }).then((res) => {
          this.$store.dispatch('getMovieLoad', {...res.data, query:this.query})
          this.$router.push("/list")
        })
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.section {
 margin-top: 10rem;
}
.input-field {
  position: relative;
  width: 462px;
  height: 40px;
  margin: auto;
  cursor: pointer;
  .icon {
    position: absolute;
    top: 50%;
    transform: translate( -50%, -50%);
    left: 1.5rem;    
  }
  input {
    border: 1px solid #363B3F;
    background-color: #09131A;
    border-radius: 12px;
    height: 100%;
    width: 100%;
    color: #ffffff;
    text-indent: 2.5rem;
  }
}
</style>
