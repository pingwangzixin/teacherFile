<template>
  <div>
    <div class="jz_tong" v-if="judge!='teachersMessageEntering'">
      <h3>
        <span>任课情况</span>
      </h3>
      <div class="jz_tab">
        <table v-for="(item,index) in lanTable" :key="index">
          <thead>
            <tr>
              <th v-for="(v,i ) in item.head" :key="i">{{v}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(val,n) in item.data" :key="n">
              <td>{{val.term}}</td>
              <td>{{val.level}}</td>
              <td>{{val.subjectMain}}</td>
              <td>{{val.subjectPart}}</td>
              <td>{{val.weekday}}</td>
              <td>{{val.totalhour}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="judge=='teachersMessageEntering'">
     <div class="jz_check1">
        <div class="jz_default1">
          <h3>任课情况</h3>
          <select class="jz_inp">
            <option value="1">1</option>
          </select>
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
      <!--  -->
       <div class="jz_default0">
         <!--  -->
         <div v-show="!addFlag">
            <div class="jz_head">
             <p>
              <input type="text" placeholder="输入姓名搜索" />
              <i class="iconfont iconweibiaoti--"></i>
             </p>
            </div>
            <table>
              <thead>
                <tr>
                  <th v-for="(v,i ) in head2" :key="i">{{v}}</th>
                </tr>
              </thead>
              <tbody>
                <tr></tr>
              </tbody>
            </table>
         </div>
         <!--  -->
         <div v-show="addFlag">
             <h3 class="jz_h3">新增任课情况</h3>
            <ul class="jz_ul">
               <li><span>学期</span> <select class="jz_inp"><option value="" ></option></select>  </li>
               <li><span>任课学段</span> <select class="jz_inp"><option value="" ></option></select>  </li>
               <li><span>主任学科</span> <select class="jz_inp"><option value="" ></option></select>  </li>
               <li><span>兼任学科</span> <select class="jz_inp"><option value="" ></option></select>  </li>
               <li><span>课时/周</span> <input type="text" placeholder="请输入课时/周" class="jz_inp">  </li>
               <li><span>总课时数</span>  <input type="text" class="jz_inp"></li>
            </ul>
            <div class="jz_sel">
              <span class="jz_cancle" @click="addFlag=false">取消</span>
              <span class="jz_sure">确定</span>
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
      lanTable: [
        {
          head: [
            "学期",
            "任课学段",
            "主任学科",
            "兼任学科",
            "课时/周",
            "总课时数"
          ],
          data: []
        },
      ],
      head2: [
        "姓名",
            "学期",
            "任课学段",
            "主任学科",
            "兼任学科",
            "课时/周",
            "总课时数"
          ],
      idCard: "",
      judge: "",
      addFlag:false,
    };
  },
  created() {
    this.idCard = this.$route.query.idCard;
    this.judge = this.$route.query.judge;
    this.findData();
    let parentsMethods = this.$parent.$parent;
  },
  mounted() {},
  methods: {
    addData() {
      let obj = new Object();
      obj.term = "2014-2015年第一学期";
      obj.level = "小学";
      obj.subjectMain = "语文";
      obj.subjectPart = "小学政治、历史信息";
      obj.weekday = "10";
      obj.totalhour = "300";
      obj.id = new Date().getTime();
      teaRelevant.addTeachClass(obj).then(res => {
        //  console.log(res)
        if (res.status == 200) {
          this.findData();
        }
      });
    },

    editData() {
      let obj = new Object();
      obj.term = "2014-2015年第一学期";
      obj.level = "初中";
      obj.subjectMain = "英语";
      obj.subjectPart = "初中化学";
      obj.weekday = "15";
      obj.totalhour = "235";
      obj.id = "1576044578529";
      teaRelevant.editTeachClass(obj).then(res => {
       
        if (res.status == 200) {
          this.findData();
        }
      });
    },
    findData() {
      let obj = new Object();
      if (this.idCard) {
        obj.idCard = this.idCard;
        teaRelevant.teachClassData(obj).then(res => {
          if (res.status == 200) {
            let data = res.data.data.list;
            let useData = data.filter(v => {
              return v.delFlag == 0;
            });
            this.lanTable[0].data = useData;
          }
        });
      }
    },
    downLoad(){
       window.open("http://111.207.13.88:9127/jeuc/api/TeaBase/download?type=5");
    }
  }
};
</script>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  /* table-layout: fixed;
  white-space: nowrap; */
}
tr,
th,
td {
  border: solid 1px #dddddd;
  height: 40px;
  text-align: center;
  /* overflow: hidden; 内容超出宽度时隐藏超出部分的内容 */
  /* text-overflow: ellipsis; 当对象内文本溢出时显示省略标记(...)；需与overflow:hidden;一起使用。 */
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
.jz_add {
  display: inline-block;
  width: 62px;
  height: 30px;
  color: white;
  background: #1abc9c;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  border-radius: 2px;
  cursor: pointer;
  margin-top: -6px;
}
.jz_tab {
  min-height: 468px;
  box-sizing: border-box;
  padding: 10px 20px 20px;
}
.jz_check1 {
  padding: 0px 20px;
  height: 56px;
  border-bottom: solid 1px #dddddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.jz_default0 {
  min-height: 468px;
  padding: 10px 20px 0px;
}
.jz_default1 {
  display: flex;
  justify-content: flex-start;
  font-size: 16px;
}
.jz_default1 h3 {
  color: #5093e1;
  margin-right: 8px;
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
.jz_head {
  display: flex;
  justify-content: flex-end;
  margin: 0px 0px 10px;
}

.jz_head input {
  width: 270px;
  height: 30px;
  border-radius: 30px;
  border: solid 1px #dddddd;
  outline: none;
  text-indent: 15px;
}
.jz_h3 {
  color: #5093e1;
}
.jz_head p {
  position: relative;
}
.iconweibiaoti-- {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.jz_ul li span{
  display: inline-block;
   width: 90px;
   margin-right: 10px;
  text-align: right;
}
.jz_ul li{
  line-height: 50px;
}
</style>
