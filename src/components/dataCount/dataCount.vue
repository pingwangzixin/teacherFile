<template>
    <div class="g_main jz_dwrap" >
         <div class="jz_tou">
             <p><span>学校教学信息数据统计</span> <span>(总人数(人)),人数占比%</span> </p>
         </div>
         <div class="jz_tab">
            <div>
             <table>
                 <thead>
                     <tr>
                         <th v-for="(item,index) in tableHead" :key="index"> <span>{{item.name}}   <i class="jz_shang" :class="{'activepx1':item.checked}" @click="pxShang(index)"></i><i class="jz_xia"  :class="{'activepx2':item.checked2}" @click="pxXia(index)"></i> </span>   </th>
                     </tr>
                 </thead>
                 <tbody>
                    <tr  v-for="(item,index) in tableBody" :key="index">
                        <td>
                            {{item.name}}
                        </td>
                        <td>
                            {{item.all}}人
                        </td>
                        <td v-for="(m,n) in item.info" :key="n">
                            <div>
                                <div class="jz_jdt">
                                    <span :style="`width:${m.a}%`">
                                    </span>
                                    <b >{{m.a}}%</b>
                                </div>
                                <span>{{m.b}}人</span>
                            </div>
                        </td>
                    </tr>
                 </tbody>
             </table>
            </div>
         </div>
    </div>
</template>
<script>
export default {
   data() {
      return {
          tableHead:[
              {name:'学校', checked:false,checked2:false},{name:'校总人数',checked:false,checked2:false},{name:'综合性荣誉',checked:false,checked2:false},{name:'条线荣誉',checked:false,checked2:false},{name:'公开课情况',checked:false,checked2:false},{name:'论著情况',checked:false,checked2:false},{name:'论文发表',checked:false,checked2:false},{name:'论文获奖',checked:false,checked2:false},{name:'课题研究',checked:false,checked2:false},{name:'指导学生情况',checked:false,checked2:false},{name:'指导青年教师情况',checked:false,checked2:false},{name:'参加教学大赛情况',checked:false,checked2:false},{name:'听课情况',checked:false,checked2:false},
           {name:'任课情况',checked:false,checked2:false},{name:'课堂满意度',checked:false,checked2:false},{name:'论文发表',checked:false,checked2:false},{name:'骨干教师学术讲座',checked:false,checked2:false},{name:'班主任工作经历',checked:false,checked2:false},{name:'其他业务获奖情况',checked:false,checked2:false},{name:'组织公派支教经历',checked:false,checked2:false},{name:'公休课',checked:false,checked2:false},],
          tableBody:[
              {
                  name:'北京市东城区希盛幼儿园', all:'17',
                  info:[{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},
                  {a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},
                  ],
              },
              {
                  name:'北京市东城区希盛幼儿园', all:'17',
                  info:[{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},
                  {a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},
                  ],
              },
              {
                  name:'北京市东城区希盛幼儿园', all:'17',
                  info:[{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},
                  {a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},{a:40,b:5},
                  ],
              },
          ]
      }
   },
   mounted() {

   },
   methods:{
       pxShang(index){
         this.tableHead[index].checked=!this.tableHead[index].checked
          this.tableHead.forEach((item)=>{
               item.checked2=false
           })
       },
       pxXia(index){
           this.tableHead.forEach((item)=>{
               item.checked=false
           })
            this.tableHead[index].checked2=!this.tableHead[index].checked2;
       }
   },
}
</script>
<style scoped>
/* css */
.jz_dwrap {
  background: white;
  margin-top: 10px;
  min-height: 1120px;
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
.jz_tou p span:nth-of-type(1){
  color: #5093e1;
  font-size: 16px;
}
.jz_tou p span:nth-of-type(2){
  color: #999999;
}
.jz_tab{
    box-sizing: border-box;
    padding: 16px 20px 0px;
   
  
   
}
.jz_tab>div{
     width: 100%;
 border: solid 1px #dddddd;
   overflow-x: scroll;
   border-top-color: transparent;
}
.jz_tab table{
    width: 300%;
   margin-bottom: 20px;
}
tr,th,td{
    height: 40px;
     text-align: center;
    line-height: 40px;
    border: solid 1px #dddddd;
    min-width: 110px;
}
table th>span{
    position :relative;
}
.jz_shang {
  border-left: solid 5px transparent;
  border-right: solid 5px transparent;
  border-bottom: solid 8px #cfcece;
  position: absolute;
  right:-16px;
  top: 10%;
  cursor: pointer;
}
.jz_xia {
  border-left: solid 5px transparent;
  border-right: solid 5px transparent;
  border-top: solid 8px #cfcece;
  position: absolute;
  right: -16px;
  bottom: -4%;
  cursor: pointer;
}
/* 排序动态 */
.activepx1 {
  border-bottom: solid 8px #5093e1 !important;
}    
.activepx2 {
  border-top: solid 8px #5093e1 !important;
}

table th:nth-of-type(1) .jz_shang,
table th:nth-of-type(1) .jz_xia{
    display: none
}
tbody tr td>div{
    display: flex;
    justify-content:center;
    align-items: center;
}


.jz_jdt{
    width: 80px;
    height: 16px;
    border: solid 1px #dddddd;
    margin-right: 10px;
}
.jz_jdt>span{
    /* display: block; */
    background: #5093e1;
    height: 16px;
    float: left
}
.jz_jdt b{
   
    float: left;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    margin-left: -10px;
}
        ::-webkit-scrollbar {
		    width: 5px;
		    height: 5px;
		}
		 
		::-webkit-scrollbar-track-piece {
		    background-color: rgba(0, 0, 0, 0.2);
		    -webkit-border-radius: 6px;
		}
		 
		::-webkit-scrollbar-thumb:vertical {
		    height: 5px;
		    background-color: rgba(125, 125, 125, 0.7);
		    -webkit-border-radius: 6px;
		}
		 
		::-webkit-scrollbar-thumb:horizontal {
		    width: 5px;
		    background-color: rgba(125, 125, 125, 0.7);
		    -webkit-border-radius: 6px;
		}

</style>






