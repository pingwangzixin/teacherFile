<template>
  <div class>
    <div class="jz_tong" v-show="judge!='teachersMessageEntering'">
      <h3>长病假记录</h3>
      <div class="jz_tab">
        <table>
          <thead>
            <tr>
              <th>病因</th>
              <th>开始时间</th>
              <th>结束时间</th>
              <th>共计时间(天)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in fallillData" :key="index">
              <td v-text="item.pathogeny"></td>
              <td v-text="item.starttime"></td>
              <td v-text="item.endtime"></td>
              <td v-text="item.day"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 教师信息录入 -->
    <div v-show="judge=='teachersMessageEntering'">
      <div class="jz_check1">
        <div class="jz_default1">
          <h3>长病假记录</h3>
          <p>
            <input type="text" class="jz_inp" placeholder="请输入教师姓名" />
            <i class="iconfont iconweibiaoti--"></i>
          </p>
        </div>
        <div class="jz_default2">
          <span @click="downLoad">模板下载</span>
          <span>
            <label for="agree">导入文件</label>
            <input type="file" hidden id="agree" ref="uploadagree" accept=".xlsx" />
          </span>
          <span @click="addFlag=true">新增</span>
        </div>
      </div>
      <div class="jz_default0">
        <table v-show="!addFlag">
          <thead>
            <tr>
              <th v-for="(v,i) in tableHead" :key="i">{{v}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(v,i) in  eduEnteringData" :key="i">
              <td>{{v.name}}</td>
              <td>{{v.idCard}}</td>
              <td>{{v.res}}</td>
              <td>{{v.start}}</td>
              <td>{{v.end}}</td>
              <td>{{v.all}}</td>
              <td class="jz_edit">
                <span>编辑</span>
                <span>删除</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-show="addFlag">
             <h3 class="jz_h3">新增长病假记录</h3>
              <ul class="jz_add">
               <li><span>姓名</span> <input type="text" placeholder="请输入姓名" class="jz_inp">  </li>
               <li><span>身份证号</span> <input type="text"  class="jz_idCard jz_inp">  </li>
               <li><span>病因</span> <input type="text" placeholder="请输入病因" class="jz_inp">  </li>
               <li class="jz_li">
                 <span>时间</span>
                 <p><input type="date" class="jz_inp">-<input type="date" class="jz_inp"></p>
               </li>
            </ul>
            <div class="jz_sel ">
              <span class="jz_cancle" @click="addFlag=false">取消</span>
              <span class="jz_sure" >确定</span>
            </div>
        </div>


      </div>
    </div>
  </div>
</template>
<script>
import { teaRelevant } from "../../api";

export default {
  data() {
    return {
      fallillData: [],
      idCard: "",
      judge: "",
      tableHead:['姓名','身份证号','病因','开始时间','结束时间','共计时间','操作'],
      eduEnteringData:[
        {name:'丽丽',idCard:'193456811340134569',res:'感冒',start:'1996.09.01',end:'2000.07.01',all:'92'}, 
      ],
      addFlag:false,
    };
  },
  created() {
    this.idCard = this.$route.query.idCard||JSON.parse(sessionStorage.info).idCard;
    if (this.$route.query.judge) {
      this.judge = this.$route.query.judge;
    }
    this.getData();
  },
  mounted() {},
  methods: {
    addData() {
      // let obj=new Object();
      // obj.id=new Date().getTime();
      // obj.pathogeny='未知';
      // obj.starttime='2017-05-20';
      // obj.endtime='2018-06-20';
      // obj.day='40';
      // teaRelevant.addTeaFallill(obj).then((res)=>{
      //   console.log(res)
      // })
    },

    editData() {
      let obj = new Object();
      obj.id = "7df562b5a3714e4794567fe863a61043";
      obj.pathogeny = "结婚";
      obj.starttime = "2019-05-20";
      obj.endtime = "2020-05-20";
      obj.day = "25";
      teaRelevant.editTeaFallill(obj).then(res => {
        
      });
    },

    getData() {
      let obj = new Object();
      if (this.idCard) {
        obj.idCard = this.idCard;
        teaRelevant.teaFallillData(obj).then(res => {
          if (res.status == "200") {
            this.fallillData = res.data.data.list;
          }
        });
      }
    },
    downLoad(){
       window.open("http://111.207.13.88:9127/jeuc/api/TeaBase/download?type=7");
    }
  }
};
</script>
<style scoped>
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
/* css */
.jz_tong h3 {
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
.jz_tab {
  min-height: 468px;
  box-sizing: border-box;
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
.jz_default1 h3 {
  color: #5093e1;
}
.jz_default1 p {
  margin-left: 10px;
  position: relative;
}
.jz_default1 p i {
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
.jz_idCard{
  width: 270px !important;
  background: #ededed;
}
.jz_inp {
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
.jz_default0{
   min-height:468px;
  padding: 10px 20px 0px; 
}
.jz_edit{
  display: flex;
  border: none;
  align-items: center;
  justify-content: space-around;
}
.jz_edit span{
  cursor: pointer;
  color: #5093e1;
}
.jz_h3{
   color: #5093e1;
}
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
</style>
