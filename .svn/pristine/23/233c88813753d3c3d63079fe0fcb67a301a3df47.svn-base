<template>
    <div class="jz_ewrap g_main" >
        <div class="jz_tou">
            <p><span>电子证书管理</span> <span>新增</span></p>
        </div>
         <div class="jz_nav">
             <ul>
                 <li v-for="(item,index) in stateData" :key="index" v-text="item" @click="activeIndex=index" :class="{'active':activeIndex==index}"></li>
             </ul>
         </div>
        <!-- 待确定 -->
         <div class="jz_dai" v-show="activeIndex==0">
             <p class="jz_all"  >共2次活动</p>
             <table>
                 <thead>
                     <tr>
                         <th>活动名称</th>
                         <th>类型</th>
                         <th>级别</th>
                         <th>发证单位</th>
                         <th>时间</th>
                         <th>操作</th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr v-for="(item,index) in waitData" :key="index">
                         <td>{{item.name}}</td>
                         <td>{{item.type}}</td>
                         <td>{{item.level}}</td>
                         <td>{{item.unit}}</td>
                         <td>{{item.time}}</td>
                         <td > 
                             <div class="jz_edit">
                                  <span @click="lookWaitInfo()">查看详情</span> <span @click="delWait()">删除</span> 
                             </div>
                         </td>
                     </tr>
                 </tbody>
             </table>
         </div>
        <!-- 已认定 -->
         <div class="jz_dai" v-show="activeIndex==1">
             <p class="jz_all">共10次活动</p>
             <table>
                 <thead>
                     <tr>
                         <th>活动名称</th>
                         <th>类型</th>
                         <th>级别</th>
                         <th>发证单位</th>
                         <th>时间</th>
                         <th>操作</th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr v-for="(item,index) in alreadyData" :key="index">
                         <td>{{item.name}}</td>
                         <td>{{item.type}}</td>
                         <td>{{item.level}}</td>
                         <td>{{item.unit}}</td>
                         <td>{{item.time}}</td>
                         <td > 
                             <div class="jz_edit">
                                  <span @click="lookAlreadyInfo()">查看详情</span> <span @click="delAlready(index)">删除</span> 
                             </div>
                         </td>
                     </tr>
                 </tbody>
             </table>
         </div>
        <!-- 未通过 -->
         <div class="jz_dai" v-show="activeIndex==2">
             <p class="jz_all">共10次活动</p>
             <table>
                 <thead>
                     <tr>
                         <th>活动名称</th>
                         <th>类型</th>
                         <th>级别</th>
                         <th>发证单位</th>
                         <th>时间</th>
                         <th>操作</th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr v-for="(item,index) in notPassData" :key="index">
                         <td>{{item.name}}</td>
                         <td>{{item.type}}</td>
                         <td>{{item.level}}</td>
                         <td>{{item.unit}}</td>
                         <td>{{item.time}}</td>
                         <td > 
                             <div class="jz_edit">
                                  <span @click="lookNoPassInfo()">查看详情</span> <span @click="delNoPass(index)">删除</span> 
                             </div>
                         </td>
                     </tr>
                 </tbody>
             </table>
         </div>
    </div>
</template>
<script>
export default {
   data() {
      return {

          stateData:['待认定','已认定','未通过'],
          activeIndex:0,
          waitData:[
              {name:'集团添加证书3',type:'讲座',level:'区级',unit:'北京',time:'2019-05-22',id:1},
              {name:'集团添加证书32',type:'讲座',level:'区级',unit:'北京',time:'2019-05-22',id:2},
          ],
          alreadyData:[
                 {name:'东城区文化发展活动',type:'讲座',level:'区级',unit:'北京',time:'2019-05-22',id:1},
              {name:'集团新增区级证书',type:'讲座',level:'区级',unit:'北京',time:'2019-05-22',id:2},
              {name:'集团新增区级证书',type:'讲座',level:'区级',unit:'北京',time:'2019-05-22',id:3},
              {name:'区管理新增区级证书',type:'讲座',level:'区级',unit:'北京',time:'2019-05-22',id:4},
          ],
           notPassData:[
              {name:'集团添加证书3',type:'讲座',level:'区级',unit:'北京',time:'2019-05-22',id:1},
              {name:'集团添加证书32',type:'讲座',level:'区级',unit:'北京',time:'2019-05-22',id:2},
          ],
      }
   },
   mounted() {
      
   },
   methods:{
       lookWaitInfo(){
           this.$router.push({path:'/index/credentialInfo',query:{id:"wait"}})
       },
       lookAlreadyInfo(){
            this.$router.push({path:'/index/credentialInfo',query:{id:"success"}})
       },
       lookNoPassInfo(){
           this.$router.push({path:'/index/credentialInfo',query:{id:'nopass'}})
       },

       delWait(index){
            let _this=this;
            this.$parent.confirmFn('是否确认删除此条待认定的电子证书申请?',function(state){
                if(state=='sure'){
                    _this.$parent.timingFn('success','删除成功！'); 
                }else{

                }
            })
       },
       delAlready(index){
            let _this=this;
            this.$parent.confirmFn('是否确认删除此条已认定的电子证书申请?',function(state){
                if(state=='sure'){
                    _this.$parent.timingFn('success','删除成功！'); 
                }else{

                }
            })
       },
       delNoPass(index){
            let _this=this;
            this.$parent.confirmFn('是否确认删除此条未通过的电子证书申请?',function(state){
                if(state=='sure'){
                    _this.$parent.timingFn('success','删除成功！'); 
                }else{

                }
            })
       },
   },
}
</script>
<style scoped>
/* css */
.jz_ewrap {
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
.jz_tou p{
     display: flex;
  justify-content: space-between;
  align-items: center;
}
.jz_tou p span:nth-of-type(1){
  color: #5093e1;
  font-size: 16px;
}
.jz_tou p span:nth-of-type(2){
    width: 78px;
    height: 28px;
    display: block;
    text-align: center;
    color: white;
    line-height:28px; 
    background: #5093e1;
    cursor: pointer;
}
.jz_nav{
    padding: 0px 20px 0px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f6f6f6;
}
.jz_nav ul {
      display: flex;
    justify-content: flex-start;
}
.jz_nav ul li{
    padding: 12px 42px;
    cursor: pointer;
    border-top: solid 2px transparent;
}
.active{
    color: #5093e1;
    border-top-color: #5093e1 !important;
    background: white;
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
/* 待认定 */
.jz_dai{
    box-sizing: border-box;
    padding: 0px 20px;
}
.jz_all{
    color: #5093e1;
    text-align: right;
    padding: 12px 0px ;
}
.jz_edit{
    display: flex;
    justify-content: space-around;    
    color: #5093e1;
}
.jz_edit span{
    cursor: pointer;
}
</style>
