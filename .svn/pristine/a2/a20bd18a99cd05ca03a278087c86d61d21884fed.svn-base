<template >
  <div class="g_main jz_wrap">
    <div class="jz_tou">
      <p>教师查询</p>
      <input
        type="text"
        placeholder="输入姓名搜索"
        class="jz_search"
        v-model.trim="teacherName"
        @keyup.enter="teaSearch"
      />
      <i class="iconfont iconweibiaoti--" @click="teaSearch"></i>
    </div>
    <div class="jz_fenlei clearfix">
      <span>学段:</span>
      <ul class="jz_more">
        <li
          v-for="(item,index) in studySection"
          :key="index"
          @click="studyDuan(item,index)"
          :class="{active2:index==indexa}"
        >{{item}}</li>
      </ul>
    </div>

    <!-- 学校 -->
    <div class="jz_fenlei clearfix">
      <span>学校:</span>
      <ul class="jz_more jz_kuo">
        <li
          v-for="(item,index) in schoolShow"
          :key="index"
          @click="schools(item,index)"
          :class="{active2:index==indexb}"
        >{{item}}</li>

        <li class="last" @click="schoolMore" v-show="!schoolFlag">
          <i class="iconfont iconxiangxia"></i>
          更多
        </li>

        <li class="last" @click="schoolXiao" v-show="schoolFlag">
          <i class="iconfont iconxiangshangjiantou"></i>
          收起
        </li>
      </ul>
    </div>

    <!-- 学科 -->
    <div class="jz_fenlei clearfix">
      <span>学科:</span>
      <ul class="jz_more jz_kuo">
        <li
          v-for="(item,index) in subjectShow"
          :key="index"
          @click="subjects(item,index)"
          :class="{active2:index==indexc}"
        >{{item}}</li>

        <li class="last" @click="subjectMore" v-show="!subjectFlag">
          <i class="iconfont iconxiangxia"></i>
          更多
        </li>
        <li class="last" @click="subjectXiao" v-show="subjectFlag">
          <i class="iconfont iconxiangshangjiantou"></i>
          收起
        </li>
      </ul>
    </div>

    <!-- 年龄 -->
    <div class="jz_fenlei clearfix">
      <span>年龄:</span>
      <ul class="jz_more">
        <li
          v-for="(item,index) in age"
          :key="index"
          @click="ages(item,index)"
          :class="{active2:index==indexd}"
        >{{item}}</li>

        <li class="jz_yi">
          <input
            type="text"
            name
            id
            placeholder="自定义年龄"
            v-model.number="ageLeft"
            onkeyup="value=value.replace(/[^0-9]/g,'')"
            maxlength="2"
          />
          一
          <input
            type="text"
            name
            id
            placeholder="自定义年龄"
            v-model.number="ageRight"
            onkeyup="value=value.replace(/[^0-9]/g,'')"
            maxlength="2"
          />
          <!-- <input onkeyup="value=value.replace(/[^0-9]/g,'')" onpaste="value=value.replace(/[^0-9]/g,'')" oncontextmenu = "value=value.replace(/[^0-9]/g,'')"> -->
        </li>
        <li @click="ageSure" :class="colorChange?'jz_sureming':'jz_surean'">确定</li>
      </ul>
    </div>

    <!-- 职称 -->
    <div class="jz_fenlei jz_duo clearfix">
      <span class="jz_special">职称:</span>
      <ul class="jz_more">
        <li
          v-for="(item,index) in newTitle"
          :key="index"
          @click="newTitles(item,index)"
          :class="{active2:index==indexe}"
        >{{item}}</li>
      </ul>
    </div>

    <!-- 专业型称号 -->
    <div class="jz_fenlei clearfix">
      <span>专业型称号:</span>
      <ul class="jz_more">
        <li
          v-for="(item,index) in domainName"
          :key="index"
          @click="domainNames(item,index)"
          :class="{active2:index==indexf}"
        >{{item}}</li>
      </ul>
    </div>
    <div class="clearfix">
      <span class="allnum">共计查询{{totalCount}}人</span>
    </div>

    <table>
      <thead>
        <tr>
          <th>姓名</th>
          <th>年龄</th>
          <th>职称</th>
          <th>专业型称号</th>
          <th>获得时间</th>
          <th>学科</th>
          <th>学段</th>
          <th>学校</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(v,i) in showData" :key="i" @click="teachersDetails(v.idCard)">
          <td>{{v.realname}}</td>
          <td>{{v.age}}</td>
          <td>{{v.jobName1}}</td>
          <td>{{v.typeName}}</td>
          <td>{{v.getTime}}</td>
          <td>{{v.subject}}</td>
          <td>{{v.level}}</td>
          <td>{{v.schoolName}}</td>
        </tr>
      </tbody>
    </table>
    <div class="jz_fen_page">
      <i class="iconfont iconzuo" @click="prePage" :class="{jz_disable:pageNow==1}"></i>
      <span
        v-for="(item,index) in page"
        :key="index"
        @click="jumpPages(item)"
        :class="{active:pageNow==item}"
      >{{item}}</span>
      <i class="iconfont iconiconfontroundright" @click="nextPage" :class="{jz_disable:pageNow==page.length}"></i>
    </div>
  </div>
</template>
<script>
import { teaRelevant } from "@/api";
export default {
  data() {
    return {
      schoolFlag: false, //学校分类的显示隐藏
      subjectFlag: false, //学科分类的显示隐藏
      ageLeft: "", //查询年龄左边输入框
      ageRight: "", //查询年龄右边输入框
      //   学段分类
      studySection: [
        "全部",
        "学前教育",
        "小学",
        "初中",
        "成人中等专业学校",
        "特殊教育",
        "其他"
      ],

      // 学校分类
      schoolShow: "",
      school: [
        "全部",
        "北京市东城区两秀幼儿园",
        "北京市东城区英皇实验幼儿园分园",
        "北京市东城区英皇实验幼儿园",
        "北京市东城区广益幼儿园",
        "北京市东城区两秀幼儿园",
        "北京市东城区英皇实验幼儿园分园",
        "北京市东城区英皇实验幼儿园",
        "北京市东城区广益幼儿园",
        "北京市东城区广益幼儿园",
        "北京市东城区两秀幼儿园",
        "北京市东城区英皇实验幼儿园分园",
        "北京市东城区英皇实验幼儿园",
        "北京市东城区广益幼儿园",
        "北京市东城区广益幼儿园"
      ],

      //学科分类
      subjectShow: "",
      subject: [
        "全部",
        "语文",
        "数学",
        "英语",
        "物理",
        "生物",
        "地理",
        "政治",
        "化学",
        "历史",
        "信息技术",
        "思想品德与教育",
        "美术",
        "思想品德",
        "研究性学习",
        "社区服务鱼社会实践",
        "劳动与技术教育",
        "农林牧渔类",
        "资源环境类",
        "美术",
        "思想品德",
        "研究性学习",
        "社区服务鱼社会实践",
        "劳动与技术教育",
        "农林牧渔类",
        "资源环境类",
        "思想与品德(聋校)",
        "历史与社会(盲校)",
        "科学(盲校)",
        "语文(盲校)"
      ],

      // 年龄
      age: ["全部", "25以下", "26-30", "31-35", "36-40", "41以上"],

      // 职称
      newTitle: [
        "全部",
        "无职称",
        "未定几职称",
        "中小学(幼儿园)三级教师",
        "中小学(幼儿园)二级教师",
        "中小学(幼儿园)一级教师",
        "中小学(幼儿园)高级教师",
        "正高级讲师(中专)",
        "高级讲师(中专)",
        "高级实习指导教师",
        "三级实习指导教师",
        "二级实习指导教师",
        "一级实习指导教师",
        "正高级讲师(中专)",
        "高级讲师(中专)",
        "高级实习指导教师",
        "三级实习指导教师",
        "二级实习指导教师",
        "一级实习指导教师"
      ],

      // 专业型称号
      domainName: [
        "全部",
        "区教学新秀",
        "市教学新秀",
        "区教学能手",
        "市教学能手",
        "区学科带头人",
        "市学科带头人",
        "名教师",
        "名校长",
        "省特级教师"
      ],
      indexa: 0, // 选择学段默认下标
      indexb: 0, //选择学校默认下标
      indexc: 0, //选择学科默认下标
      indexd: 0, //选择年龄默认下标
      indexe: 0, //选择职称默认下标
      indexf: 0, //专业型称号默认下标
      teacherName: "", //教师查询,
    
    
      checkObj: {
        level: "",
        schoolName: "",
        subject: "",
        smallage: "",
        bigage: "",
        jobName1: "",
        typeName: ""
      },
      listData: [],
      showData:[],//展示的数据
      totalCount:null,//总数量
      page: [],//显示页数
      pageNow:'1',
      pageSize:'8',
    };
  },
  created() {
    this.findData();
  },
  mounted() {
    this.schoolShow = this.school.slice(0, 4);
    this.subjectShow = this.subject.slice(0, 6);
  },
  computed: {
    colorChange: {
      get: function() {
        if (this.ageRight > this.ageLeft) {
          this.indexd = null;
          return true;
        } else {
          return false;
        }
      },
      set: function(v) {
        // console.log(v);
      }
    }
  },
  watch: {
    checkObj: {
      handler: function(val) {
        let obj = new Object();
        for (let i in val) {
          if (val[i] !== "" && val[i] !== "全部") {
            obj[i] = val[i];
          }
        }
      obj.pageNo=this.pageNow;
      obj.pageSize=this.pageSize;
         teaRelevant.teacherQuery(obj).then(res => {
        if (res.status == 200) {
          this.showData = res.data.data.list;
           this.totalCount=res.data.data.count;
        }
      });
      },
      deep: true
    },
    totalCount:function(newVal){
           let page,arr=[];
           page=Math.ceil(newVal/this.pageSize);
           for(var i=1;i<=page;i++){
              arr.push(i)
           }
           this.page=[...new Set(arr)]
    }
  },
  methods: {
    // 学校更多显示隐藏
    schoolMore: function() {
      this.schoolFlag = !this.schoolFlag;
      this.schoolShow = this.school;
    },
    // 学校收起显示隐藏
    schoolXiao: function() {
      this.schoolFlag = !this.schoolFlag;
      this.schoolShow = this.school.slice(0, 4);
    },
    //学科更多显示隐藏
    subjectMore: function() {
      this.subjectFlag = !this.subjectFlag;
      this.subjectShow = this.subject;
    },
    subjectXiao: function() {
      this.subjectFlag = !this.subjectFlag;
      this.subjectShow = this.subject.slice(0, 6);
    },
   
  
    //确定年龄
    ageSure() {
      let preage = this.ageLeft;
      let nextage = this.ageRight;
      let flag = this.colorChange;
      if (flag) {
        this.checkObj.smallage = preage;
        this.checkObj.bigage = nextage;
        this.ageLeft='';
        this.ageRight='';
        this.colorChange=!this.colorChange;
      }
    },
    

    // 选择学段
    studyDuan(item, index) {
      this.indexa = index;
      this.checkObj.level = item;
    },
    //选择学校
    schools(item, index) {
      this.indexb = index;
      this.checkObj.schoolName = item;
    },

    //选择学科
    subjects(item, index) {
      this.indexc = index;
      this.checkObj.subject = item;
    },

    //选择年龄
    ages(item, index) {
      this.indexd = index;
      this.ageLeft = "";
      this.ageRight = "";
      if (item == "25以下") {
        // console.log("successs");
        this.checkObj.smallage = '0';
        this.checkObj.bigage = '25';
      } else if (item == "41以上") {
        this.checkObj.smallage = "41";
        this.checkObj.bigage = "99";
      } else if (item == "全部") {
       this.checkObj.smallage='';
       this.checkObj.bigage='';
      } else {
        let age = item.split("-");
        this.checkObj.smallage = age[0];
        this.checkObj.bigage = age[1];
      }
      this.colorChange = false;
    },
    //选择职称
    newTitles(item, index) {
      this.indexe = index;
      this.checkObj.jobName1 = item;
    },
    // 专业型称号
    domainNames(item, index) {
      this.indexf = index;
      this.checkObj.typeName = item;
    },
    //页数跳转
    jumpPages(item) {
      this.pageNow=item;
      this.findData();
    },
    //前一页
    prePage() {
     if(this.pageNow!=1){
      this.pageNow--;
      this.findData();
     }
    },
    //后一页
    nextPage() {
      let lastPage=this.page.length;
      if(this.pageNow!=lastPage){
         this.pageNow++;
          this.findData();
      }
    },

    //根据姓名查询教师
    teaSearch(){
      this.findData();
    },
    //教师详情页跳转
    teachersDetails: function(idCard) {
      this.$router.push({
        path: "/index/teachersDetails",
        query: { idCard: idCard }
      });
    },
     //查询教师
    findData() {
      let obj=new Object();
      obj.pageNo=this.pageNow;
      obj.pageSize=this.pageSize;
      if(this.teacherName){
        obj.realname=this.teacherName
      }
      teaRelevant.teacherQuery(obj).then(res => {
        // console.log(res)
        if (res.status == 200) {
          let useData=res.data.data.list
          // 处理后台键值为null的数据
          useData.forEach(v=>{
            for(let i in v){
                if(v[i]=='null'){
                    v[i]=''
                }
            }
          })
          this.showData =useData;
          this.totalCount=res.data.data.count;
        }
      });
    },
  }
};
</script>

<style scoped>
/* 小图标样式 */
.iconzuo,
.iconiconfontroundright {
  font-size: 20px;
  color: #5093e1;
  cursor: pointer;
}
.iconweibiaoti-- {
  position: absolute;
  right: 30px;
  font-size: 22px;
  cursor: pointer;
}
input {
  outline: none;
}
li,
span,
dd {
  cursor: pointer;
}

/* 教师查询头部 */
.jz_wrap {
  height: 1120px;
  background: white;
  margin-top: 10px;
  position: relative;
  margin-bottom: 128px;
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
  position: relative;
}
.jz_tou p {
  color: #5093e1;
  font-weight: bold;
  font-size: 18px;
}
.jz_tou input {
  width: 300px;
  height: 34px;
  border-radius: 20px;
  text-indent: 20px;
  border: solid 1px #dddddd;
}

/* 下方分类 */
.jz_fenlei {
  padding: 16px 0px;
  border-bottom: dotted 1px #dddddd;
  position: relative;
}
.jz_fenlei:nth-of-type(3),
.jz_fenlei:nth-of-type(4) {
  padding-bottom: 0px !important;
}
.jz_more {
  margin-left: 110px;
  height: 18px;
  width: 1030px;
  position: relative;
}
.jz_kuo li {
  padding-bottom: 16px;
}
.jz_fenlei li {
  margin-right: 24px;
}
.last {
  color: #5093e1;
  cursor: pointer;
  position: absolute;
  right: -50px;
}
.jz_surean {
  display: inline-block;
  width: 52px;
  height: 26px;
  text-align: center;
  line-height: 26px;
  background: #dddddd;
  color: white;
  border-radius: 5px;
  cursor: not-allowed;
}
.jz_sureming {
  display: inline-block;
  width: 52px;
  height: 26px;
  text-align: center;
  line-height: 26px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  background: #5093e1;
}
.jz_yi {
  color: #dddddd;
}
.jz_yi input {
  text-indent: 5px;
  border-radius: 5px;
  border: solid 1px #cccccc;
  outline: none;
}
.jz_fenlei span {
  float: left;
  width: 100px;
  text-align: right;
  margin-right: 10px;
}

.jz_fenlei ul li {
  float: left;
}

.jz_fenlei .jz_special {
  height: 86px;
}
.jz_duo ul li {
  padding-bottom: 10px;
}
.showhiddens dl {
  display: flex;
  flex-wrap: wrap;
  margin-left: 110px;
}
.showhiddens dl dd {
  margin-right: 24px;
  padding-top: 20px;
}
.allnum {
  float: right;
  margin-right: 20px;
  padding: 16px 0px 10px;
  color: #5093e1;
}
/* 表格 */
table {
  width: 1160px;
  box-sizing: border-box;
  margin: auto;
  border: solid 1px #dddddd;
  border-collapse: collapse;
}
table tr {
  cursor: pointer;
}
table tr th {
  font-weight: normal;
}
table tr th,
td {
  text-align: center;
  padding: 12px 0px;
  border: solid 1px #dddddd;
}

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
}
/* 分页动态效果 */
.active {
  background: #5093e1;
  color: white !important;
}
.jz_disable{
  cursor: not-allowed;
  color: #dddddd;
}
/* 点击切换分类样式变换*/
.active2 {
  color: #5093e1 !important;
}

.jz_fen_page span:nth-of-type(1) {
  margin-left: 20px;
}
</style>