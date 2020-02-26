<template>
  <div class="content">
    <div class="content-body">
      <div class="content-body-bread">
        当前位置：
        <span>首页</span>>
        <span>都市娱乐</span>>狐妃嚣:独宠高冷仙君
      </div>
      <div class="content-body-nav">
        <div class="content-body-nav-title">第一章</div>
        <div class="content-body-nav-title">
          <pre>
当王宝乐醒来的时候，在这梦境迷阵内，已经过去了一天的时间，蛇群的毒没有众人想象 中那么剧烈，随行的同学中有人擅长治疗蛇毒，也就使得王宝乐的美好愿望落空。 


好在随着他的苏醒，名叫周小雅的小白兔对他照顾无微不至，杜敏也罕见的没有与他针锋 相对，这就让王宝乐心底舒坦，心里又开始琢磨自己的救人表现，必然会被老师们看到，想来自 己这一次考核，应该能加分不少。 


他唯独郁闷的，就是在之后的几天里，团队众人穿梭丛林，寻找其他同学的路上，柳道斌也 不知道吃错了什么药，也许是因为之前的事情愧疚，所以一路上遇到一些小危机，总是抢着带人 出手，迅速化解，使得本就虚弱的王宝乐，没有丝毫表现的机会。 偏偏又没有出现如蛇群那般大的事件，这就让王宝乐觉得自己一身通天的本领，却没有用武 之地，满是郁闷中，只能看着柳道斌在那里不断刷考核分。 “这柳道斌再这么下去，说不定隐藏的考核分，就比我高了！”到了最后，王宝乐都焦急了， 不过这种情绪没有持续太久，第二天深夜时，在一处一线天的山体下扎营的他们，听到了一声声 凄厉的狼嚎。 那声音仿佛可以穿透山石，让所有人都耳骨刺痛，蓦然惊醒，纷纷望去时，立刻看到在他们 的前方，那无尽的丛林内亮起了一双双血红色的眼睛。 月光下数不尽的凶狼，成扇形包围而来，这些狼群有的在地面飞奔，有的则是跳跃在树枝上，口中发出的狼嚎，目中露出的嗜血，让人望之色变！ “好兄弟们，你们先走！”王宝乐正义凛然，大吼一声，可心底却在警惕，生怕别人和他抢分！ 在他看来，这些狼群，哪怕样子再狰狞，可却都是考核分啊。</pre>
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
export default class App extends Vue {}
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
    }
  }
}
.footer {
  background: #d7cdb9;
  color: rgba(148, 133, 113, 1);
}
</style>
