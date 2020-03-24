<template>
  <div>
    <div class="jz_tong">
      <h3>
        <span v-show="!flag">课题研究</span>
        <span v-show="flag">新增课题研究</span>
        <span class="jz_add" v-show="!flag" @click="addHonor">新增</span>
      </h3>
      <div class="jz_tab">
        <table v-show="!flag">
          <thead>
            <tr>
              <th width="86">名称</th>
              <th width="46">级别</th>
              <th width="66">参与身份</th>
              <th>课题状态</th>
              <th>立项时间</th>
              <th>结题时间</th>
              <th>立项部门</th>
              <th class="jz_shou" @click="state=!state">
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
          <tbody v-for="(item,index) in dataList" :key="index">
            <tr>
              <td v-text="item.name"></td>
              <td v-text="item.level"></td>
              <td v-text="item.partId"></td>
              <td v-text="item.kestate"></td>
              <td v-text="item.stime"></td>
              <td v-text="item.etime"></td>
              <td v-text="item.bumen"></td>
              <td
                v-text="item.state"
                :class="{colorlv:item.state=='已通过',colorhui:item.state=='未通过',colorred:item.state=='审核中'}"
              ></td>
              <td class="jz_ts">
                <span @click="lookInfo(index)">查看详情</span>
                <span :class="{activeys:index==editIndex}" @click="edit(index)">编辑</span>
                <span>删除</span>
              </td>
            </tr>
            <tr v-if="editIndex==index">
              <td colspan="9">
                <div class="jz_editkh jz_bg">
                  <div class="jz_div clearfix">
                    <span>
                      <label for="xm1">名称</label>
                    </span>
                    <input class="jz_inp" id="xm1" type="text" placeholder="请输入名称" />
                  </div>
                  <div class="jz_div jz_p clearfix">
                    <span>参与身份</span>
                    <label v-for="(v,i) in takePart" :key="i">
                      <input type="radio" class="jz_radio" name="takepart0" :value="v" />
                      <span>{{v}}</span>
                    </label>
                  </div>
                  <div class="jz_div jz_p clearfix">
                    <span>状态</span>
                    <label v-for="(v,i) in status" :key="i">
                      <input
                        type="radio"
                        class="jz_radio"
                        v-model="reStatus"
                        name="status0"
                        :value="v"
                      />
                      <span>{{v}}</span>
                    </label>
                  </div>
                  <div class="jz_div clearfix">
                    <span>立项时间</span>
                    <input type="date" />
                  </div>
                  <div class="jz_div clearfix">
                    <span>结题时间</span>
                    <input type="date" />
                  </div>
                  <div class="jz_div jz_p clearfix">
                    <span>级别</span>
                    <label v-for="(item,index) in level" :key="index">
                      <input
                        class="jz_radio"
                        type="radio"
                        name="jibie"
                        v-model="levelRadio"
                        :value="item"
                      />
                      <span v-text="item"></span>
                    </label>
                  </div>
                  <div class="jz_div clearfix">
                    <span>类别</span>
                    <select v-model="dataInfo.type" v-show="dataInfo.type!='+自定义'">
                      <option disabled selected>请选择</option>
                       <option  v-for="(v,i) in openTi"  :value="v" :key="i" :class="{jz_zdy:v=='+自定义'}">{{v}}</option>
                    </select>
                    <input type="text" v-show="dataInfo.type=='+自定义'" placeholder="请输入自定义内容">
                  </div>
                  <div class="jz_div clearfix">
                    <span>
                      <label for="lix">立项部门</label>
                    </span>
                    <input class="jz_inp" id="lix" type="text" placeholder="请输入名称" />
                  </div>
                  <div class="jz_div jz_p clearfix">
                    <span>立项证书</span>
                    <div class="fl">
                      <label for="xzfile0">
                        <span class="jz_xzwj">上传</span>
                      </label>
                      <span class="jz_feng">(.jpg/.jpeg/.png)</span>
                      <input type="file" id="xzfile0" hidden accept="image/jpg, image/png,image/jpeg,application/pdf" />
                    </div>
                  </div>
                  <div v-show="reStatus=='结题'">
                    <div class="jz_div jz_p clearfix">
                      <span>结题鉴定书</span>
                      <div class="fl">
                        <label for="xzfile00">
                          <span class="jz_xzwj">上传</span>
                        </label>
                        <span class="jz_feng">(文档含结题报告和结题意见)</span>
                        <input type="file" id="xzfile00" hidden accept="image/jpg, image/png,image/jpeg,application/pdf" />
                      </div>
                    </div>
                  </div>
                  <div v-show="reStatus=='中期评估'">
                    <div class="jz_div jz_p clearfix">
                      <span>中期检查表</span>
                      <div class="fl">
                        <label for="xzfile1">
                          <span class="jz_xzwj">上传</span>
                        </label>
                        <span class="jz_feng">(.doc含专家意见)</span>
                        <input type="file" id="xzfile1" hidden accept="image/jpg, image/png,image/jpeg,application/pdf" />
                      </div>
                    </div>
                    <div class="jz_div jz_p clearfix">
                      <span>专家意见</span>
                      <div class="fl">
                        <label for="xzfile2">
                          <span class="jz_xzwj">上传</span>
                        </label>
                        <span class="jz_feng">(.jpg/.jpeg/.png)</span>
                        <input type="file" id="xzfile2" hidden accept="image/jpg, image/png,image/jpeg,application/pdf" />
                      </div>
                    </div>
                  </div>
                  <div v-show="reStatus=='开题'">
                    <div class="jz_div jz_p clearfix">
                      <span>申论评审书</span>
                      <div class="fl">
                        <label for="xzfile3">
                          <span class="jz_xzwj">上传</span>
                        </label>
                        <span class="jz_feng">(.doc)</span>
                        <input type="file" id="xzfile3" hidden accept="image/jpg, image/png,image/jpeg,application/pdf" />
                      </div>
                    </div>
                    <div class="jz_div jz_p clearfix">
                      <span>开题论证表</span>
                      <div class="fl">
                        <label for="xzfile4">
                          <span class="jz_xzwj">上传</span>
                        </label>
                        <span class="jz_feng">(文档含专家意见)</span>
                        <input type="file" id="xzfile4" hidden accept="image/jpg, image/png,image/jpeg,application/pdf" />
                      </div>
                    </div>
                  </div>
                  <div class="jz_sel">
                    <span class="jz_cancle" @click="editIndex=null">取消</span>
                    <span class="jz_sure">确定</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- 新增课题研究 -->
        <div class="jz_editkh" v-show="flag">
          <div class="jz_div clearfix">
            <span>
              <label for="xm1">名称</label>
            </span>
            <input class="jz_inp" id="xm1" type="text" placeholder="请输入名称" />
          </div>
          <div class="jz_div jz_p clearfix">
            <span>参与身份</span>
            <label v-for="(v,i) in takePart" :key="i">
              <input type="radio" class="jz_radio" name="takepart" :value="v" />
              <span>{{v}}</span>
            </label>
          </div>
          <div class="jz_div jz_p clearfix">
            <span>状态</span>
            <label v-for="(v,i) in status" :key="i">
              <input type="radio" class="jz_radio" v-model="reStatus" name="status" :value="v" />
              <span>{{v}}</span>
            </label>
          </div>
          <!-- 开题 -->
          <div v-show="reStatus!==''">
            <div class="jz_div clearfix">
              <span>立项时间</span>
              <input type="date" />
            </div>
            <div class="jz_div jz_p clearfix">
              <span>级别</span>
              <label v-for="(item,index) in level" :key="index">
                <input
                  class="jz_radio"
                  type="radio"
                  name="levels"
                  v-model="levelRadio"
                  :value="item"
                />
                <span v-text="item"></span>
              </label>
            </div>
            <div class="jz_div clearfix">
              <span>类别</span>
               <select v-model="dataInfo.type" v-show="dataInfo.type!='+自定义'">
                      <option disabled selected>请选择</option>
                       <option  v-for="(v,i) in openTi"  :value="v" :key="i" :class="{jz_zdy:v=='+自定义'}">{{v}}</option>
                    </select>
                    <input type="text" v-show="dataInfo.type=='+自定义'" placeholder="请输入自定义内容">
            </div>
            <div class="jz_div clearfix">
              <span>
                <label for="lix">立项部门</label>
              </span>
              <input class="jz_inp" id="lix" type="text" placeholder="请输入名称" />
            </div>
            <div class="jz_div jz_p clearfix">
              <span>立项证书</span>
              <div class="fl">
                <label for="xzfile0">
                  <span class="jz_xzwj">上传</span>
                </label>
                <span class="jz_feng">(.jpg/.jpeg/.png)</span>
                <input type="file" id="xzfile0" hidden accept="image/jpg, image/png,image/jpeg,application/pdf" />
              </div>
            </div>
            <div v-show="reStatus=='开题'">
              <div class="jz_div jz_p clearfix">
                <span>申论评审书</span>
                <div class="fl">
                  <label for="xzfile3">
                    <span class="jz_xzwj">上传</span>
                  </label>
                  <span class="jz_feng">(.doc)</span>
                  <input type="file" id="xzfile3" hidden accept="image/jpg, image/png,image/jpeg,application/pdf" />
                </div>
              </div>
              <div class="jz_div jz_p clearfix">
                <span>开题论证表</span>
                <div class="fl">
                  <label for="xzfile4">
                    <span class="jz_xzwj">上传</span>
                  </label>
                  <span class="jz_feng">(文档含专家意见)</span>
                  <input type="file" id="xzfile4" hidden accept="image/jpg, image/png,image/jpeg,application/pdf" />
                </div>
              </div>
            </div>
          </div>
          <!-- 中期评估 -->
          <div v-show="reStatus=='中期评估'">
            <div class="jz_div jz_p clearfix">
              <span>中期检查表</span>
              <div class="fl">
                <label for="xzfile1">
                  <span class="jz_xzwj">上传</span>
                </label>
                <span class="jz_feng">(.doc含专家意见)</span>
                <input type="file" id="xzfile1" hidden accept="image/jpg, image/png,image/jpeg,application/pdf" />
              </div>
            </div>
            <div class="jz_div jz_p clearfix">
              <span>专家意见</span>
              <div class="fl">
                <label for="xzfile2">
                  <span class="jz_xzwj">上传</span>
                </label>
                <span class="jz_feng">(.jpg/.jpeg/.png)</span>
                <input type="file" id="xzfile2" hidden accept="image/jpg, image/png,image/jpeg,application/pdf" />
              </div>
            </div>
          </div>
          <!-- 结题 -->
          <div v-show="reStatus=='结题'">
            <div class="jz_div jz_p clearfix">
              <span>结题鉴定书</span>
              <div class="fl">
                <label for="xzfile00">
                  <span class="jz_xzwj">上传</span>
                </label>
                <span class="jz_feng">(文档含结题报告和结题意见)</span>
                <input type="file" id="xzfile00" hidden accept="image/jpg, image/png,image/jpeg,application/pdf" />
              </div>
            </div>
          </div>

          <div class="jz_sel">
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
      takePart: ["主持", "核心成员"], //参与身份
      status: ["开题", "中期评估", "结题"], //状态
      openTi:['规划课题','教研课题','教育学会课题','陶研会课题','陈鹤琴课题','电教课题','+自定义'],
      reStatus: "", //编辑状态的选择
      handOrAuto: false, //手动还是上传
      dataList: [
        {
          name: "面向传课的东西",
          level: "省级",
          partId: "主持",
          kestate: "开题",
          stime: "2019年03月98日",
          etime: "2019年03月09日",
          bumen: "北京市交通",
          state: "未通过",
          id: "1"
        }
      ],
      editContent: {
        name: ""
      },
      dataInfo:{
        type:''
      },

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

    lookInfo() {
      this.$router.push({
        path: "/index/teaHonorShow",
        query: { from: "questionsearch", id: "999" }
      });
    }
  },
  watch: {
    //监听荣誉证书添加方式
    honRadio: function(n) {
      if (n == "手动输号") {
        this.handOrAuto = true;
      } else {
        this.handOrAuto = false;
      }
    },

    //监听级别方式
    levelRadio: function(n) {
    },

    //监听状态选择
    reStatus: function(newVal) {
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
.jz_zdy{
   color: #5093e1;  
}
.jz_feng {
  color: #666666;
  letter-spacing: 2px;
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
  padding-top: 10px;
}
.jz_editkh .jz_div {
  margin-left: 16px;
  height: 50px;
  line-height: 50px;
}
.jz_editkh .jz_div > span:nth-of-type(1) {
  float: left;
  margin-right: 16px;
  /* display: inline-block; */
  width: 90px;
  text-align: right;
}
.jz_editkh .jz_div > input,
.jz_editkh .jz_div > select,
.jz_editkh .jz_div > label {
  float: left;
}
.jz_editkh .jz_div > input,
.jz_editkh .jz_div > select {
  margin-top: 10px;
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
