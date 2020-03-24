<template >
    <div>
      <div class="g_main jz_wrap clearfix" >
          <div class="jz_teacherleft fl">
              <div class="jz_teacherleft_top">
                  <dl >
                      <dt class="jz_people">
                          <img src="../../assets/img/toux.png" alt="">
                          <!-- <img :src="src" > -->
                      </dt>
                      <dd class="jz_bold">张某某   <i class="iconfont iconnan"></i></dd>
                      <dd class="jz_pingjia">区教学能手</dd>
                      <dd class="jz_city">东城区教师发展中心</dd>
                  </dl>
                  <ul >
                      <li><span>年龄:</span>41周岁</li>
                      <li><span>学历:</span>大学本科毕业</li>
                      <li><span>教龄:</span>18年11月</li>
                      <li><span>行政职务:</span>无</li>
                      <li><span>专业技能职称:</span>中小学一级教师</li>
                  </ul>
                  <span class="jz_find" @click="checkfile">查看教师档案</span>
              </div>
              <div class="jz_teacherleft_bottom">
                  <h4>发展记录</h4>
                  <div class="jz_teacherleft_bottomcontent clearfix">
                        <div class="fl">
                            <img src="../../assets/img/xunzhang.png" alt="">
                        </div>
                        <div class="fl jz_right">
                            <p>北京市市级"教学能手荣誉称号"</p>
                            <span>2019.07.14</span>
                            <span>中国</span>
                            <span>北京市</span>
                        </div>
                  </div>
                  <div class="jz_teacherleft_bottomcontent clearfix">
                        <div class="fl">
                            <img src="../../assets/img/xunzhang.png" alt="">
                        </div>
                        <div class="fl jz_right">
                            <p>北京市市级"教学能手荣誉称号"</p>
                            <span>2019.07.14</span>
                            <span>中国</span>
                            <span>北京市</span>
                        </div>
                  </div>
                  <div class="jz_teacherleft_bottomcontent clearfix">
                        <div class="fl">
                            <img src="../../assets/img/xunzhang.png" alt="">
                        </div>
                        <div class="fl jz_right">
                            <p>北京市市级"教学能手荣誉称号"</p>
                            <span>2019.07.14</span>
                            <span>中国</span>
                            <span>北京市</span>
                        </div>
                  </div>


              </div>
          </div>
          <div class="jz_teacherright fr">
              <ul>
                  <li :class="{'active':this.flag=='teachingInformation'}" @click="flag='teachingInformation'">教学信息</li>
                  <li :class="{'active':this.flag=='canpingContrast'}"  @click="flag='canpingContrast'">参评对比</li>
                  <li :class="{'active':this.flag=='kaoheContrast'}"  @click="flag='kaoheContrast'">考核对比</li>
                  <li :class="{'active':this.flag=='moveStateList'}"  @click="flag='moveStateList'">动态列表</li>      
              </ul>
              <!-- <router-view></router-view> -->
              <!--  教学信息部分-->
                <div class="jz_jwrap_1" v-if="flag=='teachingInformation'">
                    <ul class="jz_jiaoxueinfo">
                        <li>综合性荣誉</li> 
                        <li>已通过:<span>12</span></li>
                        <li>审核:<span>1</span></li>
                        <li>查看详情</li>
                    </ul>
                    <ul class="jz_jiaoxueinfo"><li>综合性荣誉</li> <li>已通过:<span>12</span>
                    </li><li>审核:<span>1</span></li><li>查看详情</li></ul>
                    <ul class="jz_jiaoxueinfo"><li>综合性荣誉</li> <li>已通过:<span>12</span>
                    </li><li>审核:<span>1</span></li><li>查看详情</li></ul>
                    <ul class="jz_jiaoxueinfo"><li>综合性荣誉</li> <li>已通过:<span>12</span>
                    </li><li>审核:<span>1</span></li><li>查看详情</li></ul>
                    <ul class="jz_jiaoxueinfo"><li>综合性荣誉</li> <li>已通过:<span>12</span>
                    </li><li>审核:<span>1</span></li><li>查看详情</li></ul>
                    <ul class="jz_jiaoxueinfo"><li>综合性荣誉</li> <li>已通过:<span>12</span>
                    </li><li>审核:<span>1</span></li><li>查看详情</li></ul>
                    <ul class="jz_jiaoxueinfo"><li>综合性荣誉</li> <li>已通过:<span>12</span>
                    </li><li>审核:<span>1</span></li><li>查看详情</li></ul>
                    <ul class="jz_jiaoxueinfo"><li>综合性荣誉</li> <li>已通过:<span>12</span>
                    </li><li>审核:<span>1</span></li><li>查看详情</li></ul>
                    <ul class="jz_jiaoxueinfo"><li>综合性荣誉</li> <li>已通过:<span>12</span>
                    </li><li>审核:<span>1</span></li><li>查看详情</li></ul>
                    <ul class="jz_jiaoxueinfo"><li>综合性荣誉</li> <li>已通过:<span>12</span>
                    </li><li>审核:<span>1</span></li><li>查看详情</li></ul>
                </div>
                <!-- 参评对比部分 -->
                <div class="jz_wrap_2" v-else-if="flag=='canpingContrast'">
                        <div class="jz_ding">
                            <div class="jz_xinxiu">
                                    <span>教学新秀</span>
                                    <b>
                                        <i :style="`width:${distance}%`">
                                           <span class="jz_loadding">{{distance}}%</span>
                                        </i>
                                    </b>
                                    <span>教学能手</span>
                            </div>
                        </div>
                        <div class="jz_baseinfo">
                            <h4>基本信息对比</h4>
                            <div class="jz_padding">
                                <div class="jz_infoduibi ">
                                        <p ><span>年龄:</span>41周岁</p>
                                        <span><i class="iconfont iconwancheng-copy"></i></span>
                                       
                                </div>
                                <div class="jz_infoduibi">
                                        <p ><span>专业型称号:</span>教学新秀</p>
                                         <span><i class="iconfont iconwancheng-copy"></i></span>
                                </div>
                                <div class="jz_infoduibi">
                                        <p><span>学历:</span>本科</p>
                                        <span><i class="iconfont iconwancheng-copy"></i></span>
                                </div>
                            </div>

                        </div>
                        <div class="jz_baseinfo">
                            <h4>教学信息对比</h4>
                            <div class="jz_padding">

                                <div class="jz_infoduibi ">
                                        <p ><span>公开课情况:</span>达标</p>
                                        <span><i class="iconfont iconwancheng-copy"></i></span>
                                </div>
                                <div class="jz_infoduibi ">
                                        <p ><span>论文情况:</span>不达标</p>
                                        <span class="jz_hong">
                                            不符合,论文发表或获奖时间不符合
                                             <i class="iconfont iconjinggao"></i></span>
                                </div>
                                <div class="jz_infoduibi ">
                                        <p><span>参加教学大赛:</span>达标</p>
                                       <span><i class="iconfont iconwancheng-copy"></i></span>
                                </div>
                                <div class="jz_infoduibi ">
                                        <p ><span>指导青年教师情况:</span>达标</p>
                                       <span><i class="iconfont iconwancheng-copy"></i></span>
                                </div>
                                <div class="jz_infoduibi ">
                                        <p ><span>指导学生情况:</span>不达标</p>
                                        <span class=" jz_hong">不符合,论文发表或获奖时间不符合 <i class="iconfont iconjinggao"></i></span>
                                </div>
                                <div class="jz_infoduibi ">
                                        <p ><span>师德情况:</span>不达标</p>
                                        <span class=" jz_hong">不符合,无师德信息 <i class="iconfont iconjinggao"></i></span>
                                </div>
                                <div class="jz_infoduibi">
                                        <p ><span>现代教育技术认定证书:</span>不达标</p>
                                         <span class=" jz_hong">不符合,缺少掌握现代教育技术认定证书 <i class="iconfont iconjinggao"></i></span>
                                </div>
                                <div class="jz_infoduibi">
                                        <p ><span>过三关证书:</span>不达标</p>
                                         <span class="jz_hong">不符合,缺少过三关证书 <i class="iconfont iconjinggao"></i></span>
                                </div>
                            </div>

                        </div>
                    </div>
                       <!-- 考核比较部分 -->
                    <div class="jz_wrap_3"  v-else-if="flag=='kaoheContrast'">
                           <div class="jz_ding">
                                <div class="jz_xinxiu jz_xinxiu3">
                                        <span>教学新秀</span>
                                        <b class="jz_xin">
                                            <i :style="`width:${distance}%`">
                                           <span class="jz_loadding">{{distance}}%</span>
                                        </i>
                                        </b>
                                </div>
                            </div>
                             <div class="jz_baseinfo">
                                <h4>考核信息对比</h4>
                                <div class="jz_padding">
                                    <div class="jz_infoduibi ">
                                            <p ><span>师德师风(10%):</span>不达标</p>
                                            <span class=" jz_hong">
                                                <span>
                                                   填写考核表时录入百分比,包括民主测评优秀率和学生民主测评满意度
                                                </span>
                                                <i class="iconfont iconjinggao"></i></span>
                                    </div>
                                    <div class="jz_infoduibi ">
                                            <p ><span>教学成绩(15%):</span>不达标</p>
                                             <span class=" jz_hong">
                                                 <span >
                                                     不符合(任课情况:任课学科与本学科一致,需要达到规定的教学工作量.教学管理质量情况,填写考核表时录入)
                                                 </span>
                                                 
                                                 <i class="iconfont iconjinggao"></i></span>
                                    </div>
                                    <div class="jz_infoduibi ">
                                            <p ><span>公开课情况(15%):</span>不达标</p>
                                             <span class=" jz_hong">不符合(上一年来公开课情况,要求1节/年,校级以上)<i class="iconfont iconjinggao"></i></span>
                                    </div>
                                    <div class="jz_infoduibi ">
                                            <p ><span>业务讲座(10%):</span>不达标</p>
                                            <span class=" jz_hong">不符合(上一年来公开课情况,要求1节/年,校级以上)<i class="iconfont iconjinggao"></i></span>
                                    </div>
                                    <div class="jz_infoduibi ">
                                            <p ><span>课题研究(15%):</span>不达标</p>
                                           <span class=" jz_hong">不符合(上一年来公开课情况,要求1节/年,校级以上)<i class="iconfont iconjinggao"></i></span>
                                    </div>
                                    <div class="jz_infoduibi ">
                                            <p><span>论文获奖(15%):</span>不达标</p>
                                            <span class=" jz_hong">不符合(上一年来公开课情况,要求1节/年,校级以上)<i class="iconfont iconjinggao"></i></span>
                                    </div>
                                    <div class="jz_infoduibi ">
                                            <p ><span>培训指导(20%):</span>此项不做要求</p>
                                           <span><i class="iconfont iconwancheng-copy"></i></span>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <!-- 动态列表部分 -->
                    <div class="jz_wrap_4" v-else-if="flag=='moveStateList'">
                       <div class="jz_singleinfo">
                            <div class="fl touxiang">
                                <img src="../../assets/img/toux.png" alt="">
                            </div>
                            <dl class="fl">
                                <dt>张天宇</dt>
                                <dd>2019-01-08 <span>10:02</span></dd>
                            </dl>
                            <div class="clearfix"></div>
                            <div class="jz_info">
                                    <p>增加指导青年教师情况周远红获得第十届全国信息技术课程教学案例大赛三等奖       <span class="fr ">   <i class="iconfont iconchakan-copy"></i>    查看详情</span>      </p>
                                    <div class="jz_picshow clearfix">
                                            <img src="../../assets/img/zheng.png" alt="">
                                            <img src="../../assets/img/zheng.png" alt="">
                                            <img src="../../assets/img/zheng.png" alt="">
                                            <img src="../../assets/img/zheng.png" alt="">
                                    </div>
                            </div>
                       </div>
                       <div class="jz_singleinfo jz_padding2">
                            <div class="fl touxiang">
                                <img src="../../assets/img/toux.png" alt="">
                            </div>
                            <dl class="fl">
                                <dt>张天宇</dt>
                                <dd>2019-01-08 <span>10:02</span></dd>
                            </dl>
                            <div class="clearfix"></div>
                            <div class="jz_info">
                                    <p>增加指导青年教师情况周远红获得第十届全国信息技术课程教学案例大赛三等奖       <span class="fr ">   <i class="iconfont iconchakan-copy"></i>查看详情</span>      </p>
                                    <div class="jz_picshow clearfix">
                                            <img src="../../assets/img/zheng.png" alt="">
                                            <img src="../../assets/img/zheng.png" alt="">
                                            <img src="../../assets/img/zheng.png" alt="">
                                            <img src="../../assets/img/zheng.png" alt="">
                                    </div>
                            </div>
                       </div>
                       <div class="jz_singleinfo jz_padding2">
                            <div class="fl touxiang">
                                <img src="../../assets/img/toux.png" alt="">
                            </div>
                            <dl class="fl">
                                <dt>张天宇</dt>
                                <dd>2019-01-08 <span>10:02</span></dd>
                            </dl>
                            <div class="clearfix"></div>
                            <div class="jz_info">
                                    <p>增加指导青年教师情况周远红获得第十届全国信息技术课程教学案例大赛三等奖       <span class="fr ">   <i class="iconfont iconchakan-copy"></i>查看详情</span>      </p>
                                    <div class="jz_picshow clearfix">
                                        
                                            <img src="../../assets/img/zheng.png" alt="">
                                            <img src="../../assets/img/zheng.png" alt="">
                                            <img src="../../assets/img/zheng.png" alt="">
                                            <img src="../../assets/img/zheng.png" alt="">
                                    </div>
                            </div>
                       </div>




                    </div>

          </div>
      </div>
    </div>
</template>
<script>
import { teaRelevant } from "@/api";
export default {
    data() {
        return {
            flag:'teachingInformation',
            distance:41,
            teachInfo:[],//教学信息数据
            canpingContrast:[],
            idCard:'',
            src:'../../assets/img/toux.png',
        }
    },
    created(){
        this.idCard=this.$route.query.idCard
    },
    mounted() {
  
    },
    methods: {
       checkfile:function(){
           this.$router.push({path:"/index/checkTeacherCommon/checkTeacherFile",query:{judge:'lookinfo',idCard:this.idCard}})
       }
    },
}
</script>
<style scoped>
.iconnan{
    font-size: 14px;
    color: #2a82ee;
}
.iconwancheng-copy{
    color:#0ab895; 
    font-size: 24px;
}
.iconjinggao{
    color: #f65177;
     font-size: 24px;
     vertical-align: -3px;
     margin-left: 10px;
}
.iconchakan-copy{
   color: #1abc9c;
   font-size: 16px;
}
.jz_hong{
     color: #f65177;
     font-size: 12px;
}
.jz_city{
    color:#747474;
}
/* 动态列表 */
    .jz_wrap_4{
        padding:0px 20px;
        
    }
    .touxiang img{
        width: 50px;
        height: 50px;
        display: inline-block;
        border-radius: 50%;
    }
    .jz_picshow{
        margin-top: 16px;
    }
    .jz_picshow img{
        width: 120px;
        height: 90px;
        float: left;
        display: block;
        margin-right: 16px;
        border: solid 1px #fabb35;
    }
    .jz_singleinfo dl{
        margin-left: 12px;
        line-height: 1.5
    }
     .jz_singleinfo dd{
        color: #807f7f;

     }
     .jz_singleinfo {
         border-bottom: solid 1px #dddddd;
         padding-top:20px; 
     }
     .jz_info {
         margin-left: 46px;
         padding: 18px 0px 16px ;
     }
     .jz_info span{
         color:#1abc9c;
         cursor: pointer;
     }
/* 参评对比 */
        .jz_wrap_2 .jz_ding,
        .jz_wrap_3 .jz_ding
        {
            padding: 16px 20px 0px ;
        }
        .jz_wrap_3,.jz_wrap_2  {
            height: 922px;
        }
    .jz_wrap_2  .jz_ding .jz_xinxiu,
    .jz_wrap_3  .jz_ding .jz_xinxiu
    {
        box-sizing: border-box;
        width: 100%;
        height: 80px;
        border-radius: 20px;
        background: #eefcf9;
        padding: 0px 6px;
    }
    .jz_xinxiu{
        display: flex;
        justify-content: space-between;
        align-items: center
    }
    .jz_xinxiu3{
        /* display: flex; */
        justify-content: flex-start;
        /* align-items: center */
    }
    .jz_xin{
        width: 88% !important;
        margin-left: 10px;
    }
    .jz_xinxiu>span:nth-of-type(2){
        color: #1abc9c;
    }
     .jz_xinxiu b{
         display: inline-block;
         width: 80%;
         height: 12px;
         border-radius: 5px;
         background: #e4e4e4;
         position: relative;
     }
    .jz_xinxiu b i{
        position: absolute;
        left: 0px;
        height: 100%;
        background: #1abc9c;
         border-radius: 5px;
    }
    .jz_xinxiu span{
        font-size: 16px;
    }
    .jz_loadding{
        position: absolute;
        font-size: 14px;
        font-weight: normal;
        top: -22px;
        color:#1abc9c; 
        right: 0px;
    }
    /* .jz_xinxiu b i::after{
        content: '41%';
        position: absolute;
        bottom: 14px;
        right: 0px;
        color: #1abc9c;
    } */
    .jz_baseinfo  h4{
        padding:26px 0px 12px 20px ;
        font-weight: 600;
        border-bottom: solid 1px #dddddd;
        font-size: 18px;
    }
    .jz_infoduibi {
        padding: 20px 20px 16px 0px ;
        border-bottom: solid 1px #dddddd;
        display: flex;
        justify-content: space-between;
        align-items: center;
    /* flex-wrap: wrap; */

    }
    .jz_infoduibi>span{
        display: block;
    }
    .jz_infoduibi>span>span{
        /* display: block; */
         display: inline-block;
    max-width: 420px;
    word-wrap: break-word;
    text-align: right;
    }
    .jz_infoduibi p span{
    margin: 0px 6px 0px 4px ;
    }
   
    .jz_padding{
        padding: 0px 20px;
    }
    .jz_padding2{
        padding-left: 20px;
    }
    .jz_wrap{
      
        margin-top: 12px;
        margin-bottom: 328px;
        /* height: 300px; */
    }
    .jz_teacherleft_top{
        height: 272px;
        margin-bottom: 10px;
        background: white;
        box-sizing: border-box;
        padding: 14px 20px 20px;
       
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
        border-radius: 5px;
    }
    .jz_teacherleft_top dl{
         text-align: center;
         width: 50%;
         padding-bottom: 20px;
         /* line-height: 1.6 */
    }
    .jz_teacherleft_top ul{
        box-sizing: border-box;
        border-left: solid 1px #dddddd;
        width: 50%;
        padding-left: 20px;
        line-height: 1.6
    }
    .jz_teacherleft_top ul li span{
        color: #666666;
        margin-right: 5px;
    }
  .jz_teacherleft_top  dl dd{
        font-size: 12px;
        margin-top: 6px;
    }
    .jz_bold{
        font-size: 18px !important;
        font-weight: 600;
    }
    .jz_pingjia{
        color: white;
        background: #fea518;
        border-radius: 10px;
        display: inline-block;
        width: 80px;
    }
    .jz_teacherleft_bottom{
        height: 292px;
          background: white;
          border-radius: 5px;
    }
    .jz_find{
        width: 100%;
        height: 40px;
        display: inline-block;
        text-align: center;
        line-height: 40px;
        color: white;
        background: #1abc9c;
        cursor: pointer;
    }
     .jz_teacherleft_top .jz_people img{
        display: inline-block;
        width: 94px;
        height: 100px;
        border-radius: 50%;
    }
    .jz_teacherleft{
        width: 352px;
    }
    .jz_teacherright{
        width:834px;
        /* height: 922px; */
        background: white;
    }
    /*  */
    
    .jz_teacherleft_bottom h4{
        padding: 18px 20px ;
        color: #6ea2e5;
        font-size: 16px;
        border-bottom: solid 1px #dddddd;
    }
    /* .fl img{
        width: 34px;
        height: 40px;
    } */
    .jz_right{
        margin-left: 14px;
        line-height: 1.8;
    }
    .jz_right  span:nth-of-type(2){
        margin:0px 8px 0px 12px ;
       
    }
    .jz_right span{
         color: #a8a7a7;
    }
    .jz_teacherleft_bottomcontent{
        box-sizing: border-box;
        padding: 24px 20px 0px;
    }
    /* 右部部分 */
    .jz_teacherright{
        border-radius: 5px;
        padding-bottom: 76px;
    }
    .jz_teacherright > ul{
          display: flex;
        font-size: 16px;
        justify-content: space-around;
        border-bottom: solid 1px #dddddd;
    }
    .jz_teacherright  .jz_wrap_1 ul{
        display: flex;
        font-size: 16px;
        justify-content: space-between;
        border-bottom: solid 1px #dddddd;
    }
    .jz_teacherright ul li{
        padding: 18px 0px ;
        position:relative;
        bottom: -1px;
        cursor: pointer;
    }
    .active{
        color: #5093e1;
        border-bottom: solid 2px #5093e1;
    }
    .router-link-exact-active{
         color: #5093e1;
        border-bottom: solid 2px #5093e1;
    }
    /*teachingInformation */
    .jz_jwrap_1{
        box-sizing: border-box;
        padding: 0px 20px;
    }
    .jz_jiaoxueinfo{
        box-sizing: border-box;
        padding: 0px 20px;
        display: flex;
       justify-content: space-between; 
        border-bottom: solid 1px #dddddd;
    }
    .jz_jiaoxueinfo li{
        padding: 20px 0px;
    }
    .jz_jiaoxueinfo li span{
        margin-left: 6px;
    }
     .jz_jiaoxueinfo li:last-of-type{
         color: #5093e1;
         cursor: pointer;
     }
</style>