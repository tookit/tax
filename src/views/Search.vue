<template>
  <div>
    <van-nav-bar
      title="税费一本通"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <form action="/">
      <van-search placeholder="全书搜索" @search="onSearch" />
    </form>
    <van-grid :column-num="3">
      <van-grid-item
        v-for="value in 12"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="bookmark-o">目录</van-tabbar-item>
      <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      active: 0
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

</style>
