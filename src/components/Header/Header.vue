<template>
  <div class="header">
    <div class="title">CONCEALED <span>FILMS</span></div>
    <div class="items">
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
export default {
    name: "Header",
    components: {
      NotificationIcon,
      ArrowIcon,
    }
}
</script>

<style lang="scss" scoped>
  .header {
    margin:0;
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 35px;
    .title {
      font-weight: 600;
      font-size: 23px;
      line-height: 28px;
      span {
        color: #D81F26
      }
    }
    .items {
      display: flex;
      gap: 2rem;
      margin-right: 105px;
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

</style>