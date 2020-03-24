<template>
<div>
    <div class="jz_twrap  g_main clearfix" >
        <div class="jz_cleft fl"  v-if="leftShow" >
          <div v-for="(m,n) in baseAllList0" :key="n">
            <h3>
            <span>{{m.name}}</span>
            <i
                class="iconfont iconxiangshang fr"
                v-show="m.childShow"
                @click="someHide(n)"
            ></i>
            <i
                class="iconfont iconiconfront- fr"
                v-show="!m.childShow"
                @click="someShow(n)"
            ></i>
            </h3>
            <div class="jz_cleftxia" v-show="m.childShow">
                <div v-for="(item,index) in m.baseAllList" :key="index">
                    <div class="jz_yasuo">
                        <p :class="{active:(activeIndex==index)&&(activeIndex2==n)}">
                        <span @click="styleChange(index,n)">{{item}}</span>
                        </p>
                    </div>
                    <div class="jz_yasuo1"></div>
                </div>
            </div>
          </div>
          
      </div>
      <!-- 主体右部分 -->
    <div class="jz_cright fr"  v-if="leftShow">

      <!-- 个人档案 -->
      <tableFile v-if="activeIndex==0&&activeIndex2==0"></tableFile>

      <!-- 第一学历 -->
      <teaFirstDegree v-if="activeIndex==1&&activeIndex2==0"></teaFirstDegree>

      <!-- 长病假记录 -->
      <teaSickLeave  v-if="activeIndex==2&&activeIndex2==0"></teaSickLeave>

      <!-- 专业型称号 -->
     <teaProName  v-if="activeIndex==3&&activeIndex2==0"></teaProName>

     <!--  年度考核 -->
      <teaAssessments v-if="activeIndex==4&&activeIndex2==0"></teaAssessments>

      <!-- 综合性荣誉 -->
      <teaComHonor  v-if="activeIndex==5&&activeIndex2==0"></teaComHonor>

      <!-- 电子证书 -->
      <teaLineHonor v-if="activeIndex==6&&activeIndex2==0"></teaLineHonor>

      <!-- 条线荣誉 -->
      <teaElecProve v-if="activeIndex==7&&activeIndex2==0"></teaElecProve>

      <!-- 公开课情况 -->
      <teaPublicClass  v-if="activeIndex==0&&activeIndex2==1"></teaPublicClass>

      <!-- 论文情况 -->
      <teaThesisCase  v-if="activeIndex==1&&activeIndex2==1"></teaThesisCase>

      <!-- 课题研究 -->
      <teaQuestionSearch v-if="activeIndex==2&&activeIndex2==1"></teaQuestionSearch>

      <!-- 被指导学生情况 -->
      <beDirectedStudent v-if="activeIndex==3&&activeIndex2==1"></beDirectedStudent>

      <!-- 指导青年教师情况 -->
      <directYouthTeacher v-if="activeIndex==4&&activeIndex2==1"  @leftSideFlag='leftFlag'></directYouthTeacher>

      <!-- 参加数学大赛情况 -->
      <teaMathMegegame  v-if="activeIndex==5&&activeIndex2==1"></teaMathMegegame>

      <!-- 听课情况 -->
      <teaListenClass  v-if="activeIndex==6&&activeIndex2==1"></teaListenClass>

      <!-- 任课情况 -->
      <teaTeachCase v-if="activeIndex==7&&activeIndex2==1"></teaTeachCase>

      <!-- 课堂满意度 -->
      <teaClassAgree v-if="activeIndex==8&&activeIndex2==1"></teaClassAgree>

      <!-- 骨干教师学术讲座 -->
      <teaMainTeacherChair v-if="activeIndex==9&&activeIndex2==1"></teaMainTeacherChair>

      <!-- 班主任工作经历 -->
      <teaClassAdviserWork v-if="activeIndex==10&&activeIndex2==1"></teaClassAdviserWork>

      <!-- 其他业务获奖情况 -->
      <teaOtherOperation v-if="activeIndex==11&&activeIndex2==1"></teaOtherOperation>

      <!-- 组织公派支教经历 -->
      <teaOrganPublicDispatch v-if="activeIndex==12&&activeIndex2==1"></teaOrganPublicDispatch>

      <!-- 公修课 -->
      <teaPublicStudyClass v-if="activeIndex==13&&activeIndex2==1"></teaPublicStudyClass>

    </div>

    <newAddDirectYouthTea v-if="!leftShow" @cancle='cancle'></newAddDirectYouthTea>


  </div>
  
</div>    
</template>
<script>
import tableFile from "@/components/teaTablePart/tableFile.vue";//教师基本信息
import teaProName from '@/components/teaTablePart/teaProName.vue';//  专业型称号
import teaAssessments from '@/components/teaTablePart/teaAssessments.vue';// 年度考核
import teaSickLeave from '@/components/teaTablePart/teaSickLeave.vue';// 长病假记录
import teaFirstDegree from '@/components/teaTablePart/teaFirstDegree.vue';// 第一学历
import teaComHonor from '@/components/teaTablePart/teaComHonor.vue';// 综合性荣誉
import teaLineHonor from '@/components/teaTablePart/teaLineHonor.vue';// 条线荣誉
import teaElecProve from '@/components/teaTablePart/teaElecProve.vue';// 电子证书
import teaPublicClass from '@/components/teaTablePart/teaPublicClass.vue';// 公开课情况
import teaThesisCase from '@/components/teaTablePart/teaThesisCase.vue';//论文情况
import teaQuestionSearch from '@/components/teaTablePart/teaQuestionSearch.vue';//课题研究
import beDirectedStudent from '@/components/teaTablePart/beDirectedStudent.vue';//被指导学生情况
import directYouthTeacher from '@/components/teaTablePart/directYouthTeacher.vue';//指导青年教师情况
import teaMathMegegame from '@/components/teaTablePart/teaMathMegegame.vue';//参加数学大赛情况
import teaListenClass from '@/components/teaTablePart/teaListenClass.vue';//听课情况
import teaTeachCase from '@/components/teaTablePart/teaTeachCase.vue';//任课情况
import teaClassAgree from '@/components/teaTablePart/teaClassAgree.vue';//课堂满意度
import teaMainTeacherChair from '@/components/teaTablePart/teaMainTeacherChair.vue';//骨干教师学术讲座
import teaClassAdviserWork from '@/components/teaTablePart/teaClassAdviserWork.vue';//班主任工作经历
import teaOtherOperation from '@/components/teaTablePart/teaOtherOperation.vue';//其他业务获奖情况
import teaOrganPublicDispatch from '@/components/teaTablePart/teaOrganPublicDispatch.vue';//组织公派支教经历
import teaPublicStudyClass from '@/components/teaTablePart/teaPublicStudyClass.vue';//组织公派支教经历

import  newAddDirectYouthTea from  '@/components/teacherTerrace/newAddDirectYouthTea/newAddDirectYouthTea.vue'
export default {
    components:{
      tableFile,teaProName,teaAssessments,teaSickLeave,teaFirstDegree,teaComHonor,teaLineHonor,teaElecProve,
      teaPublicClass,teaThesisCase,teaQuestionSearch,beDirectedStudent,directYouthTeacher,teaMathMegegame,
      newAddDirectYouthTea,teaListenClass,teaTeachCase,teaClassAgree,teaMainTeacherChair,teaClassAdviserWork,
      teaOtherOperation,teaOrganPublicDispatch,teaPublicStudyClass
    },
   data() {
      return {
       fileShow:false,
       flag:'',
       has:true,
       hastwo:0,
       titleFlag:'lookinfo',
       baseAllList0:[
        {name:'基本信息',
         baseAllList:['个人档案','第一学历','长病假记录','专业型称号','年度考核','综合性荣誉','条线荣誉','电子证书',],
         childShow:true,
        },
        {
          name:'教学信息',
          baseAllList:['公开课情况','论文情况','课题研究','被指导学生情况','指导青年教师情况','参加数学大赛情况','听课情况','任课情况','课堂满意度','骨干教师学术讲座','班主任工作经历',
         '其他业务获奖情况','组织公派支教经历','公休课'],
          childShow:false,
        }
      ],
       activeIndex:'0',
       activeIndex2:'0',
       leftShow:true,
     
      }
   },
   
   mounted() {

   },
   methods:{

     //设置上拉箭头  下拉箭头 以及动态样式
     someShow(index){
       this.baseAllList0[index].show=true;
       this.baseAllList0[index].childShow=true;
     },
     someHide(index){
        this.baseAllList0[index].show=false;
        this.baseAllList0[index].childShow=false;
     },
     styleChange(index,n){
       this.activeIndex=index;
       this.activeIndex2=n;
     },

     //是否显示左方
     leftFlag(val){
        this.leftShow=val;//false
     },

    //取消显示
     cancle(val){
         this.leftShow=val;//true
     },

   },
}
</script>
<style scoped>
/* css */

.jz_twrap {
  margin-top: 10px;
  margin-bottom: 130px;
  position: relative;
}
.iconiconfront-{
    color: #666666;
    cursor: pointer;
}
.iconxiangshang{
   color: #666666;
    cursor: pointer;
}
/*  主体左边部分*/
.jz_cleft {
  width: 320px;
  background: white;
  margin-left: -2px;
  border-radius: 5px;
}
.jz_cleft h3 {
  padding: 0px 20px;
  height: 56px;
  line-height: 50px;
  box-sizing: border-box;
  border-bottom: solid 1px #dddddd;
  font-size: 18px;
  font-weight: bold;
}
.jz_twoh{
/* border-top: solid 1px #dddddd; */
}
.jz_cleftxia p {
  padding: 0px 20px;
  box-sizing: border-box;
  border-left: solid 2px transparent;
}
.jz_cleftxia p span {
  display: inline-block;
  width: 100%;
  padding: 6px 0;
  cursor: pointer;
}
.jz_yasuo {
  box-sizing: border-box;
  padding: 10px 0px;
  position: relative;
}

.jz_yasuo1 {
  width: 90%;
  height: 1px;
  margin: auto;
  border-bottom: solid 1px #dddddd;
}
.jz_cleftxia>div:last-of-type .jz_yasuo1{
  /* display: none; */
  width: 100%;
}
.active {
  border-left-color: #5093e1 !important;
}

/*  主体右边部分*/
.jz_cright {
  width: 870px;
  background: white;
  /* box-sizing: border-box; */
  /* padding-bottom: 20px; */
  margin-bottom: 136px;
}


</style>
