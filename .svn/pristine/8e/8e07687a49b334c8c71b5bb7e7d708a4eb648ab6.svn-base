<template>
    <div class="jz_cwrap g_main">
        <blueYouthEngin v-if="flag=='lanqing'||flag=='mingshi'"></blueYouthEngin>

        <div>
            <div class="jz_tou" v-show="flag!=='blueyouth'">
                    <span v-show="flag=='comhonor'">综合性荣誉</span> 
                    <span v-show="flag=='linehonor'">条线荣誉</span> 
                    <span v-show="flag=='elecprove'">电子证书</span> 
                    <span v-show="flag=='publicclass'">公开课情况</span>
                    <span v-show="flag=='thesiszhu'">论著情况</span>
                    <span v-show="flag=='thesispublic'">论文发表</span>
                    <span v-show="flag=='questionsearch'">课题研究</span>
                    <span v-show="flag=='mathgame'">参加数学大赛情况</span>
                    <span v-show="flag=='maintea'">骨干教师学术讲座</span>
                    <span v-show="flag=='other'">其他业务获奖情况</span>
                    <span v-show="flag=='publicstudy'">公休课</span>
            </div>
            <div class="jz_zhong clearfix">
                <div class="jz_zuo fl">
                    <dl  v-show="flag!=='blueyouth'">
                        <dt><b>北京市优秀教育工作者</b></dt>
                        <dd v-show="flag=='comhonor'||flag=='linehonor'||flag=='thesiszhu'"> <span>时间：2015-08-01</span>   <span>级别：市级</span> <span>表彰单位：北京教育局</span>  </dd>
                    </dl>
                    <div class="jz_img">
                        <img src="@/assets/img/yulan.png" alt="">
                    </div>
                </div>
                <div class="jz_you fl">
                    <div class="jz_fujian">
                        <p v-show="flag=='comhonor'||flag=='linehonor'||flag=='thesiszhu'||flag=='blueyouth'"> <b>附件</b></p>
                        <p  v-show="flag=='elecprove'"> <b>信息</b></p>
                        <p  v-show="flag=='publicclass'"> <b>内容</b></p>
                        <p  v-show="flag=='questionsearch'"> <b>申报评审书</b></p>
                    </div>
                    <div class="jz_picshow" v-show="flag=='comhonor'||flag=='linehonor'||flag=='publicclass'||flag=='thesiszhu'||flag=='questionsearch'||flag=='blueyouth'">
                            <div >
                             <img src="@/assets/img/yulan.png" alt="">
                             <p> 优秀教育工作者-2.jpg</p>
                            </div>
                    </div>

                    <div v-show="flag=='publicclass'">
                        <div class="jz_fujian jz_fujian2">
                            <p  > <b>认定证书</b></p>
                        </div>
                        <div class="jz_picshow" >
                                <div >
                                <img src="@/assets/img/yulan.png" alt="">
                                <p> 优秀教育工作者-2.jpg</p>
                                </div>
                        </div>
                    </div>
                   <div class="jz_infoshow" v-show="flag=='elecprove'">
                       <ul>
                           <li>时间：2019.10.19</li>
                           <li>类别：公开课</li>
                           <li>级别：市级</li>
                           <li>发证单位：东城区教育局</li>
                       </ul>
                   </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import  blueYouthEngin   from '@/components/teacherTerrace/blueYouthEngin.vue'
export default {
    components:{
       blueYouthEngin
    },
   data() {
      return {
         flag:'',//判断从哪个路径过来
      }
   },
   mounted() {

      
      


            this.findPath()
   },
   methods:{





       //寻找路径
       findPath(){  
           let from=this.$route.query.from;
           this.flag=from;
            // console.log(from)
       }
   },
}
</script>
<style scoped>
/* css */
.jz_cwrap {
  background: white;
  margin-top: 10px;
  margin-bottom: 130px;
  position: relative;
  box-shadow: 0px 0px 2px 2px #dddddd;
   border-radius: 5px;
   padding-bottom: 0px !important;
}
.jz_tou {
  box-sizing: border-box;
  padding: 14px 20px 20px 20px ;
  border-bottom: solid 1px #dddddd;
  color:#5093e1;
 font-size: 16px;
}
.jz_zuo{
    padding: 8px 20px 20px;
    box-sizing: border-box;
    width: 820px;
    /* min-height: 634px; */
    border-right: solid 1px #dddddd;
}
.jz_you{
    width: 380px;
}
.jz_zuo dl{
    line-height: 1.8;
   padding: 4px 
}
.jz_zuo dt{
    font-size: 16px;
}
.jz_zuo dd{
    color: #666666;
}
.jz_img{
    width: 100%;
    height: 100%;
    margin-top: 12px;
}
.jz_img img{
    display: block;
     width: 100%;
    height: 100%;
}
/* 附件 */
.jz_fujian{
    padding: 14px 20px;
    box-sizing: border-box;
    border-bottom: solid 1px #dddddd;
    
}
.jz_fujian2{
    border-top: solid 1px #dddddd;
}
.jz_fujian p{
    font-size: 12px;
    padding-left: 6px;
    border-left: solid 2px #5093e1;
}
.jz_picshow{
    /* width: 100%; */
    display: flex;
    justify-content:space-between;
    padding: 14px 20px 30px 20px;
    flex-wrap: wrap;
}
.jz_picshow >div{
    width: 32%;
    text-align: center;
}
.jz_picshow >div img{
    width: 100%;
}
/* 信息 */
.jz_infoshow{
    line-height: 2;
     padding: 14px 20px;
}
</style>
