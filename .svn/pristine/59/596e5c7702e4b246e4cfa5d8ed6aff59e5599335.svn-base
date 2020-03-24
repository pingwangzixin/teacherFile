<template >
  <div>
    <div class="g_main jz_cwrap clearfix">
      <div class="jz_cleft fl">
        <h3>
          <span v-show="titleFlag=='editTeacher'">教师档案</span>
          <span v-show="titleFlag=='lookinfo'">查看详情</span>
          <span v-show="titleFlag=='teachersMessageEntering'">教师信息录入</span>
          <i
            class="iconfont iconiconfront- fr"
            v-show="!fileShow"
            @click="has=!has,fileShow=!fileShow"
          ></i>
          <i
            class="iconfont iconxiangshang fr"
            v-show="fileShow"
            @click="has=!has,fileShow=!fileShow"
          ></i>
        </h3>
        <div class="jz_cleftxia" v-show="has">
          <div v-for="(v,i) in navList" :key="i" >
             <div class="jz_div">
                 <p :class="{active:flag==v}">
                <span @click="navChange(v)">{{v}}</span>
               </p>
             </div>
             <div class="jz_div1"></div>
          </div>
        </div>
      </div>
      <div class="jz_cright fr"> 
            <router-view :tabChange="flag"></router-view>
      </div>
    </div>
     <!--底部-->
      <div class="g_footer" >
        <ul class="foot">
          <li>
            <span>主办：北京捷成世纪科技股份有限公司</span>
            <span>承办：北京捷成世纪科技股份有限公司</span>
            <span>技术支持：北京捷成世纪科技股份有限公司</span>
          </li>
          <li>Copyright©2013-2017jetsen.com.cn All Rights Reserved</li>
          <li>
            <img src="../../assets/img/footer_logo.png" alt />
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            has:true,
            flag:'个人档案',
            fileShow:false,
            titleFlag:null,//控制标题显示
            navList:['个人档案','第一学历','长病假记录','年度考核','课堂满意度','任课情况','听课情况','专业型称号'],
        }
    },
    mounted(){
      this.titleFlag=this.$route.query.judge
    },
    methods:{
      navChange(val){
        this.flag=val;
      }
    }

};
</script>
<style scoped>
.iconiconfront-{
    color: #666666;
    cursor: pointer;
}
.iconxiangshang{
   color: #666666;
    cursor: pointer;
}
/*  主体右边部分*/
.jz_cright {
  width: 870px;
  background: white;
  margin-bottom: 136px;
}
/*  主体左边部分*/
.jz_cleft {
  width: 320px;
  background: white;
  margin-left: -2px;
  border-radius: 5px;
}
.jz_cleft h3 {
  padding: 0px 20px ;
  height: 56px;
  line-height: 56px;
  box-sizing: border-box;
  border-bottom: solid 1px #dddddd;
  font-size: 18px;
  font-weight: bold;
}
.jz_cleftxia p {
  padding: 0px 20px;
  box-sizing: border-box;
  border-left: solid 2px transparent;
}
.jz_cleftxia>div:last-of-type .jz_div1{
   border-bottom:none;
} 
.jz_div {
  box-sizing: border-box;
  padding: 10px 0px;
  position: relative;
}

.jz_div1 {
  width: 90%;
  height: 1px;
  margin: auto;
  border-bottom: solid 1px #dddddd;
}

.active {
  border-left-color: #5093e1 !important;
  /* border-left: solid 2px #5093e1 !important; */
}
.jz_cleftxia p span {
  display: inline-block;
  width: 100%;
  padding: 6px 0;
  cursor: pointer;
}
.jz_wraptable {
  padding: 10px 20px 284px;
}
.jz_cwrap {
    margin-top: 10px;
}




</style>