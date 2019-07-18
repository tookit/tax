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
    <van-divider></van-divider>
    <div style="padding:0 25px; text-align:left">
      <h3>标题</h3>
      <van-divider />
      <div class="fTentent">
        <p>
          <strong><span>（一）政策依据</span></strong>
        </p>
        <p>
          <span
            >《财政部　国家税务总局关于对电池涂料征收消费税的通知》（财税〔2015〕16号）第二条第一款。</span
          >
        </p>
        <p>
          <strong><span>（二）政策内容</span></strong>
        </p>
        <p>
          <a
            ><span
              >对无汞原电池、金属氢化物镍蓄电池（又称“氢镍蓄电池”或“镍氢蓄电池”）、锂原电池、锂离子蓄电池、太阳能电池、燃料电池和全钒液流电池免征消费税。</span
            ></a
          >
        </p>
        <p>
          <a
            ><strong><span>（三）政策执行期</span></strong></a
          >
        </p>
        <p>
          <span>自2015年2月1日起。</span>
        </p>
        <p>
          <a
            ><strong><span>（四）办理方式</span></strong></a
          >
        </p>
        <p>
          <span>纳税人向主管税务机关备案，提供以下资料：</span>
        </p>
        <p><span>1.</span><span>《纳税人减免税备案登记表》；</span></p>
        <p>
          <span>2.</span
          ><span
            >具有国家认证认可监督管理委员会或省级质量技术监督部门依法颁发、现行有效的《资质认定计量认证证书》（使用CMA徽标），且《资质认定计量认证证书》附表中具备相应电池、涂料检测项目的检测机构出具的产品检测报告复印件（复印件须加盖企业公章）、相关产品检测能力附表复印件,提交资料的复印件上应当有纳税人与原件一致声明的签章；</span
          >
        </p>
        <p><span>3.</span><span>《电池涂料免税产品型号清单》。</span></p>
        <p><br /></p>
      </div>
    </div>
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
