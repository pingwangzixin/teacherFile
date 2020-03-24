<template >
  <div class="jz_fwrap g_main">
    <div class="jz_tou">
      <p>筛选对比</p>
    </div>
    <ul class="jz_shai">
      <li
        v-for="(v,i) in navList"
        :key="i"
        @click="navChange(i,v)"
        :class="{active:indexNav==i}"
      >{{v}}</li>
    </ul>
    <!-- 排序条件 -->
    <div class="jz_xuan">
      <span>
        按资料完成度排序
        <i :class="{jz_shang:true,activepx1:files1}" @click="fileZx"></i>
        <i :class="{jz_xia:true,activepx2:files2}" @click="fileFx"></i>
      </span>
      <span>
        按年龄排序
        <i :class="{jz_shang:true,activepx1:age1}" @click="ageZx"></i>
        <i :class="{jz_xia:true,activepx2:age2}" @click="ageFx"></i>
      </span>
      <span class="fr">共计查询{{totalCount}}人</span>
    </div>
    <!--筛选内容 -->

    <div class="jz_con">
      <div class="jz_one" v-for="(item,index) in list" :key="index">
        <div class="jz_ones">
          <div>
            <img src="../../assets/img/toux.png" alt />
          </div>
          <dl>
            <dt>
              <b @click="teachersDetails">{{item.realname}}</b>
              <span class="jz_age">{{item.age}}</span>
            </dt>
            <dd>
              <span>普通教师</span>
              <i class="bar">
                <b class="bar_s" :style="`width:${item.bar}%`">
                  <span class="bar_w">{{item.bar}}%</span>
                </b>
              </i>
              <span>教学新秀</span>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <div class="jz_fen_page">
      <i class="iconfont iconzuo" @click="prePage" :class="{jz_pd:pageNow==1}"></i>
      <span
        v-for="(item,index) in page"
        :key="index"
        @click="jumpPages(item)"
        :class="{active2:pageNow==item}"
      >{{item}}</span>
      <i
        class="iconfont iconiconfontroundright"
        @click="nextPage"
        :class="{jz_pd:pageNow==page.length}"
      ></i>
    </div>
  </div>
</template>
<script>
import { teaRelevant } from "@/api";
export default {
  data() {
    return {
      navList: [
        "普通教师",
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
      typeName: "普通教师",
      indexNav: 0,
      fileSort: true,
      ageSort: true,
      //按资料完成度排序
      files1: "",
      files2: "",
      //按年龄排序
      age1: "",
      age2: "",
      sort:'',

      list: [], //展示的数据
      totalCount: null, //总数量
      page: [], //显示页数
      pageNow: "1",
      pageSize: "8"
    };
  },
  created() {
    this.findData();
  },
  methods: {
    navChange(index, item) {
      this.indexNav = index;
      this.typeName = item;
      this.findData();
    },
    //页数跳转
    jumpPages(item) {
      this.pageNow = item;
      this.findData();
    },
    //前一页
    prePage() {
      if (this.pageNow != 1) {
        this.pageNow--;
        this.findData();
      }
    },
    //后一页
    nextPage() {
      let lastPage = this.page.length;
      if (this.pageNow != lastPage) {
        this.pageNow++;
        this.findData();
      }
    },
    teachersDetails() {
      this.$router.push({ path: "/index/teachersDetails" });
    },
    //按资料完成度排序正序
    fileZx() {
      this.files1 = !this.files1;
      this.files2 = false;
      this.age1 = false;
      this.age2 = false;
      if(this.files1){

      }
    },
    //按资料完成度排序反序
    fileFx() {
      this.files2 = !this.files2;
      this.files1 = false;
      this.age1 = false;
      this.age2 = false;
      if(this.files2){

      }
    },
    //按年龄排序正序
    ageZx() {
      this.age1 =!this.age1;
      this.age2 = false;
      this.files1 = false;
      this.files2 = false;
      this.sort=1;
      if(this.age1){
        this.findData()
      }



    },
    //按年龄排序反序
    ageFx() {
      this.age2 =!this.age2;
      this.age1 = false;
      this.files1 = false;
      this.files2 = false;
      this.sort=0;
      if(this.age2){
        this.findData()
      }
    },

    findData() {
      let obj = new Object();
      obj.typeName = this.typeName;
      obj.pageNo = this.pageNow;
      obj.pageSize = this.pageSize;
      if(this.sort!==''){
        obj.sort=this.sort
      }
      if(this.indexNav==0){
        teaRelevant.teaBaseList(obj).then(res => {
          // console.log(res);
          if (res.status == 200) {
            this.list = res.data.data.list;
            this.totalCount = res.data.data.count;
          }
        });
      }else{
         teaRelevant.teacherQuery(obj).then(res => {
        // console.log(res);
        if (res.status == 200) {
          this.list = res.data.data.list;
          this.totalCount = res.data.data.count;
         }
        });
      }

    }
  },
  watch: {
    totalCount: function(newVal) {
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
.iconzuo,
.iconiconfontroundright {
  font-size: 20px;
  color: #5093e1;
  cursor: pointer;
}
.jz_fwrap {
  background: white;
  height: 1140px;
  margin-top: 10px;
  margin-bottom: 130px;
  position: relative;
  box-shadow: 0px 0px 2px 2px #dddddd;
  border-radius: 5px;
}
.jz_tou p {
  padding: 20px 0px 16px 20px;
  font-size: 18px;
  color: #5093e1;
  border-bottom: solid 1px #dddddd;
  font-weight: bold;
}
.jz_shai {
  display: flex;

  justify-content: space-between;
  background: #f5f4f4;
}
.jz_shai li {
  padding: 12px 27px;
  border-top: solid 2px transparent;
  cursor: pointer;
}
/*按条件筛选  */
.jz_xuan {
  padding: 26px 20px 0px 22px;
  color: #1abc9c;
}
.jz_xuan span:nth-of-type(3) {
  color: #619ce3 !important;
}
.jz_xuan span:nth-of-type(1),
.jz_xuan span:nth-of-type(2) {
  position: relative;
  margin-right: 44px;
}
.jz_shang {
  border-left: solid 5px transparent;
  border-right: solid 5px transparent;
  border-bottom: solid 8px #cfcece;
  position: absolute;
  right: -16px;
  bottom: 8px;
  cursor: pointer;
}
.jz_xia {
  border-left: solid 5px transparent;
  border-right: solid 5px transparent;
  border-top: solid 8px #cfcece;
  position: absolute;
  right: -16px;
  bottom: -1px;
  cursor: pointer;
}
/* 具体内容 */
.jz_con {
  padding: 44px 70px;
  /* height: 988px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.jz_one {
  width: 514px;
  height: 128px;
  border: solid 1px #dddddd;
  box-sizing: border-box;
  padding: 2px;
  margin-bottom: 36px;
}
.jz_ones {
  background: #ececec;
  height: 100%;
  padding: 0px 24px 0px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #8f8f8f;
  font-size: 12px;
}
.jz_ones b {
  color: black !important;
  font-size: 14px;
  cursor: pointer;
}
.jz_ones dl {
  flex: 1;
  margin-left: 8px;
  line-height: 2.2;
}
.jz_ones img {
  width: 66px;
  height: 70px;
}
.jz_age {
  margin-left: 10px;
}
.bar {
  display: inline-block;
  width: 258px;
  height: 12px;
  background: white;
  border-radius: 5px;
  position: relative;
}
.bar_s {
  position: absolute;
  left: 0px;
  display: inline-block;
  border-radius: 5px;
  background: #1abc9c;
  width: 80%;
  height: 100%;
}
.bar_w {
  position: absolute;
  right: 0px;
  bottom: 8px;
  color: #1abc9c;
  font-weight: normal;
  font-size: 12px;
}
/* fneye */
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

/* 导航栏动态 */
.active {
  background: white;
  color: #5093e1;
  border-top-color: #5093e1 !important;
}
/* 分页动态 */
.active2 {
  background: #5093e1;
  color: white !important;
}
/* 排序动态 */
.activepx1 {
  border-bottom: solid 8px #1abc9c !important;
}
.activepx2 {
  border-top: solid 8px #1abc9c !important;
}
.jz_pd {
  cursor: not-allowed;
  color: #dddddd;
}
</style>