<template>
  <div>
    <van-nav-bar
      style="height:56px;line-height:56px;background:#0b6dd0;color:#fff"
      left-text="返回"
      right-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <div slot="title" style="color:#fff">
        <!-- <van-image src="/logo.png" width="50px" alt="" /> -->
        优惠税费政策一本通
      </div>
    </van-nav-bar>
    <form action="/">
      <van-search placeholder="全书搜索" @search="onSearch" />
    </form>
    <van-grid :column-num="3">
      <van-grid-item v-for="book in books" :key="book.title" :text="book.desc">
        <van-image :src="book.cover"></van-image>
        <h3 style="margin-bottom:5px">{{ book.title }}</h3>
        <h2 class="book__title">{{ book.desc }}</h2>
      </van-grid-item>
    </van-grid>
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="bookmark-o" to="/books">目录</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/settings">设置</van-tabbar-item>
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
      books: [
        {
          title: '第一篇',
          desc: '增值税优惠政策',
          cover: 'http://ss.kyhdmedia.com/static/home/img/book1.png'
        },
        {
          title: '第二篇',
          desc: '增值税优惠政策',
          cover: 'http://ss.kyhdmedia.com/static/home/img/book2.png'
        },
        {
          title: '第三篇',
          desc: '增值税优惠政策',
          cover: 'http://ss.kyhdmedia.com/static/home/img/book3.png'
        },
        {
          title: '第四篇',
          desc: '增值税优惠政策',
          cover: 'http://ss.kyhdmedia.com/static/home/img/book4.png'
        },
        {
          title: '第五篇',
          desc: '增值税优惠政策',
          cover: 'http://ss.kyhdmedia.com/static/home/img/book5.png'
        },
        {
          title: '第六篇',
          desc: '增值税优惠政策',
          cover: 'http://ss.kyhdmedia.com/static/home/img/book6.png'
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
  h2.book__title {
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    color: rgba(69,90,100,.6);
  }
</style>
