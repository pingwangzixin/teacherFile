<template>
  <div>
    <div class="jz_tong">
      <h3>
        <span v-show="!flag">班主任工作经历</span>
        <span v-show="flag">新增班主任工作经历</span>
        <span class="jz_add" v-show="!flag" @click="addHonor">新增</span>
      </h3>
      <div class="jz_tab">
        <table v-show="!flag" v-for="(item,index) in tableData" :key="index">
          <thead>
            <tr>
              <th v-for="(v, i ) in item.head" :key="i">{{v}}</th>
              <th class="jz_shou" @click="state=!state" width="76">
                <i class="jz_xia"></i>
                状态
                <div class="jz_role" v-show="state">
                  <p
                    v-for="(item,index) in statData"
                    :key="index"
                    @click="selectState(index)"
                    :class="{activerole:index==selectIndex}"
                  >{{item}}</p>
                </div>
              </th>
              <th width="200">操作</th>
            </tr>
          </thead>
          <tbody v-for="(m,n) in item.data" :key="n">
            <tr>
              <td
                v-for="(val,key,i2) in m"
                :key="i2"
                :class="{colorlv:val=='已通过',colorhui:val=='未通过',colorred:val=='审核中'}"
              >{{val}}</td>

              <td class="jz_ts">
                <span :class="{activeys:index==editIndex}" @click="edit(index)">编辑</span>
                <span>删除</span>
              </td>
            </tr>
            <tr v-if="editIndex==index">
              <td colspan="5">
                <div class="jz_editkh jz_bg">
                  <p>
                    <span>学期</span>
                    <select name id>
                      <option value></option>
                    </select>
                  </p>
                  <p>
                    <span>
                      <label for="school">学校</label>
                    </span>
                    <input class="jz_inp" type="text" id="school" placeholder="请输入名称" />
                  </p>
                  <p>
                    <span>
                      <label for="class">班级</label>
                    </span>
                    <input class="jz_inp" type="text" id="class" placeholder="请输入名称" />
                  </p>

                  <div class="jz_sel jz_newsel">
                    <span class="jz_cancle" @click="editIndex=null">取消</span>
                    <span class="jz_sure">确定</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- 新增-->
        <div class="jz_editkh" v-show="flag">
          <p>
            <span>学期</span>
            <select name id>
              <option value></option>
            </select>
          </p>
          <p>
            <span>
              <label for="school">学校</label>
            </span>
            <input class="jz_inp" type="text" id="school" placeholder="请输入名称" />
          </p>
          <p>
            <span>
              <label for="class">班级</label>
            </span>
            <input class="jz_inp" type="text" id="class" placeholder="请输入名称" />
          </p>

          <!-- <p class="jz_auto">222</p> -->
          <div class="jz_sel jz_newsel">
            <span class="jz_cancle" @click="flag=false">取消</span>
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
      state: false,
      flag: false, //显示新增
      editIndex: null, //控制显示编辑
      honRadio: "", //荣誉单选
      levelRadio: "", //级别单选
      statData: ["全部", "已通过", "未通过", "审核中"],
      selectIndex: "",
      level: ["国家级", "省级", "市级", "区级", "集团/校级"],
      honorBook: ["手动输号", "上传文件"],
      handOrAuto: false, //手动还是上传
      tableData: [
        {
          head: ["学期", "学校", "班级"],
          data: [
            {
              time: "2018-2019学年第一期",
              school: "北京东城区实验中学",
              class: "初一2班",
              pass: "已通过"
            }
          ]
        }
      ]
    };
  },
  mounted() {},
  methods: {
    selectState(index) {
      this.selectIndex = index;
    },

    //添加综合性荣誉
    addHonor() {
      this.flag = !this.flag;
    },

    //弹出编辑框
    edit(index) {
      this.editIndex = index;
    },

    //查看详情
    lookInfo() {
      this.$router.push({
        path: "/index/teaHonorShow",
        query: { from: "maintea", id: "999" }
      });
    }
  },
  watch: {
    //监听荣誉证书添加方式
    honRadio: function(n) {
      // console.log(n);
      if (n == "手动输号") {
        this.handOrAuto = true;
      } else {
        this.handOrAuto = false;
      }
    },

    //监听级别方式
    levelRadio: function(n) {
      // console.log(n);
    }
  }
};
</script>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  white-space: nowrap;
  /* word-wrap:break-word; */
}
tr,
th,
td {
  border: solid 1px #dddddd;
  height: 40px;
  text-align: center;
  overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
  text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...)；需与overflow:hidden;一起使用。*/
}
thead {
  background: #f6f6f6;
}
input,
select {
  width: 170px;
  height: 30px;
  text-indent: 10px;
  border: solid 1px #dddddd;
  box-sizing: border-box;
  outline: none;
  border-radius: 5px;
  text-indent: 5px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.colorlv {
  color: #1abc9c;
}
.colorred {
  color: #f65177;
}
.colorhui {
  color: #666666;
}
.activerole {
  color: #f97c59;
}
.activeys {
  color: #a9a9a9;
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
  padding: 10px 20px 20px;
}
.jz_ts {
  display: flex;
  border: none;
  align-items: center;
  justify-content: space-around;
  color: #5093e1;
}
.jz_ts span {
  cursor: pointer;
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
.jz_shou {
  cursor: pointer;
  position: relative;
  overflow: visible !important;
}
.jz_xia {
  height: 0px;
  border-left: solid 5px transparent;
  border-right: solid 5px transparent;
  border-top: solid 8px #cfcece;
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  cursor: pointer;
}
.jz_role p {
  padding: 8px 22px;
  font-weight: normal;
  cursor: pointer;
}
.jz_role {
  position: absolute;
  left: 32px;
  top: 40px;
  border: solid 1px #dddddd;
  width: 100px;
  background: white;
  z-index: 10;
}
/* 新增荣誉 */
.jz_editkh {
  /* text-align: left !important;
    padding: 0px !important; */
    padding-top: 20px;
}
.jz_editkh p {
  margin-left: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
}
.jz_editkh p > span:nth-of-type(1) {
  margin-right: 16px;
  display: inline-block;
  width: 90px;
  text-align: right;
}
.jz_editkh p .jz_sp {
  position: relative;
}
.jz_editkh p .jz_an {
  position: absolute;
  top: 25px;
  left: 0px;
}

.jz_p > label {
  margin-right: 16px;
}
.jz_inp {
  width: 320px;
}
.jz_radio {
  width: 16px;
  height: 16px;
  vertical-align: -4px;
}
/*  */
.jz_sel {
  padding: 76px 0px 30px;
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
.jz_bg {
  background: #f6f6f6;
}
.jz_xzwj {
  display: inline-block;
  width: 90px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: white;
  background: #1abc9c;
  border-radius: 2px;
  cursor: pointer;
}
.jz_editkh .jz_auto {
  background: #e5f1ff;
  height: 32px;
}
</style>
