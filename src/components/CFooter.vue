<template>
  <div class="footer">
    <p>本站所有书籍搜索采集于互联网，是本站自动蜘蛛爬行，无人工干预，本站鼓励广大文学爱好者通过本站发现优秀网络小说及其提供商，并让更多文学爱好者欣赏文学作品。</p>
    <p>版权所有©2015-2022隔壁老王小说网保留所有权利</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CFooter extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.footer {
  width: 100%;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > p:nth-child(1) {
    margin-bottom: 5px;
  }
  p {
    font-size: 12px;
    font-family: MicrosoftYaHei;
    text-align: center;
  }
}
</style>
