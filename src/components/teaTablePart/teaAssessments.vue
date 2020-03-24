<template>
  <div class>
    <!-- 年度考核 -->
    <div class="jz_tong" v-if="viewOrEdit!='teachersMessageEntering'">
      <h3 v-show="!addYearCheckFlag">
        年度考核
        <span class="jz_add fr" v-show="viewOrEdit=='editTeacher'" @click="addYearCheck">新增</span>
      </h3>
      <h3 v-show="addYearCheckFlag">新增年度考核</h3>
      <div class="jz_wraptable">
        <table class="jz_table1" v-show="!addYearCheckFlag">
          <thead>
            <tr>
              <th>考核年度</th>
              <th>考核结果</th>
              <th v-show="viewOrEdit=='editTeacher'">操作</th>
            </tr>
          </thead>
          <tbody v-for="(item,index) in yearCheckData" :key="index">
            <tr>
              <td>{{item.year}}</td>
              <td>{{item.result}}</td>
              <td class="jz_td" v-show="viewOrEdit=='editTeacher'">
                <span @click="editYearCheck(index)" :class="{activeys:index==editCheckId}">编辑</span>
                <span @click="yearCheckDel(item.id)">删除</span>
              </td>
            </tr>
            <tr v-show="index==editCheckId">
              <td colspan="3" class="jz_editkh">
                <div>
                  <p>
                    <span>选择年度</span>
                    <select class="jz_inp" v-model="yearCheckChooseYear">
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                    </select>
                  </p>
                  <p>
                    <span>考核结果</span>
                    <select name id class="jz_inp" v-model="yearCheckChooseRes">
                      <option v-for="(m,n) in kaoheResult " :key="n" :value="m" v-text="m"></option>
                    </select>
                  </p>
                  <div class="jz_sel">
                    <span class="jz_cancle" @click="editCheckId=null">取消</span>
                    <span class="jz_sure" @click="editYearCheckSure(index)">确定</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="jz_editkh jz_newedit" v-show="addYearCheckFlag">
          <p>
            <span>选择年度</span>
            <select class="jz_inp" v-model="yearCheckChooseYear">
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
            </select>
          </p>
          <p>
            <span>考核结果</span>
            <select class="jz_inp" v-model="yearCheckChooseRes">
              <option v-for="(item,index) in kaoheResult " :key="index" :value="item" v-text="item"></option>
            </select>
          </p>
          <div class="jz_sel jz_newsel">
            <span class="jz_cancle" @click="addYearCheckFlag=false">取消</span>
            <span class="jz_sure" @click="addYearSure">确定</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 教师信息录入进入页面加载 -->
    <div v-if="viewOrEdit=='teachersMessageEntering'">
      <div class="jz_check1">
        <div class="jz_default1">
          <h3>年度考核</h3>
          <select class="jz_inp">
            <option value="1">1</option>
          </select>
        </div>
        <div class="jz_default2">
          <span @click="downLoad">模板下载</span>
          <span>
            <label for="agree">导入文件</label>
            <input type="file" hidden id="agree" ref="uploadcheck" accept=".xlsx"  @change="checkFile"/>
          </span>
          <span @click="addFlag=true">新增</span>
        </div>
      </div>
      <div class="jz_check2" v-show="!addFlag">
        <div class="jz_head">
          <span>考核结果输入:优秀、合格、基本合格、不合格、不确定考核等级、未参加考核、其他</span>
          <p>
            <input type="text" name id placeholder="输入姓名搜索" />
            <i class="iconfont iconweibiaoti--"></i>
          </p>
        </div>
        <table class="jz_tab2">
          <thead>
            <tr>
              <th>姓名</th>
              <th>身份证号</th>
              <th>考核结果</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>丽丽</td>
              <td>123456700123451024</td>
              <td>合格</td>
              <td class="jz_td">
                <span>编辑</span>
                <span>删除</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="jz_check2" v-show="addFlag">
       <h3 class="jz_h3">新增年度考核</h3>
        <ul class="jz_ul">
               <li><span>姓名</span> <input type="text" placeholder="请输入姓名" class="jz_inp">  </li>
               <li><span>身份证号</span> <input type="text"  class="jz_idCard jz_inp">  </li>
               <li><span>考核结果</span> 
                    <select name id class="jz_inp" v-model="yearCheckChooseRes">
                      <option v-for="(m,n) in kaoheResult " :key="n" :value="m" v-text="m"></option>
                    </select>  </li>
         </ul>
         <div class="jz_sel">
            <span class="jz_cancle" @click="addFlag=false">取消</span>
            <span class="jz_sure">确定</span>
          </div>
      </div>

    </div>
  </div>
</template>
<script>
import { teaRelevant } from "@/api";
import designSelect from "@/components/part/designSelect.vue";
export default {
  components: {
    designSelect
  },
  data() {
    return {
      viewOrEdit: "",
      editCheckId: null,
      addYearCheckFlag: false, //添加年度考核
      yearCheckChooseYear: "", //年度考核选择年份
      yearCheckChooseRes: "",
      yearCheckData: [], //年度考核数据
      // annualData: [], //年度数据
      kaoheResult: [
        "优秀",
        "合格",
        "基本合格",
        "不合格",
        "不确定考核等级",
        "未参加考核",
        "其他"
      ],
      idCard: "",
      id: "",
      addFlag: false //信息录入年度考核新增
    };
  },
  created() {
    this.viewOrEdit = this.$route.query.judge;
    this.idCard = this.$route.query.idCard||JSON.parse(sessionStorage.info).idCard;
    this.id = this.$route.query.id;

    this.findYearCheckData();
  },
  mounted() {},
  methods: {
    //编辑年度考核
    editYearCheck(index) {
      this.editCheckId = index;
      let ydata = this.yearCheckData;
      this.yearCheckChooseYear = ydata[index].year;
      this.yearCheckChooseRes = ydata[index].result;
    },

    editYearCheckSure(index) {
      // 确认编辑年度考核
      let parentsMethods = this.$parent.$parent.$parent;
      parentsMethods.timingFn("success", "编辑成功！");
      this.editCheckId = null;
      this.yearCheckData[index].year = this.yearCheckChooseYear;
      this.yearCheckData[index].result = this.yearCheckChooseRes;

      let editData = this.yearCheckData[index];
      teaRelevant.editYearCheckData(editData).then(res => {
        if (res.status == "200") {
          this.findYearCheckData();
        }
      });
    },
    yearCheckDel(id) {
      let parentsMethods = this.$parent.$parent.$parent;
      let _this = this;
      parentsMethods.confirmFn("确认要删除这条年度考核信息吗?", function(
        state
      ) {
        if (state == "sure") {
          teaRelevant.delYearCheck({ id: id }).then(res => {
            if (res.status == "200") {
              _this.findYearCheckData();
              parentsMethods.timingFn("success", "删除成功！");
            }
          });
        } else {
        }
      });
    },
    addYearCheck() {
      //新增年度考核初始化
      this.addYearCheckFlag = true;
      this.yearCheckChooseYear = "";
      this.yearCheckChooseRes = "";
    },

    addYearSure() {
      //确认添加到年度考核
      let parentsMethods = this.$parent.$parent.$parent;
      if (this.yearCheckChooseYear == "") {
        parentsMethods.timingFn("warning", "请选择考核年度");
      } else if (this.yearCheckChooseRes == "") {
        parentsMethods.timingFn("warning", "请选择考核结果");
      } else {
        let ydata = this.yearCheckData;
        let obj = new Object();
        obj.year = this.yearCheckChooseYear;
        obj.result = this.yearCheckChooseRes;
        obj.id = new Date().getTime();
        obj.idCard = this.idCard;
        teaRelevant.addYearCheckData(obj).then(res => {
          if (res.status == "200") {
            this.findYearCheckData();
          }
        });
        this.addYearCheckFlag = false;
      }
    },
    // 请求获得年度考核数据
    findYearCheckData() {
      teaRelevant.yearCheckData({ idCard: this.idCard }).then(res => {
        if (res.status == 200) {
          let data = res.data.data.list;
          let useData = data.filter(v => {
            return v.delFlag == 0;
          });
          this.yearCheckData = useData;
        }
      });
    },
     downLoad(){
       window.open("http://111.207.13.88:9127/jeuc/api/TeaBase/download?type=4");
    },
      //导入年度考核
    checkFile() {
      let file = this.$refs.uploadcheck.files[0];
      let formData = new FormData();
      formData.append("file", file);
      // console.log(file);
      teaRelevant
        .importYearCheck(formData)
        .then(res => {
          // console.log(res);
        })
        .catch(res => console.log(res));
    },
  }
};
</script>
<style scoped>
/* css */
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
  /* padding: 8px 16px; */
  background: #1abc9c;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  border-radius: 2px;
  cursor: pointer;
  margin-top: -6px;
}
.jz_newedit {
  background: white !important;
  margin-top: 20px;
}
.jz_wraptable {
  padding: 10px 20px 284px;
}
.jz_editkh {
  text-align: left !important;
  background: #f5f5f5;
  padding: 0px !important;
}
.jz_editkh p {
  margin-left: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
}
.jz_editkh p span {
  margin-right: 16px;
  display: inline-block;
  width: 90px;
  text-align: right;
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
.jz_newsel {
  margin-top: 100px;
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
.jz_manyi {
  width: 170px;
  height: 30px;
  border-radius: 5px;
  border: solid 1px #dddddd;
  outline: none;
}
.jz_td {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #4185e2;
  border: none !important;
}
.jz_td span {
  cursor: pointer;
}
/* 年度考核 */
.activeys {
  color: #a9a9a9;
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
.jz_check2 {
  padding: 10px 20px 32px;
  min-height: 400px;
}
.jz_head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.jz_head span {
  color: #999999;
}
.jz_head input {
  width: 270px;
  height: 30px;
  border-radius: 30px;
  border: solid 1px #dddddd;
  outline: none;
  text-indent: 15px;
}
.jz_idCard{
  width: 270px !important;
  background: #ededed;
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
.jz_tab2 {
  margin-top: 8px;
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
.jz_li {
  display:flex;
  justify-content: flex-start; 
}
.jz_h3{
   color: #5093e1;
}
</style>
