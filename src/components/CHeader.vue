<template>
  <div id="nav">
    <div class="nav">
      <el-tabs style="width:1280px;" :value="active" @tab-click="changeType">
        <el-tab-pane
          v-for="item in navTitle"
          :key="item.typeId"
          :label="item.title"
          :name="item.typeId+''"
        />
      </el-tabs>
      <!-- <router-link :key="item.typeId" v-for="item in navTitle" :to="item.rouerTo">
        <div class="nav-title" @click="changeType(item.typeId)">
          <div :class="active == item.typeId ? 'active' : ''">{{ item.title }}</div>
        </div>
      </router-link>-->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import api from "@/api";
import store from "@/store";

@Component
export default class CHeader extends Vue {
  navTitle: any[] = [
    {
      typeId: 0,
      title: "首页",
      rouerTo: "/"
    }
  ];

  async fetchType() {
    let resData = await api.position.novelType();
    let hashType: any = {};
    resData.forEach((item: any) => {
      this.navTitle.push({
        typeId: item.type_id,
        title: item.name,
        rouerTo: "/" + item.type_id
      });
      hashType[item.type_id] = item.name;
    });
    return hashType;
  }

  get active() {
    return (store.state as any).position.activityId;
  }

  async changeType(tab: any) {
    const num = tab.name;
    if (tab.name != this.active) {
      if (num == 0) {
        this.fetchHome();
        this.$router.push({
          name: "Home"
        });
      } else {
        this.fetchTypeList(num);
        this.$router.push({
          name: "type",
          params: {
            typeId: num
          }
        });
      }
      this.$store.commit("position/setActive", {
        activityId: num
      });
    }
  }

  async fetchTypeList(typeId: any) {
    let resData = await api.position.novelList({ type_id: typeId });
  }

  async fetchHome() {
    let resData = await api.position.positionNovel();
    const recommendList = resData[1][0];
    const hotList = resData[2][0];
    return { recommendList, hotList };
  }

  async mounted() {
    const hashType = await this.fetchType();
    const { recommendList, hotList } = await this.fetchHome();
    this.$store.commit("position/set", {
      recommendList,
      hotList,
      hashType
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#nav {
  width: 100%;
  height: 48px;
  border-bottom: 1px solid #e8e8e8;
  .nav {
    width: 1280px;
    margin: 0 auto;
    display: flex;
    a {
      text-decoration: none;
    }
    .nav-title {
      height: 48px;
      line-height: 48px;
      font-size: 16px;
      color: rgba(0, 0, 0, 1);
      font-family: MicrosoftYaHei;
      padding-right: 96px;
    }
    .active {
      height: 48px;
      line-height: 48px;
      border-bottom: 3px solid #861915;
      color: #861915;
    }
  }
}
</style>
