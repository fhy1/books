<template>
  <div class="type">
    <div class="type-title">
      <div>
        <span />
        {{ hashType[typeId] }}小说列表
      </div>
    </div>
    <div class="type-rank">
      <div class="type-rank-item" v-for="item in rankList" :key="item.novel_id">
        <p class="type-rank-item-chapter">
          <router-link :to="'/' + item.type_id + '/'  + item.novel_id">{{ item.name }}</router-link>
        </p>
        <p class="type-rank-item-chapter">
          <router-link
            :to="'/' + item.type_id + '/'  + item.novel_id + '/' + item.latest_chapter.chapter_id"
          >{{ item.latest_chapter.title }}</router-link>
        </p>
        <p class="type-rank-item-auth">{{item.serial_status == 1 ? '已完结' : '连载中'}}</p>
        <p class="type-rank-item-auth">{{ item.author }}</p>
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
import store from "@/store";
import api from "@/api";

@Component({
  components: { CFooter }
})
export default class App extends Vue {
  typeId: any = 1;
  rankList = [];

  get ListName() {
    return (store.state as any).position.ListName;
  }

  async recommendList(type_id: any) {
    this.rankList = [];
    let resData = await api.position.novelList({ type_id });
    this.rankList = resData;
  }

  get hashType() {
    return (store.state as any).position.hashType;
  }

  mounted() {
    this.typeId = this.$route.params.typeId;
    this.$store.commit("position/setActive", {
      activityId: this.typeId
    });
    this.recommendList(this.typeId);
  }

  beforeRouteUpdate(to: any, from: any, next: any) {
    next();
    this.typeId = this.$route.params.typeId;
    this.$store.commit("position/setActive", {
      activityId: this.typeId
    });
    this.recommendList(this.typeId);
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
      width: 400px;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      word-break: break-all;
      color: rgba(51, 51, 51, 1);
      a {
        text-decoration: none;
        color: rgba(51, 51, 51, 1);
      }
    }
    .type-rank-item-auth {
      width: 240px;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: rgba(51, 51, 51, 1);
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      word-break: break-all;
    }
  }
}
.footer {
  background: rgba(245, 245, 245, 1);
  color: rgba(170, 170, 170, 1);
}
</style>
