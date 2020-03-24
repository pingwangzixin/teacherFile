<template>
  <div class>
    <div class="jz_tong" v-show="judge!='teachersMessageEntering'">
      <h3>第一学历</h3>
      <div class="jz_tab">
        <table>
          <thead>
            <tr>
              <th>学历</th>
              <th>学校名称</th>
              <th>入校时间</th>
              <th>毕业时间</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in teaEducationData" :key="index">
              <td v-text="item.firstDiploma"></td>
              <td v-text="item.firstMajor"></td>
              <td v-text="item.startTime"></td>
              <td v-text="item.endTime"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!--教师信息录入 -->
    <div v-show="judge=='teachersMessageEntering'" >
       <div class="jz_check1">
        <div class="jz_default1">
          <h3>第一学历</h3>
          <p>
            <input type="text" class="jz_inp" placeholder="请输入教师姓名">
           <i class="iconfont iconweibiaoti--" ></i>
          </p>
        </div>
        <div class="jz_default2">
          <span @click="downLoad">模板下载</span>
          <span>
            <label for="agree">导入文件</label>
            <input
              type="file"
              hidden
              id="agree"
              ref="uploadagree"
              accept=".xlsx"
            />
          </span>
          <span @click="addXueli=true">新增</span>
        </div>
      </div>
      <div class="jz_default0">
        <table v-show="!addXueli">
          <thead>
            <tr>
              <th>姓名</th>
              <th>身份证号</th>
              <th>学科</th>
              <th>学校名称</th>
              <th>入校时间</th>
              <th>毕业时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(v,i) in eduEnteringData" :key="i">
              <td>{{v.name}}</td>
              <td>{{v.idCard}}</td>
              <td>{{v.edu}}</td>
              <td>{{v.school}}</td>
              <td>{{v.start}}</td>
              <td>{{v.end}}</td>
              <td class="jz_edit">编辑</td>
            </tr>
          </tbody>
        </table>
          <div v-show="addXueli">
            <h3 class="jz_h3">新增第一学历</h3>
            <ul class="jz_add">
              <li><span>姓名</span> <input type="text" placeholder="请输入姓名" class="jz_inp">  </li>
              <li><span>身份证号</span> <input type="text"  class="jz_idCard jz_inp">  </li>
               <li><span>学历</span> <input type="text" placeholder="请输入学历" class="jz_inp">  </li>
               <li><span>学校名称</span> <input type="text" placeholder="请输入学校名称" class="jz_inp"></li>
               <li class="jz_li">
                 <span>时间</span>
                 <p><input type="date" class="jz_inp">-<input type="date" class="jz_inp"></p>
               </li>
            </ul>
            <div class="jz_sel jz_newsel">
              <span class="jz_cancle" @click="addXueli=false">取消</span>
              <span class="jz_sure" >确定</span>
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
       
         idCard:'',
         teaEducationData:[],
         judge:'',
         eduEnteringData:[
           {name:'丽丽',idCard:'193456811340134569',edu:'本科',school:'北京大学',start:'1996.09.01',end:'2000.07.01'},
           {name:'丽丽',idCard:'193456811340134569',edu:'本科',school:'北京大学',start:'1996.09.01',end:'2000.07.01'},
           {name:'丽丽',idCard:'193456811340134569',edu:'本科',school:'北京大学',start:'1996.09.01',end:'2000.07.01'},
         ],
         addXueli:false,
      }
  },
  created(){
    // if(sessionStorage.info){
    //   this.idCard=JSON.parse(sessionStorage.info).idCard
    // }
    this.idCard=this.$route.query.idCard||JSON.parse(sessionStorage.info).idCard;
    if(this.$route.query.judge){
       this.judge=this.$route.query.judge;
    }
    this.findData()
  },
  mounted(){
  },
  methods:{

    downLoad() {
      window.open("http://111.207.13.88:9127/jeuc/api/TeaBase/download?type=2");
    },
   findData() {
      let obj = new Object();
      if(this.idCard){
        obj.idCard = this.idCard;
        // console.log(this.idCard)
        teaRelevant.findTeaAll(obj).then(res => {
          if (res.status == 200) {
          let  data= res.data.data.teaEducationData; //学历学位信息
          if(data.delFlag==0){
            this.teaEducationData.push(data) 
          }
          }
        });
      }
    }

  },
}
</script>
<style scoped>
.jz_add li span{
  display: inline-block;
   width: 90px;
   margin-right: 10px;
  text-align: right;
}
.jz_add li{
  line-height: 50px;
}
.jz_li {
  display:flex;
  justify-content: flex-start; 
}
input[type='date']{
 width: 180px !important;
}
.jz_sel {
  padding: 18px 0px 30px;
  display: flex;
  justify-content: center;
}
.jz_sel span {
  padding: 6px 44px;
  cursor: pointer;
}
.jz_cancle {
  background: #ededed;
  margin-right: 40px;
}
.jz_sure {
  background: #399fdf;
  color: white;
}
table {
  width: 100%;
  border-collapse: collapse;
}
tr,
th,
td {
  border: solid 1px #dddddd;
  height: 40px;
  text-align: center;
}
thead {
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
.jz_edit{
   color: #5093e1;
   cursor: pointer;
}
.jz_tab{
  min-height: 468px;
  box-sizing: border-box;
  padding: 10px 20px 0px;
}
.jz_h3{
   color: #5093e1;
}
.jz_default0{
  min-height:468px;
  padding: 10px 20px 0px; 
}
.jz_check1 {
  padding: 0px 20px;
  height: 56px;
  border-bottom: solid 1px #dddddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.jz_default1 {
  display: flex;
  justify-content: flex-start;
  font-size: 16px;
}
.jz_default1 h3{
  color: #5093e1;
}
.jz_default1 p{
  margin-left: 10px;
  position: relative;
}
.jz_idCard{
  width: 270px !important;
  background: #ededed;
}
.jz_inp{
   width: 170px;
  height: 30px;
  border: solid 1px #dddddd;
  box-sizing: border-box;
  outline: none;
  border-radius: 5px;
  text-indent: 5px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.jz_default1 p i{
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.jz_default2 span {
  cursor: pointer;
  text-align: center;
  display: inline-block;
}
.jz_default2 span label {
  cursor: pointer;
}
.jz_default2 span:nth-of-type(1) {
  width: 80px;
  height: 28px;
  line-height: 28px;
  color: #5093e1;
  border: solid 1px #5093e1;
  background: #f5f5f5;
}
.jz_default2 span:nth-of-type(2) {
  width: 80px;
  height: 28px;
  line-height: 28px;
  color: white;
  border: solid 1px #5093e1;
  background: #5093e1;
  margin: 0px 6px;
}
.jz_default2 span:nth-of-type(3) {
  width: 60px;
  height: 28px;
  line-height: 28px;
  color: white;
  border: solid 1px #1abc9c;
  background: #1abc9c;
}

</style>
