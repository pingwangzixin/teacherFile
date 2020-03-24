<template>
  <div class>
    <!-- 课堂满意度 -->
    <div class="jz_tong" v-if="viewOrEdit!='teachersMessageEntering'">
      <h3 v-show="!addClassAgreee">
        课堂满意度
        <span class="jz_add fr" v-show="viewOrEdit=='editTeacher'" @click="newAdd">新增</span>
      </h3>
      <h3 v-show="addClassAgreee">新增课堂满意度</h3>
      <div class="jz_wraptable">
        <table class="jz_table1" v-show="!addClassAgreee">
          <thead>
            <tr>
              <th>考核学年</th>
              <th>课堂满意度</th>
              <th v-show="viewOrEdit=='editTeacher'">操作</th>
            </tr>
          </thead>
          <tbody v-for="(item,index) in classAgreeData" :key="index">
            <tr>
              <td>{{item.term}}</td>
              <td>{{item.score}}分</td>
              <td class="jz_td" v-show="viewOrEdit=='editTeacher'">
                <span @click="editClassAgree(index)" :class="{activeys:index==editClassId}">编辑</span>
                <span @click="classAgreeDel(item.id)">删除</span>
              </td>
            </tr>

            <tr v-show="index==editClassId">
              <td colspan="3" class="jz_editkh">
                <div class>
                  <p>
                    <span>选择年度</span>
                    <select class="jz_inp" v-model="checkYear">
                      <option selected disabled>请选择考核年度</option>
                      <option v-for="(v, i) in slectYear" :key="i" :value="v">{{v}}</option>
                    </select>
                  </p>
                  <p>
                    <span>课堂满意度</span>
                    <input
                      type="text"
                      class="jz_inp"
                      v-model="agreeLevel"
                      onkeyup="value=value.replace(/[^0-9]/g,'')"
                      maxlength="2"
                    />
                  </p>
                  <div class="jz_sel">
                    <span class="jz_cancle" @click="editClassId=null">取消</span>
                    <span class="jz_sure" @click="editSure(index)">确定</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="jz_editkh jz_newedit" v-show="addClassAgreee">
          <p>
            <span>选择学年</span>
            <select class="jz_inp" v-model="checkYear">
              <option selected disabled>请选择考核年度</option>
              <option v-for="(v, i) in slectYear" :key="i" :value="v">{{v}}</option>
            </select>
          </p>
          <p>
            <span>课堂满意度</span>
            <input
              type="text"
              class="jz_inp"
              v-model="agreeLevel"
              placeholder="请输入分数"
              onkeyup="value=value.replace(/[^0-9]/g,'')"
              maxlength="2"
            />
          </p>
          <div class="jz_sel jz_newsel">
            <span class="jz_cancle" @click="addClassAgreee=false">取消</span>
            <span class="jz_sure" @click="addSure">确定</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 教师信息录入 -->
    <div v-if="viewOrEdit=='teachersMessageEntering'">
      <div class="jz_check1">
        <div class="jz_default1">
          <h3>课堂满意度</h3>
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

        <!--  -->
        <div v-show="addFlag">
          <h3 class="jz_h3">新增课堂满意度</h3>
          <div class="jz_kaohe">
            <ul class="jz_ul">
               <li><span>姓名</span> <input type="text" placeholder="请输入姓名" class="jz_inp">  </li>
               <li><span>身份证号</span> <input type="text"  class="jz_idCard jz_inp">  </li>
               <li><span>考核结果</span> <input type="text" placeholder="" class="jz_inp">  </li>
            </ul>
            <div class="jz_sel">
              <span class="jz_cancle" @click="addFlag=false">取消</span>
              <span class="jz_sure">确定</span>
            </div>
          </div>
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
      viewOrEdit: null, //判断是读取还是编辑
      editClassId: null, //课堂满意度编辑
      addClassAgreee: false, //添加课堂满意度
      classAgreeData: [], //列表数据
      slectYear: [
        "2018-2019学年",
        "2017-2018学年",
        "2016-2017学年",
        "2015-2014学年",
        "2013-2014学年"
      ],
      checkYear: "",
      agreeLevel: "",
      idCard: "",
      addFlag: false //课堂满意度
    };
  },
  created() {
    this.viewOrEdit = this.$route.query.judge;
    this.idCard = this.$route.query.idCard;
    // console.log(this.viewOrEdit)
    this.findData();
  },
  mounted() {},
  methods: {
    //编辑课堂满意度
    editClassAgree(index) {
      this.editClassId = index;
      //信息回显
      this.checkYear = this.classAgreeData[index].term;
      this.agreeLevel = this.classAgreeData[index].score;
    },

    //确认编辑
    editSure(index) {
      let parentsMethods = this.$parent.$parent.$parent;
      console.log(parentsMethods);
      if (this.checkYear != "" && this.agreeLevel != "") {
        let obj = new Object();
        let id = this.classAgreeData[index].id;
        obj.id = id;
        obj.term = this.checkYear;
        obj.score = this.agreeLevel;
        teaRelevant.editClassAgree(obj).then(res => {
          if (res.status == 200) {
            this.findData();
            this.editClassId = null;
            parentsMethods.timingFn("success", "编辑成功！");
          }
        });
      }
    },
    //课堂满意度 删除
    classAgreeDel(id) {
      let _this = this;
      let parentsMethods = _this.$parent.$parent.$parent;

      parentsMethods.confirmFn("确认要删除这条课堂满意度信息吗?", function(
        state
      ) {
        if (state == "sure") {
          teaRelevant.delClassAgree({ id: id }).then(res => {
            if (res.status == 200) {
              _this.findData();
              parentsMethods.timingFn("success", "删除成功！");
            }
          });
        } else {
        }
      });
    },
    newAdd() {
      //新增init
      this.addClassAgreee = true;
      this.checkYear = "";
      this.agreeLevel = "";
    },
    addSure() {
      let parentsMethods = this.$parent.$parent.$parent;
      if (this.checkYear == "") {
        parentsMethods.timingFn("warning", "请选择学年");
      } else if (this.agreeLevel == "") {
        parentsMethods.timingFn("warning", "请输入课堂满意度分数");
      } else {
        let obj = new Object();
        (obj.term = this.checkYear),
          (obj.score = this.agreeLevel),
          (obj.id = new Date().getTime());
        obj.idCard = this.idCard;
        teaRelevant.addClassAgree(obj).then(res => {
          if (res.status == 200) {
            parentsMethods.timingFn("success", "新增成功！");
            this.addClassAgreee = false;
            this.findData();
          }
        });
      }
    },
    findData() {
      teaRelevant.classAgreeData({ idCard: this.idCard }).then(res => {
        if (res.status == 200) {
          let data = res.data.data.list;
          let useData = data.filter(v => {
            return v.delFlag == 0;
          });
          this.classAgreeData = useData;
        }
      });
    },
      downLoad(){
       window.open("http://111.207.13.88:9127/jeuc/api/TeaBase/download?type=3");
    }
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
.jz_h3 {
  color: #5093e1;
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
.jz_idCard{
  width: 270px !important;
  background: #ededed;
}

</style>
