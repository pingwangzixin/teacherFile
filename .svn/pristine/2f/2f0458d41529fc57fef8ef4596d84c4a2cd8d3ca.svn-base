<template>
    <div class="jz_cwrap g_main" >
         <div class="jz_tou">
            <div>
                <span>电子证书详情</span> 
                <p v-show="flag=='wait'"> <span class="jz_bohui" @click="reject()">驳回</span> <span class="jz_pass" @click="pass()" >通过</span></p>
                <p v-show="flag=='nopass'" class="jz_wei"> <i class="iconfont iconcuowu"></i>已驳回</p>
                <p v-show="flag=='success'" class="jz_guo"> <i class="iconfont iconwancheng-copy"></i> 已通过</p>
            </div>
        </div>
        <div class="jz_info">
            <div class="clearfix">
                <b class="fl">集团添加区证书</b>
                <p class="fr jz_span">
                    <span>时间  <font>:</font>2019.08.07</span>
                    <span>类型 <font>:</font>讲座</span>
                    <span>级别 <font>:</font>区别</span>
                    <span>发证单位 <font>:</font>北京</span>
                    <span>发证数量 <font>:</font>2</span>
                </p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>编号</th>
                        <th>学校</th>
                        <th>姓名</th>
                        <th>身份证</th>
                        <th>活动名称</th>
                        <th>讲座名称</th>
                        <th>级别</th>
                        <th>发奖单位</th>
                        <th>发奖时间</th>
                        <th v-show="flag=='success'">获奖证书</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in info" :key="index">
                        <td>{{index+1}}</td>
                            <td>{{item.xuhao}}</td><td>{{item.school}}</td><td>{{item.name}}</td>
                            <td>{{item.idCard}}</td><td>{{item.active}}</td><td>{{item.jiang}}</td>
                            <td>{{item.level}}</td><td>{{item.danwei}}</td><td>{{item.time}}</td>
                            <td v-show="flag=='success'" > 
                                <div class="jz_edit">
                                 <span @click="lookImg()">查看</span>  <span @click="delAlready">删除</span>  
                                </div>
                            </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 驳回弹出窗 -->
        <div class="jz_bo" v-show="rejectFlag">
            <div class="jz_hui">
                <p> <span>驳回</span> <i class="iconfont iconyooxi fr" @click="rejectFlag=false"></i> </p>
                <div class="jz_pad">
                    <textarea  id="textarea" placeholder="驳回请说明理由,50字以内." maxlength="50"></textarea> 
                </div>
                 <div class="jz_ding clearfix">
                        <span class="fl jz_sure">确认</span>
                        <span class="fr jz_cancle"  @click="rejectFlag=false">取消</span>
                 </div>
            </div>
        </div>
        <!-- 获奖证书弹出窗 -->
         <div class="jz_bo" v-show="winFlag">
            <div class="jz_win">
                <p> <span>获奖证书</span> <i class="iconfont iconyooxi fr" @click="winFlag=false"></i> </p>
               <div class="jz_img">
                   <img src="@/assets/img/yulan.png" alt="">
               </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
   data() {
      return {
          flag:'',
          rejectFlag:false,//驳回弹出窗
          winFlag:false, //
          info:[
              {xuhao:'FXJYJTT2019000017',school:'北京市凤翔实验学校',name:'安一抹',idCard:'291203456459241054',active:'讲座',jiang:'心理测评',level:'区级',danwei:'北京',time:'2019-03-22'},
              {xuhao:'FXJYJTT2019000017',school:'北京市凤翔实验学校',name:'安一抹',idCard:'291203456459241054',active:'讲座',jiang:'心理测评',level:'区级',danwei:'北京',time:'2019-03-22'},
          ]
      }
   },
   mounted() {
    //    console.log(this.$route.query.id)
        this.flag=this.$route.query.id
   },
   methods:{
       pass(){
            let _this=this;
            this.$parent.confirmFn('电子证书认定后,不予撤回,请仔细核对!',function(state){
                if(state=='sure'){
                    _this.$parent.timingFn('success','通过成功！'); 

                }else{

                }
            })
       },
       reject(){//点击驳回
           this.rejectFlag=!this.rejectFlag
       },
       lookImg(){
           this.winFlag=!this.winFlag
       },
       delAlready(){

       },
   },
}
</script>
<style scoped>
/* css */
.jz_cwrap {
  background: white;
  margin-top: 10px;
  min-height: 1120px;
  margin-bottom: 130px;
  position: relative;
  box-shadow: 0px 0px 2px 2px #dddddd;
   border-radius: 5px;
}
.jz_tou {
  box-sizing: border-box;
  padding: 14px 20px 20px 20px ;
  border-bottom: solid 1px #dddddd;
 
}
.jz_tou>div{
     display: flex;
  justify-content: space-between;
  align-items: center;
}
.jz_tou>div>span{
    color: #5093e1;
    font-size: 16px;
}
.jz_tou>div>p>span{
    padding: 8px 26px;
    color: white;
    margin-left: 10px;
    cursor: pointer;
}
.jz_bohui{
    background: #f65177;
}
.jz_pass{
    background: #1abc9c;
}
.jz_info{
    padding:0px 20px;
}
.jz_info>div{
    padding: 12px 0px;
}
.jz_info>div>b{
     font-size: 16px;
}
.jz_span>span{
    margin-left: 10px;
    color: #999999;
}
.jz_span font{
   margin: 0px 2px ;
}
table{
    border-collapse: collapse;
    width: 100%;
  
}
tr,th,td{
    height: 40px;
    border: solid 1px #dddddd;
      text-align: center;
}
thead{
    background: #f6f6f6;
}
/* 未 */
.jz_wei{
    color: #f65177;
}
.jz_guo{
    color: #1abc9c;
}
.jz_edit{
    display: flex;
    justify-content: space-around;    
    color: #5093e1;
}
.jz_edit span{
    cursor: pointer;
}
/* 弹窗 */
.iconyooxi{
    cursor: pointer;
}
.jz_bo{
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    background: rgba(0, 0, 0, 0.3)
}
.jz_hui{
    width:648px;
    height: 312px; 
    border-radius: 5px;
    background: white;
    position: absolute;
    top: 0px;
     left: 0px;
    bottom: 0px;
    right: 0px;
    margin: auto;
}
.jz_hui>p{
    padding: 16px 14px 14px 26px;
    font-size: 16px;
    border-bottom: solid 1px #dddddd;
}
.jz_hui>p>span{
  color: #5093e1;
}
.jz_pad{
   padding: 14px 28px 0px ; 
}
#textarea{
    width: 100%;
    border-radius: 5px;
    text-indent: 5px;
    height: 142px;
    outline: none;
}
.jz_ding{
    width: 292px;
    margin:48px auto 0px;
}
.jz_ding>span{
    width: 108px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    border-radius: 5px;
    cursor: pointer;
}
.jz_sure{
    color: #5093e1;
    background:#dbeef9; 
}
.jz_cancle{
    border: solid 1px #dddddd;
}
.jz_win{
    width:660px;
    height: 530px; 
    border-radius: 5px;
    background: white;
    position: absolute;
    top: 0px;
     left: 0px;
    bottom: 0px;
    right: 0px;
    margin: auto;
}
.jz_win>p{
    padding: 16px 14px 14px 26px;
    font-size: 16px;
    border-bottom: solid 1px #dddddd;
}
.jz_win>p>span{
  color: #5093e1;
}
.jz_img{
    padding: 10px 20px 24px;
}
.jz_img img{
    width: 100%;
    height: 100%;
}
</style>
