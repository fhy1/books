<template>
  <div class="book">
    <div class="book-body">
      <div class="book-bread">
        <div>当前位置: 首页</div>
      </div>
      <div class="book-nav">
        <img src />
        <div>
          <p>狐妃嚣张： 独宠高冷仙君</p>
          <p>木子已饼</p>
          <p>心有乾坤性有种、胸中五气穿云霄。饮尽三千神魔血、踏碎凌霄万重天。 少年背负老祖遗愿，踏上了复仇的修仙之路。他炼神山、吞火海、熔江河、摘日月星辰，谱写出一条 惊天动地的旅程。（建了一个QQ群，群号：664215883。喜欢的朋友可以进来交流一下。）</p>
          <p>开始阅读</p>
        </div>
      </div>
      <div class="type-chapter">
        <div class="type-chapter-title">
          <span />
          章节列表
        </div>
      </div>
      <div class="book-item">
        <div class="book-item" v-for="item in rankook" :key="item.id">
          <router-link to="/2/33/444">{{ item.chapter }}</router-link>
        </div>
      </div>
    </div>
    <div class="footer">
      <c-footer />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CFooter from "../components/CFooter.vue";

@Component({
  components: { CFooter }
})
export default class App extends Vue {
  typeId: any = 1;

  rankook = [
    {
      id: "1",
      title: "绝世武神",
      chapter: "第九章 惊人效果",
      audit: "连载中",
      auth: "零幺七"
    },
    {
      id: "2",
      title: "绝世武神",
      chapter: "第九章 惊人效果",
      audit: "连载中",
      auth: "零幺七"
    },
    {
      id: "3",
      title: "绝世武神",
      chapter: "第九章 惊人效果",
      audit: "连载中",
      auth: "零幺七"
    },
    {
      id: "4",
      title: "绝世武神",
      chapter: "第九章 惊人效果",
      audit: "连载中",
      auth: "零幺七"
    },
    {
      id: "5",
      title: "绝世武神",
      chapter: "第九章 惊人效果",
      audit: "连载中",
      auth: "零幺七"
    },
    {
      id: "6",
      title: "绝世武神",
      chapter: "第九章 惊人效果",
      audit: "连载中",
      auth: "零幺七"
    },
    {
      id: "7",
      title: "绝世武神",
      chapter: "第九章 惊人效果",
      audit: "连载中",
      auth: "零幺七"
    },
    {
      id: "8",
      title: "绝世武神",
      chapter: "第九章 惊人效果",
      audit: "连载中",
      auth: "零幺七"
    },
    {
      id: "9",
      title: "绝世武神",
      chapter: "第九章 惊人效果",
      audit: "连载中",
      auth: "零幺七"
    },
    {
      id: "10",
      title: "绝世武神",
      chapter: "第九章 惊人效果",
      audit: "连载中",
      auth: "零幺七"
    }
  ];

  mounted() {
    this.typeId = this.$route.params.typeId;
  }

  beforeRouteUpdate(to: any, from: any, next: any) {
    next();
    console.log(22222222222222);
    this.typeId = this.$route.params.typeId;
  }
}
</script>

<style lang="less" scoped>
.book {
  width: 100%;
  .book-body {
    width: 1280px;
    margin: 0 auto;
    text-align: left;
    .book-bread {
      margin: 30px 0;
    }
  }

  .book-nav {
    display: flex;
    margin-bottom: 24px;
    img {
      width: 180px;
      height: 240px;
      margin-right: 35px;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      & > p:nth-child(1) {
        font-size: 26px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
      }
      & > p:nth-child(2) {
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: rgba(170, 170, 170, 1);
        margin: 12px 0;
      }
      & > p:nth-child(3) {
        max-width: 730px;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: rgba(102, 102, 102, 1);
        margin-bottom: 25px;
      }
      & > p:nth-child(4) {
        width: 217px;
        text-align: center;
        height: 40px;
        line-height: 40px;
        background: rgba(161, 47, 36, 1);
        border-radius: 2px;
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: rgba(255, 255, 255, 1);
      }
    }
  }

  .type-chapter-title {
    width: 100%;
    background: #f6f6f6;
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    span {
      display: inline-block;
      vertical-align: middle;
      width: 5px;
      height: 20px;
      background-color: #cd4c4c;
      margin-right: 17px;
      margin-bottom: 3px;
    }
  }
  .book-item {
    width: 100%;
    // border-bottom: 1px dashed #e6e6e6;
    display: flex;
    flex-wrap: wrap;
    & > div {
      width: 100%/3;
      height: 55px;
      line-height: 55px;
      border-bottom: 1px dashed #e6e6e6;
      a {
        text-decoration: none;
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: rgba(51, 51, 51, 1);
      }
    }
  }
}
.footer {
  background: rgba(245, 245, 245, 1);
  color: rgba(170, 170, 170, 1);
}
</style>

