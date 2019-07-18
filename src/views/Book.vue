<template>
  <div>
    <van-nav-bar
      style="height:74px;line-height:74px;background:#0b6dd0;color:#fff!important;"
      right-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon slot="left" name="/logo.png" size="50px" />
      <div slot="title" style="color:#fff">
        优惠税费政策一本通
      </div>
      <div slot="right">
        <van-icon name="arrow-left" color="#fff" size="18px"/>
        <span class="van-nav-bar__text" style="color:#fff">返回</span>
      </div>
    </van-nav-bar>
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
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="bookmark-o" to="/books">目录</van-tabbar-item>
      <van-tabbar-item icon="arrow-left" to="/settings">返回</van-tabbar-item>
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
