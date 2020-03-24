<template>
  <div class>
    <!-- 专业型称号 -->
    <div class="jz_tong"  v-if="viewOrEdit!='teachersMessageEntering'">
      <h3 v-show="!addMajorTitle">
        专业型称号
        <span class="jz_add fr" v-show="viewOrEdit=='editTeacher'" @click="addMajorInit">新增</span>
      </h3>
       <h3  v-show="addMajorTitle">新增专业型称号</h3>
      <div class="jz_wraptable">
        <table v-show="!addMajorTitle">
          <thead>
            <tr>
              <th>获奖时间</th>
              <th>级别</th>
              <th>称号类型</th>
              <th v-show="viewOrEdit=='editTeacher'">操作</th>
            </tr>
          </thead>
          <tbody v-for="(item,index) in majorTitle" :key="index">
            <tr>
              <td>{{item.getTime}}</td>
              <td>{{(item.level=='市'||item.level=='区')?(item.level+'级'):'---'}}</td>
              <td>{{item.typeName}}</td>
              <td class="jz_td" v-show="viewOrEdit=='editTeacher'">
                <span @click="editMajorTitle(index)" :class="{activeys:index==editMajorId}">编辑</span>
                <span @click="majorTitleDel(item.id)">删除</span>
              </td>
            </tr>
            <tr v-show="index==editMajorId">
              <td colspan="4" class="jz_editkh">
                <div class>
                  <p>
                    <span>称号类别</span>
                    <select name id class="jz_inp" v-model="anameType">
                      <option value="教学骨干">教学骨干</option>
                      <option value="德育骨干">德育骨干</option>
                    </select>
                  </p>
                  <p>
                    <span>专业型称号</span>
                    <select name id class="jz_inp" v-model="azhuanName" v-if="anameType=='教学骨干'">
                      <option v-for="(m,n) in professionName1" :key="n" :value="m" v-text="m"></option>
                    </select>
                    <select name id class="jz_inp" v-model="azhuanName" v-if="anameType=='德育骨干'">
                      <option v-for="(m,n) in professionName2" :key="n" :value="m" v-text="m"></option>
                    </select>
                  </p>
                  <p
                    v-show="(azhuanName=='教学新秀'||azhuanName=='教学能手'||azhuanName=='学科带头人')&&anameType=='教学骨干'"
                  >
                    <span>级别</span>
                    <select name id class="jz_inp" v-model="alevel">
                      <option value="请选择级别" disabled selected hidden class="jz_hui">请选择级别</option>
                      <option value="区">区级</option>
                      <option value="市">市级</option>
                    </select>
                  </p>
                  <p>
                    <span>获奖时间</span>
                    <input type="date" class="jz_inp" @keydown.prevent v-model="awinTime" />
                  </p>

                  <div class="jz_sel">
                    <span class="jz_cancle" @click="editMajorId=null">取消</span>
                    <span class="jz_sure" @click="editMajorSure(index)">确定</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!--新增专业型称号  -->
        <div class="jz_editkh jz_newedit" v-show="addMajorTitle">
        <p>
          <span>称号类别</span>
          <select name id class="jz_inp" v-model="anameType">
            <option value="请选择称号类别" disabled selected hidden>请选择称号类别</option>
            <option value="教学骨干">教学骨干</option>
            <option value="德育骨干">德育骨干</option>
          </select>
        </p>
        <p>
          <span>专业型称号</span>
          <select name id class="jz_inp" v-model="azhuanName">
            <option value="请先选择称号类别" disabled selected hidden>请先选择称号类别</option>
            <option v-for="(m,n) in professionName" :key="n" :value="m" v-text="m"></option>
          </select>
        </p>
        <p
          v-show="(azhuanName=='教学新秀'||azhuanName=='教学能手'||azhuanName=='学科带头人')&&anameType=='教学骨干'"
        >
          <span>级别</span>
          <select name class="jz_inp" v-model="alevel">
            <option value="请选择级别" disabled selected hidden>请选择级别</option>
            <option value="区">区级</option>
            <option value="市">市级</option>
          </select>
        </p>

        <p>
          <span>获得时间</span>
          <input type="date" @keydown.prevent class="jz_inp" v-model="awinTime" />
        </p>
        <div class="jz_sel jz_newsel">
          <span class="jz_cancle" @click="addMajorTitle=false">取消</span>
          <span class="jz_sure" @click="addMajorSure">确定</span>
        </div>
      </div>
      </div>
    </div>
    <!--  entering-->
   <div v-if="viewOrEdit=='teachersMessageEntering'">
     <div  class="jz_check1">
       <span class="jz_proname">专业型称号</span>
       <span class="jz_newadd" @click="addFlag=true">新增</span>
     </div>

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
              <th>级别</th>
              <th>称号类型</th>
              <th>指导老师</th>
              <th>考核结果</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody v-for="(item,index) in majorTitleData" :key="index">
            <tr v-for="(m,n) in item.info" :key="n">
              <td :rowspan="item.info.length" v-if="n==0">{{item.name}}</td>
              <td :rowspan="item.info.length" v-if="n==0">{{item.id}}</td>
              <td>{{m.level}}</td>
              <td>{{m.type}}</td>
              <td>{{m.teacher}}</td>
              <td>{{m.res}}</td>
              <td>
                <span class="jz_del2" @click="majorDel(index,n)">删除</span>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        <!--  -->
        <div v-show="addFlag">
          <h3 class="jz_h3">新增专业型称号</h3>
           <div class="jz_kaohe">
          <p>
            <span>时间</span>
            <input type="date" class="jz_inp" @keydown.prevent />
          </p>
          <p>
            <span>姓名</span>
            <input type="text" class="jz_inp" />
          </p>
          <p>
            <span>身份证号</span>
            <input type="text" class="jz_inp" />
          </p>
          <p>
            <span>级别</span>
            <label><input type="radio" name="level" />省级</label>
            <label><input type="radio" name="level" />市级</label>
            <label><input type="radio" name="level" />区级</label>
          </p>
          <p>
            <span>称号级别</span>
            <select class="jz_inp">
              <option value="优秀">优秀</option>
            </select>
          </p>
          <p>
            <span>表彰单位</span>
            <input type="text" class="jz_inp" />
          </p>
          <p>
            <span>荣誉证书</span>
            <input type="radio" />是
            <input type="text" class="jz_inp" placeholder="请输入地区" />
          </p>
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
import $ from "jquery";
export default {
  data() {
    return {
      flag: "",
      viewOrEdit: "", //判断是编辑还是查看
      addMajorTitle: false, //添加专业型称号
      majorTitle: [],
      editMajorId: null,
      professionName: [],
      professionName1: [
        "教学新秀",
        "教学能手",
        "学科带头人",
        "省特级教师",
        "名教师",
        "名校长"
      ], //教学骨干
      professionName2: ["德育工作新秀", "德育工作能手", "德育工作带头人"], //德育骨干
      anameType: "", //称号类别
      azhuanName: "", //专业型称号
      awinTime: "", //获奖时间
      alevel: "", //等级
      idCard: "",
      addFlag:false,//教师录入页面增加
       majorTitleData: [{
          name: "艾艺玲",
          id: "100110190204566591",
          info: [{
              level: "市级",
              type: "德育工作新秀",
              teacher: "-",
              res: "2019.04.19"
            }, {
              level: "市级",
              type: "德育工作新秀",
              teacher: "-",
              res: "2019.04.19"
            },{
              level: "市级",
              type: "德育工作新秀",
              teacher: "-",
              res: "2019.04.19"
            }
          ]
        },
        {
          name: "艾艺玲",
          id: "100110190204566591",
          info: [
            {
              level: "市级",
              type: "德育工作新秀",
              teacher: "-",
              res: "2019.04.19"
            },
            {
              level: "市级",
              type: "德育工作新秀",
              teacher: "-",
              res: "2019.04.19"
            }
          ]
        }
      ]
    };
  },
  created() {
    this.viewOrEdit = this.$route.query.judge;
    this.idCard = this.$route.query.idCard||JSON.parse(sessionStorage.info).idCard;
    this.findMajorData();
  },
  mounted() {
   
  },
  methods: {
    // 控制专业型称号的显示内容
    // bnameType() {
    //   let chenghao = this.anameType;
    //   this.azhuanName = "请先选择称号类别";
    //   console.log('change',this.azhuanName)
    //   if (chenghao == "0") {
    //     this.professionName = this.professionName1; //教学骨干
    //   } else  {
    //     this.professionName = this.professionName2; //德育骨干
    //   }
    // },
    //编辑专业型称号
    editMajorTitle(index) {
      this.editMajorId = index;
      let data = this.majorTitle;
      this.anameType = data[index].type;
      this.azhuanName = data[index].typeName;
      this.awinTime = data[index].getTime;
      this.alevel = data[index].level;
    },

    //确认编辑专业型称号
    editMajorSure(index) {
      this.editMajorId = null;
      // this.$nextTick(()=>{
      let arr = [...this.majorTitle];
      let sendData = arr[index];
      sendData.type = this.anameType;
      sendData.typeName = this.azhuanName;
      sendData.getTime = this.awinTime;
      sendData.level = this.alevel;

      let parentsMethods = this.$parent.$parent.$parent;
      if (
        (sendData.typeName == "教学新秀" ||
          sendData.typeName == "教学能手" ||
          sendData.typeName == "学科带头人") &&
        sendData.level == ""
      ) {
        parentsMethods.timingFn("warning", "请选择级别");
      }else{
        this.majorTitle = arr;
        teaRelevant.editTeaProName(sendData).then(res => {
          if(res.status==200){
            this.findMajorData()
          }
        });
      }

    },
    //添加专业型称号初始化
    addMajorInit() {
      // console.log("innit..........");
      this.addMajorTitle = true;
      // this.anameType = null;
      this.anameType = "请选择称号类别";
      this.azhuanName = "请先选择称号类别";
      this.alevel = "";
      this.awinTime = "";
    },
    //添加专业型称号
    addMajorSure() {
      let obj = new Object();
      obj.getTime = this.awinTime;
      obj.typeName = this.azhuanName;
      obj.level = this.alevel;
      obj.type = this.anameType;
      obj.id = new Date().getTime();
      obj.idCard = this.idCard;
      let _this = this;
      let parentsMethods = _this.$parent.$parent.$parent;

      if (obj.type == "请选择称号类别") {
        parentsMethods.timingFn("warning", "请选择称号类别");
      } else if (
        obj.typeName == "请先选择称号类别" ||
        obj.typeName == "" ||
        obj.typeName == undefined
      ) {
        parentsMethods.timingFn("warning", "请选择专业型称号");
      } else if (
        obj.level == "" &&
        (obj.typeName == "教学新秀" ||
          obj.typeName == "教学能手" ||
          obj.typeName == "学科带头人")
      ) {
        parentsMethods.timingFn("warning", "请选择级别");
      } else if (obj.getTime == "") {
        parentsMethods.timingFn("warning", "请选择获得时间");
      } else {
        teaRelevant.addTeaProName(obj).then(res => {
          if (res.status == 200) {
            this.findMajorData();
            this.addMajorTitle = false;
          }
        });
      }
    },

    majorTitleDel(id) {
      //专业型称号  删除
      let _this = this;
      let parentsMethods = _this.$parent.$parent.$parent;
      parentsMethods.confirmFn("确认要删除这条专业型称号吗?", function(state) {
        if (state == "sure") {
          teaRelevant.delTeaProName({ id: id }).then(res => {
            if (res.status == 200) {
              _this.findMajorData();
              parentsMethods.timingFn("success", "删除成功！");
            }
          });
        } else {
        }
      });
    },
    //请求获得专业型称号的数据
    findMajorData() {
      if(this.idCard){

      }
      teaRelevant.teaProNameData({ idCard: this.idCard }).then(res => {
        if (res.status == 200) {
          let data = res.data.data.list;
          let useData = data.filter(v => {
            return v.delFlag == 0;
          });
          this.majorTitle = useData;
        }
      });
    }
  },
  watch: {
    anameType: function(n) {
      if (n == "请选择称号类别") {
        this.professionName = [];
      } else if (n == "教学骨干") {
        (this.azhuanName = this.professionName1[0]), //设置第一项为默认值
          (this.professionName = this.professionName1); //教学骨干
      } else {
        (this.azhuanName = this.professionName2[0]), //设置第一项为默认值
          (this.professionName = this.professionName2); //德育骨干
      }
    }
  }
};
</script>
<style scoped>
/* css */
.jz_wraptable {
  padding: 10px 20px 284px;
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

.jz_editkh {
  text-align: left !important;
  background: #f5f5f5;
  padding: 0px !important;
}
.jz_newedit {
  background: white !important;
  margin-top: 20px;
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
.jz_sel {
  padding: 18px 0px 30px;
  display: flex;
  justify-content: center;
}
.jz_newsel {
  margin-top: 100px;
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
/* 年度考核 */
.activeys {
  color: #a9a9a9;
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
.jz_check1 {
  padding: 0px 20px;
  height: 56px;
  border-bottom: solid 1px #dddddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.jz_proname{
  color: #5093e1;
}
.jz_newadd{
   width: 60px;
  height: 28px;
  text-align: center;
  line-height: 28px;
  color: white;
  border: solid 1px #1abc9c;
  background: #1abc9c;
  cursor:pointer;
}
.jz_default0 {
  min-height: 468px;
  padding: 10px 20px 0px;
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
.jz_kaohe p {
  /* margin-bottom: 14px; */
  line-height: 50px;
}
.jz_kaohe p span {
  width: 80px;
  display: inline-block;
  text-align: right;
  margin-right: 6px;
}
</style>
