<template>
  <div id="app">
    <div class="story-head">
      <img
        src="./assets/laba.png"
      />本网站为非营利性质的网站，涉及的文学作品仅作为个人学习，研究，欣赏的用途，不用作商业用途；任何企业及个人不得转载，摘编，复制或利用其他方式使用本站所有内容;
    </div>
    <div class="story-logo">
      <img src="./assets/icon.png" alt />
      <div>
        <p class="story-logo-title">隔壁老王小说</p>
        <p class="story-logo-website">www.gblwxs.com</p>
      </div>
    </div>
    <div id="nav">
      <div class="nav">
        <router-link :key="item.id" v-for="item in navTitle" :to="item.rouerTo">
          <div class="nav-title" @click="changeType(item.id)">
            <div :class="active == item.id ? 'active' : ''">
              {{ item.title }}
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="app-body">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class App extends Vue {
  active: number | string = 1;
  navTitle = [
    {
      id: "1",
      title: "首页",
      rouerTo: "/"
    },
    {
      id: "2",
      title: "玄幻",
      rouerTo: "/2"
    },
    {
      id: "3",
      title: "修真",
      rouerTo: "/3"
    },
    {
      id: "4",
      title: "都市",
      rouerTo: "/4"
    },
    {
      id: "5",
      title: "古言",
      rouerTo: "/5"
    },
    {
      id: "6",
      title: "历史",
      rouerTo: "/6"
    }
  ];

  changeType(num: number) {
    console.log(num);
    this.active = num;
  }

  mounted() {
    this.active = this.$route.params.typeId;
  }
}
</script>

<style lang="less">
html,
body,
p,
div {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  min-width: 1280px;
}

.story-head {
  width: 100%;
  height: 36px;
  line-height: 36px;
  background-color: #fff4f4;
  color: #a14b52;
  text-align: center;
  font-size: 13px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  img {
    width: 12px;
    height: 12px;
    margin-right: 12px;
  }
}

.story-logo {
  margin: 0 auto;
  width: 1280px;
  height: 100px;
  display: flex;
  align-items: center;
  img {
    margin-right: 12px;
  }
  .story-logo-title {
    font-size: 22px;
    font-family: MFJianHei_Noncommercial-Regular, MFJianHei_Noncommercial;
    font-weight: 400;
    color: rgba(67, 67, 71, 1);
    text-align: left;
  }
  .story-logo-website {
    font-size: 12px;
    font-family: Helvetica;
    color: rgba(54, 54, 60, 1);
    letter-spacing: 2px;
    text-align: left;
  }
}

.app-body {
  width: 100%;
}

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
  // padding: 30px;

  // a {
  //   font-weight: bold;
  //   color: #2c3e50;

  //   &.router-link-exact-active {
  //     color: #42b983;
  //   }
  // }
}
</style>
