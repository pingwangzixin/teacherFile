<template>
    <div class="jz_cwrap g_main">
         <div class="jz_tou">
             <p>用户中心</p>
         </div>
         <div class="jz_nav">
             <ul>
                 <li v-for="(item,index) in adminData" :key="index" v-text="item" @click="activeIndex=index" :class="{'active':activeIndex==index}"></li>
             </ul>
             <div class="jz_zhe">
                 <span>下载模板</span>
                 <span>学校导入</span>
                 <span>导出账号</span>
             </div>
         </div>
         <div v-show="activeIndex==0||activeIndex==1">
            <div class="jz_content" v-for="(item,index) in schoolManageData" :key="index" >
                <p><b>{{item.name}}</b> <span>(学校<span class="jz_lv">{{item.info.length}}</span>所,教师<span class="jz_lv">{{item.teacher}}</span>人)</span> 
                    <i class="jz_shang " v-show="item.show" @click="dataHidden(index)"></i>
                    <i class="jz_xia " v-show="!item.show" @click="dataShow(index)"></i>
                </p>
                <div class="jz_content2" v-show="item.show">
                    <p class="clearfix" v-for="(m,n) in item.info" :key="n">
                        <span class="fl">{{m.name}}</span>  <span class="fr jz_hui">(机构代码:{{m.areaCode}},教师{{m.teacherTotal}}人)</span> </p>
                </div>
            </div>
         </div>
         <div  v-show="activeIndex==2"> 
             <div class="jz_contentqu" v-for="(item,index) in regionData" :key="index">
                <p> <b>{{item.juese}}:{{item.shenfen}}</b></p>
                <p>角色权限:教师查询、筛选对比、教师管理、用户中心、教师大数据</p>
                <p> <b> 角色名单:  <span v-for="(m,n) in item.people" :key="n">{{m.name}}、</span>      <span class="jz_add fr" @click="addRole=true">+添加角色</span></b></p>
             </div>
         </div>
         <div  v-show="activeIndex==3">
               <div class="jz_contentqu2" v-for="(item,index) in regionData" :key="index">
                <p><b> {{item.juese}}:{{item.shenfen}}</b></p>
                <p>角色权限:教师查询、筛选对比、教师管理、用户中心、教师大数据</p>
                <span>角色名单: </span>  
                    <div class="jz_juese">
                        <p  v-for="(m,n) in item.people" :key="n"> <span>凤翔教育集团: <b>{{m.name}}、</b></span>        <span class="jz_add fr" @click="addRole=true">+添加角色</span></p>
                    </div>
             </div>  
         </div>
        <!-- 弹窗1 添加角色名单 -->
        <div class="jz_tian" v-show="addRole">
            <div class="jz_jia"> 
                <p> <span>添加角色名单</span>   <i class="iconfont iconyooxi fr" @click="addRole=false"></i>  </p>
                <div class="jz_jia1">
                    <div class="jz_shu">
                        <div class="jz_tel">
                            <input type="text" placeholder="请输入手机号" v-model="inputNumber" maxlength="11" onkeyup="value=value.replace(/[^0-9]/g,'')">
                            <ul v-show="false">
                                <li><span>1390000001</span><span>艾草</span> <span>北京市东城区两秀小学</span></li>
                                <li><span>1390000001</span><span>艾草</span> <span>北京市东城区两秀小学</span></li>
                                <li><span>1390000001</span><span>艾草</span> <span>北京市东城区两秀小学</span></li>
                                <li><span>1390000001</span><span>艾草</span> <span>北京市东城区两秀小学</span></li>
                                <li><span>1390000001</span><span>艾草</span> <span>北京市东城区两秀小学</span></li>
                                <li><span>1390000001</span><span>艾草</span> <span>北京市东城区两秀小学</span></li>
                                <li><span>1390000001</span><span>艾草</span> <span>北京市东城区两秀小学</span></li>
                                <li><span>1390000001</span><span>艾草</span> <span>北京市东城区两秀小学</span></li>
                            </ul>
                        </div>
                        <input type="text" placeholder="请输入姓名" v-model.trim="inputName">
                        <input type="text" placeholder="请输入学校" v-model.trim="inputSchool">
                        <span>添加角色</span>
                    </div>
                    <div class="jz_tab">
                        <table>
                            <tr>
                                <td>手机号</td>
                                <td>姓名</td>
                                <td>学校</td>
                                <td>操作</td>
                            </tr>
                            <tr>
                                <td>手机号</td>
                                <td>姓名</td>
                                <td>学校</td>
                                <td>操作</td>
                            </tr>
                        </table>
                    </div>
                    <div class="jz_ding clearfix">
                        <span class="fl jz_sure">确认</span>
                        <span class="fr jz_cancle"  @click="addRole=false">取消</span>
                    </div>
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
            adminData:['学校管理','集团管理','区权限管理','集团权限管理'],
            activeIndex:0,//点击后的下标
            addRole:false,//添加角色
            inputNumber:'',
            inputName:'',
            inputSchool:'',
            schoolManageData:[
                {
                    name:'幼儿园',
                    schoolNum:48,
                    teacher:3022,
                    show:true,
                    info:[
                        
                    ]
                },
                {
                    name:'中学',
                    schoolNum:12,
                    teacher:2997,
                    show:true,
                    info:[
                       
                    ]
                },
                {
                    name:'小学',
                    schoolNum:12,
                    teacher:2997,
                    show:true,
                    info:[
                      
                    ]
                },
            ],
            regionData:[
                    {
                        juese:'角色1',
                        shenfen:'总校长',
                        people:[
                            {name:'丁一一'},
                            {name:'叶秋'},
                            {name:'汪涵'},
                        ]
                    },
                    {
                        juese:'角色2',
                        shenfen:'管理员',
                        people:[
                            {name:'丁一一'},
                        ]
                    },
                    {
                        juese:'角色3',
                        shenfen:'人事科',
                        people:[
                            {name:'丁一一'},
                        ]
                    },
            ],

        }
    },
    created(){
        this.schoolListData();
    },
    methods:{
        dataHidden(index){//数据收起
            let  hides=this.schoolManageData;
            hides[index].show=false;
          
           
        },
        dataShow(index){//数据展开
         let  hides=this.schoolManageData;
            hides[index].show=true;
        },

        schoolListData(){
             teaRelevant.schoolList({areaIds:231000}).then(res => {
                 if(res.data.ret==200){
                     let data=res.data.data.list;
                     this.schoolManageData[0].info=data.filter(v=>{
                         return v.gradeName.includes('幼儿园')
                     })
                     this.schoolManageData[1].info=data.filter(v=>{
                         return v.gradeName.includes('中学')
                     })
                     this.schoolManageData[2].info=data.filter(v=>{
                         return v.gradeName.includes('小学')
                     })
                    

                 }
        });
        }
    }
}
</script>
<style scoped>
.jz_cwrap {
  background: white;
  margin-top: 10px;
  margin-bottom: 130px;
  position: relative;
   box-shadow: 0px 0px 2px 2px #dddddd;
   border-radius: 5px;
} 
.jz_tou {
  box-sizing: border-box;
  padding: 14px 0px 20px 20px ;
  border-bottom: solid 1px #dddddd;
}
.jz_tou p {
  color: #5093e1;
  font-weight: bold;
  font-size: 18px;
}
.jz_nav{
    padding: 0px 20px 0px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f6f6f6;
}
.jz_nav ul {
      display: flex;
    justify-content: flex-start;
}
.jz_nav ul li{
    padding: 12px 42px;
    cursor: pointer;
    border-top: solid 2px transparent;
}
.jz_zhe span{
    cursor: pointer;
    text-align: center;
    display: inline-block;
}
.jz_zhe span:nth-of-type(1){
    width: 78px;
    height: 28px;
    line-height: 28px;
    color: #5093e1;
    border: solid 1px #5093e1;
    background: #f5f5f5;
}
.jz_zhe span:nth-of-type(2){
      width: 78px;
    height: 28px;
     line-height: 28px;
    color: white;
    border: solid 1px #5093e1;
    background: #5093e1;
    margin: 0px 6px;
}
.jz_zhe span:nth-of-type(3){
    width: 78px;
    height: 28px;
    line-height: 28px;
    color: white;
    border: solid 1px #1abc9c;
    background: #1abc9c;
}
.active{
    color: #5093e1;
    border-top-color: #5093e1 !important;
    background: white;
}
.jz_cwrap   .jz_content:last-of-type{
    margin-bottom: 100px !important;
}
.jz_content>p{
    padding: 16px 20px 8px 20px;
    border-bottom: solid 1px #dddddd;
    position: relative;
}
.jz_content p b{
    font-size: 16px;
}
.jz_content>p span{
    color: #666666;
}
.jz_hui{
      color: #666666;
}
.jz_content p span .jz_lv{
    color: #1abc9c;
}
.jz_content2{
    padding: 0px 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.jz_content2 p{
    padding: 22px 0px 12px 0px;
    border-bottom: solid 1px #dddddd;
    width: 48%;
}

.jz_shang {
  border-left: solid 5px transparent;
  border-right: solid 5px transparent;
  border-bottom: solid 8px #cfcece;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.jz_xia {
  border-left: solid 5px transparent;
  border-right: solid 5px transparent;
  border-top: solid 8px #cfcece;
  position: absolute;
   top: 50%;
   right: 20px;
  transform: translateY(-50%);
  cursor: pointer;
}
/* 区权限管理 */
.jz_contentqu{
padding: 16px 42px 12px 42px;
box-sizing: border-box;
border-bottom: solid 1px #dddddd;
}
.jz_contentqu>p,   
.jz_contentqu2>p   
{
    line-height:2.6;
}
.jz_contentqu>p:nth-of-type(2),
.jz_contentqu2>p:nth-of-type(2)
{
    text-indent: 20px;
    color: #666666;
}

.jz_add{
    color: #5093e1;
    cursor: pointer;
}
.jz_contentqu:last-of-type,
.jz_contentqu2:last-of-type
{
    margin-bottom: 100px;
}
/* 集团权限管理 */
.jz_contentqu2{
padding: 16px 42px 0px 42px;
box-sizing: border-box;
border-bottom: solid 1px #dddddd;
}
.jz_juese{
    box-sizing: border-box;
    padding: 0px 30px;
}
.jz_juese>p{
    border-bottom: solid 1px #dddddd;
    padding: 12px 0px;
}
.jz_juese>p:last-of-type{
    border-bottom: none
}
/* 弹窗 */
.jz_tian{
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    background: rgba(0, 0, 0, 0.3)
}
.jz_jia{
    width:648px;
    height: 312px; 
    background: white;
    position: absolute;
    top: 0px;
     left: 0px;
    bottom: 0px;
    right: 0px;
    margin: auto;
}
.jz_jia>p{
    padding: 16px 14px 14px 26px;
    font-size: 16px;
    border-bottom: solid 1px #dddddd;
}
.jz_jia>p>span{
  color: #5093e1;
}
.iconyooxi{
    cursor: pointer;
}
.jz_jia1{
    padding: 0px 20px 26px 20px ;
}
.jz_jia1 .jz_tab{
    /* width: 100%; */
     height: 140px;
      border: solid 1px #dddddd;
}
.jz_jia1 table{
    border-collapse: collapse;
    width: 100%;
    text-align: center;
}
.jz_jia1 table tr,
.jz_jia1 table td{
    height: 30px;
}
input{
    outline: none;
    border-radius: 5px;
    border:solid 1px #dddddd;
    text-indent: 10px;
    width: 158px;
    padding: 2px 0px;
}
.jz_shu{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:10px 0px ; 
}
.jz_shu>span{
    width: 80px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    display: inline-block;
    background: #5093e1;
    color: white;cursor: pointer;
}
.jz_ding{
    width: 292px;
    margin:20px auto 0px;
}
.jz_ding>span{
    width: 108px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    border-radius: 5px;
    cursor: pointer;
}
.jz_sure{
    color: #5093e1;
    background:#dbeef9; 
}
.jz_cancle{
    border: solid 1px #dddddd;
    
}
.jz_tel{
    position: relative;
}
.jz_tel>ul{
    position: absolute;
    border: solid 1px #dddddd;
    width: 470px;
    height: 150px;
    overflow: auto;
    box-sizing: border-box;
    padding: 12px  20px 0px 8px;
    background: white;
    margin-top: 1px;
}
.jz_tel>ul li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
}
</style>
