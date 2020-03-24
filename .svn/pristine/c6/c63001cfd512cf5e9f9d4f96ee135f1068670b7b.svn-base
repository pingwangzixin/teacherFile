<template >
  <div>
    <tableFile v-if="flag=='个人档案'"></tableFile>
    <teaFirstDegree  v-if="flag=='第一学历'" ></teaFirstDegree>
    <teaSickLeave v-if="flag=='长病假记录'"></teaSickLeave>

    <teaAssessments v-if="flag=='年度考核'"></teaAssessments>
    <teaClassAgree v-if="flag=='课堂满意度'"></teaClassAgree>
    <teaTeachCase v-if="flag=='任课情况'"></teaTeachCase>
    <teaListenClass v-if="flag=='听课情况'"></teaListenClass>
    <teaProName v-if="flag=='专业型称号'"></teaProName>
  </div>
</template>

<script>
import tableFile from "@/components/teaTablePart/tableFile.vue"; //个人基本信息
import teaProName from "@/components/teaTablePart/teaProName.vue"; //专业型称号
import teaAssessments from "@/components/teaTablePart/teaAssessments.vue"; //年度考核
import teaClassAgree from "@/components/teaTablePart/teaClassAgree.vue"; //年度考核
import  teaFirstDegree from "@/components/teaTablePart/teaFirstDegree";//第一学历
import  teaSickLeave  from '@/components/teaTablePart/teaSickLeave';//长病假记录
import teaTeachCase from '@/components/teaTablePart/teaTeachCase';//任课情况
import teaListenClass from '@/components/teaTablePart/teaListenClass';//听课情况

export default {
  props: ["tabChange"],
  data() {
    return {
      flag: "个人档案", //选项卡切换
    };
  },
  components: {
    tableFile,
    teaProName,
    teaAssessments,
    teaClassAgree,
     teaFirstDegree,
     teaSickLeave,
     teaTeachCase,
     teaListenClass
  },
  watch: {
    //监听传过来的值,通过此值控制选项卡的切换效果
    tabChange: function(n, o) {
      this.flag = n;
    }
  }
};
</script>
<style scoped>
</style>