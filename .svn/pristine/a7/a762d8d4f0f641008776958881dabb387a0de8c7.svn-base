<template>
  <div class="jz_ewrap g_main">
    <div class="jz_tou">
      <span class="jz_zt">新增指导青年教师情况</span>
      <p class="jz_p">
        <span class="jz_cancle" @click="cancle()">取消</span>
        <span class="jz_sure">确定</span>
      </p>
    </div>
    <div class="jz_eng">
      <p>
        <span>蓝青工程</span>
        <select class="jz_select">
          <option v-for="(v,i) in engData" :key="i" value="v">{{v}}</option>
        </select>
      </p>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" v-model="allxuan" @change="qx" />全选({{bodyContet.length}}/{{bodyContet.length}})
            </th>
            <th>教师</th>
            <th>身份证号码</th>
            <th>标题</th>
            <th>日期</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(v,i) in bodyContet" :key="i">
            <td>
              <input type="checkbox" v-model="v.checked" />
              1
            </td>
            <td>{{v.name}}</td>
            <td>{{v.idCard}}</td>
            <td>{{v.title}}</td>
            <td>{{v.time}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      engData: [
        "全部",
        "论文发表",
        "论文获奖",
        "公开课情况",
        "骨干教师学术讲座",
        "其他业务获奖情况"
      ],
      allxuan: false,
      bodyContet: [
        {
          checked: false,
          name: "李欣怡",
          idCard: "172349512419451234",
          title: "北京市第十七届教师技能大赛",
          time: "2018年05月01日"
        },
        {
          checked: false,
          name: "李欣怡",
          idCard: "172349512419451234",
          title: "北京市第十七届教师技能大赛",
          time: "2018年05月01日"
        },
        {
          checked: false,
          name: "李欣怡",
          idCard: "172349512419451234",
          title: "北京市第十七届教师技能大赛",
          time: "2018年05月01日"
        }
      ]
    };
  },
  
  mounted() {},
  methods: {
    cancle() {
      this.$emit("cancle", true);
    },

    //全选
    qx() {
      if (this.allxuan) {
        this.bodyContet.forEach(v => {
          v.checked = true;
        });
      } else {
        this.bodyContet.forEach(v => {
          v.checked = false;
        });
      }
    }
  },
  watch: {
    bodyContet: {
      handler(val) {
        let torf = val.every(v => {
          return v.checked == true;
        });
        if (torf) {
          this.allxuan = true;
        } else {
          this.allxuan = false;
        }
      },
      deep: true
    }
  }
};
</script>
<style scoped>
/* css */
table {
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
  white-space: nowrap;
}
tr,
th,
td {
  height: 40px;
  border: solid 1px #dddddd;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
}
thead {
  background: #f6f6f6;
}
.jz_ewrap {
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
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  border-bottom: solid 1px #dddddd;
}
.jz_zt {
  font-size: 16px;
  color: #5093e1;
}
.jz_p span {
  display: inline-block;
  width: 70px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}
.jz_cancle {
  background: #ededed;
}
.jz_sure {
  color: white;
  background: #5093e1;
  margin-left: 10px;
}
.jz_eng {
  padding: 0px 20px;
}
.jz_eng p {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.jz_select {
  width: 280px;
  height: 30px;
  outline: none;
  border: solid 1px #dddddd;
  text-indent: 5px;
}
</style>
