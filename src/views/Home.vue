<template>
  <div class="home">
    <div>
      <van-image src="/logo_1.png" />
      <van-image src="/title.png" width="370" />      
    </div>

  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      active: 0,
    }
  },
  methods: {
    onSearch() {

    },
    onCancel() {

    },
    onClickLeft() {

    },
    onClickRight() {

    },

  }
};
</script>

<style lang="less">
  .home {
    height:100vh;
    background: url('/bg.jpg') no-repeat center center;
  }
</style>
