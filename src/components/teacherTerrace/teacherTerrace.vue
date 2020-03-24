<template>
<div>
  <div class="jz_twrap g_main clearfix">
    <div class="jz_left  fl">
      <div class="jz_teainfo jz_default">
        <dl>
          <dt class="jz_toux">
            <img src="../../assets/img/toux.png" alt />
          </dt>
          <dd class="jz_bold">
            张某某
            <i class="iconfont iconnan"></i>
          </dd>
          <dd class="jz_pingjia">区教学能手</dd>
          <dd class="jz_city">东城区教师发展中心</dd>
        </dl>
         <div class="jz_kecheng">
           <div>
               <p>5</p>
               <p>公开课（节）</p>
           </div>
           <div>
               <p>5</p>
               <p>论文（篇）</p>
           </div>
           <div>
               <p>5</p>
               <p>任课情况</p>
           </div>
         </div>
        <span class="jz_find" @click="teaBase()">信息管理</span>
      </div>
      <!-- 筛选对比 -->
      <div class="jz_shai jz_default">
        <router-link to="/index/teachersQuery" tag="span">教师查询</router-link>
          <b class="jz_xian"></b>
        <router-link to="/index/filteContrast" tag="span">筛选对比</router-link>
      </div>
      <!-- 发展记录 -->
       <div class="jz_teacherleft_bottom jz_default">
                  <h4>发展记录</h4>
                  <div class="jz_teacherleft_bottomcontent clearfix">
                        <div class="fl">
                            <img src="../../assets/img/xunzhang.png" alt="">
                        </div>
                        <div class="fl jz_rg">
                            <p>北京市市级"教学能手荣誉称号"</p>
                            <span>2019.07.14</span>
                            <span>中国</span>
                            <span>北京市</span>
                        </div>
                  </div>
                  <div class="jz_teacherleft_bottomcontent clearfix">
                        <div class="fl">
                            <img src="../../assets/img/xunzhang.png" alt="">
                        </div>
                        <div class="fl jz_rg">
                            <p>北京市市级"教学能手荣誉称号"</p>
                            <span>2019.07.14</span>
                            <span>中国</span>
                            <span>北京市</span>
                        </div>
                  </div>
                  <div class="jz_teacherleft_bottomcontent clearfix">
                        <div class="fl">
                            <img src="../../assets/img/xunzhang.png" alt="">
                        </div>
                        <div class="fl jz_rg">
                            <p>北京市市级"教学能手荣誉称号"</p>
                            <span>2019.07.14</span>
                            <span>中国</span>
                            <span>北京市</span>
                        </div>
                  </div>
              </div>
    </div>

    <div class="jz_right  fr">
         <!-- 评审任务 -->
         <div class="jz_ping jz_default">
            <h4>评审任务</h4>
            <div class="jz_shen">
              <div class="jz_ren">
                  <dl>
                    <dt>东城区第一批教学新秀参评评审</dt>
                    <dd>发布日期:2019年08月10日</dd>
                  </dl>
                  <span class="jz_wu">评审</span>
              </div>
              <div class="jz_ren">
                  <dl>
                    <dt>东城区第一批教学新秀参评评审</dt>
                    <dd>发布日期:2019年08月10日</dd>
                  </dl>
                  <span class="jz_wu">评审</span>
              </div>
            </div>
         </div>
         <!-- 最新资讯 -->
         <div class="jz_zui jz_default">
           <div class="clearfix">
              <h4 class="fl">最新资讯</h4>
              <span class="fr">查看更多<i class="iconfont icongengduo"></i> </span>
           </div>
           <div class="jz_xin">
                   <p class="clearfix"><span class="fl">【骨干教师考核】关于"学科带头人、骨干教师"工作考核的通知</span><span class="fr">2019.07.15</span></p>
                   <p class="clearfix"><span class="fl">【骨干教师考核】关于"学科带头人、骨干教师"工作考核的通知</span><span class="fr">2019.07.15</span></p>
                   <p class="clearfix"><span class="fl">【骨干教师考核】关于"学科带头人、骨干教师"工作考核的通知</span><span class="fr">2019.07.15</span></p>
                   <p class="clearfix"><span class="fl">【骨干教师考核】关于"学科带头人、骨干教师"工作考核的通知</span><span class="fr">2019.07.15</span></p>
                   <p class="clearfix"><span class="fl">【骨干教师考核】关于"学科带头人、骨干教师"工作考核的通知</span><span class="fr">2019.07.15</span></p>
                   <p class="clearfix"><span class="fl">【骨干教师考核】关于"学科带头人、骨干教师"工作考核的通知</span><span class="fr">2019.07.15</span></p>
                   <p class="clearfix"><span class="fl">【骨干教师考核】关于"学科带头人、骨干教师"工作考核的通知</span><span class="fr">2019.07.15</span></p>
           </div>
         </div>
         <!--评审任务2-->
         <div  class="jz_zui jz_default">
               <div class="clearfix">
              <h4 class="fl">评审任务</h4>
              <span class="fr">查看更多<i class="iconfont icongengduo"></i> </span>
           </div>
           <div class="jz_shen">
              <div class="jz_ren">
                  <dl>
                    <dt>【季风老师】增加指导学生情况王心凌获得作文竞赛一等奖</dt>
                    <dd>发布日期:2019年08月10日</dd>
                  </dl>
                  <span class="jz_wu">评审</span>
              </div>
              <div class="jz_ren">
                  <dl>
                    <dt>【季风老师】增加指导学生情况王心凌获得作文竞赛一等奖</dt>
                    <dd>发布日期:2019年08月10日</dd>
                  </dl>
                  <span class="jz_wu">评审</span>
              </div>
            </div>
         </div>
         <!--  骨干教师参评-->
         <div class="jz_gu jz_default">
            <h4>骨干教师参评</h4>
            <div> 
                <div class="jz_nian">
                      <div class="jz_niantop clearfix">
                        <p class="fl jz_setnian"><span>2019年度</span><span>考核结果</span><span class="colorred">已发布</span></p>
                        <p class="fr">审核周期：2019.07.17-2019.08.19</p>
                      </div>
                     <div class="jz_nianxia clearfix">
                        <span class="wlv0  qinglv"> <i class="iconfont iconchenggong"></i>提交资料</span>
                        <span class="wlv  qinglv"><i class="iconfont iconchenggong"></i>审核</span>
                        <span class="wred  qianred"> <i class="iconfont iconjinhangzhong"></i>结果公示</span>
                        <a href="#" @click.prevent class="jz_find2 fr">查看详情</a>
                      </div> 
                </div>
                <div class="jz_nian">
                      <div class="jz_niantop clearfix">
                        <p class="fl jz_setnian"><span>2019年度</span><span>考核结果</span><span  class="colorlan">已发布</span></p>
                        <p class="fr">审核周期：2019.07.17-2019.08.19</p>
                      </div>
                     <div class="jz_nianxia clearfix">
                        <span class="wlv0  qinglv"><i class="iconfont iconchenggong"></i>提交资料</span>
                        <span class="whui  huise"> <i class="iconfont iconjinzhi"></i>审核</span>
                        <span class="wred  qianred"><i class="iconfont iconjinhangzhong"></i>结果公示</span>
                        <a href="#" @click.prevent class="jz_find2 fr">查看详情</a>
                      </div> 
                </div>
                <div class="jz_nian">
                      <div class="jz_niantop clearfix">
                        <p class="fl jz_setnian"><span>2019年度</span><span>考核结果</span><span  class="colorlv">已发布</span></p>
                        <p class="fr">审核周期：2019.07.17-2019.08.19</p>
                      </div>
                     <div class="jz_nianxia clearfix">
                        <span class="wlv0  qinglv">提交资料</span>
                        <span class="wlv  qinglv">审核</span>
                        <span class="wred  qianred">结果公示</span>
                        <a href="#" @click.prevent class="jz_find2 fr">查看详情</a>
                      </div> 
                </div>
                <div class="jz_nian">
                      <div class="jz_niantop clearfix">
                        <p class="fl jz_setnian"><span>2019年度</span><span>考核结果</span><span>已发布</span></p>
                        <p class="fr">审核周期：2019.07.17-2019.08.19</p>
                      </div>
                     <div class="jz_nianxia clearfix">
                        <span class="wlv0  qinglv">提交资料</span>
                        <span class="wlv  qinglv">审核</span>
                        <span class="wred  qianred">结果公示</span>
                        <a href="#" @click.prevent class="jz_find2 fr">查看详情</a>
                      </div> 
                </div>
            </div>
         </div>
         <!-- 骨干2 -->
         <div class="jz_gu jz_default">
            <h4>骨干教师参评</h4>
            <div> 
                <div class="jz_nian">
                      <div class="jz_niantop clearfix">
                        <p class="fl jz_setnian"><span>2019年度</span><span>考核结果</span><span>已发布</span></p>
                        <p class="fr">审核周期：2019.07.17-2019.08.19</p>
                      </div>
                     <div class="jz_nianxia clearfix">
                        <span class="wlv0  qinglv">提交资料</span>
                        <span class="wlv  qinglv">审核</span>
                        <span class="wred  qianred">结果公示</span>
                        <a href="#" @click.prevent class="jz_find2 fr">查看详情</a>
                      </div> 
                </div>
                <div class="jz_nian">
                      <div class="jz_niantop clearfix">
                        <p class="fl jz_setnian"><span>2019年度</span><span>考核结果</span><span>已发布</span></p>
                        <p class="fr">审核周期：2019.07.17-2019.08.19</p>
                      </div>
                     <div class="jz_nianxia clearfix">
                        <span class="wlv0  qinglv">提交资料</span>
                        <span class="wlv  qinglv">审核</span>
                        <span class="wred  qianred">结果公示</span>
                        <a href="#" @click.prevent class="jz_find2 fr">查看详情</a>
                      </div> 
                </div>
                <div class="jz_nian">
                      <div class="jz_niantop clearfix">
                        <p class="fl jz_setnian"><span>2019年度</span><span>考核结果</span><span>已发布</span></p>
                        <p class="fr">审核周期：2019.07.17-2019.08.19</p>
                      </div>
                     <div class="jz_nianxia clearfix">
                        <span class="wlv0  qinglv">提交资料</span>
                        <span class="wlv  qinglv">审核</span>
                        <span class="wred  qianred">结果公示</span>
                        <a href="#" @click.prevent class="jz_find2 fr">查看详情</a>
                      </div> 
                </div>
                <div class="jz_nian">
                      <div class="jz_niantop clearfix">
                        <p class="fl jz_setnian"><span>2019年度</span><span>考核结果</span><span>已发布</span></p>
                        <p class="fr">审核周期：2019.07.17-2019.08.19</p>
                      </div>
                     <div class="jz_nianxia clearfix">
                        <span class="wred  qianred">提交资料</span>
                        <span class="whui  huise">审核</span>
                        <span class="whui  huise">结果公示</span>
                        <a href="#" @click.prevent class="jz_find2 fr">查看详情</a>
                      </div> 
                </div>
            </div>
         </div>
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
  data() {
    return {
      idCard:'',
    };
  },
  mounted() {
    if(sessionStorage.info){
      this.idCard=JSON.parse(sessionStorage.info).idCard
    }
  },
  methods: {
    teaBase(){
      this.$router.push({path:'/index/teacherBase',query:{idCard:this.idCard}})
    }
  }
};
</script>
<style scoped >
.jz_twrap {
  margin-top: 10px;
  margin-bottom: 130px;
  position: relative;
}
.iconnan{
    color: #2a82ee;
}
.jz_default {
  background: white;
  box-shadow: 0px 0px 2px 2px #dddddd;
   border-radius: 5px;
}
.jz_left {
  width: 354px;
}
.jz_right {
  width: 836px;
}
.jz_teainfo dl{
    text-align: center;
  border-bottom: solid 1px #dddddd;

}
.jz_teainfo{
    padding: 12px 6px 26px;
}
.jz_bold {
  font-size: 18px !important;
  font-weight: 600;
  padding: 12px 0px 6px 0px;
}
.jz_pingjia {
  color: white;
  background: #fea518;
  border-radius: 10px;
  display: inline-block;
  width: 80px;
}
.jz_city {
  color: #747474;
  margin: 10px 0px 36px 0px;
}

.jz_toux img{
   width: 94px;
   height: 100px;
}
.jz_kecheng{
  display: flex;
  justify-content: space-between;
  text-align: center;
  box-sizing: border-box;
  padding: 20px 20px 36px;
}
.jz_kecheng>div>p{
  line-height: 1.4;
  font-size: 15px;
}
.jz_find{
  display: inline-block;
  background: #1dba8c;
  color: white;
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 5px;
  cursor: pointer;
}
.jz_shai{
  margin: 4px 0px 6px;
  padding: 6px 0px ;
  box-sizing: border-box;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.jz_shai>span{
  cursor: pointer;
  color: #1dba8c;
}
.jz_xian{
  border: solid 1px #dddddd;
  height: 100%;
}
/* 发展 记录*/
 .jz_teacherleft_bottom{
          background: white;
          box-sizing: border-box;
          padding-bottom: 28px;
    }
     .jz_teacherleft_bottom h4{
        padding: 18px 20px ;
        color: #6ea2e5;
        font-size: 16px;
        border-bottom: solid 1px #dddddd;
    }
     .jz_teacherleft_bottomcontent{
        box-sizing: border-box;
        padding: 24px 20px 0px;
    }
     .jz_rg{
        margin-left: 14px;
        line-height: 1.8;
    }
    .jz_rg  span:nth-of-type(2){
        margin:0px 8px 0px 12px ;
       
    }
    .jz_rg span{
         color: #a8a7a7;
    }
    /*评审任务  */
.jz_ping{
 
}    
.jz_ping h4{
  padding: 20px 0px 14px 20px;
  border-bottom: solid 1px #dddddd;
  font-size: 16px;
  color: #6ea2e5;
}
.jz_shen,.jz_xin{
  padding: 0px 20px;
}
.jz_ren{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 18px 0px;
  border-bottom: solid 1px #dddddd;
}
.jz_shen .jz_ren:last-of-type{
  border-bottom: none;
}
.jz_ren dd{
  color: #807f7f;
  margin-top: 14px;
}
.jz_wu{
  padding: 6px 18px;
  color: white;
  background: #5093e1;
  border-radius: 2px;
  cursor: pointer;
}
/* 最新资讯 */
.jz_zui,.jz_gu{
  margin-top: 10px;
}
.jz_zui>div{
    padding: 20px 20px 14px 20px;
  border-bottom: solid 1px #dddddd;
  
}
.jz_zui>div h4{
font-size: 16px;
  color: #6ea2e5;
}
.jz_zui>div>span{
  font-size: 14px;
  cursor: pointer;
}
.jz_xin p{
  line-height: 2.6;
}
/*  */

.jz_gu>h4{
     padding: 20px 20px 14px 20px;
  border-bottom: solid 1px #dddddd;
  font-size: 16px;
  color: #6ea2e5;
}
.jz_nian{
  padding: 18px 20px 0;
  border-bottom: solid 1px #dddddd;

}
.jz_setnian span:nth-of-type(1){
   font-size: 16px;
   margin-right: 14px;
}
.jz_setnian span:nth-of-type(2){
   margin-right: 10px;
   color: #666666;
}
.jz_setnian span:nth-of-type(3){
 
}
.colorlv{
  color: #1abc9c;
  font-size: 15px;
}
.colorred{
  color: #f65177;
   font-size: 15px;
}
.colorlan{
  color:#5093e1;
  font-size: 15px;
}
.jz_nianxia{
  padding: 18px 0px 20px 0px;
  color: white;
}
.jz_nianxia i{
  margin-right: 2px;
}
.jz_nianxia span{
  float: left;
  width: 200px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  position: relative;
   margin-right: 16.5px;
}
.qinglv {
  background: #1abc9c !important;
}
.qianred {
  background: #fe756a !important;
}
.huise {
  background: #dddddd !important;
}
.wlv0::after {
  content: "";
  border-top: solid 15px transparent;
  border-bottom: solid 15px transparent;
  border-left: solid 15px #1abc9c;
  position: absolute;
  top: 0px;
  right: -15px;
}
.wlv::before {
  content: "";
  border-top: solid 15px #1abc9c;
  border-bottom: solid 15px #1abc9c;
  border-left: solid 15px transparent;
  position: absolute;
  top: 0px;
  left: -15px;
}
.wlv::after {
  content: "";
  border-top: solid 15px transparent;
  border-bottom: solid 15px transparent;
  border-left: solid 15px #1abc9c;
  position: absolute;
  top: 0px;
  right: -15px;
}
.wred::before {
  content: "";
  border-top: solid 15px #fe756a;
  border-bottom: solid 15px #fe756a;
  border-left: solid 15px transparent;
  position: absolute;
  top: 0px;
  left: -15px;
}
.wred::after {
  content: "";
  border-top: solid 15px transparent;
  border-bottom: solid 15px transparent;
  border-left: solid 15px #fe756a;
  position: absolute;
  top: 0px;
  right: -15px;
}
.whui::before {
  content: "";
  border-top: solid 15px #dddddd;
  border-bottom: solid 15px #dddddd;
  border-left: solid 15px transparent;
  position: absolute;
  top: 0px;
  left: -15px;
}
.whui::after {
  content: "";
  border-top: solid 15px transparent;
  border-bottom: solid 15px transparent;
  border-left: solid 15px #dddddd;
  position: absolute;
  top: 0px;
  right: -15px;
}
.jz_find2{
   float: right;
  width: 84px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: white;
  background: #5093e1;
}
.jz_nianxia span:nth-of-type(1)::before{
  display: none;
}

</style>
