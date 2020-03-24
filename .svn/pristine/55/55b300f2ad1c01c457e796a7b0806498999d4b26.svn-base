<template>
  <div>
    <transition name="slide-fade">
      <div class="jz_content" v-show="flag">
        <div class="jz_lunbo g_main">
          <h3>北京东城区</h3>
          <div class="jz_lunbo_wrap">
            <ul>
              <li :class="{'active':longbar==1}" @click="longbar=1">全部</li>
              <li :class="{'active':longbar==2}" @click="longbar=2">幼儿园</li>
              <li :class="{'active':longbar==3}" @click="longbar=3">小学</li>
              <li :class="{'active':longbar==4}" @click="longbar=4">初中</li>
              <li :class="{'active':longbar==5}" @click="longbar=5">高中</li>
              <li :class="{'active':longbar==6}" @click="longbar=6">特殊教育</li>
              <li :class="{'active':longbar==7}" @click="longbar=7">其他</li>
            </ul>
            <div class="jz_lunbo_content">
              <div class="jz_lunbo_content_left">
                <img src="../assets/img/1.png" alt class="border1" />
                <img src="../assets/img/2.png" alt class="gugan" />

               <!-- 进度条模块 -->
                <div class="jz_lunboleftmiddle">
                  <div class="jz_lunboleftcommon" v-for="(item,index) in dataShow" :key="index">
                    <p>{{item.title}}({{item.num}}人)</p>
                    <div class="jz_progress">
                      <div :style="`width:${item.num}%`"></div>
                    </div>
                  </div>
                  <div class="jz_paging">
                    <span v-on:click="tui" :class="{'active2':currentPage==0}">&lt;</span>
                    <span>{{currentPage+1}}/{{all}}</span>
                    <span v-on:click="qian" :class="{'active2':currentPage!=0}">&gt;</span>
                  </div>
                </div>

                <img src="../assets/img/border2.png" alt class="border2" />
              </div>
              <!-- 学段人数比例中间部分 -->
              <div class="jz_lunbo_content_middle">
                <img src="../assets/img/border3.png" alt class="border3" />
                <img src="../assets/img/border4.png" alt class="border4" />
                <div class="jz_middle_top">
                  <dl>
                    <dt>123</dt>
                    <dd>学校总数</dd>
                  </dl>
                  <dl>
                    <dt>1234</dt>
                    <dd>教师总数</dd>
                  </dl>
                  <dl>
                    <dt>1234</dt>
                    <dd>骨干教师总数</dd>
                  </dl>
                </div>
                <img src="../assets/img/shang.png" alt class="jz_shang" />
                <img src="../assets/img/3.png" alt class="xdrs" />

                <div class="jz_chart_one">
                  <div id="chart_1"></div>
                </div>

                <img src="../assets/img/border3.png" alt class="border3_1" />
                <img src="../assets/img/border4.png" alt class="border4_1" />
              </div>
              <!-- 中间右部部分 -->
              <div class="jz_lunbo_content_right">
                <img src="../assets/img/border3.png" alt class="juli_1" />
                <img src="../assets/img/border3.png" alt class="juli_2" />
                <img src="../assets/img/border3.png" alt class="juli_3" />
                <div class="jz_nrcontent">
                  <img src="../assets/img/4.png" alt />
                  <div class="jz_circle">
                    <div id="chart_2"></div>
                    <!-- <Xchart :id="id2" :option="optiontwo"></Xchart> -->
                  </div>
                </div>
                <div class="jz_nrcontent">
                  <img src="../assets/img/5.png" alt />
                  <div class="jz_circle">
                      <div id="chart_3"></div>
                    <!-- <Xchart :id="id3" :option="optionthree"></Xchart> -->
                  </div>
                </div>
                <div class="jz_nrcontent">
                  <img src="../assets/img/6.png" alt />
                  <div class="jz_circle">
                    <div id="chart_4"></div>
                    <!-- <Xchart :id="id4" :option="optionfour"></Xchart> -->
                  </div>
                </div>
                <img src="../assets/img/border3.png" alt class="juli_4" />
                <img src="../assets/img/border3.png" alt class="juli_5" />
                <img src="../assets/img/border3.png" alt class="juli_6" />
              </div>
              <i class="iconfont iconzuo jz_left" @click="backs"></i>
              <i class="iconfont iconiconfontroundright jz_right" @click="gos"></i>
            </div>
          </div>

          <div class="jz_lunbobottom g_main">
            <div class="jz_shouiqi" @click="hiddens">
              <div class="icon_k">
                <i class="iconfont iconxiangshangjiantou"></i>
                <i class="iconfont iconxiangshang"></i>
                点击收起教师大数据
              </div>
            </div>
          </div>
          <!-- </div> -->
        </div>
      </div>
    </transition>
    <div class="jz_lunbobottom zhankai_1" v-show="!flag">
      <div class="jz_shouiqi_1 g_main" @click="open">
        <div class="icon_k2">
          <i class="iconfont iconiconfront-"></i>
          <i class="iconfont iconxiangxia"></i>

          点击展开教师大数据
        </div>
      </div>
    </div>

    <!-- 考评中心 -->
    <div class="g_main">
      <div class="jz_exam_center">
        <h3>考评中心</h3>
        <span class="tiao"></span>
        <div class="jz_exam_wrap">
          <div class="jz_exam_canping">
            <p class="canping">骨干教师参评</p>
            <div class="jz_new_xiu">
              <div class="clearfix">
                <div class="jz_newteaching">
                  <span>教学新秀</span>
                  <span>
                    参评人数
                    <b>27</b>
                  </span>
                  <span>
                    通过人数
                    <b>27</b>
                  </span>
                </div>
                <div class="jz_show_time">
                  <span>公示周期:2019.07.17-2019.22.11</span>
                </div>
              </div>

              <div class="jz_crumbs clearfix">
                <span class="s1 qinglv">
                  <i class="iconfont iconchenggong"></i>
                  提交资料
                </span>
                <span class="s2 qinglv">
                  <i class="iconfont iconchenggong"></i>
                  审核
                </span>
                <span class="qred qianred">
                  <i class="iconfont iconjinhangzhong"></i>
                  结果公示
                </span>
                <a href="#" class="a1" @click.prevent>查看详情</a>
              </div>
            </div>
            <div class="jz_new_xiu">
              <div class="clearfix">
                <div class="jz_newteaching">
                  <span>教学新秀</span>
                  <span>
                    参评人数
                    <b>27</b>
                  </span>
                  <span>
                    通过人数
                    <b>27</b>
                  </span>
                </div>
                <div class="jz_show_time">
                  <span>公示周期:2019.07.17-2019.22.11</span>
                </div>
              </div>
              <div class="jz_crumbs clearfix">
                <span class="s1 qinglv">
                  <i class="iconfont iconchenggong"></i>
                  提交资料
                </span>
                <span class="s2 qinglv">
                  <i class="iconfont iconchenggong"></i>
                  审核
                </span>
                <span class="hui somehui">
                  <i class="iconfont iconjinzhi"></i>
                  结果公示
                </span>
                <a href="#" class="a1" @click.prevent>查看详情</a>
              </div>
            </div>
            <div class="jz_new_xiu">
              <div class="clearfix">
                <div class="jz_newteaching">
                  <span>教学新秀</span>
                  <span>
                    参评人数
                    <b>27</b>
                  </span>
                </div>
                <div class="jz_show_time">
                  <span>公示周期:2019.07.17-2019.22.11</span>
                </div>
              </div>
              <div class="jz_crumbs clearfix">
                <span class="s1 qinglv">
                  <i class="iconfont iconchenggong"></i>
                  提交资料
                </span>
                <span class="hui somehui">
                  <i class="iconfont iconjinzhi"></i>
                  审核
                </span>
                <span class="hui somehui">
                  <i class="iconfont iconjinzhi"></i>
                  结果公示
                </span>
                <a href="#" class="a1" @click.prevent>查看详情</a>
              </div>
            </div>
          </div>
          <div class="exam_kaohe">
            <div class="jz_exam_canping">
              <p class="canping">骨干教师考核</p>
              <div class="jz_new_xiu">
                <div class="clearfix">
                  <div class="jz_newteaching">
                    <span>2019年度</span>
                    <span>
                      应提交人数
                      <b>666</b>
                    </span>
                    <span>
                      上报人数
                      <b>666</b>
                    </span>
                    <span>
                      已抽查人数
                      <b>0</b>
                    </span>
                  </div>
                  <div class="jz_show_time">
                    <span>公示周期:2019.07.17-2019.22.11</span>
                  </div>
                </div>
                <div class="jz_crumbs clearfix">
                  <span class="s1 qinglv">
                    <i class="iconfont iconchenggong"></i>
                    提交资料
                  </span>
                  <span class="qred qianred">
                    <i class="iconfont iconjinhangzhong"></i>
                    审核
                  </span>
                  <span class="hui somehui">
                    <i class="iconfont iconjinzhi"></i>
                    结果公示
                  </span>
                  <a href="#" class="a1" @click.prevent>查看详情</a>
                </div>
              </div>
              <div class="jz_new_xiu">
                <div class="clearfix">
                  <div class="jz_newteaching">
                    <span>2019年度</span>
                    <span>
                      应提交人数
                      <b>666</b>
                    </span>
                    <span>
                      上报人数
                      <b>666</b>
                    </span>
                  </div>
                  <div class="jz_show_time">
                    <span>公示周期:2019.07.17-2019.22.11</span>
                  </div>
                </div>
                <div class="jz_crumbs clearfix">
                  <span class="s1 qinglv">
                    <i class="iconfont iconchenggong"></i>
                    提交资料
                  </span>
                  <span class="hui somehui">
                    <i class="iconfont iconjinzhi"></i>
                    审核
                  </span>
                  <span class="hui somehui">
                    <i class="iconfont iconjinzhi"></i>
                    结果公示
                  </span>
                  <a href="#" class="a1" @click.prevent>查看详情</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 下方查询部分 -->
    <div class="foot">
      <div class="g_main">
        <h3>快捷入口</h3>
        <span class="tiao"></span>
        <div class="jz_foot">
          <figure @click="teachersQuery">
            <img src="../assets/img/jiaoshichaxun.png" />
            <figcaption>教师查询</figcaption>
          </figure>
          <figure  @click="filteContrast">
            <img src="../assets/img/shaixuanduibi.png" />
            <figcaption>筛选对比</figcaption>
          </figure>
          <figure @click="teachersManage">
            <img src="../assets/img/jiaoshiguanli.png" />
            <figcaption>教师管理</figcaption>
          </figure>
          <figure @click="dataCount">
            <img src="../assets/img/shujutongji.png" />
            <figcaption>数据统计</figcaption>
          </figure>
          <figure @click="userCenter">
            <img src="../assets/img/yonghuzhongxin.png" />
            <figcaption>用户中心</figcaption>
          </figure>
          <figure @click="electronBook">
            <img src="../assets/img/zhengshu.png" />
            <figcaption>电子证书</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import main from "../assets/js/main.js";
export default {
  ...main
};

</script>
<style scoped>
.icon_k,
.icon_k2 {
  position: relative;
}
.iconxiangshang {
  position: absolute;
  top: 0px;
  left: 0px;
}
.iconxiangshangjiantou {
  position: relative;
  top: 5px;
  left: 0px;
  color: #a8c5e2;
}
.iconiconfront- {
  position: absolute;
  top: -2px;
  color: #a8c5e2;
}
.iconxiangxia {
  position: relative;
  top: 4px;
  left: 0px;
}
.slide-fade-enter-active {
  transition: all 0.3s linear;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}

.icondrop-down {
  font-size: 24px;
  margin: 0px -10px;
}
#chart_1,
#chart_2,
#chart_3,
#chart_4 {
  width: 100%;
  height: 100%;
}

.active {
  color: #00f5ff;
  border-bottom: solid 2px #00f5ff;
}
.jz_content {
  width: 100%;
  height: 870px;
  position: relative;
  overflow: hidden;
  background: url("../assets/img/picbg.png") center no-repeat;
}

.jz_lunbo > h3 {
  text-align: center;
  font-size: 26px;
  color: white;
  font-weight: white;
  padding: 74px 0px 28px;
}

/* 下方查询部分 */
.foot {
  box-sizing: border-box;
  background: #fff;
  padding: 40px 0px 116px;
}
.jz_foot {
  width: 1030px;
  margin: 0 auto;
  padding: 14px 0px 0px;
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.jz_foot figure {
  cursor: pointer;
}
.jz_foot figure figcaption {
  margin-top: 8px;
}
.foot h3 {
  text-align: center;
  font-size: 22px;
  font-weight: bold;
}

.jz_content .jz_lunbo_wrap {
  width: 1030px;
  margin: 0 auto 50px;
}
/* 选项卡部分 */
.jz_content .jz_lunbo .jz_lunbo_wrap > ul {
  display: flex;
  justify-content: space-around;
  border-bottom: solid 1px #28a9ce;
  background: #0a5b9c;
  border-radius: 20px;
  color: white;
}
.jz_content .jz_lunbo_wrap > ul li {
  padding: 14px 12px;
  cursor: pointer;
}

.jz_lunbo h3 {
  text-align: center;
}
/* 导航栏中间部分 */
.jz_lunbo_content_left,
.jz_lunbo_content_middle,
.jz_lunbo_content_right {
  position: relative;
  width: 336px;
  height: 530px;
}

.juli_1,
.juli_2,
.juli_3,
.juli_4,
.juli_5,
.juli_6 {
  position: absolute;
}
.juli_1 {
  top: 30px;
  left: 0px;
}
.juli_4 {
  top: 30px;
  right: 0px;
}
.juli_2 {
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
}
.juli_5 {
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
}
.juli_3 {
  left: 0px;
  bottom: 30px;
}
.juli_6 {
  right: 0px;
  bottom: 30px;
}
.border3 {
  position: absolute;
  left: 0px;
  top: 20px;
}
.border3_1 {
  position: absolute;
  right: 0px;
  top: 20px;
}
.border4 {
  position: absolute;
  left: 0px;
  top: 110px;
}
.border4_1 {
  position: absolute;
  right: 0px;
  top: 110px;
}

/* 左右按钮 */
.jz_lunbo_content {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.jz_left,
.jz_right {
  position: absolute;
  z-index: 1000;
  color: white;
  cursor: pointer;
}
.jz_left {
  top: 50%;
  left: -34px;
  font-size: 38px;
  transform: translate(-50%);
}
.jz_right {
  top: 50%;
  right: -68px;
  font-size: 38px;
  transform: translate(-50%);
}
/* 骨干教师 */
.jz_lunbo_content_left {
  font-size: 14px;
  color: white;
  position: relative;
  padding-top: 20px;
  background: rgba(0, 0, 0, 0.1);
}
.jz_lunbo_content_left .gugan {
  width: 271px;
  display: block;
  margin: 0 auto;
}
/* 学段人数比例中间部分  */
.jz_lunbo_content_middle {
  background: rgba(0, 0, 0, 0.1);
  padding-top: 20px;
}
.jz_middle_top {
  display: flex;
  justify-content: center;
  padding: 26px 0px 32px;
  box-shadow: 0px 6px 10px 2px #0a6bac;
}
.jz_middle_top dl {
  text-align: center;
  padding: 0px 17px;
}
.jz_middle_top dl:nth-of-type(1) {
  border-right: solid 1px #108dbe;
}
.jz_middle_top dl:nth-of-type(2) {
  border-right: solid 1px #108cbc;
  border-left: solid 1px #08426f;
}
.jz_middle_top dl:nth-of-type(3) {
  border-left: solid 1px #08426f;
}

.jz_middle_top dl dt {
  color: #dddf25;
  font-size: 22px;
  margin-bottom: 2px;
}
.jz_middle_top dl dd {
  font-size: 14px;
  color: #43adff;
}

.jz_lunbo_content_middle .xdrs {
  position: absolute;
  left: 50%;
  top: 143px;
  transform: translateX(-50%);
}
.jz_lunbo_content_middle .jz_shang {
  position: absolute;
  top: 5px;
  left: 0px;
}
.jz_lunbo_content_middle .zong {
  margin-top: 96px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.jz_chart_one {
  width: 320px;
  height: 310px;
  /* border: solid 1px; */
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
}

.border1 {
  position: absolute;
  left: -3px;
}
.border2 {
  position: absolute;
  top: 20px;
  right: 1px;
}
.jz_nrcontent > img {
  display: block;
  margin: auto;
}
.jz_nrcontent:nth-of-type(1) {
  padding: 20px 0px 10px;
}
.jz_nrcontent {
  background: rgba(0, 0, 0, 0.1);
  padding: 10px 0px;
  height: 176px;
  box-sizing: border-box;
}
.jz_nrcontent:nth-of-type(2) {
  margin: 11px 0px;
}

/* 导航栏右边部分 */
.jz_circle{
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  width: 326px;
  height: 120px;
  margin-top: 6px;
}

/* .jz_lunbo_content_right{
  background: rgba(0,0,0,0.1)
} */

/* 导航栏底部收起 */
.jz_lunbobottom {
  color: white;
}
.zhankai_1 {
  background: #256db7;
}
.jz_shouiqi {
  position: absolute;
  left: 50%;
  bottom: -34px;
  transform: translateX(-50%);
  cursor: pointer;
}
.jz_shouiqi_1 {
  text-align: center;
  padding: 10px 0px;
  cursor: pointer;
}
.jz_shouiqi img {
  vertical-align: middle;
}
.jz_bg1 {
  width: 100%;
  display: block;
}
/* 考试中心 */
.jz_exam_center {
  background: #edeff5;
  box-sizing: border-box;
  padding: 32px 0px 74px;
}
.jz_exam_center > h3 {
  text-align: center;
  font-size: 22px;
}
.jz_exam_wrap {
  width: 1030px;
  margin: 0 auto;
  /* background: white; */
}
.tiao {
  width: 48px;
  height: 4px;
  display: block;
  margin: 12px auto 26px;
  background: #5093e1;
}
/*  */
.jz_exam_canping {
  background: white;
}
.jz_exam_canping .canping {
  padding: 16px;
  border-bottom: solid 1px #dddddd;
  font-size: 18px;
  font-weight: bold;
}
.jz_exam_canping .jz_new_xiu:nth-of-type(2) {
  border-top: solid 1px #dddddd;
  border-bottom: solid 1px #dddddd;
}
.jz_exam_canping .jz_new_xiu {
  padding-bottom: 24px;
}
.jz_newteaching {
  box-sizing: border-box;
  padding: 16px 16px 16px 24px;
  float: left;
}
/* .jz_newteaching li {
  float: left;
  margin-right: 32px;
} */
.newxiu {
  padding: 16px 16px 16px 24px;
  box-sizing: border-box;
}
/* .jz_newteaching li:nth-of-type(1) {
  font-size: 18px;
} */
.jz_show_time {
  float: right;
  padding: 16px;
}
/*  */

/*  */
.jz_crumbs {
  /* margin-top: 16px; */
  box-sizing: border-box;
  padding: 0px 14px 0px 22px;
}
/* .jz_crumbs img {
  vertical-align: middle !important;
} */
.jz_crumbs span {
  float: left;
  width: 240px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  position: relative;
  margin-right: 16.5px;
}
.a1 {
  float: right;
  width: 84px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: white;
  background: #5093e1;
}
.s1::after {
  content: "";
  border-top: solid 15px transparent;
  border-bottom: solid 15px transparent;
  border-left: solid 15px #1abc9c;
  position: absolute;
  top: 0px;
  right: -15px;
}

.hui::before {
  content: "";
  border-top: solid 15px #dddddd;
  border-bottom: solid 15px #dddddd;
  border-left: solid 15px transparent;
  position: absolute;
  top: 0px;
  left: -15px;
}
.qred::before {
  content: "";
  border-top: solid 15px #fe756a;
  border-bottom: solid 15px #fe756a;
  border-left: solid 15px transparent;
  position: absolute;
  top: 0px;
  left: -15px;
}
.qred::after {
  content: "";
  border-top: solid 15px transparent;
  border-bottom: solid 15px transparent;
  border-left: solid 15px #fe756a;
  position: absolute;
  top: 0px;
  right: -15px;
}
.hui::after {
  content: "";
  border-top: solid 15px transparent;
  border-bottom: solid 15px transparent;
  border-left: solid 15px #dddddd;
  position: absolute;
  top: 0px;
  right: -15px;
}

.s2::before {
  content: "";
  border-top: solid 15px #1abc9c;
  border-bottom: solid 15px #1abc9c;
  border-left: solid 15px transparent;
  position: absolute;
  top: 0px;
  left: -15px;
}
.s2::after {
  content: "";
  border-top: solid 15px transparent;
  border-bottom: solid 15px transparent;
  border-left: solid 15px #1abc9c;
  position: absolute;
  top: 0px;
  right: -15px;
}
.s3::before {
  content: "";
  border-top: solid 15px #fe756a;
  border-bottom: solid 15px #fe756a;
  border-left: solid 15px transparent;
  position: absolute;
  top: 0px;
  left: -15px;
}
.s3::after {
  content: "";
  border-top: solid 15px transparent;
  border-bottom: solid 15px transparent;
  border-left: solid 15px #fe756a;
  position: absolute;
  top: 0px;
  right: -15px;
}

.lv {
  background: #1abc9c !important;
}
.somered {
  background: #fe756a !important;
}
.somehui {
  background: #dddddd !important;
}

.jz_show_time span {
  color: #666666;
}
.exam_kaohe {
  margin-top: 10px;
}
.jz_newteaching span {
  margin-right: 20px;
  font-size: 14px;
}
.jz_newteaching span b {
  color: #fba948;
  font-size: 18px;
  font-weight: 600;
}
.jz_newteaching span:nth-of-type(1) {
  font-size: 18px;
}

.qinglv {
  background: #1abc9c !important;
}
.qianred {
  background: #fe756a !important;
}
/* 进度条模块 */

.jz_lunboleftmiddle .jz_lunboleftcommon > p {
  width: 290px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.jz_lunboleftmiddle .jz_lunboleftcommon:nth-of-type(1) {
  padding-top: 24px !important;
}

.jz_paging {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 16px;
}
.jz_paging span:nth-of-type(2) {
  padding: 0px 16px;
}
.jz_progress {
  width: 290px;
  height: 22px;
  border-radius: 20px;
  background: #316fa7;
  margin: 16px 0px 30px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.jz_progress > div {
  width: 20%;
  height: 100%;
  border-radius: 20px;
  background: #43adff;
  margin-left: -1px;
}

.jz_paging span:nth-of-type(3):hover,
.jz_paging span:nth-of-type(1):hover {
  color: #22a8e5;
}
.jz_paging span:nth-of-type(1),
.jz_paging span:nth-of-type(3) {
  cursor: pointer;
}
.active2 {
  color: #22a8e5;
}
</style>