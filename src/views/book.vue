<template>
  <div class="book">
    <div class="book-body">
      <div class="book-bread">
        <div>
          当前位置:
          <span class="isclick" @click="gotoHome">首页</span>
          <span>></span>
          <span class="isclick" @click="gotoType">{{ hashType[typeId] }}</span>
          <span>></span>
          {{ bookDetail.name }}
        </div>
      </div>
      <div class="book-nav">
        <img src="../assets/nopage.png" />
        <div>
          <p>{{ bookDetail.name }}</p>
          <p>{{ bookDetail.author }}</p>
          <p>{{ bookDetail.brief }}</p>
          <p @click="gotoRead">开始阅读</p>
        </div>
      </div>
      <div class="type-chapter">
        <div class="type-chapter-title">
          <span />
          章节列表
        </div>
      </div>
      <div class="book-item">
        <div class="book-item" v-for="item in rankook" :key="item.chapter_id">
          <router-link
            :to="'/' + bookDetail.type_id + '/' + bookDetail.novel_id + '/' + item.chapter_id"
          >{{ item.title }}</router-link>
        </div>
      </div>
      <div class="content-body-nav-end">
        <p>隔壁老王小说网提醒您：</p>
        <p>1.文学作品所描述的内容只是作者个人观点,与隔壁老王小说网的立场无关,本站只为书友提供阅读平台。</p>
        <p>2.《{{ bookDetail.name }}》是一本情节与文笔俱佳的书，情节跌宕起伏，扣人心弦，文笔优美，为了让《{{ bookDetail.name }}》作者{{ bookDetail.author }}能提供更多更好的作品，建议阅读并购买正版图书，或多多宣传本书和推荐，也是对《{{ bookDetail.name }}》作者{{ bookDetail.author }}的一种另类支持！</p>
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
import { Message } from "element-ui";
import api from "@/api";
import store from "@/store";

@Component({
  components: { CFooter }
})
export default class App extends Vue {
  typeId: any = 1;
  bookDetail: any = {};
  rankook: any = [];

  async getChapter(bookId: any) {
    let resData = await api.position.chapter({ novel_id: bookId });
    this.bookDetail = resData.novel_info;
    this.rankook = resData.chapter_list;
    let hashBook: any = {};
    resData.chapter_list.forEach((item: any) => {
      hashBook[item.chapter_id] = item.title;
    });
    this.$store.commit("book/set", {
      bookName: resData.novel_info.name,
      bookId: bookId,
      hashBook: hashBook
    });
  }

  get hashType() {
    return (store.state as any).position.hashType;
  }

  gotoHome() {
    this.$store.commit("position/setActive", {
      activityId: 0
    });
    this.$router.push({
      name: "Home"
    });
  }

  gotoType() {
    this.$router.push({
      name: "type",
      params: {
        typeId: this.typeId
      }
    });
  }

  gotoRead() {
    if (this.rankook.length > 0) {
      this.$router.push({
        name: "content",
        params: {
          typeId: this.typeId,
          bookId: this.bookDetail.novel_id,
          contantId: this.rankook[0].chapter_id
        }
      });
    } else {
      Message({
        message: "暂无更多章节",
        type: "warning"
      });
    }
  }

  mounted() {
    this.typeId = this.$route.params.typeId;
    this.$store.commit("position/setActive", {
      activityId: this.typeId + ""
    });
    this.getChapter(this.$route.params.bookId);
  }

  beforeRouteUpdate(to: any, from: any, next: any) {
    next();
    // parent.window.scrollTo(0, 0);
    this.typeId = this.$route.params.typeId;
    this.$store.commit("position/setActive", {
      activityId: this.typeId + ""
    });
    this.getChapter(this.$route.params.bookId);
    // this.recommendList(this.typeId);
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
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: #999999;
      span {
        margin: 3px;
        color: #333333;
      }
      .isclick {
        cursor: pointer;
        a {
          text-decoration: none;
          color: #333333;
        }
      }
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
        max-width: 730px;
        font-size: 26px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        word-break: break-all;
      }
      & > p:nth-child(2) {
        max-width: 730px;
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: rgba(170, 170, 170, 1);
        margin: 12px 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        word-break: break-all;
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
        word-break: break-all;
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
        cursor: pointer;
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
  .content-body-nav-end {
    margin-top: 20px;
    padding-bottom: 20px;
    p {
      margin-top: 10px;
      font-family: PingFangSC-Regular, "-apple-system", Simsun;
      font-size: 12px;
      line-height: 20px;
      text-align: left;
      color: #1a1a1a;
    }
  }
}
.footer {
  background: rgba(245, 245, 245, 1);
  color: rgba(170, 170, 170, 1);
}
</style>

