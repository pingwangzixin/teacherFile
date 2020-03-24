<template>
  <div class="jz_all" >
      <div class="jz_logo">
          <img src="../assets/img/loginlogo.png" alt="">
      </div>
      <div class="jz_login clearfix">
          <div class="fl jz_login_pic">
              <img src="../assets/img/computer.png" alt="">
          </div>
          <div class="fl jz_sure_login">
              <div class="jz_login_word">
                  <span :class="{active:navIndex==i}" @click="navChange(i)"  v-for="(v,i) in navData" :key="i">{{v}}</span>
              </div>
              <div class="jz_enter">
                  <p> 
                      <span>用户名:</span>
                      <input type="text" placeholder="请输入用户名" v-model="user" >
                 </p>
                  <p> 
                      <span>密码:</span>
                      <input type="text" placeholder="请输入密码" v-model="password" >
                 </p>
                 <p class="jz_denglu" @click="login">登录</p>
                 <span class="fr jz_forget_password">忘记密码</span>

              </div>
          </div>
      </div>
      <ul class="jz_foot">
          <li>Copyright©2013-2019北京捷成世纪科技股份有限公司&nbsp;&nbsp;保留所有权利</li>
          <li>京ICP证 05020513号 - 京公网安备 11010802011761 - Designed by Jetsen</li>
          <li>技术支持：北京捷成世纪科技股份有限公司 <img src="../assets/img/company_logo.png" alt=""></li>
          <li>联系我们:010-61736000</li>
          <li>
              <img src="../assets/img/loginjubao.png" alt="">
              <img src="../assets/img/loginfuwu.png" alt="">
          </li>
      </ul>
        <!--  -->
         <div class="g_prompt prompt">
		    <!--
		        prompt_box public_box : 公共类名 禁止删除
		        j_ : js专用类名前缀，勿占用
		    -->
		    <!--等待遮罩-->
		    <div class="prompt_box public_box waiting_box" v-show="promptData.loadingBox.load">	
		        <div class="hide"></div>
		        <div class="con">
		            <div class="main_cont">
		                <!-- <img src="../assets/img/loading.gif"/> -->
		                <p>数据加载中...</p>
		            </div>
		        </div>
		    </div>
		    
		    
		    <!--确认删除框-->
		    <div class="prompt_box public_box confirm_box j_confirm_box" v-show="promptData.confirmBox.open">	
		        <div class="hide"></div>
		        <div class="con">
		            <div class="tit">
		                <span>提示</span>
		            </div>
		            <div class="main_cont">
		                <!-- <i class="iconfont iconjinggao warning"></i> -->
		                <i class="iconfont iconjinggao1 warning"></i>
		                <!--<p>{{promptData.confirmBox.tipWord}}</p>-->
		                <p v-html="promptData.confirmBox.tipWord"></p>
		            </div>
		            <div class="btn_group">
		                <button class="sure">确认</button>
		                <button class="cancel">取消</button>
		            </div>
		        </div>
		    </div>
		    
		    <!--定时提示框-->
		    <div class="prompt_box public_box timing_box" v-show="promptData.timingBox.open">	
		        <div class="hide"></div>
		        <div class="con">
		            <div class="main_cont">
		                <i class="iconfont iconduihao2 success" v-show="promptData.timingBox.type == 'success'"></i>
		                <i class="iconfont iconjinggao1 warning" v-show="promptData.timingBox.type == 'warning'"></i>
		                <i class="iconfont iconcuowu fail" v-show="promptData.timingBox.type == 'fail'"></i>
		                <p>{{promptData.timingBox.tipWord}}</p>
		            </div>
		        </div>
		    </div>
		    
		    <!--进度提示框-->
		    <div class="prompt_box public_box speed_progress_box" v-show="promptData.speedProgressBox.open">	
		        <div class="hide"></div>
		        <div class="con">
		            <div class="speed">
		               <p ref="percent"></p>
		            </div>
		            <p>{{promptData.speedProgressBox.percent}}%</p>
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
      user: "100001",
      password: "14e1b600b1fd579f47433b88e8d85291",
      navData:['教师登录','管理登录'],
      navIndex:'0',
       //弹框类数据
      promptData: {
        //定时提示框
        timingBox: {
          open: false,
          type: "",
          tipWord: ""
        },
        //确认框
        confirmBox: {
          open: false,
          tipWord: "",
          callBack: null
        },
        //等待加载框
        loadingBox: {
          load: false,
          tipWord: ""
        },
        //进度提示框
        speedProgressBox: {
          open: false,
          percent: 0
        }
      },
    };
  },
  mounted() {
      
  },
  methods: {
      navChange(i){
          this.navIndex=i
      },
    login() {
      let obj = new Object();
      obj.username =this.user;
      obj.password = this.password;
      teaRelevant.login(obj).then(res => {
        if (res.data.ret == 200) {
            sessionStorage.setItem('info', JSON.stringify(res.data.data) )
            this.$router.push({path:'/index'})
        }else{
           this.timingFn('warning','账号或密码错误') 
        }
      });
    },



     	/*
	     * 提示框1.5ms
	     * @param  {string} type  提示图片  success/fail/warning
		 * @param  {string} tipWord 提示框文字
		 */
    	timingFn (type,tipWord){
			this.promptData.timingBox.open = true;
			this.promptData.timingBox.type = type;
			this.promptData.timingBox.tipWord = tipWord;
			let _this = this;
			setTimeout(function (){
				_this.promptData.timingBox.open = false;
			},1500);
		},
		/* 
	     * 确认框
	     * @param  {string} tipWord 提示框文字
	     * @param  {function}  callback  回调函数
	     */
	    confirmFn (tipWord,callback){
	    	// console.log(tipWord)
	    	// console.log(callback)
			this.promptData.confirmBox.open = true;
			this.promptData.confirmBox.tipWord = tipWord;
			let _this = this;
			$('.j_confirm_box .btn_group button').off('click').on('click',function(){
	            _this.promptData.confirmBox.open = false;
			  	callback($(this).attr('class'));
	        });
	    },
	   	/* 
	     * 加载框
	     * @param  {boolean}  load  成功/失败 true/false
	     * @param  {string}  tipWord  提示文字
	     */
	    loadingFn (load,tipWord){
			this.promptData.loadingBox.load = load;
		},
		/* 
	     * 进度框
	     * @percent  {number}  percent  进度(%)
	     * @speed  {number}  speed  速度/时间(ms)
	     */
		speedProgressFn(percent,speed){
			this.promptData.speedProgressBox.open = true;
			let period = speed ||  20;
			if(percent == 100){
				let progress  = setInterval(() => {
					this.promptData.speedProgressBox.percent += 1;
					this.$refs.percent.style.width = this.promptData.speedProgressBox.percent + "%";
					if(this.promptData.speedProgressBox.percent >= 99){
						clearInterval(progress);
						setTimeout(() => {
							this.promptData.speedProgressBox.open = false;
						}, 500);
					}
				}, period);
			}else{
				this.promptData.speedProgressBox.percent = percent;
				let progress  = setInterval(() => {
					this.promptData.speedProgressBox.percent += 1;
					this.$refs.percent.style.width = this.promptData.speedProgressBox.percent + "%";
					if(this.promptData.speedProgressBox.percent >= 99){
						clearInterval(progress)
					}
				}, period);
			}
			
		},
  }
};
</script>
<style scoped>
/* css */

.jz_all{
    width: 100%;
    height: 1080px; 
    background: url('../assets/img/loginbg.png') round;
    overflow: auto;
}
.jz_logo{
    width: 462px;
    margin: 76px auto 0px;
}

.jz_login{
    width: 1058px;
    height: 555px;
    /* border: solid 1px #dddddd; */
    /* box-shadow: 0px 0px 2px 2px #dddddd; */
    margin:68px auto 164px;
}
.jz_login_pic{
    width: 490px;
}
.jz_login_pic img{
    width: 100%;
} 
.jz_sure_login{
    width: 568px;
    height: 100%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background: white;
    box-sizing: border-box;
    padding: 0px 24px;
}
.jz_login_word{
    margin: 40px auto 94px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.jz_login_word span{
    margin-right: 166px;
    font-size: 20px;
    color: #5093e1;
    cursor: pointer;
    padding-bottom:10px; 
}
.active{
    border-bottom: solid 2px #5093e1;
}
.jz_login_word span:nth-of-type(2){
     margin-right: 0px;
}
input{
    width: 398px;
	height: 50px;
	background-color: #ffffff;
	border-radius: 5px;
	border: solid 1px #b1b1b1;
    text-indent: 24px;
}
.jz_enter{
     /* padding:0px 24px; */
}
.jz_enter p:nth-of-type(1){
    margin-bottom: 32px;
}
.jz_enter p span{
    width: 96px;
    text-align: left;
    display: inline-block;
    font-size: 20px;
}
.jz_denglu{
    width: 398px;
	height: 50px;
    font-size: 24px;
    line-height: 50px;
    text-align: center;
    color: #ffffff;
	background-color: #5093e1;
	border-radius: 8px;
    margin: 90px 0px 40px 96px;
    cursor: pointer;
}
.jz_forget_password{
    font-size: 18px;
    color: #666666;
    margin-right: 24px;
    cursor: pointer;
}
.jz_foot{
	height: 171px;
    box-sizing: border-box;
    padding: 20px 0px 22px;
	background-image: linear-gradient(
		#338bf8, 
		#338bf8), 
	linear-gradient(
		#f1f2f3, 
		#f1f2f3);
	background-blend-mode: normal, 
		normal;
	opacity: 0.7;
    color: #ffffff;
    font-size: 12px;
    letter-spacing: 2px;
    text-align: center;
   
}
.jz_foot li{
 line-height: 2;
}
.jz_foot li img{
 vertical-align: middle;
}
</style>
