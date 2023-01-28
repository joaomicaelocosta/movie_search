<template>
  <div class="header">
    <div class="title" @click="$router.push('/').catch(()=>{})">CONCEALED <span>FILMS</span></div>
    <div class="items">
      <div class="input-field" v-if="isList">
        <SearchIcon class="icon"/>
        <input v-model="query" type="text"  v-on:keyup.enter="search">
      </div>
      <NotificationIcon/>
      <div class="user_icon">
        <img src="../../assets/imgs/user_image.png" alt="">
        <ArrowIcon class="arrow" />
      </div>
      
    </div>
  </div>
</template>

<script>
import NotificationIcon from '@/assets/imgs/Notifications.vue'
import ArrowIcon from '@/assets/imgs/Arrow.vue'
import SearchIcon from '@/assets/imgs/SearchIcon.vue'
import axios from 'axios'

export default {
    name: "Header",
    components: {
      NotificationIcon,
      ArrowIcon,
      SearchIcon
    },
    data() {
      return {
        query: '',
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
          })
        }
    }
    },
    computed: {
      isList() {
        return this.$route.name == "List"
      }
    }
}
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 35px;
    .title {
      font-weight: 600;
      font-size: 23px;
      line-height: 28px;
      cursor: pointer;
      span {
        color: #D81F26
      }
    }
    .items {
      display: flex;
      gap: 2rem;
      & > * {
        display: flex;
        margin: auto;
      }
      .user_icon {
        display: flex;
        gap: 0.5rem;
        .arrow {
          display:flex;
          margin: auto;
        }
      }
    } 
  }
.input-field {
  position: relative;
  width: 284px;
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