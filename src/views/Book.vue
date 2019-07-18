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
    <van-cell
      :title="item.title"
      icon="label-o"
      to="/"
      v-for="item in chapters"
      :key="item.title"
    >
      <van-icon slot="right-icon" name="arrow" style="line-height: inherit;" />
    </van-cell>
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
      active: 0,
      chapters: [
        {
          title: '一、节能环保——节能环保电池免税',
        },
        {
          title: '二、节能环保——节能环保电池免税',
        },
        {
          title: '三、节能环保——节能环保电池免税',
        },
        {
          title: '四、节能环保——节能环保电池免税',
        }
      ]
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
