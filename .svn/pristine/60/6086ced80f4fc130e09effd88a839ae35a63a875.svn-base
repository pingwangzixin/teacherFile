<template >
  <div>
    <div class="jz_rendown" v-if="tabFlag=='个人档案'">
      <div class="jz_rendown2">
        <b>下载模板:</b>
        <span class="jz_xiazai" @click="downLoad">模板下载</span>
        <span class="jz_status">(空白表,包含示例数据,真实数据格式需与示例数据一致)</span>
      </div>
      <div class="jz_tuo" ref="select_frame">
        <div class="jz_center" v-if="fileList.length==0||dragFlag">
          <i class="iconfont iconwenjiandocuments18"></i>
          <p>
            <span class="jz_yulan">预览文件</span>或拖拽文件到此处
          </p>
        </div>
        <div class="jz_center2" v-show="fileList.length>0&&dragFlagTwo">
          <p>教师个人档案信息导入.xlsx</p>
          <p>
            <i class="jz_bar">
              <b ref="progress" style="width:0%"></b>
            </i>
            <span class="jz_num">{{progressNum}}</span>
            <span class="jz_del">删除</span>
          </p>
          <p>共导入12人,成功导入11人,未导入成功1人</p>
          <div class="jz_sel">
            <span class="jz_cancle" @click="cancleLoad">取消</span>
            <span
              class="jz_sure"
              @click="dragFlagTwo=false,dragFlag=true,$refs.progress.style.width='0%'"
            >确定</span>
          </div>
        </div>
      </div>
      <div class="jz_sendok" v-show="dragFlag">
        <p>共导入12人,成功导入11人,未导入成功1人</p>
        <table>
          <thead>
            <tr>
              <th>姓名</th>
              <th>性别</th>
              <th>身份证号</th>
              <th>所在单位</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in acceptData" :key="index">
              <td>{{item.name}}</td>
              <td>{{item.sex}}</td>
              <td>{{item.idCard}}</td>
              <td>{{item.area}}</td>
              <td class="jz_shezhi">
                <span>查看详情</span>
                <span @click="uploadDel()">删除</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <teaFirstDegree v-if="tabFlag=='第一学历'"></teaFirstDegree>
    <teaSickLeave  v-if="tabFlag=='长病假记录'"></teaSickLeave>
    <teaAssessments v-if="tabFlag=='年度考核'"></teaAssessments>
    <teaClassAgree v-if="tabFlag=='课堂满意度'"></teaClassAgree>
    <teaTeachCase v-if="tabFlag=='任课情况'"></teaTeachCase>
    <teaListenClass v-if="tabFlag=='听课情况'"></teaListenClass>
    <teaProName v-if="tabFlag=='专业型称号'"></teaProName>
 
    
    <!-- 编辑年度考核框 -->
    <!-- <div class="jz_stop" v-show="editFlag">
      <div class="jz_st">
        <p class="clearfix">
          <span class="fl" v-if="editString=='editYearCheck'">编辑年度考核</span>
          <span class="fl" v-if="editString=='editClassAgree'">编辑课堂满意度</span>
          <i class="iconfont iconyooxi close fr" @click="editFlag=false"></i>
        </p>

        <div class="jz_kaohe">
          <p class="jz_top">
            <span>姓名</span>
            <input type="text" class="jz_name jz_hui" />
          </p>
          <p>
            <span>身份证号</span>
            <input type="text" class="jz_id" />
          </p>
          <p class="jz_flex">
            <span>考核结果</span>
            <designSelect :data="checkResult" @sureCheck="sureCheck"></designSelect>
          </p>
          <div class="jz_sel2 jz_edit2 clearfix">
            <span class="jz_sure fl">确定</span>
            <span class="jz_cancle fr" @click="editFlag=false">取消</span>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import designSelect from "@/components/part/designSelect.vue";
import  teaFirstDegree  from '@/components/teaTablePart/teaFirstDegree.vue';//第一学历
import  teaSickLeave  from '@/components/teaTablePart/teaSickLeave.vue';//长病假记录
import   teaAssessments  from '@/components/teaTablePart/teaAssessments.vue';//年度考核
import  teaClassAgree from '@/components/teaTablePart/teaClassAgree.vue';//课堂满意度
import  teaTeachCase from '@/components/teaTablePart/teaTeachCase.vue';//任课情况
import  teaListenClass from '@/components/teaTablePart/teaListenClass.vue';//任课情况
import  teaProName from '@/components/teaTablePart/teaProName.vue';//专业型称号

import { teaRelevant } from "@/api";
export default {
  props: ["tabChange"],
  components: {
    designSelect,teaFirstDegree,teaSickLeave,teaAssessments,
    teaClassAgree,teaTeachCase,teaListenClass,teaProName,

  },
  data() {
    return {
      dragFlag: false,//拖拽栏是否显示
      dragFlagTwo: true,//文件成功上传之后显示
      addYearCheck: false, //新增年度考核
      editFlag: false,
      editString: null, //控制要编辑的字段
      addClassAgree: false, //新增课堂满意度
      addMajorName: false, //新增专业型称号
      tabFlag: '个人档案', //选项卡切换
      progressNum: 0,
      fileList: [],//存放个人档案导入的容器
      checkResult: [
        "优秀",
        "合格",
        "基本合格",
        "不合格",
        "不确定考核等级",
        "未参加考核",
        "其他"
      ],
      acceptData: [
        {
          name: "艾艺玲",
          sex: "女",
          idCard: "110110198708050980",
          area: "北京市教师发展中心",
          id: "1"
        },
        {
          name: "艾艺玲",
          sex: "男",
          idCard: "110110198708050980",
          area: "北京市教师发展中心",
          id: "2"
        },
        {
          name: "艾艺玲",
          sex: "女",
          idCard: "110110198708050980",
          area: "北京市东城区两秀幼儿园分园",
          id: "3"
        },
        {
          name: "艾艺玲",
          sex: "男",
          idCard: "110110198708050980",
          area: "北京市教师发展中心",
          id: "4"
        },
        {
          name: "艾艺玲",
          sex: "女",
          idCard: "110110198708050980",
          area: "北京市教师发展中心",
          id: "5"
        },
        {
          name: "艾艺玲",
          sex: "女",
          idCard: "110110198708050980",
          area: "北京市教师发展中心",
          id: "6"
        },
        {
          name: "艾艺玲",
          sex: "男",
          idCard: "110110198708050980",
          area: "北京市教师发展中心",
          id: "4"
        },
        {
          name: "艾艺玲",
          sex: "女",
          idCard: "110110198708050980",
          area: "北京市教师发展中心",
          id: "5"
        },
        {
          name: "艾艺玲",
          sex: "女",
          idCard: "110110198708050980",
          area: "北京市教师发展中心",
          id: "6"
        }
      ],
      yearCheckData: [],
     
    };
  },
  created(){
    this.defaultCheckData();
  
  },
  mounted() { 
    this.dropFile();
 },
  methods: {

    cancleLoad() {
      this.fileList = [];
      this.$refs.progress.style.width = "0%";
    },

    progress() {
      //进度条
      var timer,
        speed = 2;
      timer = setInterval(() => {
        let widthProgress = parseInt(this.$refs.progress.style.width);
        if (widthProgress != 100) {
          this.$refs.progress.style.width = widthProgress + speed + "%";
          this.progressNum = this.$refs.progress.style.width;
        } else {
          clearInterval(timer);
        }
      }, 100);
    },
    editYearCheck() {
      //编辑年度考核
      this.editFlag = true;
      this.editString = "editYearCheck";
    },
    uploadDel() {
      //上传内容的删除
      let _this = this;
      let parentsMethods = _this.$parent.$parent;
      parentsMethods.confirmFn("确认要删除上传的这条个人档案信息吗?", function(
        state
      ) {
        if (state == "sure") {
          parentsMethods.timingFn("success", "删除成功！");
        } else {
        }
      });
    },
   
   
    editClassAgree() {
      this.editFlag = true;
      this.editString = "editClassAgree";
    },
    majorDel(index, n) {
      //专业型称号 删除
      let _this = this;
      let parentsMethods = _this.$parent.$parent;
      parentsMethods.confirmFn("确认要删除这条课堂满意度信息吗?", function(
        state
      ) {
        if (state == "sure") {
          setTimeout(function() {
            _this.majorTitleData[index].info.splice(
              _this.majorTitleData[index].info[n],
              1
            );
          }, 1500);
          parentsMethods.timingFn("success", "删除成功！");
        } else {
        }
      });
    },
    sureCheck(data) {
      // console.log(data);
    },
    dropFile() {
      this.$refs.select_frame.ondragleave = e => {
        e.preventDefault(); //阻止离开时的浏览器默认行为
      };
      this.$refs.select_frame.ondrop = e => {
        e.preventDefault(); //阻止拖放后的浏览器默认行为
        const data = e.dataTransfer.files; // 获取文件对象
        if (data.length < 1) {
          return; // 检测是否有文件拖拽到页面
        }
          const formData = new FormData();
          formData.append("file",data[0]);
        teaRelevant.importSelfFile(formData).then(res=>{
          //  console.log('个人档案',res)
            if(res.status==200){
                  this.dragFlagTwo = true;
                  this.dragFlag = false;
                  this.progress(); //调用进度条方法
            }
        }) 
        this.progress(); //调用进度条方法
        this.fileList = this.fileList.concat(e.dataTransfer.files[0]);
      };
      this.$refs.select_frame.ondragenter = e => {
        e.preventDefault(); //阻止拖入时的浏览器默认行为
      };
      this.$refs.select_frame.ondragover = e => {
        e.preventDefault(); //阻止拖来拖去的浏览器默认行为
      };
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
          // console.log(res.status);
        })
        .catch(res => console.log(res));
    },

    downLoad() {
      window.open("http://111.207.13.88:9127/jeuc/api/TeaBase/download?type=1");
    },

    defaultCheckData(){
        teaRelevant.yearCheckData().then(res => {
        if (res.status == 200) {
          let data = res.data.data.list;
          let useData = data.filter(v => {
            return v.delFlag == 0;
          });
          this.yearCheckData = useData;
        }
      });
    },

  },
  watch: {
    tabChange: function(newVal) {
      //选项卡切换 监听
      this.tabFlag = newVal;
      // console.log(newVal)
    }
  }
};
</script>
<style scoped>
/* 专业型称号 */
.jz_major {
  min-height: 540px;
}
.jz_cheng {
  box-sizing: border-box;
  padding: 0px 20px;
  height: 56px;
  border-bottom: solid 1px #dddddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* color: #5093e1; */
}
.jz_cheng span:nth-of-type(1) {
  flex: 1;
  font-size: 16px;
  color: #5093e1;
}
.jz_cheng p {
  position: relative;
}
.jz_cheng input {
  width: 176px;
  height: 26px;
  border-radius: 20px;
  outline: none;
  border: solid 1px #dddddd;
  text-indent: 10px;
  margin-right: 4px;
}
.jz_newadd {
  width: 62px;
  height: 30px;
  line-height: 30px;
  color: white;
  text-align: center;
  background: #1abc9c;
  cursor: pointer;
  margin-left: 6px;
}
.jz_tab3 {
  padding: 10px 20px 0px;
  box-sizing: border-box;
}
/* 年度考核 */
.jz_yearCheck,
.jz_agree {
  min-height: 830px;
}
.jz_check1 {
  padding: 0px 20px;
  height: 56px;
  border-bottom: solid 1px #dddddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.jz_ji {
  display: flex;
  font-size: 16px;
}
.jz_ji h3 {
  color: #5093e1;
  margin-right: 8px;
}
.jz_ji select {
  width: 170px;
  height: 28px;
  border: solid 1px #dddddd;
  border-radius: 5px;
  outline: none;
}
.jz_zhe span {
  cursor: pointer;
  text-align: center;
  display: inline-block;
}
.jz_zhe span label {
  cursor: pointer;
}
.jz_zhe span:nth-of-type(1) {
  width: 80px;
  height: 28px;
  line-height: 28px;
  color: #5093e1;
  border: solid 1px #5093e1;
  background: #f5f5f5;
}
.jz_zhe span:nth-of-type(2) {
  width: 80px;
  height: 28px;
  line-height: 28px;
  color: white;
  border: solid 1px #5093e1;
  background: #5093e1;
  margin: 0px 6px;
}
.jz_zhe span:nth-of-type(3) {
  width: 60px;
  height: 28px;
  line-height: 28px;
  color: white;
  border: solid 1px #1abc9c;
  background: #1abc9c;
}
.jz_check2 {
  padding: 10px 20px 32px;
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
.jz_addkaohe {
  padding: 10px 20px 0px;
}
.jz_addkaohe .jz_tit {
  font-size: 16px;
  color: #5093e1;
  margin-bottom: 16px;
}
.jz_kaohe p {
  margin-bottom: 14px;
}
.jz_kaohe p span {
  width: 80px;
  display: inline-block;
  text-align: right;
  margin-right: 6px;
}
.jz_flex {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.jz_search {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.jz_rsearch {
  margin-left: 4px;
  position: relative;
}
.jz_ul {
  width: 100%;
  border: solid 1px #ddd;
  margin-top: -1px;
}
.jz_name,
.jz_choose {
  width: 170px;
  height: 30px;
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
  border: solid 1px #dddddd;
  text-indent: 6px;
}
.jz_id {
  width: 296px;
  height: 30px;
  border-radius: 5px;
  outline: none;
  border: solid 1px #dddddd;
  background: #dddddd;
  margin-left: 4px;
}
/* 编辑弹出框 */
.jz_stop {
  position: fixed;
  background: rgba(0, 0, 0, 0.2);
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
.jz_st {
  width: 410px;
  background: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  box-sizing: border-box;
}
.jz_st > p {
  padding: 10px 20px;
  box-sizing: border-box;
  border-bottom: solid 1px #dddddd;
}
.jz_st > p > span {
  color: #5093e1;
  font-size: 16px;
}
.close {
  cursor: pointer;
}
.jz_top {
  margin-top: 30px;
}
.jz_hui {
  background: #dddddd;
}
.jz_edit2 {
  margin: 30px auto !important;
}

/* 个人档案 */
.iconwenjiandocuments18 {
  font-size: 46px;
  color: #999999;
}
.jz_rendown {
  min-height: 510px;
}
.jz_rendown2 {
  display: flex;
  padding: 20px 20px 10px;
  align-items: center;
}
.jz_xiazai {
  padding: 8px 20px;
  color: white;
  background: #5093e1;
  margin: 0px 12px;
  cursor: pointer;
}
.jz_yulan {
  color: #5093e1;
  cursor: pointer;
}
.jz_status {
  color: #999999;
  letter-spacing: 2.6px;
}
.jz_tuo {
  width: 830px;
  margin: 0px auto;
  height: 120px;
  border: dotted 1px #dddddd;
  position: relative;
}
.jz_center {
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.jz_center2 {
  width: 100%;
  box-sizing: border-box;
  padding: 0px 20px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.jz_center2 > p {
  line-height: 2;
}
.jz_center2 > p:nth-of-type(2) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.jz_num {
  flex: 1;
  margin-left: 4px;
}
.jz_center > p {
  margin-top: 10px;
}
.jz_del {
  color: #f7718d;
  cursor: pointer;
}
.jz_del2 {
  /* color: #f7718d; */
  color: #5093e1;
  cursor: pointer;
}

.jz_bar {
  width: 80%;
  display: inline-block;
  height: 12px;
  background: #e4e4e4;
  border-radius: 5px;
  position: relative;
}
.jz_bar > b {
  position: absolute;
  border-radius: 5px;
  /* width: 20%; */
  height: 12px;
  left: 0px;
  background: #1abc9c;
}
.success {
  color: #1abc9c;
}
.defeat {
  color: #f7718d;
}

.jz_sel {
  /* padding: 18px 0px 30px;
    display: flex;
    justify-content:center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -110px; */
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -86px;
}
.jz_sel2 {
  /* margin-top: 45px; */
  width: 290px;
  margin: 45px auto 0px;
}
.jz_sel span {
  padding: 6px 44px;
  cursor: pointer;
}
.jz_sel span:nth-of-type(1),
.jz_sel2 span:nth-of-type(1) {
  margin-right: 40px;
}
.jz_cancle {
  padding: 6px 44px;
  cursor: pointer;
  background: #ededed;
  /* margin-right: 40px; */
}
.jz_sure {
  padding: 6px 44px;
  cursor: pointer;
  background: #399fdf;
  color: white;
}
.jz_sendok {
  width: 830px;
  margin: auto;
}
.jz_sendok > p {
  margin: 12px 0px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 26px;
}
table thead {
  background: #f6f6f6;
}
tr,
td,
th {
  height: 38px;
  border: solid 1px #dddddd;
  text-align: center;
}
.jz_shezhi {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: none !important;
  color: #5093e1;
}
.jz_shezhi span {
  cursor: pointer;
}
</style>