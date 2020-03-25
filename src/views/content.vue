<template>
  <div class="content">
    <div class="content-body">
      <div class="content-body-bread">
        当前位置：
        <span class="isclick" @click="gotoHome">首页</span>
        <span>></span>
        <span class="isclick" @click="gotoType">{{ hashType[typeId] }}</span>
        <span>></span>
        {{ savebookName }}
      </div>
      <div class="content-body-nav">
        <div class="content-body-nav-title">
          <div>{{hashBook[contantId]}}</div>
          <div>
            <span class="isclick" @click="gotoUpChapter(chapterDetail.last_chapter_id)">上一章</span>
            <span>——</span>
            <span class="isclick" @click="gotoBook">章节目录</span>
            <span>——</span>
            <span class="isclick" @click="gotoDownChapter(chapterDetail.next_chapter_id)">下一章</span>
          </div>
        </div>
        <div class="content-body-nav-novel">
          <p v-for="(item,index) in contantList" :key="index">{{item}}</p>
        </div>
        <div class="content-body-nav-footer">
          <div @click="gotoBook">章节目录</div>
          <div @click="gotoUpChapter(chapterDetail.last_chapter_id)">上一章</div>
          <div @click="gotoDownChapter(chapterDetail.next_chapter_id)">下一章</div>
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
import { Message } from "element-ui";
import api from "@/api";
import store from "@/store";

@Component({
  components: { CFooter }
})
export default class App extends Vue {
  typeId: any = 1;
  contantId: any = "";
  bookDetail: any = {};
  hashBookTitle: any = {};
  chapterDetail: any = {
    last_chapter_id: 0,
    next_chapter_id: 0
  };
  contantList = [];

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

  gotoBook() {
    this.$router.push({
      name: "book",
      params: {
        typeId: this.typeId,
        bookId: this.savebookId
      }
    });
  }

  gotoUpChapter() {
    if (this.chapterDetail.last_chapter_id != 0) {
      this.$router.push({
        name: "content",
        params: {
          typeId: this.typeId,
          bookId: this.savebookId,
          contantId: this.chapterDetail.last_chapter_id
        }
      });
    } else {
      Message({
        message: "暂无更多章节",
        type: "warning"
      });
    }
  }

  gotoDownChapter(contentId: any) {
    if (this.chapterDetail.next_chapter_id != 0) {
      this.$router.push({
        name: "content",
        params: {
          typeId: this.typeId,
          bookId: this.savebookId,
          contantId: this.chapterDetail.next_chapter_id
        }
      });
    } else {
      Message({
        message: "暂无更多章节",
        type: "warning"
      });
    }
  }

  async getChapterNovel(chapterId: any) {
    this.contantList = [];
    let resData = await api.position.chapterNovel({ chapter_id: chapterId });
    this.chapterDetail = resData;
    this.contantList = resData.content.split(/[(\r\n)\r\n]+/);
  }

  async getChapter(bookId: any) {
    let resData = await api.position.chapter({ novel_id: bookId });
    // this.bookDetail = resData.novel_info;
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

  get savebookName() {
    return (store.state as any).book.bookName;
  }
  get savebookId() {
    return (store.state as any).book.bookId;
  }
  get hashBook() {
    return (store.state as any).book.hashBook;
  }

  mounted() {
    this.typeId = this.$route.params.typeId;
    this.contantId = this.$route.params.contantId;
    this.$store.commit("position/setActive", {
      activityId: this.typeId
    });
    if (this.$route.params.bookId != this.savebookId) {
      this.getChapter(this.$route.params.bookId);
    }
    this.getChapterNovel(this.contantId);
  }

  beforeRouteUpdate(to: any, from: any, next: any) {
    next();
    this.typeId = this.$route.params.typeId;
    this.contantId = this.$route.params.contantId;
    this.$store.commit("position/setActive", {
      activityId: this.typeId
    });
    this.getChapter(this.$route.params.bookId);
    this.getChapterNovel(this.contantId);
  }
}
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  background: #d7cdb9;
  .content-body {
    width: 960px;
    margin: 0 auto;
    text-align: left;
    .content-body-bread {
      height: 80px;
      line-height: 80px;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: rgba(80, 72, 58, 1);
      span {
        margin: 3px;
      }
      .isclick {
        cursor: pointer;
        a {
          text-decoration: none;
          color: rgba(80, 72, 58, 1);
        }
      }
    }
    .content-body-nav {
      width: 100%;
      background-color: #f8eeda;
      padding: 0 100px;
      .content-body-nav-title {
        border-bottom: 1px solid rgba(215, 205, 185, 1);
        & > div:nth-child(1) {
          width: 100%;
          font-size: 28px;
          font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
          font-weight: bold;
          color: rgba(79, 59, 43, 1);
          padding: 76px 0 12px 0;
          text-align: center;
        }
        & > div:nth-child(2) {
          width: 100%;
          padding-bottom: 19px;
          border-bottom: 1px;
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: rgba(107, 85, 69, 1);
          text-align: center;
          span {
            margin: 0 4px;
          }
          .isclick {
            cursor: pointer;
          }
        }
      }
    }
    .content-body-nav-novel {
      p {
        text-indent: 36px;
        font-size: 18px;
        font-family: MicrosoftYaHei;
        color: rgba(70, 53, 41, 1);
        margin: 40px;
        letter-spacing: 2px;
      }
    }
    .content-body-nav-footer {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 91px 0 100px;
      & > div {
        height: 60px;
        line-height: 60px;
        text-align: center;
        cursor: pointer;
      }
      & > div:nth-child(1) {
        width: 215px;
        background: rgba(240, 231, 211, 1);
      }
      & > div:nth-child(2) {
        width: 215px;
        background: rgba(161, 47, 36, 0.1);
      }
      & > div:nth-child(3) {
        width: 310px;
        background: rgba(240, 231, 211, 1);
      }
    }
  }
}
.footer {
  background: #d7cdb9;
  color: rgba(148, 133, 113, 1);
}
</style>
