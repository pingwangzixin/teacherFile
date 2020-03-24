<template>
  <div class="jz_blue">
    <div class="jz_tong">
      <h3>
        <span  class="jz_size">指导青年教师情况</span>
        <p>
          <span class="jz_se">评审模式：多评</span> 
          <span class="jz_add" >考核结果上报</span>
        </p>
      </h3>
      <!-- 蓝青工程 -->
      <div class='jz_lan'>
          <ul class="clearfix">
              <li class="fl"><span class="jz_zi1" v-show="flag=='lanqing'">蓝青工程</span> 
              <span class="jz_zi1" v-show="flag=='mingshi'">名师工作室</span>
              <select name="" class="jz_inp"></select></li>
              <li class="fr jz_zi2" >2018年05月01日-2018年07月23日</li>
          </ul>
          <div class="jz_in" v-for="(v,i) in showData" :key="i">
              <p class="clearfix "> <span class="fl">{{v.name}}</span><span class="jz_pian">（共计{{v.sum}}篇）</span>  <i class="iconfont iconxiangshang   fr" v-show="!v.show" @click="v.show=!v.show"></i>  <i class="iconfont iconxiangxia fr" v-show="v.show" @click="v.show=!v.show"></i></p>
              <div class="jz_padding" v-show="!v.show&&v.ztbody.length!==0">
                <table>
                  <thead>
                    <tr >
                      <th v-for="(m,n) in v.zthead" :key="n">{{m}}</th>
                       <th class="jz_shou" @click="state=!state" style="min-width:38px">
                           状态<i class="jz_xia"></i>
                        <div class="jz_role" v-show="state">
                          <p
                            v-for="(item,index) in statData"
                            :key="index"
                            @click="selectState(index)"
                            :class="{activerole:index==selectIndex}"
                          >{{item}}</p>
                        </div>
                    </th>
                    <th>操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(a,b) in v.ztbody" :key="b">
                      <td v-for="(val,key,index) in a.oneTr" :key="index">{{val}}</td>
                      <td class="jz_info">查看详情</td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        state:false,//状态开关
         statData: ["全部", "已通过", "未通过", "审核中"],
          selectIndex: "",
          flag:'',
        showData:[
            {
                name:'论文发表',
                sum:'1',
                show:true,
                zthead:['论文名称','学科','参与身份','级别','字数','刊物名称','时间'],
                ztbody:[
                    {
                      oneTr:{name:'《制作“我的愿望”动画》教学设计',subject:'语文',canyu:'独立',level:'省级',num:'3000',kname:'中国信息技术教育',time:'2018.09.10',pass:'已通过'}
                    },
                ]
            },
            {
                name:'论文获奖',
                sum:'1',
                show:true,
                zthead:['论文名称','级别','获奖情况','时间'],
                ztbody:[
                    {
                      oneTr:{name:'2010年北京市中小学信息技术教学论文评比',level:'省级',win:'二等奖',time:'2015.09.10',pass:'已通过'}
                    },
                    {
                      oneTr:{name:'2010年北京市中小学信息技术教学论文评比',level:'省级',win:'二等奖',time:'2015.09.10',pass:'已通过'}
                    },
                ]
            },
            {
                name:'公开课情况',
                sum:'0',
                show:true,
                zthead:[],
                ztbody:[]
            },
            {
                name:'骨干教师学术讲座',
                sum:'0',
                show:true,
                zthead:[],
                ztbody:[]
            },
            {
                name:'专业型称号',
                sum:'0',
                show:true,
                zthead:[],
                ztbody:[]
            },
            {
                name:'综合性荣誉',
                sum:'0',
                show:true,
                zthead:[],
                ztbody:[]
            },
            {
                name:'其他业务获奖情况',
                sum:'0',
                show:true,
                zthead:[],
                ztbody:[]
            },
        ]
    };
  },
  created(){
    this.findPath()
  },
  mounted() {},
  methods: {
    selectState(index) {
      this.selectIndex = index;
    },
     //寻找路径
    findPath(){  
           let from=this.$route.query.from;
           this.flag=from;
            // console.log(from)
       }
  }
};
</script>
<style scoped>
.jz_blue {
  /* height: 200px; */
}
i{
  cursor: pointer;
}
table{
  width: 100%;
  border-collapse: collapse;
  margin-top: 8px;
  padding: 0px 20px;
}
tr,th,td{
  border: solid 1px #dddddd;
  height: 40px;
  text-align: center;
}
thead{
  background: #f6f6f6;
}
.activerole {
  color: #f97c59;
}
.jz_info{
  color: #5093e1;
  cursor: pointer;
}
/* css */
.jz_tong h3 {
  box-sizing: border-box;
  padding: 0px 20px;
  height: 50px;
  line-height: 50px;
  border-bottom: solid 1px #dddddd;
  color: #5093e1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.jz_size{
  font-size: 16px;

}
.jz_se,.jz_zi2{
    color: #666666;
    font-size: 14px;
}
.jz_add {
  display: inline-block;
  width: 120px;
  height: 30px;
  color: white;
  background: #5093e1;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  border-radius: 2px;
  cursor: pointer;
  margin-top: -6px;
  margin-left: 6px;
}
.jz_lan{
    /* box-sizing: border-box; */
    padding: 0px 20px 6px;
    border-bottom: solid 1px #dddddd;
}
.jz_lan ul{
    height: 50px;
    line-height: 50px;
}
.jz_zi1{
    font-size: 16px;
    font-weight: bold;
    margin-right: 6px;
}
.jz_inp{
    width: 236px;
    height: 28px;
    outline: none;
    border: solid 1px #dddddd;
}
.jz_padding{
  padding: 0px 20px;
}
.jz_in p{
    padding: 0px 20px;
     background: #f6f6f6;
  height: 40px;
  line-height: 40px;
}
.jz_pian{
  color: #666666;
}
.jz_shou {
  cursor: pointer;
  overflow: visible !important;
   position: relative;
}
.jz_in{
  margin-bottom: 10px;
}
.jz_xia {
  height: 0px;
  border-left: solid 5px transparent;
  border-right: solid 5px transparent;
  border-top: solid 8px #cfcece;
  position: absolute;
  top: 50%;
  right: 12px;
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
  left: 32px;
  top: 41px;
  border: solid 1px #dddddd;
  width: 100px;
  background: white;
  z-index: 10;
}
</style>
