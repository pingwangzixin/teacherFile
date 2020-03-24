<template>
    <div class="">
       <div class="jz_tong" >
             <h3>电子证书
             </h3>
             <div class="jz_tab">
                <table>
                  <thead>
                    <tr>
                      <th>编号</th>
                      <th>活动名称</th>
                      <th>级别</th>
                      <th>发奖单位</th>
                      <th>发奖时间</th>
                      <th>操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr >
                       <td>FXJYJTT20190018</td>
                       <td>北京市优秀教育工作者</td>
                       <td>市级</td>
                       <td>东城区</td>
                       <td>2019年06月20日</td>
                       <td class="jz_caozuo">
                          <span @click="lookInfo()">查看详情</span>
                          <span>删除</span>
                       </td>
                    </tr>
                  </tbody>
                </table>
             </div>
      </div>
    </div>
</template>
<script>
import { teaRelevant } from "@/api";
export default {
   data() {
      return {
  firstDegree:[
         {xueli:'大学本科毕业',name:'北京大学',inTime:'1993年09月01',outTime:'1993年09月01'}
         ],
      }
   },
   mounted() {

   },
   methods:{
     lookInfo(){
        this.$router.push({path:'/index/teaHonorShow',query:{from:'elecprove',id:'168'}})  
     }
   },
}
</script>
<style scoped>
table{
  width: 100%;
  border-collapse: collapse;
}
tr,th,td{
  border: solid 1px #dddddd;
  height: 40px;
  text-align: center;
}
thead{
  background: #f6f6f6;
}

/* css */
.jz_tong h3{
  box-sizing: border-box;
  padding: 0px 20px;
  height: 56px;
  line-height: 56px;
  border-bottom: solid 1px #dddddd;
  color: #5093e1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.jz_tab{
  min-height: 468px;
  box-sizing: border-box;
  padding: 10px 20px 0px;
}
.jz_caozuo{
   display: flex;
   align-items: center;
   justify-content: space-around;
   border: none;
}
.jz_caozuo span{
   cursor: pointer;
   color: #5093e1;
}
</style>
