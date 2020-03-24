<template>
  <div>
    <!-- 头部 -->

   	<div class="g_header " ref="heads">
		    <div class="nav clearfix">
		        <div class="logo_group fl">
		            <img src="../assets/img/logo.png" alt="" srcset="">
		        </div>
		        <div class="user_info fr jz_tank">
		            <span @click="flag=true">{{teaName}}老师</span>
		            <b>[已登录]</b>
								<dl v-show="flag" @click="flag=false">
									 <dd @click="teaTerrace">教师平台</dd>
									 <dd>修改密码</dd>
									 <dd @click="exit()">退出登录</dd>
								</dl>
		        </div>
		    </div>
		</div>
    <router-view></router-view>

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
import $ from 'jquery';
export default {
  data() {
    return {
			flag:false,//个人
			teaName:'',

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
      }
    };
	},
	mounted(){
		 if (this.$route.path != "/index/main") {
      this.$refs.heads.style.background = "#4185e2"; //xin
    } else {
      this.$refs.heads.style.background = "#053f7c"; //jiu
    }
    if(sessionStorage.info){
      this.teaName=JSON.parse(sessionStorage.info).teaName
    }
	},
  methods: {

				teaTerrace(){
					this.$router.push({ path:'/index/teacherTerrace',query:{tea:1}})
				},

				exit(){//退出登录
					  sessionStorage.removeItem('info')
						this.$router.push({ path:'/',})
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

  },
  watch: {
    //监听路由变化控制首页背景色变化
    $route() {
      if (this.$route.path != "/index/main") {
        this.$refs.heads.style.background = "#4185e2"; //xin
      } else {
        this.$refs.heads.style.background = "#053f7c"; //jiu
      }
    }
  }
};
</script>

<style scoped>
.icondrop-down {
  font-size: 24px;
  margin: 0px -10px;
}

.jz_tank{
	position: relative;
}


.jz_tank dl{
	position: absolute;
	background: white;
	z-index: 1;
	line-height: 1.3;
	top: 42px;
	left: 0px;
	border-radius: 5px;
	/* top: 0px; */
}
.jz_tank dl dd{
	padding: 10px 22px;
	cursor: pointer;
	}
.jz_tank dl dd:hover{
	color: #5093e1;
}
</style>