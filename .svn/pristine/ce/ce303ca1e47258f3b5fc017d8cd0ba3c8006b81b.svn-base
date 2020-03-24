<template>
  <div>
    <div class="jz_tong">
      <div class="jz_title" v-show="!flag">
        <ul>
          <li
            v-for="(v,i) in title"
            :key="i"
            :class="{activeborder:navIndex==i}"
            @click="navIndex=i"
          >{{v}}</li>
        </ul>
        <span class="jz_add" @click="addHonor">新增</span>
      </div>
      <div class="jz_title" v-show="flag">
        <span class="jz_lv">新增指导青年教师情况</span>
      </div>
      <div class="jz_tab" v-show="!flag">
        <!-- 蓝青工程 -->
        <table v-show="navIndex==0">
          <thead>
            <tr>
              <th>被指导老师</th>
              <th width="178">身份证号码</th>
              <th width="232">指导时间</th>
              <th class="jz_shou" @click="state=!state" width="100">
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
          <tbody v-for="(item,index) in dataList0" :key="index">
            <tr>
              <td v-text="item.name"></td>
              <td v-text="item.idfen"></td>
              <td v-text="item.time"></td>
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
              <td colspan="5">
                <div class="jz_editkh jz_bg" v-show="editFirstStep">
                  <div class="jz_p jz_div clearfix">
                    <span>协议时间</span>
                    <label v-for="(item,index) in protocal" :key="index">
                      <input
                        class="jz_radio"
                        type="radio"
                        name="protocal0"
                        v-model="protocalVal"
                        :value="item"
                      />
                      <span v-text="item"></span>
                    </label>
                  </div>
                  <div class="jz_div clearfix" v-show="protocalVal=='统一'">
                    <span>
                      <label for="cn">被指导老师</label>
                    </span>
                    <div class="fl jz_fu">
                      <p class="jz_wrapno fl" v-for="(v,i) in inputBox" :key="i">
                        <input class="jz_inp2" id="cn" type="text" placeholder="请输入名称" />
                        <i class="iconfont iconcuowu jz_no" @click="delInputBox(i)"></i>
                      </p>
                      <span class="jz_jia fl" @click="addInputBox()">+</span>
                    </div>
                  </div>
                  <div class="jz_div clearfix" v-show="protocalVal=='统一'">
                    <span>指导时间</span>
                    <p class="fl">
                      <input type="date" />----
                      <input type="date" />
                    </p>
                  </div>
                  <div class="jz_div clearfix" v-show="protocalVal=='不统一'">
                    <span>被指导老师</span>
                    <div class="fl jz_fu2">
                      <div v-for="(v,i) in inputBox2" :key="i" class="fl">
                        <p class="jz_wrapno fl">
                          <input class="jz_inp2" id="cn" type="text" placeholder="请输入名称" />
                          <i class="iconfont iconcuowu jz_no" @click="delInputBox2(i)"></i>
                        </p>
                        <input type="date" />----
                        <input class="jz_date" type="date" />
                      </div>
                      <span class="jz_jia fl" @click="addInputBox2()">+</span>
                    </div>
                  </div>

                  <div class="jz_p jz_div clearfix">
                    <span>附件</span>
                    <label for="xzfile">
                      <span class="jz_xzwj">上传</span>
                      <span class="jz_feng">(包含封面、封底、目录) (非必填项)</span>
                      <input type="file" id="xzfile" hidden accept="image/jpg, image/png,image/jpeg,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
                    </label>
                  </div>
                  <div class="jz_next">
                    <span class="jz_bu" @click="editNext()">下一步</span>
                  </div>
                </div>
                <div class="jz_editkh jz_ztab jz_bg" v-show="!editFirstStep">
                  <table>
                    <thead>
                      <tr>
                        <th>
                          <input type="checkbox" class="jz_check" v-model="allCheck" @change="qx" />全选(0/3)
                        </th>
                        <th>教师</th>
                        <th>身份证号码</th>
                        <th>标题</th>
                        <th>日期</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(v,i) in editTableData" :key="i">
                        <td>
                          <input type="checkbox" class="jz_check" v-model="v.checked" />
                          {{i+1}}
                        </td>
                        <td>{{v.name}}</td>
                        <td>{{v.idCard}}</td>
                        <td>{{v.title}}</td>
                        <td>{{v.time}}</td>
                      </tr>
                    </tbody>
                  </table>

                  <div class="jz_sel">
                    <span class="jz_cancle" @click="editIndex=null,editFirstStep=!editFirstStep">取消</span>
                    <span class="jz_cancle" @click="editFirstStep=!editFirstStep">上一步</span>
                    <span class="jz_sure" @click="editIndex=null,editFirstStep=!editFirstStep">确定</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!--名师工作室 -->
        <table v-show="navIndex==1">
          <thead>
            <tr>
              <th width="156">工作室名称</th>
              <th width="96">届数</th>
              <th width="160">参与成员</th>
              <th width="122">工作室连接</th>
              <th class="jz_shou" @click="state=!state" width="100">
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
          <tbody v-for="(item,index) in dataList1" :key="index">
            <tr>
              <td v-text="item.name"></td>
              <td v-text="item.level"></td>
              <td v-text="item.people"></td>
              <td v-text="item.open"></td>
              <td
                v-text="item.state"
                :class="{colorlv:item.state=='已通过',colorhui:item.state=='未通过',colorred:item.state=='审核中'}"
              ></td>
              <td class="jz_ts">
                <span @click="lookInfoFameTea(index)">查看详情</span>
                <span :class="{activeys:index==fameTeaIndex}" @click="editFameTea(index)">编辑</span>
                <span>删除</span>
              </td>
            </tr>
            <tr v-if="fameTeaIndex==index">
              <td colspan="9">
                <div class="jz_editkh jz_bg">
                  <div class="jz_p jz_div clearfix">
                    <span>
                      <label for="gzsm">工作室名称</label>
                    </span>
                    <input type="text" id="gzsm" class="jz_inp2" />
                  </div>
                  <div class="jz_div clearfix">
                    <span>
                      <label for="jsa">届数</label>
                    </span>
                    <input type="text" id="jsa" class="jz_inp2" />
                  </div>
                  <div class="jz_div clearfix">
                    <span>
                      <label >参与成员</label>
                    </span>
                    <div class="fl jz_fu">
                      <p class="jz_wrapno fl" v-for="(v,i) in inputBox" :key="i">
                        <input class="jz_inp2"  type="text" placeholder="请输入名称" />
                        <i class="iconfont iconcuowu jz_no" @click="delInputBox(i)"></i>
                      </p>
                      <span class="jz_jia fl" @click="addInputBox()">+</span>
                    </div>
                  </div>
                  <div class="jz_div clearfix">
                    <span>
                      <label for="lianjiea">工作室链接</label>
                    </span>
                    <input type="text" id="lianjiea" class="jz_inp3" />
                  </div>
                  <div class="jz_p jz_div clearfix">
                    <span>附件</span>
                    <label>
                      <span class="jz_xzwj">选择文件</span>
                      <input type="file" hidden accept="application/msword" />
                    </label>
                  </div>
                  <div class="jz_sel">
                    <span class="jz_cancle" @click="fameTeaIndex=null">取消</span>
                    <span class="jz_sure">确定</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 新增 -->
      <div class="jz_editkh jz_minheight" v-show="flag">
        <div class="jz_dset jz_div clearfix">
          <span>类型</span>
          <label v-for="(item,index) in title" :key="index">
            <input class="jz_radio" type="radio" name="levels8" v-model="activeTitle" :value="item" />
            <span v-text="item"></span>
          </label>
        </div>
        <div v-show="activeTitle=='蓝青工程'&&nextFlag">
          <div class="jz_p jz_div clearfix">
            <span>协议时间</span>
            <label v-for="(item,index) in protocal" :key="index">
              <input
                class="jz_radio"
                type="radio"
                name="protocal"
                v-model="protocalVal"
                :value="item"
              />
              <span v-text="item"></span>
            </label>
          </div>
          <div class="jz_div clearfix" v-show="protocalVal=='统一'">
            <span>
              <label for="cn">被指导老师</label>
            </span>
            <div class="fl jz_fu">
              <p class="jz_wrapno fl" v-for="(v,i) in inputBox" :key="i">
                <input class="jz_inp2" id="cn" type="text" placeholder="请输入名称" v-model="v.value"/>
                <i class="iconfont iconcuowu jz_no" @click="delInputBox(i)"></i>
              </p>
              <span class="jz_jia fl" @click="addInputBox()">+</span>
            </div>
          </div>
          <div class="jz_div clearfix" v-show="protocalVal=='统一'">
            <span>指导时间</span>
            <p>
              <input type="date" />----
              <input type="date" />
            </p>
          </div>
          <div class="jz_div clearfix" v-show="protocalVal=='不统一'">
            <span>被指导老师</span>
            <div class="fl jz_fu2">
              <div v-for="(v,i) in inputBox2" :key="i" class="fl">
                <p class="jz_wrapno fl">
                  <input class="jz_inp2" id="cn" type="text" placeholder="请输入名称" />
                  <i class="iconfont iconcuowu jz_no" @click="delInputBox2(i)"></i>
                </p>
                <input type="date" />----
                <input class="jz_date" type="date" />
              </div>
              <span class="jz_jia fl" @click="addInputBox2()">+</span>
            </div>
          </div>
          <div class="jz_p jz_div clearfix">
            <span>附件</span>
            <label>
              <span class="jz_xzwj">选择文件</span>
              <input type="file" hidden accept="application/msword" />
            </label>
          </div>
        </div>
        <div v-show="activeTitle=='名师工作室'&&nextFlag">
          <div class="jz_p jz_div clearfix">
            <span>
              <label for="gzs">工作室名称</label>
            </span>
            <input type="text" id="gzs" class="jz_inp2" />
          </div>
          <div class="jz_div clearfix">
            <span>
              <label for="js">届数</label>
            </span>
            <input type="text" id="js" class="jz_inp2" />
          </div>
          <div class="jz_div clearfix">
            <span>
              <label for="cn">参与成员</label>
            </span>
            <div class="fl jz_fu">
              <p class="jz_wrapno fl" v-for="(v,i) in inputBox" :key="i">
                <input class="jz_inp2" id="cn" type="text" placeholder="请输入名称" />
                <i class="iconfont iconcuowu jz_no" @click="delInputBox(i)"></i>
              </p>
              <span class="jz_jia fl" @click="addInputBox()">+</span>
            </div>
          </div>
          <div class="jz_div clearfix">
            <span>
              <label for="lianjie">工作室链接</label>
            </span>
            <input type="text" id="lianjie" class="jz_inp3" />
          </div>
          <div class="jz_p jz_div clearfix">
            <span>附件</span>
            <label>
              <span class="jz_xzwj">选择文件</span>
              <input type="file" hidden accept="application/msword" />
            </label>
          </div>
        </div>
        <div class="jz_next">
          <span class="jz_bu" @click="next()">下一步</span>
        </div>
      </div>
    </div>
    <!-- 最外层div -->
  </div>
</template>
<script>
import newAddDirectYouthTea from "@/components/teacherTerrace/newAddDirectYouthTea/newAddDirectYouthTea.vue";

export default {
  components: {
    newAddDirectYouthTea
  },
  data() {
    return {
      state: false, //状态控制开关
      flag: false, //显示新增
      editIndex: null, //控制显示编辑
      fameTeaIndex: null, //名师工作室编辑控制
      thesisPrizeFlag: null, //论文获奖编辑控制
      honRadio: "", //荣誉单选
      levelRadio: "", //级别单选
      statData: ["全部", "已通过", "未通过", "审核中"],
      selectIndex: "",
      level: ["国家级", "省级", "市级", "区级", "集团/校级"],
      honorBook: ["手动输号", "上传文件"],
      protocal: ["统一", "不统一"],
      protocalVal: "统一",
      inputBox: [{ value: "" }],
      inputBox2: [{ value: "" }],
      handOrAuto: false, //手动还是上传
      editFirstStep: true, //编辑 下一步
      dataList0: [
        {
          name: "樊三德",
          idfen: "110345198713424581",
          time: "2019年03月01日-2018年01月09日",
          state: "已通过",
          id: "1"
        }
      ],
      dataList1: [
        {
          name: "小学信息技术与初中信息技术",
          level: "第三届",
          people: "王翠山、李大嘴、张三丰",
          open: "www.xxjske.edu",
          state: "已通过",
          id: "1"
        }
      ],
      dataList2: [
        {
          name: "小学信息技术与初中信息技术",
          major: "信息技术",
          level: "省级",
          idfen: "其他",
          num: "85000",
          place: "北京凤凰科技树",
          time: "2019年03月01日",
          state: "已通过",
          id: "1"
        },
        {
          name: "小学信息技术与初中信息技术",
          major: "信息技术",
          level: "省级",
          idfen: "其他",
          num: "85000",
          place: "北京凤凰科技树",
          time: "2019年03月01日",
          state: "未通过",
          id: "2"
        },
        {
          name: "小学信息技术与初中信息技术",
          major: "信息技术",
          level: "省级",
          idfen: "其他",
          num: "85000",
          place: "北京凤凰科技树",
          time: "2019年03月01日",
          state: "审核中",
          id: "3"
        },
        {
          name: "小学信息技术与初中信息技术",
          major: "信息技术",
          level: "省级",
          idfen: "其他",
          num: "85000",
          place: "北京凤凰科技树",
          time: "2019年03月01日",
          state: "已通过",
          id: "4"
        }
      ],
      title: ["蓝青工程", "名师工作室"],
      activeTitle: "",
      navIndex: 0,
      nextFlag: false, //点击下一步
      editTableData: [
        {
          checked: false,
          name: "李海棠",
          idCard: "1234356778809334562",
          title: "北京市第十七届教师技能大赛",
          time: "2019年03月33日"
        },
        {
          checked: false,
          name: "李海棠",
          idCard: "1234356778809334562",
          title: "北京市第十七届教师技能大赛",
          time: "2019年03月33日"
        },
        {
          checked: false,
          name: "李海棠",
          idCard: "1234356778809334562",
          title: "北京市第十七届教师技能大赛",
          time: "2019年03月33日"
        }
      ],
      allCheck: false //全选
    };
  },
  mounted() {},
  methods: {
    selectState(index) {
      this.selectIndex = index;
    },

    //新增开关控制
    addHonor() {
      this.flag = !this.flag;
    },

    //弹出编辑框
    edit(index) {
      this.editIndex = index;
    },

    //编辑名教师
    editFameTea(index) {
      this.fameTeaIndex = index;
    },

    lookInfo() {
      this.$router.push({
        path: "/index/teaHonorShow",
        query: { from: "lanqing", id: "999" }
      });
    },
    lookInfoFameTea(){
     this.$router.push({
        path: "/index/teaHonorShow",
        query: { from: "mingshi", id: "999" }
      });
    },

    //编辑  点击下一步
    editNext() {
      this.editFirstStep = !this.editFirstStep;
    },

    //点击进入下一步
    next() {
      let parenMethods = this.$parent.$parent;
      if (this.activeTitle) {
        this.nextFlag = true;
        this.inputBox.map((v)=>{
          if(v.value!==''){
            this.$emit('leftSideFlag',false)
          }
        }) 

        
      } else {
         parenMethods.timingFn('warning','请选择类型')
        //  console.log('leiixng')
      }
    },

    qx() {
      if (this.allCheck) {
        this.editTableData.forEach(v => {
          v.checked = true;
        });
      } else {
        this.editTableData.forEach(v => {
          v.checked = false;
        });
      }
    },

    addInputBox() {
      let box = this.inputBox;
      let obj = new Object();
      obj.value = "";
      box.push(obj);
    },
    delInputBox(i) {
      let box = this.inputBox;
      box.splice(i, 1);
    },
    addInputBox2() {
      let box = this.inputBox2;
      let obj = new Object();
      obj.value = "";
      this.inputBox2.push(obj);
    },
    delInputBox2(i) {
      let box = this.inputBox2;
      box.splice(i, 1);
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
    },

    //监听标题的radio
    activeTitle: function(newVal) {
      this.activeTitle = newVal;
    },

    //监听协议时间选择
    protocalVal: function(newVal) {
      // console.log(newVal);
    },

    //
    editTableData: {
      handler(val) {
        // console.log(val);
        let tof = val.every(item => {
          return item.checked == true;
        });
        if (tof) {
          this.allCheck = true;
        } else {
          this.allCheck = false;
        }
      },
      deep: true
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
.activeborder {
  border-bottom: solid 2px #5093e1;
  color: #5093e1;
}
.jz_feng {
  color: #666666;
  letter-spacing: 2px;
}
.iconcuowu {
  color: #666666;
  cursor: pointer;
}
.jz_jia {
  display: inline-block;
  height: 22px;
  width: 22px;
  text-align: center;
  line-height: 22px;
  color: #1abc9c;
  border: solid 1px #1abc9c;
  font-size: 20px;
  cursor: pointer;
  margin-top: 12px;
}
.jz_date {
  margin-right: 10px;
}
/* css */
.jz_tong .jz_title {
  box-sizing: border-box;
  padding: 0px 20px;
  height: 56px;
  line-height: 56px;
  border-bottom: solid 1px #dddddd;
  /* color: #5093e1; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.jz_lv {
  color: #5093e1;
}
.jz_title ul {
  display: flex;
}
.jz_title ul li {
  margin-right: 50px;
  letter-spacing: 2px;
  cursor: pointer;
}
.jz_minheight {
  min-height: 468px;
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
  right: 14px;
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
  left: 12px;
  top: 40px;
  border: solid 1px #dddddd;
  width: 100px;
  background: white;
  z-index: 10;
}
/* 新增荣誉 */
.jz_editkh {
  padding: 10px 0px;
}
.jz_ztab {
  padding: 10px;
}
.jz_ztab thead {
  background: white;
}
.jz_editkh .jz_div {
  margin-left: 16px;
  line-height: 50px;
}
.jz_editkh .jz_div > span:nth-of-type(1) {
  margin-right: 16px;
  float: left;
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
.jz_editkh .jz_dset label {
  margin-right: 20px;
}
.jz_p > label {
  margin-right: 16px;
}
.jz_check {
  width: 12px;
  height: 12px;
}
.jz_inp {
  width: 320px;
}
.jz_inp2 {
  width: 238px;
}
.jz_inp3 {
  width: 354px;
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
.jz_bu {
  display: block;
  width: 120px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background: #5093e1;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  margin: 50px auto 0px;
}
.jz_fu {
  width: 500px;
}
.jz_fu2 {
  width: 660px;
}
.jz_wrapno {
  /* float: left; */
  position: relative;
}
.jz_wrapno input {
  margin-right: 10px;
}
.jz_no {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
