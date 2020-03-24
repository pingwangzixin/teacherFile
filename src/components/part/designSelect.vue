<template >
    <div class="jz_chooseyear" @click="flag=!flag">
      <p class="jz_p" :class="{hui:outShow=='请先选择级别'}"> {{outShow}}</p>
      <div class="jz_content" v-show="flag">
        <p v-for="(v,i) in pageData" :key="i" v-html="v" @click="soleCheck(v)"></p>
      </div>
    </div>
</template>
<script>
export default {
    name:'pullDown',
    props:['data','firstRow'],
    data() {
        return {
            outShow:'',
            pageData:[],
            flag:false,
        }
    },
    beforeMount(){
      this.outShow=this.firstRow;
    },
    methods:{
        soleCheck(v){
            this.outShow=v;
            // console.log('选中内容',this.outShow)
            this.$emit('sureCheck',this.outShow)
	    }
    },
    watch:{
      data:function(newVal){
        this.pageData=newVal;
        // console.log('页面数据',this.pageData)
      },
      firstRow:function(newVal){
        // console.log('第一行显示内容',newVal)
          this.outShow=newVal;
      }
    }
};
</script>
<style scoped>
.jz_chooseyear {
  width: 170px;
  height: 30px;
  line-height: 30px;
  border: solid 1px #dddddd;
  border-radius: 5px;
  position: relative;
  box-sizing: border-box;
  padding: 0px 20px 0px 10px;
  background: white;
  z-index: 1;
  text-align: left;
}
.jz_p{
 text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.jz_chooseyear:after {
  content: "";
  height: 0px;
  border-top: solid 6px black;
  border-left: solid 4px transparent;
  border-right: solid 4px transparent;
  position: absolute;
  /*left: 160px;*/
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
}
.jz_content {
  width: 100%;
  border: solid 1px #dddddd;
  position: absolute;
  top: 28px;
  left: 0px;
  padding: 0px 10px;
  box-sizing: border-box;
  max-height: 90px;
  overflow: auto;
  background: white;
}
p {
  cursor: pointer;
}
.jz_content p:hover {
  color: #ff9933;
}
.hui{
  color: #dddddd;
}
</style>