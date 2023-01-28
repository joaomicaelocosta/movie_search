<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  },
  beforeCreate() {
    this.$store.dispatch('getGenreList');
  }
}
</script>

<style>

@font-face {
  font-family: 'Inter';
  src: url("~@/assets/fonts/Inter-Regular.ttf") format('truetype');;
}
html{
  font-family: 'Inter';
  text-align: center;
  color: #ffffff;
  background-color: #09131A;
}
body {
  width: 1440px;
  display: flex;
  text-align: center;
  margin:auto;
}
#app{
  width: 100%;
}
</style>
