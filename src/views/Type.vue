<template>
  <div class="type">
    <div class="type-title">
      <div>
        <span />
        {{ TitleNwme }}
      </div>
    </div>
    <div class="type-rank">
      <div class="type-rank-item" v-for="item in rankook" :key="item.id">
        <p class="type-rank-item-chapter">{{ item.title }}</p>
        <p class="type-rank-item-chapter">
          <router-link to="/2/33">{{ item.chapter }}</router-link>
        </p>
        <p class="type-rank-item-auth">{{ item.audit }}</p>
        <p class="type-rank-item-auth">{{ item.auth }}</p>
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

  get TitleNwme() {
    let txt = "";
    if (this.typeId == 2) {
      txt = "玄幻小说列表";
    } else if (this.typeId == 3) {
      txt = "修真小说列表";
    } else if (this.typeId == 4) {
      txt = "都市小说列表";
    } else if (this.typeId == 5) {
      txt = "古言小说列表";
    } else if (this.typeId == 6) {
      txt = "历史小说列表";
    }
    return txt;
  }

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
.type {
  width: 100%;
  text-align: left;
  .type-title {
    width: 100%;
    background: #f6f6f6;
    & > div {
      width: 1280px;
      margin: 0 auto;
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
        margin-right: 12px;
        margin-bottom: 3px;
      }
    }
  }
}
.type-rank {
  width: 1280px;
  margin: 0 auto;
  margin-top: 17px;
  padding-bottom: 157px;
  .type-rank-item {
    width: 100%;
    height: 55px;
    border-bottom: 1px dashed #e6e6e6;
    display: flex;
    align-items: center;
    .type-rank-item-chapter {
      flex-grow: 5;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: rgba(51, 51, 51, 1);
      a {
        text-decoration: none;
        color: rgba(51, 51, 51, 1);
      }
    }
    .type-rank-item-auth {
      flex-grow: 3;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: rgba(51, 51, 51, 1);
    }
  }
}
.footer {
  background: rgba(245, 245, 245, 1);
  color: rgba(170, 170, 170, 1);
}
</style>
