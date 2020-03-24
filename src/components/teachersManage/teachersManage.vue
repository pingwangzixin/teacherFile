<template >
  <div class="jz_tan">
    <div class="jz_twrap g_main">
      <div class="jz_tou">
        <p>教师查询</p>
        <div class="jz_inp">
          <input
            type="text"
            name
            id
            placeholder="输入姓名搜索"
            v-model.trim="teacherSearch"
            @keyup.enter="teacherSearchs"
          />
          <i class="iconfont iconweibiaoti--" @click="teacherSearchs"></i>
        </div>
        <span @click="teachersMessageEntering()">教师信息录入</span>
      </div>
      <!-- 内容选择 -->
      <ul class="jz_shai">
        <li v-for="(v,i) in navList" :key="i" @click="navChange(i)" :class="{active:navIndex==i}">{{v.name}}
          <span v-show="v.flag">({{count}})人</span>  
        </li>
      </ul>
      <div class="jz_wt">
        <!-- 在职教师 -->
        <table class="jz_tab" v-show="navIndex!=2">
          <thead>
            <tr>
              <th width="110">教师姓名</th>
              <th width="210" class="jz_shou" @click="role=!role">
                角色
                <i class="jz_xia"></i>
                <div class="jz_role" v-show="role">
                  <p
                    v-for="(item,index) in roleData"
                    :key="index"
                    @click="selectRole(index)"
                    :class="{activerole:index==selectIndex}"
                  >{{item}}</p>
                </div>
              </th>
              <th width="242">手机号</th>
              <th width="242">更新时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in showData" :key="index">
              <td>{{item.realname}}</td>
              <td>{{item.remark}}</td>
              <td>{{item.userPhone}}</td>
              <td>{{item.updateDate}}</td>
              <td class="jz_td" v-show="item.state==0">
                <span @click="editTeacher(item.idCard)">查看详情</span>
                <span @click="breakUp(item.id)">停用</span>
                <span @click="transfer(item.realname,item.id)">调动</span>
              </td>
              <td class="jz_td" v-show="item.state==1">
                <span  @click="lookInfo(item.idCard)">查看详情</span>
                <span @click="startUp(item.id)">启用</span>
                <span @click="deleteTeachers(item.id)">彻底删除</span>
              </td>
            </tr>
          </tbody>
        </table>

        <table class="jz_tab" v-show="navIndex==2">
          <thead>
            <tr>
              <th>姓名</th>
              <th>调动日期</th>
              <th>调动状态</th>
              <th>调动详情</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(v ,i) in removePeopleList" :key="i">
                <td>{{v.name}}</td>
                <td>{{v.time}}</td>
                <td :class="{
                  jz_wait:v.state=='待处理',
                  jz_yes:v.state=='已接受',
                  jz_no:v.state=='已退回',
                }">{{v.state}}</td>
                <td>{{v.info}}</td>
                <td class="jz_td" v-show="v.cao==0"><span>接受</span> <span>退回</span></td>
                <td v-show="v.cao==1">--</td>
                 <td class="jz_td" v-show="v.cao==2"><span>撤回</span> </td>
            </tr>
          </tbody>

        </table>
      </div>
      <!-- 分页 -->
      <div class="jz_fen_page">
        <i class="iconfont iconzuo" @click="prePage" :class="{jz_pd:jumpPage==0}"></i>
        <span
          v-for="(item,index) in page"
          :key="index"
          @click="jumpPages(item,logState)"
          :class="{active2:jumpPage==index}"
        >{{item}}</span>
        <i class="iconfont iconiconfontroundright" @click="nextPage" :class="{jz_pd:jumpPage==3}"></i>
      </div>
    </div>
    <!-- 弹窗 -->
    <div class="jz_dialog" v-show="dialog">
        <div class="jz_dialog_area">
          <p class="clearfix"> <span class="fl">调动</span>  <i class="iconfont iconyooxi fr" @click="dialog=false"></i></p>
          <ul>
            <li><span>调动老师：</span> {{removeTea}}</li>
            <li><span>调动学段：</span> 
                  <select class="jz_select">
                    <option value="请选择学段" selected  disabled hidden>请选择学段</option>
                  </select>
            </li>
            <li><span>调动学校：</span>
                <select  class="jz_select">
                     <option value="请先选择学段" selected  disabled hidden>请先选择学段</option>
                </select>
            </li>
          </ul>
            <div class="jz_cansel_sure">  <span @click="dialog=false">取消</span>  <span>确认</span>    </div>
        </div>
    </div>





  </div>
</template>
<script>
import { teaRelevant } from "@/api";
export default {
  data() {
    return {
      teacherSearch: "", //教师查询
      workingTeacher: true, //在职教师切换
      role: false, //角色显示隐藏
      dialog:false,//弹框
      removeTea:'',//调动教师
      roleData: ["全部", "局领导", "人事科", "教研员", "普通教师"],
      navList:[
        {name:'在职教师',flag:true},
        {name:'已停用账号',flag:false},
        {name:'人员调动记录',flag:false}
        ],
      removePeopleList:[
        {name:'端木狗剩',time:'2018-10-19',state:'待处理',info:'由北京市实验小学调入北京市东林小学',cao:'0'},
        {name:'端木狗剩',time:'2018-10-19',state:'已接受',info:'由北京市实验小学调入北京市东林小学',cao:'1'},
        {name:'端木狗剩',time:'2018-10-19',state:'已退回',info:'由北京市实验小学调入北京市东林小学',cao:'2'},
        {name:'端木狗剩',time:'2018-10-19',state:'已接受',info:'由北京市实验小学调入北京市东林小学',cao:'1'},
      ],
      navIndex:'0',
      selectIndex: 0, //默认选中的角色
      state: "0", //停用禁用
      count: "", //人数

      logState:'0',//存储当前页面哪种状态
      jumpPage: 0,
      showData: [], //展示的数据
      totalCount: null, //总数量
      page: [], //显示页数
      pageNow: "1",
      pageSize: "10"
    };
  },
  created() {
    this.findData("0");
  },
  methods: {
    teacherSearchs() {
     this.findData('0')
    
    },
    workingTeachers() {
      this.workingTeacher = true;
       this.logState=0;
      this.findData("0");
    },
    disableIds() {
      this.workingTeacher = false;
      this.logState=1;
      this.findData("1");
    },
    navChange(index){
      this.navIndex=index;
      let list=this.navList;
      list.forEach(v=>{
        v.flag=false;
      })
      list[index].flag=true;
      // console.log(index)
      switch(index){
        case 0:
        this.logState=0;
        this.findData("0");
        break;
        case 1:
        this.logState=1;
        this.findData("1");
        break;
        case '2':
       
        break;
      }
    },
    selectRole(index) {
      this.selectIndex = index;
    },
    //页数跳转
    jumpPages(item,logState) {
      this.pageNow=item;
      this.jumpPage=item;
      this.findData(logState);
    },
    //前一页
    prePage() {
      if(this.pageNow!=1){
      this.pageNow--;
       this.findData(this.logState);
     }
    },
    //后一页
    nextPage() {
      let lastPage=this.page.length;
      if(this.pageNow!=lastPage){
         this.pageNow++;
          this.findData(this.logState);
      }
    },
    transfer(name){
      this.dialog=!this.dialog;
      this.removeTea=name;
    },
    //停用
    breakUp(id) {
      let _this = this;
      this.$parent.confirmFn("确认要停用该教师吗?", function(state) {
        if (state == "sure") {
          _this.$parent.timingFn("success", "停用成功！");
          teaRelevant.teaBaseUseOrNo({ id: id, state: 1 }).then(res => {
            if (res.status == 200) {
              _this.findData("0");
            }
          });
        }
      });
    },

    //彻底删除教师
    deleteTeachers(id) {
      let _this = this;
      this.$parent.confirmFn("确认要彻底删除该教师吗?", function(state) {
        if (state == "sure") {
          teaRelevant.delTeaBase({id:id}).then(res=>{
            // console.log(res)
             if (res.status == 200) {
                 _this.findData("1");
             _this.$parent.timingFn("success", "删除成功！");
               }
          })
        } 
      });
    },

    //启用该教师
    startUp(id) {
      let _this = this;
      this.$parent.confirmFn("确认要启用该教师吗?", function(state) {
        if (state == "sure") {
          teaRelevant.teaBaseUseOrNo({ id: id, state: 0 }).then(res => {
            if (res.status == 200) {
              _this.findData("1");
              _this.$parent.timingFn("success", "启用成功！");
            }
          });
        }
      });
    },

    lookInfo(idCard) {
      //查看详情进入编辑页面
      this.$router.push({
        path: "/index/checkTeacherCommon/checkTeacherFile",
        query: { judge: "lookinfo",idCard:idCard}
      });
    },
    editTeacher(idCard) {
      //点击编辑进入编辑页面
      this.$router.push({
        path: "/index/checkTeacherCommon/checkTeacherFile",
        query: { judge: "editTeacher",idCard:idCard }
      });
    },
    teachersMessageEntering() {
      //点击进入教师信息录入页面
      this.$router.push({
        path: "/index/checkTeacherCommon/teachersMessageEntering",
        query: { judge: "teachersMessageEntering" }
      });
    },

    findData(state) {
       let obj=new Object();
      obj.pageNo=this.pageNow;
      obj.pageSize=this.pageSize;
      obj.state=state;
      if(this.teacherSearch){
        obj.realname=this.teacherSearch
      }
      teaRelevant.teaBaseList(obj).then(res => {
        if (res.status == 200) {
            let data = res.data.data.list;
          let useData = data.filter(v => {
            return v.delFlag == 0;
          });
          //处理后台键值为null的数据让显示为空
          console.time('处理后台键值为null的数据')
          useData.forEach(v=>{
            for(let i in v){
                if(v[i]=='null'){
                    v[i]=''
                }
            }
          })
          console.timeEnd('处理后台键值为null的数据')
          this.showData = useData;
          this.count = useData.length;
        }
      });
    }
  },
  watch: {
    count: function(newVal) {
      // console.log(newVal);
      let page,
        arr = [];
      page = Math.ceil(newVal / this.pageSize);
      for (var i = 1; i <= page; i++) {
        arr.push(i);
      }
      this.page = [...new Set(arr)];
    }
  }
};
</script>
<style scoped>
.jz_dialog{
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5)
}
.jz_dialog_area{
  width: 550px;
  height: 320px;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0px 10px;
  transform: translate(-50%,-50%);
}
.jz_dialog_area p{
  padding: 10px 20px;
  border-bottom: solid 1px #dddddd;
}
.jz_dialog_area p span{
  color: #5093e1;
  font-weight: 600;
  font-size: 20px;
}
.jz_dialog_area ul{
  padding: 0px 100px;
}
.jz_dialog_area ul li{
  line-height: 4;
}
.jz_dialog_area ul span{
  display: inline-block;
  width: 80px;
  text-align: right;
}
.jz_dialog_area .jz_cansel_sure{
  display: flex;
  justify-content:center;
  align-items: center;
  margin-top: 26px;
}
.jz_dialog_area .jz_cansel_sure span{
   padding:  10px 28px;
  text-align: center;
   cursor: pointer;
   border-radius: 5px;
}
.jz_dialog_area .jz_cansel_sure span:nth-of-type(1){
  background: #dddddd;
  margin-right: 30px;
}
.jz_dialog_area .jz_cansel_sure span:nth-of-type(2){
  background: #5093e1;
  color: white;
}
.jz_select{
  width: 214px;
  height: 36px;
  border: solid 1px #dddddd;
  border-radius: 5px;
  outline: none;
}
.iconyooxi{
font-size: 20px;
cursor: pointer;
}
.iconzuo,
.iconiconfontroundright {
  font-size: 20px;
  color: #5093e1;
  cursor: pointer;
}
.jz_pd {
  cursor: not-allowed;
  color: #dddddd;
}
.jz_twrap {
  background: white;
  margin-top: 10px;
  margin-bottom: 130px;
  position: relative;
  box-shadow: 0px 0px 2px 2px #dddddd;
  border-radius: 5px;
}
.jz_tou {
  height: 66px;
  box-sizing: border-box;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #dddddd;
}
.jz_tou p {
  color: #5093e1;
  font-weight: bold;
  font-size: 18px;
  flex: 1;
}
.jz_inp {
  position: relative;
}
.jz_tou input {
  width: 300px;
  height: 36px;
  border-radius: 20px;
  text-indent: 20px;
  border: solid 1px #dddddd;
  outline: none;
  margin-right: 20px;
}
.jz_tou span {
  padding: 8px;
  background: #5093e1;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}
.iconweibiaoti-- {
  position: absolute;
  right: 35px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 22px;
  cursor: pointer;
}
.jz_shai {
  display: flex;

  justify-content: flex-start;
  background: #f5f4f4;
}
.jz_shai li {
  padding: 12px 27px;
  border-top: solid 2px transparent;
  cursor: pointer;
  width: 240px;
  text-align: center;
}

.jz_wt {
  padding: 14px 20px 300px;
}
.jz_tab {
  width: 100%;
  /* box-sizing: border-box; */
  /* padding: 14px 20px 0px ; */
}
tr,
th,
td {
  text-align: center;
  padding: 12px 0px;
  border: solid 1px #dddddd;
  position: relative;
  font-weight: normal !important;
}
thead {
  background: #f6f6f6;
}
.jz_td {
  display: flex;
  justify-content: space-around;
  color: #5093e1;
  border: none;
}
.jz_td span {
  cursor: pointer;
}
.jz_xia {
  height: 0px;
  border-left: solid 5px transparent;
  border-right: solid 5px transparent;
  border-top: solid 8px #cfcece;
  position: absolute;
  top: 50%;
  margin-left: 6px;
  transform: translateY(-50%);
  cursor: pointer;
}
.jz_role {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 44px;
  border: solid 1px #5ca7e5;
  width: 100px;
  background: white;
  z-index: 10;
}
.jz_shou {
  cursor: pointer;
}
.jz_role p {
  padding: 8px 22px;
  cursor: pointer;
}
/* 导航栏动态 */
.active {
  background: white;
  color: #5093e1;
  border-top-color: #5093e1 !important;
}
.activerole {
  color: #f97c59;
}
/* 分页动态 */
.active2 {
  background: #5093e1;
  color: white !important;
}
/* 分页*/
.jz_fen_page {
  text-align: center;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  align-items: center;
}
.jz_fen_page span {
  padding: 0px 6px;

  border-radius: 2px;
  margin-right: 20px;
  color: #5093e1;
  cursor: pointer;
}
.jz_fen_page span:nth-of-type(1) {
  margin-left: 20px;
}
.jz_tan {
  width: 100%;
  height: 100%;
}


/* 已停用账号 */
.jz_tyong {
  color: #dddddd;
}
.jz_wait{
  color: #fe756a;
}
.jz_yes{
  color: #1abc9c;
}
.jz_no{
  color: #666666;
}
</style>