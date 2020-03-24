<template>
  <div>
    <div class="jz_tong">
      <h3>
        <span v-show="!flag">综合性荣誉</span>
        <span v-show="flag">新增综合性荣誉</span>
        <span class="jz_add" v-show="!flag" @click="addHonor">新增</span>
      </h3>
      <div class="jz_tab">
        <table v-show="!flag">
          <thead>
            <tr>
              <th>获得时间</th>
              <th>荣誉项目</th>
              <th>级别</th>
              <th>表彰单位</th>
              <th class="jz_shou" @click="state=!state" min-width="100">
                <i class="jz_xia"></i>
                状态
                <div class="jz_role" v-show="state">
                  <p
                    v-for="(item,index) in statData"
                    :key="index"
                    @click="selectState(index)"
                    :class="{activerole:index==selectIndex}"
                  >{{item}}</p>
                </div>
              </th>
              <th width="200">操作</th>
            </tr>
          </thead>
          <tbody v-for="(item,index) in dataList" :key="index">
            <tr>
              <td v-text="item.getTime"></td>
              <td v-text="item.honor"></td>
              <td v-text="item.level"></td>
              <td v-text="item.dw"></td>
              <td v-text="item.state"></td>
              <td class="jz_ts">
                <span @click="lookInfo(index)">查看详情</span>
                <span :class="{activeys:index==editIndex}" @click="edit(index)">编辑</span>
                <span>删除</span>
              </td>
            </tr>
            <tr v-if="editIndex==index">
              <td colspan="6">
                <div class="jz_editkh jz_bg">
                  <p>
                    <span>时间</span>
                    <input type="date" />
                  </p>
                  <p>
                    <span>
                      <label for="xm">荣誉项目</label>
                    </span>
                    <input class="jz_inp" id="xm" type="text" placeholder="请输入标题" />
                  </p>
                  <p class="jz_p">
                    <span>级别</span>
                    <label v-for="(item,index) in level" :key="index">
                      <input
                        type="radio"
                        name="levels1"
                        v-model="levelRadio"
                        :value="item"
                      />
                      <span v-text="item"></span>
                    </label>
                  </p>
                  <p>
                    <span>类别</span>
                    <designSelect :data="levelData" :firstRow="firstRowData" @sureCheck="sureCheck"></designSelect>
                  </p>
                  <p>
                    <span>
                      <label for="dw">表彰单位</label>
                    </span>
                    <input class="jz_inp" id="dw" type="text" placeholder="请输入标题" />
                  </p>
                  <p class="jz_p">
                    <span>荣誉证书</span>
                    <span class="jz_sp">
                      <label v-for="(item,index) in honorBook" :key="index" :for="'a'+index" class="jz_real">
                        <input
                          type="radio"
                          name="ryz1"
                          v-model="honRadio"
                          :value="item"
                          :id="'a'+index"
                        />
                        <span v-text="item"></span>
                        <label for="xzfile0" v-show="index==1&&honRadio=='上传文件'">
                          <span class="jz_xzwj">选择文件</span>
                          <input
                            type="file"
                            id="xzfile0"
                            hidden
                            accept="image/jpg, image/png, application/pdf"
                          />
                        </label>
                      </label>
                      <span class="jz_an" v-show="handOrAuto">
                        <input type="text" class="jz_inp" placeholder="请输入编号" />
                      </span>
                      <!-- <p>W</p> -->
                    </span>
                  </p>
                  <div class="jz_sel jz_newsel">
                    <span class="jz_cancle" @click="editIndex=null">取消</span>
                    <span class="jz_sure">确定</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- 新增综合性荣誉 -->
        <div class="jz_editkh" v-show="flag">
          <p>
            <span>时间</span>
            <input type="date" />
          </p>
          <p>
            <span>
              <label for="xm">荣誉项目</label>
            </span>
            <input class="jz_inp" id="xm" type="text" placeholder="请输入标题" />
          </p>
          <p class="jz_p">
            <span>级别</span>
            <label v-for="(item,index) in level" :key="index">
              <input
                type="radio"
                name="levels2"
                v-model="levelRadio"
                :value="item"
              />
              <span v-text="item"></span>
            </label>
          </p>
          <p>
            <span>类别</span>
            <designSelect :data="levelData" :firstRow="firstRowData" @sureCheck="sureCheck"></designSelect>
          </p>
          <p>
            <span>
              <label for="dw">表彰单位</label>
            </span>
            <input class="jz_inp" id="dw" type="text" placeholder="请输入标题" />
          </p>
          <p class="jz_p">
            <span>荣誉证书</span>
            <span class="jz_sp">
              <label v-for="(item,index) in honorBook" :key="index" :for="'b'+index">
                <input
                  type="radio"
                  name="ryzs2"
                  v-model="honRadio"
                  :value="item"
                  :id="'b'+index"
                />
                <span v-text="item"></span>
                <label for="xzfile" v-show="index==1&&honRadio=='上传文件'">
                  <span class="jz_xzwj">选择文件</span>
                  <input
                    type="file"
                    id="xzfile"
                    hidden
                    accept="image/jpg, image/png, application/pdf"
                  />
                </label>
              </label>
              <span class="jz_an" v-show="handOrAuto">
                <input type="text" class="jz_inp" placeholder="请输入编号" />
              </span>
            </span>
          </p>
          <div class="jz_sel jz_newsel">
            <span class="jz_cancle" @click="flag=false">取消</span>
            <span class="jz_sure">确定</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { teaRelevant } from "@/api";
import designSelect from "@/components/part/designSelect.vue";
export default {
  components: {
    designSelect
  },
  data() {
    return {
      state: false,
      flag: false, //显示新增
      editIndex: null, //控制显示编辑
      honRadio: "", //荣誉单选
      levelRadio: "", //级别单选
      statData: ["全部", "已通过", "未通过", "审核中"],
      selectIndex: "",
      level: ["国家级", "省级", "市级", "区级"],
      honorBook: ["手动输号", "上传文件"],
      handOrAuto: false, //手动还是上传
      dataList: [
        {
          getTime: "2013",
          honor: "22",
          level: "1",
          dw: "北京市教育局",
          state: "已通过",
          id: "1"
        },
        {
          getTime: "2013",
          honor: "22",
          level: "1",
          dw: "北京市教育局",
          state: "已通过",
          id: "1"
        },
        {
          getTime: "2013",
          honor: "22",
          level: "1",
          dw: "北京市教育局",
          state: "已通过",
          id: "1"
        },
        {
          getTime: "2013",
          honor: "22",
          level: "1",
          dw: "北京市教育局",
          state: "已通过",
          id: "1"
        }
      ],
      firstRowData: "请先选择级别",
      levelData: "",
      nationalLevel: [
        "全国劳模",
        "全国五一劳动节奖章",
        "全国模范教师",
        "全国优秀教师",
        "全国优秀教育工作者"
      ],
      provinceLevel: [
        "省劳模",
        "省五一劳动节奖章",
        "省优秀教师",
        "省优秀教育工作者"
      ],
      cityLevel: [
        "市劳模",
        "市优秀教育工作者",
        "市又红又专青年教师",
        "市优秀校长"
      ],
      areaLevel: ["区优秀教育工作者", "区优秀教师"]
    };
  },
  mounted() {},
  methods: {
    selectState(index) {
      this.selectIndex = index;
    },

    //添加综合性荣誉
    addHonor() {
      this.flag = !this.flag;
    },

    sureCheck(data) {
      // console.log(data);
    },

    //弹出编辑框
    edit(index) {
      this.editIndex = index;
    },
    lookInfo(index) {
      this.$router.push({
        path: "/index/teaHonorShow",
        query: { from: "comhonor", id: "888" }
      });
    }
  },
  watch: {
    //监听荣誉证书添加方式
    honRadio: function(n) {
      // console.log(n);
      
      if (n == "手动输号") {
        this.handOrAuto = true;
      } else {
        this.handOrAuto = false;
      }
    },

    //监听级别方式
    levelRadio: function(newVal) {
      switch (newVal) {
        case "国家级":
          this.levelData = this.nationalLevel;
          this.firstRowData = this.nationalLevel[0];
          break;
        case "省级":
          this.levelData = this.provinceLevel;
          this.firstRowData = this.provinceLevel[0];
          break;
        case "市级":
          this.levelData = this.cityLevel;
          this.firstRowData = this.cityLevel[0];
          break;
        case "区级":
          this.levelData = this.areaLevel;
          this.firstRowData = this.areaLevel[0];
          break;
      }
      //    console.log(this.levelData)
    }
  }
};
</script>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  /* word-wrap:break-word; */
}
tr,
th,
td {
  border: solid 1px #dddddd;
  height: 40px;
  text-align: center;
}
thead {
  background: #f6f6f6;
}
input,
select {
  width: 170px;
  height: 30px;
  text-indent: 10px;
  border: solid 1px #dddddd;
  box-sizing: border-box;
  outline: none;
  border-radius: 5px;
  text-indent: 5px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.colorlv {
  color: #1abc9c;
}
.colorred {
  color: #f65177;
}
.colorhui {
  color: #666666;
}
.activerole {
  color: #f97c59;
}
.activeys {
  color: #a9a9a9;
}
/* css */
.jz_tong h3 {
  box-sizing: border-box;
  padding: 0px 20px;
  height: 56px;
  line-height: 56px;
  border-bottom: solid 1px #dddddd;
  color: #5093e1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.jz_tab {
  min-height: 468px;
  box-sizing: border-box;
  padding: 10px 20px 20px;
}
.jz_ts {
  display: flex;
  border: none;
  align-items: center;
  justify-content: space-around;
  color: #5093e1;
}
.jz_ts span {
  cursor: pointer;
}
.jz_add {
  display: inline-block;
  width: 62px;
  height: 30px;
  color: white;
  background: #1abc9c;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  border-radius: 2px;
  cursor: pointer;
  margin-top: -6px;
}
.jz_shou {
  cursor: pointer;
  position: relative;
}
.jz_xia {
  height: 0px;
  border-left: solid 5px transparent;
  border-right: solid 5px transparent;
  border-top: solid 8px #cfcece;
  position: absolute;
  top: 50%;
  right: 32px;
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
  left: 10px;
  top: 40px;
  border: solid 1px #dddddd;
  width: 100px;
  background: white;
  z-index: 10;
}
/* 新增荣誉 */
.jz_editkh {
  /* text-align: left !important;
    padding: 0px !important; */
}
.jz_editkh p {
  margin-left: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
}
.jz_editkh p > span:nth-of-type(1) {
  margin-right: 16px;
  display: inline-block;
  width: 90px;
  text-align: right;
}
.jz_editkh p .jz_sp {
  position: relative;
}
.jz_editkh p .jz_an {
  position: absolute;
  top: 25px;
  left: 0px;
}

.jz_p > label {
  margin-right: 16px;
}
.jz_real{
    position: relative;
}
.jz_p input[type="radio"] + span::before {
  content: "\a0";
  /*不换行空格*/
  display: inline-block;
  vertical-align: 2px;
  width: 11px;
  height: 11px;
  margin-right: 5px;
  border-radius: 50%;
  border: 1px solid #5093e1;
  text-indent: 2px;
  line-height: 0.65;
  /*行高不加单位，子元素将继承数字乘以自身字体尺寸而非父元素行高*/
  padding: 3px;
}

.jz_p input[type="radio"]:checked + span::before {
  background-color: #5093e1;
  padding: 3px;
  background-clip: content-box;
}

.jz_p input[type="radio"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
}
.jz_inp {
  width: 320px;
}

/*  */
.jz_sel {
  padding: 76px 0px 30px;
  display: flex;
  justify-content: center;
}
.jz_sel span {
  padding: 6px 44px;
  cursor: pointer;
}
.jz_cancle {
  background: #ededed;
  margin-right: 40px;
}
.jz_sure {
  background: #399fdf;
  color: white;
}
.jz_bg {
  background: #f6f6f6;
}
.jz_xzwj {
    position: absolute;
  width: 90px;
  padding: 8px 0px;
  top: -8px;
  right:-96px;
  text-align: center;
  color: white;
  background: #1abc9c;
  border-radius: 2px;
  cursor: pointer;
}
</style>
