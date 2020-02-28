<template>
  <div>
    <div class="banana">
      <div>
        <swiper style="height: 100%;" :options="swiperOption" ref="mySwiper">
          <swiper-slide>
            <img style="width:100%;height:100%" src />
          </swiper-slide>
          <swiper-slide>
            <img style="width:100%;height:100%" src />
          </swiper-slide>
          <swiper-slide>
            <img style="width:100%;height:100%" src />
          </swiper-slide>
          <swiper-slide>
            <img style="width:100%;height:100%" src />
          </swiper-slide>
          <div class="swiper-pagination" style slot="pagination"></div>
        </swiper>
      </div>
      <div>
        <div>
          <p>御鬼狂妃：高冷王爷太撩人！</p>
          <p>
            入目鲜红，她穿越了，作为一个游走于黑暗的杀手，残酷训练，茹毛
            嗜血，可笑一朝穿越，却变成穿着嫁衣的新娘，世人笑她无能而懦…
          </p>
        </div>
        <div>
          <p>蒙动您心眸含星辰</p>
          <p>
            神秘千金重回故地，看偌大之同城谁与之争锋？‘我是一个计较的
            人，这三年的帐我们慢慢算’蒙含辰。 ‘她经历过非人的折磨势必…
          </p>
        </div>
        <div>
          <p>重生之都市投资天王</p>
          <p>
            曾乐重生了，他带着前世的记忆回到了2012年，斩获了千万彩票大奖
            只是第一步，21世纪什么最重要？ 人才！我曾乐不投资那些俗物要…
          </p>
        </div>
      </div>
    </div>
    <div class="home">
      <div class="home-title">
        <div />
        <span>热门必读小说</span>
      </div>
      <div class="home-hot-book">
        <div v-for="item in hotList" :key="item.novel_id">
          <img src="../assets/nopage.png" />
          <div class="home-hot-book-right-txt">
            <p class="hop-right-title">{{ item.name }}</p>
            <p class="hop-right-auth">{{ item.author }}</p>
            <p class="hop-right-detail">{{ item.brief }}</p>
          </div>
        </div>
      </div>
      <div class="home-title">
        <div />
        <span>最新小说排行</span>
      </div>
      <div class="home-rank">
        <div class="home-rank-item" v-for="(item, index) in recommendList" :key="item.novel_id">
          <p class="home-rank-item-chapter">
            <span
              :class="[
                'home-rank-item-square',
                index == 0
                  ? 'red'
                  : index == 1
                  ? 'orange'
                  : index == 2
                  ? 'yellow'
                  : ''
              ]"
            >{{ index + 1 }}</span>
            {{ item.name }}
          </p>
          <p class="home-rank-item-chapter">
            <router-link to="/2/33">{{ item.latest_chapter.title }}</router-link>
          </p>
          <p class="home-rank-item-auth">{{item.serial_status == 1 ? '已完结' : '连载中'}}</p>
          <p class="home-rank-item-auth">{{ item.author }}</p>
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
import store from "@/store";
import CFooter from "../components/CFooter.vue";
import CHeader from "../components/CHeader.vue";

@Component({
  components: { CFooter, CHeader }
})
export default class App extends Vue {
  active = 1;
  swiperOption = {
    autoplay: {
      delay: 3000 //1秒切换一次
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };

  get mySwiper(): any {
    return this.$refs.mySwiper;
  }

  mounted() {
    this.mySwiper.swiper.slideTo(0, 1000, false);
  }

  get hotList() {
    return (store.state as any).position.hotList;
  }

  get recommendList() {
    return (store.state as any).position.recommendList;
  }

  beforeRouteUpdate() {
    console.log(this.$router);
  }
}
</script>

<style lang="less" scoped>
.home {
  text-align: left;
  margin: 0 auto;
  width: 1280px;
}
.home-title {
  height: 26px;
  line-height: 26px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  div {
    display: inline-block;
    vertical-align: middle;
    width: 5px;
    height: 20px;
    background-color: #cd4c4c;
    margin-right: 12px;
  }
}
.home-hot-book {
  width: 100%;
  margin-top: 17px;
  margin-bottom: 43px;
  display: flex;
  flex-wrap: wrap;
  & > div {
    width: 25%;
    padding: 16px 0;
    display: flex;
    img {
      width: 96px;
      height: 128px;
    }
    .home-hot-book-right-txt {
      padding: 0 13px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .hop-right-title {
        font-size: 18px;
        font-family: MicrosoftYaHei;
        color: rgba(51, 51, 51, 1);
      }
      .hop-right-auth {
        font-size: 12px;
        font-family: MicrosoftYaHei;
        color: rgba(170, 170, 170, 1);
        margin: 8px 0 16px;
      }
      .hop-right-detail {
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: rgba(102, 102, 102, 1);
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
  }
}

.home-rank {
  margin-top: 17px;
  padding-bottom: 36px;
  .home-rank-item {
    width: 100%;
    height: 55px;
    border-bottom: 1px dashed #e6e6e6;
    display: flex;
    align-items: center;
    .home-rank-item-chapter {
      width: 400px;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: rgba(51, 51, 51, 1);
      a {
        color: rgba(51, 51, 51, 1);
        text-decoration: none;
      }
      .home-rank-item-square {
        display: inline-block;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        background-color: #dcdcdc;
        font-size: 12px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        margin-right: 14px;
      }
      .red {
        background-color: #cd4c4c;
      }
      .orange {
        background-color: #fd7c37;
      }
      .yellow {
        background-color: #ffcb3a;
      }
    }
    .home-rank-item-auth {
      width: 240px;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: rgba(51, 51, 51, 1);
    }
  }
}

.banana {
  width: 1280px;
  margin: 12px auto 25px;
  display: flex;
  & > div:nth-child(1) {
    width: 860px;
    height: 330px;
  }
  & > div:nth-child(2) {
    width: 420px;
    height: 330px;
    padding-left: 24px;
    & > div {
      width: 100%;
      height: 110px;
      display: flex;
      justify-content: center;
      border-bottom: 1px solid #d8d8d8;
      flex-direction: column;
      text-align: left;
      & > p:nth-child(1) {
        font-size: 18px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: rgba(67, 67, 71, 1);
        margin-bottom: 8px;
      }
      & > p:nth-child(2) {
        font-size: 13px;
        line-height: 20px;
        font-family: MicrosoftYaHei;
        color: rgba(67, 67, 71, 1);
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
  }
}

.swiper-pagination {
  text-align: right;
  padding-right: 24px;
}

.footer {
  background: rgba(245, 245, 245, 1);
  color: rgba(170, 170, 170, 1);
}
</style>
