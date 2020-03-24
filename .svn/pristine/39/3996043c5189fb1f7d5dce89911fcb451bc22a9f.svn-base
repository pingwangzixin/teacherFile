<template>
  <div>
    <div class="jz_tong">
      <div class="jz_title" v-show="!flag">
        <ul>
          <li
            v-for="(v,i) in title"
            :key="i"
            :class="{activeborder:navIndex==i}"
            @click="navIndex=i"
          >{{v}}</li>
        </ul>
        <span class="jz_add" @click="addHonor">新增</span>
      </div>
      <div class="jz_title" v-show="flag">
        <span class="jz_lv">新增论文情况</span>
      </div>
      <div class="jz_tab" v-show="!flag">
        <table v-show="navIndex==0">
          <thead>
            <tr>
              <th>论著名称</th>
              <th>专业</th>
              <th>参与身份</th>
              <th>字数</th>
              <th>出版社</th>
              <th width="124">时间</th>
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
          <tbody v-for="(item,index) in dataList0" :key="index">
            <tr>
              <td v-text="item.name"></td>
              <td v-text="item.major"></td>
              <td v-text="item.idfen"></td>
              <td v-text="item.num"></td>
              <td v-text="item.place"></td>
              <td v-text="item.time"></td>
              <td v-text="item.state"
               :class="{colorlv:item.state=='已通过',colorhui:item.state=='未通过',colorred:item.state=='审核中'}"
              ></td>
              <td class="jz_ts">
                <span @click="lookInfoThesisZhu(index)">查看详情</span>
                <span :class="{activeys:index==editIndex}" @click="edit(index)">编辑</span>
                <span>删除</span>
              </td>
            </tr>
            <tr v-if="editIndex==index">
              <td colspan="8">
                <div class="jz_editkh jz_bg">
                  <p>
                    <span>
                      <label for="lunzhum">论著名称</label>
                    </span>
                    <input class="jz_inp" id="lunzhum" type="text" placeholder="请输入名称" />
                  </p>
                  <p>
                    <span>时间</span>
                    <input type="date" />
                  </p>
                  <p>
                    <span>
                      <label for="major">专业</label>
                    </span>
                    <input class="jz_inp" id="major" type="text" placeholder="请输入名称" />
                  </p>
                  <p>
                    <span>
                      <label for="wordnum">字数</label>
                    </span>
                    <input class="jz_inp" id="wordnum" type="text" placeholder="请输入字数" />
                  </p>
                  <p>
                    <span>参与身份</span>
                    <select>
                      <option value>其他</option>
                    </select>
                  </p>
                  <p>
                    <span>
                      <label for="place">出版社</label>
                    </span>
                    <input class="jz_inp" id="place" type="text" placeholder="请输入名称" />
                  </p>

                  <p class="jz_p">
                    <span>附件</span>
                    <label for="xzfile">
                      <span class="jz_xzwj">上传</span>
                      <span class="jz_feng">(包含封面、封底、目录) (非必填项)</span>
                      <input type="file" id="xzfile" hidden accept="image/jpg, image/png,image/jpeg,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/x-zip-compressed" />
                    </label>
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
        <!-- 论文发表表格 -->
        <table v-show="navIndex==1">
          <thead>
            <tr>
              <th>论文名称</th>
              <th>学科</th>
              <th>参与身份</th>
              <th>级别</th>
              <th>字数</th>
              <th>刊物名称</th>
              <th>时间</th>
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
          <tbody v-for="(item,index) in dataList1" :key="index">
            <tr>
              <td v-text="item.name"></td>
              <td v-text="item.major"></td>
              <td v-text="item.level"></td>
              <td v-text="item.idfen"></td>
              <td v-text="item.num"></td>
              <td v-text="item.place"></td>
              <td v-text="item.time"></td>
              <td
                v-text="item.state"
                :class="{colorlv:item.state=='已通过',colorhui:item.state=='未通过',colorred:item.state=='审核中'}"
              ></td>
              <td class="jz_ts">
                <span @click="lookInfoThesisPublic(index)">查看详情</span>
                <span
                  :class="{activeys:index==thesisPublicFlag}"
                  @click="editThesisPublic(index)"
                >编辑</span>
                <span>删除</span>
              </td>
            </tr>
            <tr v-if="thesisPublicFlag==index">
              <td colspan="9">
                <div class="jz_editkh jz_bg">
                  <p>
                    <span>
                      <label for="lunwenm">论文名称</label>
                    </span>
                    <input class="jz_inp" id="lunwenm" type="text" placeholder="请输入名称" />
                  </p>
                  <p class="jz_p">
                    <span>级别</span>
                    <label v-for="(item,index) in level" :key="index">
                      <input class="jz_radio" type="radio" name="levels4" :value="item" />
                      <span v-text="item"></span>
                    </label>
                  </p>
                  <p>
                    <span>时间</span>
                    <input type="date" />
                  </p>
                  <p>
                    <span>学段</span>
                    <select>
                      <option value>其他</option>
                    </select>
                  </p>
                  <p>
                    <span>学科</span>
                    <select>
                      <option value>其他</option>
                    </select>
                  </p>
                  <p>
                    <span>
                      <label for="wordnum1">字数</label>
                    </span>
                    <input class="jz_inp" id="wordnum1" type="text" placeholder="请输入字数" />
                  </p>
                  <p>
                    <span>参与身份</span>
                    <select>
                      <option value>其他</option>
                    </select>
                  </p>
                  <p>
                    <span>
                      <label for="kanwum">刊物名称</label>
                    </span>
                    <input class="jz_inp" id="kanwumm" type="text" placeholder="请输入名称" />
                  </p>
                  <p>
                    <span>
                      <label for="cn">CN刊号</label>
                    </span>
                    <input class="jz_inp" id="cn" type="text" placeholder="请输入名称" />
                  </p>
                  <p class="jz_p">
                    <span>内容</span>
                    <label for="xznr">
                      <span class="jz_xzwj">上传</span>
                      <span class="jz_feng">(非必填项)</span>
                      <input type="file" id="xznr" hidden accept="image/jpg, image/png,image/jpeg,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/x-zip-compressed" />
                    </label>
                  </p>

                  <p class="jz_p">
                    <span>附件</span>
                    <label for="xzfile">
                      <span class="jz_xzwj">上传</span>
                      <span class="jz_feng">(包含封面、封底、目录) (非必填项)</span>
                      <input type="file" id="xzfile" hidden accept="image/jpg, image/png,image/jpeg,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/x-zip-compressed" />
                    </label>
                  </p>
                  <div class="jz_sel jz_newsel">
                    <span class="jz_cancle" @click="thesisPublicFlag=null">取消</span>
                    <span class="jz_sure">确定</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- 论文获奖表格 -->
        <table v-show="navIndex==2">
          <thead>
            <tr>
              <th width="288">论文名称</th>
              <th width="60">级别</th>
              <th>获奖情况</th>
              <th width="120">时间</th>
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
          <tbody v-for="(item,index) in dataList2" :key="index">
            <tr>
              <td v-text="item.name"></td>
              <td v-text="item.level"></td>
              <td v-text="item.place"></td>
              <td v-text="item.time"></td>
              <td
                v-text="item.state"
                :class="{colorlv:item.state=='已通过',colorhui:item.state=='未通过',colorred:item.state=='审核中'}"
              ></td>
              <td class="jz_ts">
                <span @click="lookInfo(index)">查看详情</span>
                <span :class="{activeys:index==thesisPrizeFlag}" @click="editThesisPrize(index)">编辑</span>
                <span>删除</span>
              </td>
            </tr>
            <tr v-if="thesisPrizeFlag==index">
              <td colspan="6">
                <div class="jz_editkh jz_bg">
                  <p>
                    <span>
                      <label for="lunwen">论文名称</label>
                    </span>
                    <input class="jz_inp" id="lunwen" type="text" placeholder="请输入名称" />
                  </p>
                  <p class="jz_p">
                    <span>级别</span>
                    <label v-for="(item,index) in level" :key="index">
                      <input class="jz_radio" type="radio" name="levels5" :value="item" />
                      <span v-text="item"></span>
                    </label>
                  </p>
                  <p>
                    <span>时间</span>
                    <input type="date" />
                  </p>
                  <p>
                    <span>获奖情况</span>
                    <select>
                      <option value>其他</option>
                    </select>
                  </p>
                  <p>
                    <span>
                      <label for="zz">组织单位</label>
                    </span>
                    <input class="jz_inp" id="zz" type="text" placeholder="请输入名称" />
                  </p>
                  <p>
                    <span>
                      <label for="Fz">发证单位</label>
                    </span>
                    <input class="jz_inp" id="Fz" type="text" placeholder="请输入名称" />
                  </p>
                  <p class="jz_p">
                    <span>内容</span>
                    <label for="xznr">
                      <span class="jz_xzwj">上传</span>
                      <span class="jz_feng">(非必填项)</span>
                      <input type="file" id="xznr" hidden accept="image/jpg, image/png,image/jpeg,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/x-zip-compressed" />
                    </label>
                  </p>
                  <p class="jz_p">
                    <span>荣誉证书</span>
                    <span class="jz_sp">
                      <label v-for="(item,index) in honorBook" :key="index" :for="'a'+index">
                        <input
                          class="jz_radio"
                          type="radio"
                          name="ryz1"
                          v-model="honRadio"
                          :value="item"
                          :id="'a'+index"
                        />
                        <span v-text="item"></span>
                        <label for="xzfile" v-show="index==1&&honRadio=='上传文件'">
                          <span class="jz_xzwj">选择文件</span>
                          <input type="file" id="xzfile" hidden accept="image/jpg, image/png,image/jpeg,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/x-zip-compressed" />
                        </label>
                      </label>
                      <span class="jz_an" v-show="handOrAuto">
                        <input type="text" class="jz_inp" placeholder="请输入编号" />
                      </span>
                    </span>
                  </p>

                  <div class="jz_sel jz_newsel">
                    <span class="jz_cancle" @click="thesisPrizeFlag=null">取消</span>
                    <span class="jz_sure">确定</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 新增 -->
      <div class="jz_editkh" v-show="flag">
        <p class="jz_dset">
          <label v-for="(item,index) in title" :key="index">
            <input class="jz_radio" type="radio" name="levels8" v-model="activeTitle" :value="item" />
            <span v-text="item"></span>
          </label>
        </p>
        <!-- 新增论著情况 -->
        <div v-show="activeTitle=='论著情况'">
          <p>
            <span>
              <label for="lunzhum">论著名称</label>
            </span>
            <input class="jz_inp" id="lunzhum" type="text" placeholder="请输入名称" />
          </p>
          <p>
            <span>时间</span>
            <input type="date" />
          </p>
          <p>
            <span>
              <label for="major">专业</label>
            </span>
            <input class="jz_inp" id="major" type="text" placeholder="请输入名称" />
          </p>
          <p>
            <span>
              <label for="wordnum">字数</label>
            </span>
            <input class="jz_inp" id="wordnum" type="text" placeholder="请输入字数" />
          </p>
          <p>
            <span>参与身份</span>
            <select>
              <option value>其他</option>
            </select>
          </p>
          <p>
            <span>
              <label for="place">出版社</label>
            </span>
            <input class="jz_inp" id="place" type="text" placeholder="请输入名称" />
          </p>

          <p class="jz_p">
            <span>附件</span>
            <label for="xzfile">
              <span class="jz_xzwj">上传</span>
              <span class="jz_feng">(包含封面、封底、目录) (非必填项)</span>
              <input type="file" id="xzfile" hidden accept="image/jpg, image/png,image/jpeg,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/x-zip-compressed" />
            </label>
          </p>
            <div class="jz_sel jz_newsel">
            <span class="jz_cancle" @click="flag=false">取消</span>
            <span class="jz_sure">确定</span>
            </div>
        </div>
    <!--论文发表  -->
            <div v-show="activeTitle=='论文发表'">
                  <p>
                    <span>
                      <label for="lunwenm">论文名称</label>
                    </span>
                    <input class="jz_inp" id="lunwenm" type="text" placeholder="请输入名称" />
                  </p>
                  <p class="jz_p">
                    <span>级别</span>
                    <label v-for="(item,index) in level" :key="index">
                      <input class="jz_radio" type="radio" name="levels4" :value="item" />
                      <span v-text="item"></span>
                    </label>
                  </p>
                  <p>
                    <span>时间</span>
                    <input type="date" />
                  </p>
                  <p>
                    <span>学段</span>
                    <select>
                      <option value='请选择学段' disabled selected>请选择学段</option>
                      <option v-for="(v,i) in studyDuan" :key="i" :value="v">{{v}}</option>
                    </select>
                  </p>
                  <p>
                    <span>学科</span>
                    <select>
                      <option value='请选择学科' disabled selected>请选择学科</option>
                      <option v-for="(v,i) in studySubject" :key="i" :value="v">{{v}}</option>
                    </select>
                  </p>
                  <p>
                    <span>
                      <label for="wordnum1">字数</label>
                    </span>
                    <input class="jz_inp" id="wordnum1" type="text" placeholder="请输入字数" />
                  </p>
                  <p>
                    <span>参与身份</span>
                    <select>
                      <option value='请选择' disabled selected>请选择</option>
                      <option v-for="(v,i) in takePartId" :key="i" :value="v">{{v}}</option>
                    </select>
                  </p>
                  <p>
                    <span>
                      <label for="kanwum">刊物名称</label>
                    </span>
                    <input class="jz_inp" id="kanwumm" type="text" placeholder="请输入名称" />
                  </p>
                  <p>
                    <span>
                      <label for="cn">CN刊号</label>
                    </span>
                    <input class="jz_inp" id="cn" type="text" placeholder="请输入名称" />
                  </p>
                  <p class="jz_p">
                    <span>内容</span>
                    <label for="xznr">
                      <span class="jz_xzwj">上传</span>
                      <span class="jz_feng">(非必填项)</span>
                      <input type="file" id="xznr" hidden accept="image/jpg, image/png,image/jpeg,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/x-zip-compressed" />
                    </label>
                  </p>

                  <p class="jz_p">
                    <span>附件</span>
                    <label for="xzfile">
                      <span class="jz_xzwj">上传</span>
                      <span class="jz_feng">(包含封面、封底、目录) (非必填项)</span>
                      <input type="file" id="xzfile" hidden accept="image/jpg, image/png,image/jpeg,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/x-zip-compressed" />
                    </label>
                  </p>
                  <div class="jz_sel jz_newsel">
                        <span class="jz_cancle" @click="flag=false">取消</span>
                        <span class="jz_sure">确定</span>
                  </div>
            </div>

            <!-- 论文获奖 -->
            <div v-show="activeTitle=='论文获奖'">
 <p>
                    <span>
                      <label for="lunwen">论文名称</label>
                    </span>
                    <input class="jz_inp" id="lunwen" type="text" placeholder="请输入名称" />
                  </p>
                  <p class="jz_p">
                    <span>级别</span>
                    <label v-for="(item,index) in level" :key="index">
                      <input class="jz_radio" type="radio" name="levels5" :value="item" />
                      <span v-text="item"></span>
                    </label>
                  </p>
                  <p>
                    <span>时间</span>
                    <input type="date" />
                  </p>
                  <p>
                    <span>获奖情况</span>
                    <select>
                      <option value='请选择' disabled selected>请选择</option>
                      <option v-for="(v,i) in prizeCase" :key="i" :value="v" :class="{jz_lv:v=='+自定义'}">{{v}}</option>
                    </select>
                  </p>
                  <p>
                    <span>
                      <label for="zz">组织单位</label>
                    </span>
                    <input class="jz_inp" id="zz" type="text" placeholder="请输入名称" />
                  </p>
                  <p>
                    <span>
                      <label for="Fz">发证单位</label>
                    </span>
                    <input class="jz_inp" id="Fz" type="text" placeholder="请输入名称" />
                  </p>
                  <p class="jz_p">
                    <span>内容</span>
                    <label for="xznr">
                      <span class="jz_xzwj">上传</span>
                      <span class="jz_feng">(非必填项)</span>
                      <input type="file" id="xznr" hidden accept="image/jpg, image/png,image/jpeg,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/x-zip-compressed" />
                    </label>
                  </p>
                  <p class="jz_p">
                    <span>荣誉证书</span>
                    <span class="jz_sp">
                      <label v-for="(item,index) in honorBook" :key="index" :for="'a'+index">
                        <input
                          class="jz_radio"
                          type="radio"
                          name="ryz1"
                          v-model="honRadio"
                          :value="item"
                          :id="'a'+index"
                        />
                        <span v-text="item"></span>
                        <label for="xzfile" v-show="index==1&&honRadio=='上传文件'">
                          <span class="jz_xzwj">选择文件</span>
                          <input type="file" id="xzfile" hidden accept="image/jpg, image/png,image/jpeg,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/x-zip-compressed" />
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
    <!-- 最外层div -->
  </div>
</template>
<script>
import { teaRelevant } from "@/api";
export default {
  data() {
    return {
      state: false,
      flag: false, //显示新增
      editIndex: null, //控制显示编辑
      thesisPublicFlag: null, //论文发表编辑控制
      thesisPrizeFlag: null, //论文获奖编辑控制
      honRadio: "", //荣誉单选
      levelRadio: "", //级别单选
      statData: ["全部", "已通过", "未通过", "审核中"],
      selectIndex: "",
      level: ["国家级", "省级", "市级", "区级", "集团/校级"],
      honorBook: ["手动输号", "上传文件"],
      //  论文发表 
      studyDuan:['小学','初中','高中','其他'],//论文发表  学段
      studySubject:['语文','数学','英语','信息技术'],//学科
      takePartId:['独立','第一作者','第二作者','其他'],//论文发表参与身份
      //论文获奖
      prizeCase:['一等奖','二等奖','三等奖','+自定义'],//获奖情况


      handOrAuto: false, //手动还是上传
      dataList0: [
        {
          name: "小学信息技术与初中信息技术",
          major: "信息技术",
          idfen: "其他",
          num: "85000",
          place: "北京凤凰科技树",
          time: "2019年03月01日",
          state: "已通过",
          id: "1"
        },
        {
          name: "小学信息技术与初中信息技术",
          major: "信息技术",
          idfen: "其他",
          num: "85000",
          place: "北京凤凰科技树",
          time: "2019年03月01日",
          state: "已通过",
          id: "2"
        },
        {
          name: "小学信息技术与初中信息技术",
          major: "信息技术",
          idfen: "其他",
          num: "85000",
          place: "北京凤凰科技树",
          time: "2019年03月01日",
          state: "已通过",
          id: "3"
        },
        {
          name: "小学信息技术与初中信息技术",
          major: "信息技术",
          idfen: "其他",
          num: "85000",
          place: "北京凤凰科技树",
          time: "2019年03月01日",
          state: "已通过",
          id: "4"
        }
      ],
      dataList1: [
        {
          name: "小学信息技术与初中信息技术",
          major: "信息技术",
          level: "省级",
          idfen: "其他",
          num: "85000",
          place: "北京凤凰科技树",
          time: "2019年03月01日",
          state: "已通过",
          id: "1"
        },
        {
          name: "小学信息技术与初中信息技术",
          major: "信息技术",
          level: "省级",
          idfen: "其他",
          num: "85000",
          place: "北京凤凰科技树",
          time: "2019年03月01日",
          state: "未通过",
          id: "2"
        },
        {
          name: "小学信息技术与初中信息技术",
          major: "信息技术",
          level: "省级",
          idfen: "其他",
          num: "85000",
          place: "北京凤凰科技树",
          time: "2019年03月01日",
          state: "审核中",
          id: "3"
        },
        {
          name: "小学信息技术与初中信息技术",
          major: "信息技术",
          level: "省级",
          idfen: "其他",
          num: "85000",
          place: "北京凤凰科技树",
          time: "2019年03月01日",
          state: "已通过",
          id: "4"
        }
      ],
      dataList2: [
        {
          name: "小学信息技术与初中信息技术",
          major: "信息技术",
          level: "省级",
          idfen: "其他",
          num: "85000",
          place: "北京凤凰科技树",
          time: "2019年03月01日",
          state: "已通过",
          id: "1"
        },
        {
          name: "小学信息技术与初中信息技术",
          major: "信息技术",
          level: "省级",
          idfen: "其他",
          num: "85000",
          place: "北京凤凰科技树",
          time: "2019年03月01日",
          state: "未通过",
          id: "2"
        },
        {
          name: "小学信息技术与初中信息技术",
          major: "信息技术",
          level: "省级",
          idfen: "其他",
          num: "85000",
          place: "北京凤凰科技树",
          time: "2019年03月01日",
          state: "审核中",
          id: "3"
        },
        {
          name: "小学信息技术与初中信息技术",
          major: "信息技术",
          level: "省级",
          idfen: "其他",
          num: "85000",
          place: "北京凤凰科技树",
          time: "2019年03月01日",
          state: "已通过",
          id: "4"
        }
      ],
      title: ["论著情况", "论文发表", "论文获奖"],
      activeTitle: "论著情况",
      navIndex: 0
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

    //弹出编辑框
    edit(index) {
      this.editIndex = index;
    },

    lookInfo() {
      this.$router.push({
        path: "/index/teaHonorShow",
        query: { from: "publicclass", id: "999" }
      });
    },
    lookInfoThesisZhu() {
      this.$router.push({
        path: "/index/teaHonorShow",
        query: { from: "thesiszhu", id: "999" }
      });
    },

    // 论文发表
    // 编辑论文发表
    editThesisPublic(index) {
      this.thesisPublicFlag = index;
    },
    lookInfoThesisPublic(index) {
      this.$router.push({
        path: "/index/teaHonorShow",
        query: { from: "thesispublic", id: "999" }
      });
    },
    //论文获奖
    //编辑论文获奖
    editThesisPrize(index) {
      this.thesisPrizeFlag = index;
    }
  },
  watch: {
    //监听荣誉证书添加方式
    honRadio: function(n) {
     
      if (n == "手动输号") {
        this.handOrAuto = true;
      } else {
        this.handOrAuto = false;
      }
    },

    //监听级别方式
    levelRadio: function(n) {
     
    },

    //监听标题的radio
    activeTitle: function(newVal) {
      
      this.activeTitle=newVal;
    }
  }
};
</script>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  white-space: nowrap;

  /* word-wrap:break-word; */
}
tr,
th,
td {
  border: solid 1px #dddddd;
  height: 40px;
  text-align: center;
  overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
  text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...)；需与overflow:hidden;一起使用。*/
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
.activeborder {
  border-bottom: solid 2px #5093e1;
  color: #5093e1;
}
.jz_feng {
  color: #666666;
  letter-spacing: 2px;
}
/* css */
.jz_tong .jz_title {
  box-sizing: border-box;
  padding: 0px 20px;
  height: 56px;
  line-height: 56px;
  border-bottom: solid 1px #dddddd;
  /* color: #5093e1; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.jz_lv {
  color: #5093e1;
}
.jz_title ul {
  display: flex;
}
.jz_title ul li {
  margin-right: 50px;
  letter-spacing: 2px;
  cursor: pointer;
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
  overflow: visible !important;
}
.jz_xia {
  height: 0px;
  border-left: solid 5px transparent;
  border-right: solid 5px transparent;
  border-top: solid 8px #cfcece;
  position: absolute;
  top: 50%;
  right: 14px;
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
  left: 12px;
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
.jz_editkh .jz_dset label {
  margin-right: 20px;
}
.jz_p > label {
  margin-right: 16px;
}
.jz_inp {
  width: 320px;
}
.jz_radio {
  width: 16px;
  height: 16px;
  vertical-align: -4px;
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
  display: inline-block;
  width: 90px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: white;
  background: #1abc9c;
  border-radius: 2px;
  cursor: pointer;
}
.jz_editkh .jz_auto {
  background: #e5f1ff;
  height: 32px;
}
</style>
