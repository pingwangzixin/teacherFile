<template >
  <div>
    <!-- 个人档案 -->
    <div class="jz_cright_1">
      <h3>
        {{Teacher}}老师的个人档案
        <span class="fr jz_set">
          <b>所在单位:</b>北京市东城区两秀幼儿园
        </span>
      </h3>
      <div class="jz_tablefile">
        <!-- 个人基本信息 -->
        <div class="jz_tou">
          <h4>人员基本信息</h4>
          <span class="jz_xian"></span>
          <div class="jz_bianji" v-show="viewOrEdit=='editTeacher'">
            <div class="jz_bg">
              <span @click="editOne" v-show="!showOne">编辑</span>
            </div>
          </div>
          <div class="jz_bian" v-show="showOne">
            <div class="jz_bg">
              <span @click="peopleBaseSure()">确认</span>
            </div>
            <div class="jz_bg jz_bgx">
              <span @click="peopleBaseCancle()" class="cancle">取消</span>
            </div>
          </div>
        </div>
        <table class="jz_all">
          <tr>
            <td>姓名</td>
            <td>
              <span v-show="!editFlag" v-text="baseData.realname"></span>
              <input type="text" v-model="baseData.realname" v-show="editFlag" />
            </td>
            <td>性别</td>
            <td>
              <span v-show="!editFlag" v-text="baseData.sex"></span>
              <select name id v-model="baseData.sex" v-show="editFlag">
                <option value="男">男</option>
                <option value="女">女</option>
              </select>
            </td>
            <td>出生年月</td>
            <td width="110">
              <span v-show="!editFlag" v-text="baseData.birthday"></span>
              <input
                type="month"
                v-model="baseData.birthday"
                v-show="editFlag"
                class="jz_date"
                @keydown.prevent
              />
            </td>
            <td>年龄</td>
            <td>
              <span v-show="!editFlag" v-text="baseData.age"></span>
              <input
                type="text"
                v-model="baseData.age"
                v-show="editFlag"
                onkeyup="value=value.replace(/[^0-9]/g,'')"
                maxlength="2"
              />
            </td>
            <!-- <td rowspan="4" colspan="2"  @mouseover="moveFlag=true" @mouseout="moveFlag=false"> -->
            <td rowspan="4" colspan="2">
              <span v-show="!editFlag">照片</span>
              <div class="jz_shangchuan" v-show="editFlag&&moveFlag">
                <!-- <div > -->
                <input type="file" :ref="'shangc'" :id="'sc1'" hidden @change="getFileContent()" />
                <label :for="'sc1'" v-show="editFlag&&moveFlag">上传</label>
                <!-- <label :for="'sc1'"  class="jz_shangchuan">上传</label> -->
              </div>
            </td>
          </tr>

          <tr>
            <td>曾用名</td>
            <td>
              <span v-show="!editFlag" v-text="baseData.oldname"></span>
              <input type="text" v-model="baseData.oldname" v-show="editFlag" />
            </td>
            <td>身份证类型</td>
            <td>
              <span v-show="!editFlag" v-text="baseData.idType"></span>
              <select name id v-model="baseData.idType" v-show="editFlag">
                <option :value="v" v-for="(v,i) in idType" :key="i">{{v}}</option>
              </select>
            </td>
            <td>身份证号</td>
            <td colspan="3">
              <span v-show="!editFlag" v-text="baseData.idCard"></span>
              <input
                type="text"
                v-model="baseData.idCard"
                v-show="editFlag"
                onkeyup="value=value.replace(/[^0-9]/g,'')"
                maxlength="18"
              />
            </td>
          </tr>
          <!-- <tr> -->
          <!-- <td colspan="8" class="jz_tab2">
          <table class="jz_table2">-->
          <tr>
            <td>国籍/地区</td>
            <td>
              <span v-show="!editFlag" v-text="baseData.userNation"></span>
              <input type="text" v-model="baseData.userNation" v-show="editFlag" />
            </td>
            <td>籍贯</td>
            <td>
              <span v-show="!editFlag" v-text="baseData.userJiguan"></span>
              <input type="text" v-model="baseData.userJiguan" v-show="editFlag" />
            </td>
            <td>出生地</td>
            <td colspan="3">
              <span v-show="!editFlag" v-text="baseData.birthPlace"></span>
              <input type="text" v-model="baseData.birthPlace" v-show="editFlag" />
            </td>
          </tr>
          <tr>
            <td>港澳台侨</td>
            <td>
              <span v-show="!editFlag" v-text="baseData.userOther"></span>
              <select name id v-show="editFlag" v-model="baseData.userOther">
                <option :value="v" v-for="(v,i) in userOther" :key="i">{{v}}</option>
              </select>
            </td>
            <td>移动电话</td>
            <td>
              <span v-show="!editFlag" v-text="baseData.userPhone"></span>
              <input
                type="text"
                v-model="baseData.userPhone"
                onkeyup="value=value.replace(/[^0-9]/g,'')"
                maxlength="11"
                v-show="editFlag"
              />
            </td>
            <td>电子信箱</td>
            <td colspan="3">
              <span v-show="!editFlag" v-text="baseData.userEmail"></span>
              <input type="text" v-model="baseData.userEmail" v-show="editFlag" />
            </td>
          </tr>
          <tr>
            <td>健康状况</td>
            <td width="88px">
              <span v-show="!editFlag" v-text="baseData.health"></span>
              <select name id v-show="editFlag" v-model="baseData.health">
                <option :value="v" v-for="(v,i) in health" :key="i">{{v}}</option>
              </select>
            </td>
            <td>婚姻状况</td>
            <td width="108px">
              <span v-show="!editFlag" v-text="baseData.marriage"></span>
              <select name id v-show="editFlag" v-model="baseData.marriage">
                <option :value="v" v-for="(v,i) in marriage" :key="i">{{v}}</option>
              </select>
            </td>
            <td>宗教信仰</td>
            <td width="56px">
              <span v-show="!editFlag" v-text="baseData.faith"></span>
              <input type="text" v-model="baseData.faith" v-show="editFlag" />
            </td>
            <td width="90px">政治面貌</td>
            <td width="64px">
              <span v-show="!editFlag" v-text="baseData.politic">中共预备党员</span>
              <select name id v-show="editFlag" v-model="baseData.politic">
                <option :value="v" v-for="(v,i) in politic" :key="i">{{v}}</option>
              </select>
            </td>
            <td width="64px">参加党派时间</td>
            <td>
              <span v-show="!editFlag" v-text="baseData.politicTime"></span>
              <input
                type="date"
                name
                id
                v-show="editFlag"
                class="jz_cdtime"
                v-model="baseData.politicTime"
                @keydown.prevent
              />
            </td>
          </tr>
          <tr>
            <td>人员类别</td>
            <td>
              <span v-show="!editFlag" v-text="baseData.type">专任教师</span>
              <select name id v-show="editFlag" v-model="baseData.type">
                <option :value="v" v-for="(v,i) in type" :key="i">{{v}}</option>
              </select>
            </td>
            <td>是否在编</td>
            <td>
              <span v-show="!editFlag" v-text="baseData.isCompilation"></span>
              <select name id v-show="editFlag" v-model="baseData.isCompilation">
                <option value="是">是</option>
                <option value="否">否</option>
              </select>
            </td>
            <td>非在编用人形式</td>
            <td>
              <span v-show="!editFlag" v-text="baseData.complationType"></span>
              <select name id v-show="editFlag" v-model="baseData.complationType">
                <option value="人事代理">人事代理</option>
                <option value="劳务派遣">劳务派遣</option>
                <option value="其他">其他</option>
              </select>
            </td>
            <td>参加工作年月</td>
            <td>
              <span v-show="!editFlag" v-text="baseData.workDate"></span>
              <input
                type="date"
                name
                id
                v-show="editFlag"
                v-model="baseData.workDate"
                @keydown.prevent
              />
            </td>
            <td>工龄</td>
            <td>
              <span v-show="!editFlag" v-text="baseData.workYear"></span>
              <input
                type="text"
                name
                id
                v-show="editFlag"
                v-model="baseData.workYear"
                onkeyup="value=value.replace(/[^0-9]/g,'')"
                maxlength="2"
              />
            </td>
          </tr>
          <tr>
            <td>从教年月</td>
            <td colspan="2">
              <span v-show="!editFlag" v-text="baseData.eduDate"></span>
              <input
                type="date"
                name
                id
                v-show="editFlag"
                v-model="baseData.eduDate"
                @keydown.prevent
              />
            </td>
            <td>从事特教起始年月</td>
            <td colspan="2">
              <span v-show="!editFlag" v-text="baseData.eduSpecialDate"></span>
              <input
                type="date"
                name
                id
                v-show="editFlag"
                v-model="baseData.eduSpecialDate"
                @keydown.prevent
              />
            </td>
            <td>不担任教师年数</td>
            <td>
              <span v-show="!editFlag" v-text="baseData.noteacherNum"></span>
              <input type="text" name id v-show="editFlag" v-model="baseData.noteacherNum" />
            </td>
            <td>教龄</td>
            <td>
              <span v-show="!editFlag" v-text="baseData.teachingYear"></span>
              <input
                type="text"
                name
                id
                v-show="editFlag"
                v-model="baseData.teachingYear"
                onkeyup="value=value.replace(/[^0-9]/g,'')"
                maxlength="2"
              />
            </td>
          </tr>
          <tr>
            <td>任教学段</td>
            <td colspan="2">
              <span v-show="!editFlag" v-text="baseData.level"></span>
              <select name id v-show="editFlag" v-model="baseData.level">
                <option :value="v" v-for="(v,i) in level" :key="i">{{v}}</option>
              </select>
            </td>
            <td>任教学科</td>
            <td colspan="2">
              <span v-show="!editFlag" v-text="baseData.subject"></span>
              <select name id v-show="editFlag" v-model="baseData.subject">
                <option value="初中信息技术">初中信息技术</option>
                <option value="幼儿教育">幼儿教育</option>
              </select>
            </td>
            <td>任课情况</td>
            <td colspan="3">
              <span v-show="!editFlag" v-text="baseData.courseState"></span>
              <select name id v-show="editFlag" v-model="baseData.courseState">
                <option :value="v" v-for="(v,i) in courseState" :key="i">{{v}}</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>教育技能能力证书</td>
            <td colspan="2">
              <span v-show="!editFlag" v-text="baseData.eduCertificate"></span>
              <select name id v-show="editFlag" v-model="baseData.eduCertificate">
                <option value="初级">初级</option>
                <option value="中级">中级</option>
                <option value="高级">高级</option>
                <option value="无">无</option>
              </select>
            </td>
            <td>普通话等级</td>
            <td colspan="2">
              <span v-show="!editFlag" v-text="baseData.chineseLevel"></span>
              <select name id v-show="editFlag" v-model="baseData.chineseLevel">
                <option :value="v" v-for="(v,i) in chineseLevel" :key="i">{{v}}</option>
              </select>
            </td>
            <td>英语水平</td>
            <td colspan="3">
              <span v-show="!editFlag" v-text="baseData.englishLevel"></span>
              <select name id v-show="editFlag" v-model="baseData.englishLevel">
                <option :value="v" v-for="(v,i) in englishLevel" :key="i">{{v}}</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>签订合同情况</td>
            <td colspan="2">
              <span v-show="!editFlag" v-text="baseData.contractInfo"></span>
              <select name id v-show="editFlag" v-model="baseData.contractInfo">
                <option value="无">无</option>
                <option value=" 聘用合同">聘用合同</option>
                <option value="劳动合同">劳动合同</option>
              </select>
            </td>
            <td>是否签订聘用合同</td>
            <td colspan="2">
              <span v-show="!editFlag" v-text="baseData.contractState"></span>
              <select name id v-show="editFlag" v-model="baseData.contractState">
                <option value="是">是</option>
                <option value="无">否</option>
              </select>
            </td>
            <td>聘用合同期限</td>
            <td colspan="3">
              <span v-show="!editFlag" v-text="baseData.contractYear"></span>
              <input
                type="text"
                name
                id
                v-show="editFlag"
                v-model="baseData.contractYear"
                onkeyup="value=value.replace(/[^0-9]/g,'')"
                maxlength="2"
              />
            </td>
          </tr>
          <tr>
            <td>进校时间</td>
            <td colspan="2">
              <span v-show="!editFlag" v-text="baseData.inschoolDate"></span>
              <input
                type="date"
                name
                id
                v-show="editFlag"
                v-model="baseData.inschoolDate"
                @keydown.prevent
              />
            </td>
            <td>进校方式</td>
            <td colspan="2">
              <span v-show="!editFlag" v-text="baseData.inschoolType"></span>
              <select name id v-show="editFlag" v-model="baseData.inschoolType">
                <option :value="v" v-for="(v,i) in inschoolType" :key="i">{{v}}</option>
              </select>
            </td>
            <td>来源地区</td>
            <td>
              <span v-show="!editFlag" v-text="baseData.sourcePlace"></span>
              <input type="text" name id v-show="editFlag" v-model="baseData.sourcePlace" />
            </td>
            <td>来源地区类别</td>
            <td>
              <span v-show="!editFlag" v-text="baseData.sourcePlaceType"></span>
              <select name id v-show="editFlag" v-model="baseData.sourcePlaceType">
                <option :value="v" v-for="(v,i) in sourcePlaceType" :key="i">{{v}}</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>现任岗位</td>
            <td colspan="2">
              <span v-show="!editFlag" v-text="baseData.currentJob"></span>
              <select name id v-show="editFlag" v-model="baseData.currentJob">
                <option :value="v" v-for="(v,i) in currentJob" :key="i">{{v}}</option>
              </select>
            </td>
            <td>在岗情况</td>
            <td colspan="2">
              <span v-show="!editFlag" v-text="baseData.jobState"></span>
              <select name id v-show="editFlag" v-model="baseData.jobState">
                <option :value="v" v-for="(v,i) in jobState" :key="i">{{v}}</option>
              </select>
            </td>
            <td>岗位等级</td>
            <td>
              <span v-show="!editFlag" v-text="baseData.jobLevel"></span>
              <select name id v-show="editFlag" v-model="baseData.jobLevel">
                <option :value="v" v-for="(v,i) in jobLevel" :key="i">{{v}}</option>
              </select>
            </td>
            <td>是否交流轮岗</td>
            <td>
              <span v-show="!editFlag" v-text="baseData.jobWorkShift"></span>
              <select name id v-show="editFlag" v-model="baseData.jobWorkShift">
                <option value="否">否</option>
                <option value="是">是</option>
              </select>
            </td>
          </tr>
        </table>

        <!-- 学历学位信息 -->
        <div class="jz_tou">
          <h4>学历学位信息</h4>
          <span class="jz_xian"></span>
          <div class="jz_bianji" v-show="viewOrEdit=='editTeacher'">
            <div class="jz_bg">
              <span @click="editTwo" v-show="!showTwo">编辑</span>
            </div>
          </div>
          <div class="jz_bian" v-show="showTwo">
            <div class="jz_bg">
              <span @click="degreeInfoSure()">确认</span>
            </div>
            <div class="jz_bg jz_bgx">
              <span @click="degreeInfoCancle()" class="cancle">取消</span>
            </div>
          </div>
        </div>
        <table class="jz_all">
          <tr>
            <td width="120px" class="wai"></td>
            <td width="120px">名称</td>
            <td width="120px">专业</td>
            <td colspan="2">获得最高学历的院校或机构</td>
            <td colspan="2">是否省内</td>
          </tr>
          <tr>
            <td>最高学历</td>
            <td>
              <span v-show="!editFlagTwo" v-text="teaEducationData.hightDiploma"></span>
              <select name id v-show="editFlagTwo" v-model="teaEducationData.hightDiploma">
                <option v-for="(v,i) in hightDiploma" :value="v" :key="i">{{v}}</option>
              </select>
            </td>
            <td>
              <span v-show="!editFlagTwo" v-text="teaEducationData.hightMajor"></span>
              <input type="text" name id v-show="editFlagTwo" v-model="teaEducationData.hightMajor" />
            </td>
            <td colspan="2">
              <span v-show="!editFlagTwo" v-text="teaEducationData.hightDiplomaSchool"></span>
              <input
                type="text"
                name
                id
                v-show="editFlagTwo"
                v-model="teaEducationData.hightDiplomaSchool"
              />
            </td>
            <td colspan="2">
              <span v-show="!editFlagTwo" v-text="teaEducationData.inProviceXueli"></span>
              <select name id v-show="editFlagTwo" v-model="teaEducationData.inProviceXueli">
                <option value="是">是</option>
                <option value="否">否</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>第一学历</td>
            <td>
              <span v-show="!editFlagTwo" v-text="teaEducationData.firstDiploma"></span>
              <select name id v-show="editFlagTwo" v-model="teaEducationData.firstDiploma">
                <option value="大学本科毕业">大学本科毕业</option>
                <option value="硕士毕业">硕士毕业</option>
                <option value="博士毕业">博士毕业</option>
              </select>
            </td>
            <td>
              <span v-show="!editFlagTwo" v-text="teaEducationData.firstMajor"></span>
              <input type="text" v-show="editFlagTwo" v-model="teaEducationData.firstMajor" />
            </td>
            <td width="88">入学时间</td>
            <td>
              <span v-show="!editFlagTwo" v-text="teaEducationData.startTime"></span>
              <input
                type="month"
                name
                id
                v-show="editFlagTwo"
                @keydown.prevent
                v-model="teaEducationData.startTime"
              />
            </td>
            <td width="88">毕业时间</td>
            <td>
              <span v-show="!editFlagTwo" v-text="teaEducationData.endTime"></span>
              <input
                type="month"
                name
                id
                v-show="editFlagTwo"
                @keydown.prevent
                v-model="teaEducationData.endTime"
              />
            </td>
          </tr>
          <tr>
            <td rowspan="2">最高学位</td>
            <td>名称</td>
            <td>最高学位层次</td>
            <td colspan="2">获得最高学位的院校获机构</td>
            <td colspan="2">是否省内</td>
          </tr>
          <tr>
            <td>
              <span v-show="!editFlagTwo" v-text="teaEducationData.hightXuewei"></span>
              <input type="text" v-show="editFlagTwo" v-model="teaEducationData.hightXuewei" />
            </td>
            <td>
              <span v-show="!editFlagTwo" v-text="teaEducationData.hightXueweicengci"></span>
              <select name id v-show="editFlagTwo" v-model="teaEducationData.hightXueweicengci">
                <option value="博士">博士</option>
                <option value="硕士">硕士</option>
                <option value="学士">学士</option>
                <option value="其他">其他</option>
              </select>
            </td>
            <td colspan="2">
              <span v-show="!editFlagTwo" v-text="teaEducationData.hightXueweiSchool"></span>
              <input type="text" v-show="editFlagTwo" v-model="teaEducationData.hightXueweiSchool" />
            </td>
            <td colspan="2">
              <span v-show="!editFlagTwo" v-text="teaEducationData.inProviceXuewei"></span>
              <select name id v-show="editFlagTwo" v-model="teaEducationData.inProviceXuewei">
                <option value="是">是</option>
                <option value="否">否</option>
              </select>
            </td>
          </tr>
        </table>
        <!-- 职称岗位信息 -->
        <div class="jz_tou">
          <h4>职称岗位信息</h4>
          <span class="jz_xian"></span>
          <div class="jz_bianji" v-show="viewOrEdit=='editTeacher'">
            <div class="jz_bg">
              <span @click="editThree" v-show="!showThree">编辑</span>
            </div>
          </div>
          <div class="jz_bian" v-show="showThree">
            <div class="jz_bg">
              <span @click="jobInfoSure()">确认</span>
            </div>
            <div class="jz_bg jz_bgx">
              <span @click="jobInfoCancle()" class="cancle">取消</span>
            </div>
          </div>
        </div>
           <table class="jz_all">
          <tr>
            <td  rowspan="2" colspan="6">专业技术职称1</td>
            <td colspan="10">名称</td>
            <td colspan="10">级别</td>
            <td colspan="10">获得时间</td>
          </tr>
          <tr>
            <td colspan="10">
              <span v-show="!editFlagThree" v-text="teaJobData.jobName1"></span>
              <select name id v-show="editFlagThree" v-model="teaJobData.jobName1">
                <option v-for="(v,i ) in jobName1" :key="i" :value="v">{{v}}</option>
              </select>
            </td>
            <td colspan="10">
              <span v-show="!editFlagThree" v-text="teaJobData.jobLevel1"></span>
              <select name id v-show="editFlagThree" v-model="teaJobData.jobLevel1">
                <option v-for="(v,i ) in jobLevel1" :key="i" :value="v">{{v}}</option>
              </select>
            </td>
            <td colspan="10">
              <span v-show="!editFlagThree" v-text="teaJobData.jobTime"></span>
              <input
                type="date"
                name
                id
                v-show="editFlagThree"
                @keydown.prevent
                v-model="teaJobData.jobTime"
              />
            </td>
          </tr>
          <tr>
            <td  rowspan="2" colspan="6">聘任职称</td>
            <td  colspan="15">名称</td>
            <td  colspan="15">聘用日期</td>
          </tr>
          <tr>
            <td colspan="15">
              <span v-show="!editFlagThree" v-text="teaJobData.offerJobName"></span>
              <select name id v-show="editFlagThree" v-model="teaJobData.offerJobName">
                <option v-for="(v,i ) in jobName1" :key="i" :value="v">{{v}}</option>
              </select>
            </td>
            <td colspan="15">
              <span v-show="!editFlagThree" v-text="teaJobData.offerJobTime"></span>
              <input
                type="date"
                name
                id
                v-show="editFlagThree"
                @keydown.prevent
                v-model="teaJobData.offerJobTime"
              />
            </td>
          </tr>
          <tr>
            <td  rowspan="2" colspan="6">专业技术职称2</td>
            <td colspan="15">名称</td>
            <td colspan="15">级别</td>
          </tr>
          <tr>
            <td colspan="15">
              <span v-show="!editFlagThree" v-text="teaJobData.jobName2"></span>
              <select name id v-show="editFlagThree" v-model="teaJobData.jobName2">
                <option v-for="(v,i ) in jobName1" :key="i" :value="v">{{v}}</option>
              </select>
            </td>
            <td colspan="15">
              <span v-show="!editFlagThree" v-text="teaJobData.jobLevel2"></span>
              <select name id v-show="editFlagThree" v-model="teaJobData.jobLevel2">
                <option v-for="(v,i ) in jobLevel1" :key="i" :value="v">{{v}}</option>
              </select>
            </td>
          </tr>
          <tr>
            <td  rowspan="2"  colspan="6">工人技术等级</td>
            <td colspan="6">等级</td>
            <td colspan="6">取得时间</td>
            <td colspan="6">聘任资格</td>
            <td colspan="6">聘任情况</td>
            <td colspan="6">工人工种</td>
          </tr>
          <tr>
            <td colspan="6">
              <span v-show="!editFlagThree" v-text="teaJobData.workerLevel"></span>
              <select name id v-show="editFlagThree" v-model="teaJobData.workerLevel">
                <option v-for="(v,i ) in workerLevel" :key="i" :value="v">{{v}}</option>
              </select>
            </td>
            <td colspan="6">
              <span v-show="!editFlagThree" v-text="teaJobData.workerGettime"></span>
              <input
                type="date"
                name
                id
                v-show="editFlagThree"
                @keydown.prevent
                v-model="teaJobData.workerGettime"
              />
            </td>
            <td colspan="6">
              <span v-show="!editFlagThree" v-text="teaJobData.workerOffer"></span>
              <input type="text" name id v-show="editFlagThree" v-model="teaJobData.workerOffer" />
            </td>
            <td colspan="6">
              <span v-show="!editFlagThree" v-text="teaJobData.workerOfferInfo"></span>
              <select name id v-show="editFlagThree" v-model="teaJobData.workerOfferInfo">
                <option v-for="(v,i ) in workerOfferInfo" :key="i" :value="v">{{v}}</option>
              </select>
            </td>
            <td colspan="6">
              <span v-show="!editFlagThree" v-text="teaJobData.workerType"></span>
              <input type="text" v-show="editFlagThree" v-model="teaJobData.workerType" />
            </td>
          </tr>
          <tr>
            <td  rowspan="6" colspan="6">岗位资格证书</td>
            <td colspan="6">证书名称</td>
            <td colspan="6">证书编号</td>
            <td colspan="6">证书颁发日期</td>
            <td colspan="6">资格认定机构</td>
            <td colspan="6">教师资格证任教学科</td>
          </tr>
          <tr>
            <td  rowspan="3" colspan="6">
              <span v-show="!editFlagThree" v-text="teaJobData.credName"></span>
              <select name id v-show="editFlagThree" v-model="teaJobData.credName">
                <option v-for="(v,i ) in credName" :key="i" :value="v">{{v}}</option>
              </select>
            </td>
            <td colspan="6">
              <span v-show="!editFlagThree" v-text="teaJobData.credNo"></span>
              <input type="text" name id v-show="editFlagThree" v-model="teaJobData.credNo" />
            </td>
            <td colspan="6">
              <span v-show="!editFlagThree" v-text="teaJobData.credTime"></span>
              <input
                type="date"
                name
                id
                v-show="editFlagThree"
                @keydown.prevent
                v-model="teaJobData.credTime"
              />
            </td>
            <td colspan="6">
              <span v-show="!editFlagThree" v-text="teaJobData.credDepart"></span>
              <input type="text" name id v-show="editFlagThree" v-model="teaJobData.credDepart" />
            </td>
            <td colspan="6">
              <span v-show="!editFlagThree" v-text="teaJobData.credSubject"></span>
              <input type="text" name id v-show="editFlagThree" v-model="teaJobData.credSubject" />
            </td>
          </tr>
          <tr>
            <td colspan="6">首次注册日期</td>
            <td colspan="6">首次注册结论</td>
            <td colspan="6">定期注册日期</td>
            <td colspan="6">定期注册结论</td>
          </tr>
          <tr>
            <td colspan="6">
              <span v-show="!editFlagThree" v-text="teaJobData.firstregTime"></span>
              <input
                type="date"
                name
                id
                v-show="editFlagThree"
                @keydown.prevent
                v-model="teaJobData.firstregTime"
              />
            </td>
            <td colspan="6">
              <span v-show="!editFlagThree" v-text="teaJobData.firstregResult"></span>
              <select name id v-show="editFlagThree" v-model="teaJobData.firstregResult">
                <option value="合格">合格</option>
                <option value="暂缓注册">暂缓注册</option>
                <option value="注册不合格">注册不合格</option>
              </select>
            </td>
            <td colspan="6">
              <span v-show="!editFlagThree" v-text="teaJobData.fixedregTime"></span>
              <input
                type="date"
                name
                id
                v-show="editFlagThree"
                @keydown.prevent
                v-model="teaJobData.fixedregTime"
              />
            </td>
            <td colspan="6">
              <span v-show="!editFlagThree" v-text="teaJobData.fixedregResult"></span>
              <select name id v-show="editFlagThree" v-model="teaJobData.fixedregResult">
                <option value="合格">合格</option>
                <option value="暂缓注册">暂缓注册</option>
                <option value="注册不合格">注册不合格</option>
              </select>
            </td>
          </tr>
          <tr>
            <td  rowspan="2" colspan="6">其他1</td>
            <td colspan="12">证书名称</td>
            <td colspan="12">其他职业资格证书登记</td>
          </tr>
          <tr>
            <td colspan="12">
              <span v-show="!editFlagThree" v-text="teaJobData.otherCred"></span>
              <input type="text" name id v-show="editFlagThree" v-model="teaJobData.otherCred" />
            </td>
            <td colspan="12">
              <span v-show="!editFlagThree" v-text="teaJobData.otherLevel"></span>
              <input type="text" name id v-show="editFlagThree" v-model="teaJobData.otherLevel" />
            </td>
          </tr>
        </table>
       
        <!-- 职务信息 -->
        <div class="jz_tou jz_shang">
          <h4>职务信息</h4>
          <span class="jz_xian"></span>
          <div class="jz_bianji" v-show="viewOrEdit=='editTeacher'">
            <div class="jz_bg">
              <span @click="editFour" v-show="!showFour">编辑</span>
            </div>
          </div>
          <div class="jz_bian" v-show="showFour">
            <div class="jz_bg">
              <span @click="postInfoSure()">确认</span>
            </div>
            <div class="jz_bg jz_bgx">
              <span @click="postInfoCancle()" class="cancle">取消</span>
            </div>
          </div>
        </div>
        <table class="jz_all">
          <tr>
            <td rowspan="2">行政职务</td>
            <td>任职名称</td>
            <td>任职方式</td>
            <td colspan="2">任职年月</td>
          </tr>
          <tr>
            <td>
              <span v-show="!editFlagFour" v-text="teaDutyData.dutyName"></span>
              <select name id v-show="editFlagFour" v-model="teaDutyData.dutyName">
                <option v-for="(v,i ) in dutyName" :key="i" :value="v">{{v}}</option>
              </select>
            </td>
            <td>
              <span v-show="!editFlagFour" v-text="teaDutyData.dutyType"></span>
              <select name id v-show="editFlagFour" v-model="teaDutyData.dutyType">
                <option v-for="(v,i ) in dutyType" :key="i" :value="v">{{v}}</option>
              </select>
            </td>
            <td colspan="2">
              <span v-show="!editFlagFour" v-text="teaDutyData.dutyTime"></span>
              <input
                type="date"
                v-show="editFlagFour"
                @keydown.prevent
                v-model="teaDutyData.dutyTime"
              />
            </td>
          </tr>
          <tr>
            <td rowspan="2">党内职务</td>
            <td>任职名称</td>
            <td>层次</td>
            <td width="154">任职年月</td>
            <td width="154">任命单位</td>
          </tr>
          <tr>
            <td>
              <span v-show="!editFlagFour" v-text="teaDutyData.partyName"></span>
              <select name id v-show="editFlagFour" v-model="teaDutyData.partyName">
                <option v-for="(v,i ) in partyName" :key="i" :value="v">{{v}}</option>
              </select>
            </td>
            <td>
              <span v-show="!editFlagFour" v-text="teaDutyData.partyLevel"></span>
              <select name id v-show="editFlagFour" v-model="teaDutyData.partyLevel">
                <option value="校级">校级</option>
                <option value="中级">中级</option>
                <option value="其他">其他</option>
              </select>
            </td>
            <td>
              <span v-show="!editFlagFour" v-text="teaDutyData.partyTime"></span>
              <input
                type="date"
                v-show="editFlagFour"
                @keydown.prevent
                v-model="teaDutyData.partyTime"
              />
            </td>
            <td>
              <span v-show="!editFlagFour" v-text="teaDutyData.partyDepart"></span>
              <input type="text" v-show="editFlagFour" v-model="teaDutyData.partyDepart" />
            </td>
          </tr>
        </table>
        <!-- 其他信息 -->
        <div class="jz_tou">
          <h4>其他信息</h4>
          <span class="jz_xian"></span>
          <div class="jz_bianji" v-show="viewOrEdit=='editTeacher'">
            <div class="jz_bg">
              <span @click="editFive" v-show="!showFive">编辑</span>
            </div>
          </div>
          <div class="jz_bian" v-show="showFive">
            <div class="jz_bg">
              <span @click="otherInfoSure()">确认</span>
            </div>
            <div class="jz_bg jz_bgx">
              <span @click="otherInfoCancle()" class="cancle">取消</span>
            </div>
          </div>
        </div>
        <table class="jz_all">
          <tr>
            <td width="212px">是否心理健康教育教师</td>
            <td width="198px">
              <span v-show="!editFlagFive" v-text="teaOtherData.ishealth"></span>
              <select name id v-show="editFlagFive" v-model="teaOtherData.ishealth">
                <option value="是">是</option>
                <option value="否">否</option>
              </select>
            </td>
            <td width="212px">是否专职音体美教师</td>
            <td>
              <span v-show="!editFlagFive" v-text="teaOtherData.ismusic"></span>
              <select name id v-show="editFlagFive" v-model="teaOtherData.ismusic">
                <option value="是">是</option>
                <option value="否">否</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>是否属于免费师范生</td>
            <td>
              <span v-show="!editFlagFive" v-text="teaOtherData.isnormal"></span>
              <select name id v-show="editFlagFive" v-model="teaOtherData.isnormal">
                <option value="是">是</option>
                <option value="否">否</option>
              </select>
            </td>
            <td>是否受过学前教育专业培训</td>
            <td>
              <span v-show="!editFlagFive" v-text="teaOtherData.isinfantedu"></span>
              <select name id v-show="editFlagFive" v-model="teaOtherData.isinfantedu">
                <option value="是">是</option>
                <option value="否">否</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>是否县级以上骨干教师</td>
            <td>
              <span v-show="!editFlagFive" v-text="teaOtherData.iscitytea"></span>
              <select name id v-show="editFlagFive" v-model="teaOtherData.iscitytea">
                <option value="是">是</option>
                <option value="否">否</option>
              </select>
            </td>
            <td>是否受过特殊教育专业培训</td>
            <td>
              <span v-show="!editFlagFive" v-text="teaOtherData.isspecialedu"></span>
              <select name id v-show="editFlagFive" v-model="teaOtherData.isspecialedu">
                <option value="是">是</option>
                <option value="否">否</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>是否学前教育专业毕业</td>
            <td>
              <span v-show="!editFlagFive" v-text="teaOtherData.ispreschooledu"></span>
              <select name id v-show="editFlagFive" v-model="teaOtherData.ispreschooledu">
                <option value="是">是</option>
                <option value="否">否</option>
              </select>
            </td>
            <td>是否有特殊教育从业证书</td>
            <td>
              <span v-show="!editFlagFive" v-text="teaOtherData.isspecialzs"></span>
              <select name id v-show="editFlagFive" v-model="teaOtherData.isspecialzs">
                <option value="是">是</option>
                <option value="否">否</option>
              </select>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { teaRelevant } from "@/api";

export default {
  props: ["data"],
  data() {
    return {
      flag: "personalFile",
      Teacher: "",
      viewOrEdit: null, //查看与编辑控制
      editFlag: false, //人员基本信息开关
      moveFlag: false,
      editFlagTwo: false, //学历学位信息编辑开关
      editFlagThree: false, //职称岗位信息开关
      editFlagFour: false, //职务信息开关
      editFlagFive: false, //其他信息开关
      showOne: false,
      showTwo: false,
      showThree: false,
      showFour: false,
      showFive: false,
      imgurl: null,
      baseData: {}, //个人基本信息
      teaOtherData: {}, //教师其他信息
      teaDutyData: {}, //职务信息
      teaEducationData: {}, //学历学位信息
      teaJobData: {
        jobName1:'',jobLevel1:'',jobTime:'',offerJobName:'',offerJobTime:'',jobName2:'',jobLevel2:'',workerLevel:'',workerGettime:'',workerOffer:'',workerOfferInfo:'',workerType:'',credName:'',credNo:'',credTime:'',
        credDepart:'',credSubject:'',firstregTime:'',firstregResult:'',fixedregTime:'',fixedregResult:'',otherCred:'',otherLevel:'',idCard:'',id:'',
      }, //职称岗位信息
      id: "", //通过id搜索数据
      idCard: "", //通过idCard搜索数据
      idType: [
        "居民身份证",
        "香港特区护照/身份证明",
        "澳门特区护照/身份证明",
        "台湾居民来往大陆通行证",
        "护照"
      ],
      //任教学段
      level: [
        "学前教育",
        "小学",
        "初中",
        "高中",
        "成人中等专业教育",
        "特殊教育",
        "其他"
      ],
      courseState: [
        "未任课",
        "基础课",
        "专业课",
        "时间技术指导(实习指导)",
        "其他课"
      ],
      health: ["健康", "一般", "有慢性病", "有生理缺陷", "有严重疾病", "其他"],
      marriage: ["未婚", "已婚", "离婚", "丧偶", "其他"],
      userOther: [
        "香港同胞",
        "香港同胞亲属",
        "澳门同胞",
        "澳门同胞亲属",
        "台湾同胞",
        "台湾同胞亲属",
        "华侨",
        "侨眷",
        "归侨",
        "归侨子女",
        "归国留学人员",
        "非华裔中国人",
        "外籍华裔人",
        "外国人",
        "其他",
        "无"
      ],
      currentJob: ["教师岗位", "管理岗位", "其他专业技术岗位", "工勤技能岗位"],
      jobState: [
        "在岗",
        "借出到事业单位",
        "待岗",
        "长期病假",
        "长期事假",
        "停薪留职",
        "退养",
        "因公出国",
        "延聘",
        "返聘",
        "带退休",
        "其他",
        "接触到机关"
      ],
      inschoolType: [
        "录用师范类应届毕业生",
        "录用非师范类应届毕业生",
        "录用非师范类往届毕业生",
        "录用师范类往届毕业生",
        "军队转业",
        "军队复员",
        "系统内调入",
        "系统外调入",
        "其他",
        "民办教师转正",
        "代课教师考入"
      ],
      sourcePlaceType: ["城市", "农村", "县区", "乡镇"],
      chineseLevel: [
        "一级甲等",
        "一级乙等",
        "二级甲等",
        "二级乙等",
        "三级甲等",
        "三级乙等",
        "其他"
      ],
      englishLevel: ["一般", "熟练", "精通", "良好", "其他"],
      type: [
        "专职教师",
        "专职教师(幼儿园)",
        "行政人员",
        "教辅人员",
        "教辅人员(幼儿园)",
        "工勤人员",
        "工勤人员(幼儿园)",
        "校办企业职工/校办工厂",
        "农(林)场职工",
        "其他附设机构人员",
        "园长(幼儿园)",
        "副院长(幼儿园)",
        "保育员(幼儿园)",
        "其他行政人员(幼儿园)",
        "卫生保健人员(幼儿园)",
        "其他(幼儿园)"
      ],
      politic: [
        "中共党员",
        "中共预备党员",
        "共青团员",
        "群众",
        "民革会员",
        "民盟盟员",
        "民建会员",
        "民进会员",
        "农工党员",
        "致公党党员",
        "九三学社社员",
        "台盟盟员",
        "无党派民主人士"
      ],
      jobLevel: [
        "无",
        "管理岗位一级",
        "工勤技能岗位五级",
        "专业技术岗位一级",
        "管理岗位二级",
        "特设岗位",
        "专业技术岗位二级",
        "管理岗位三级",
        "专业技术岗位三级",
        "管理岗位四级",
        "专业技术岗位四级",
        "管理岗位五级",
        "专业技术岗位五级",
        "管理岗位六级",
        "专业技术岗位六级",
        "管理岗位七级",
        "专业技术岗位七级",
        "管理岗位八级",
        "专业技术岗位八级",
        "管理岗位九级",
        "专业技术岗位九级",
        "管理岗位十级",
        "专业技术岗位十级",
        "工勤技能岗位一级",
        "专业技术岗位十一级",
        "工勤技能岗位二级",
        "专业技术岗位十二级",
        "工勤技能岗位三级",
        "专业技术岗位十三级",
        "工勤技能岗位四"
      ],

      hightDiploma: [
        "博士研究生毕业",
        "硕士研究生毕业",
        "大学本科毕业",
        "大学普通班毕业",
        "大学专科毕业",
        "高等职院毕业",
        "高等技师毕业",
        "中等专科毕业",
        "幼儿师范学院毕业",
        "中等师范学院毕业",
        "职业高中毕业",
        "技工学校毕业",
        "普通高中毕业",
        "初中毕业",
        "小学毕业",
        "其他"
      ],
      jobName1: [
        "中小学正高级教师",
        "中小学高级教师",
        "中小学一级教师",
        "中小学二级教师",
        "中小学三级教师",
        "未定职级",
        "教授",
        "副教授",
        "讲师(高校)",
        "助教(高校)",
        "正高级讲师(中专)",
        "高级讲师(中专)",
        "讲师(中专)",
        "助理讲师(中专)",
        "教员(中专)",
        "正高级讲师(技师)",
        "高级讲师(技校)",
        "讲师(技校)",
        "助理讲师(技校)",
        "教员(技校)",
        "高级实习指导老师",
        "一级实习指导老师",
        "二级实习指导老师",
        "三级实习指导老师",
        "无职称"
      ],
      jobLevel1: [
        "一级",
        "二级",
        "三级",
        "四级",
        "五级",
        "六级",
        "七级",
        "八级",
        "九级",
        "十级",
        "十一级",
        "十二级",
        "十三级",
        "其他"
      ],

      workerLevel: [
        "职业资格一级(高级技师)",
        "职业资格二级(技师)",
        "职业资格三级(高级)",
        "职业资格四级(中级)",
        "职业资格五级(初级)",
        "无"
      ],
      //聘任情况
      workerOfferInfo: ["已聘", "高聘", "低聘", "不聘", "缓聘", "其他"],

      //证书名称
      credName: [
        "幼儿园教师资格",
        "小学教师资格",
        "初级中学教师资格",
        "高级中学教师资格",
        "中等职业学校教师资格",
        "中等职业学校学习指导教师资格",
        "高等学校教师资格",
        "会计资格证书",
        "医生资格证书",
        "护士资格证书",
        "其他",
        "无"
      ],
      //任职方式
      dutyType: [
        "党委(组委)决定任职",
        "行政命令任职",
        "会议选举任职",
        "聘用任职",
        "考试录用任职",
        "其他"
      ],
      dutyName: [
        "单位正职",
        "单位副职",
        "单位中层正职",
        "单位中层副职",
        "副校级",
        "副校长(副园长)",
        "校长(园长)",
        "学校行政职务",
        "学校中层副职",
        "学校中层正职",
        "正校级",
        "无"
      ],
      //党内职务任职名称
      partyName: [
        "党委书记",
        "党委副书记",
        "党委委员",
        "党委总支书记",
        "党委总支副书记",
        "党委总支委员",
        "党支部书记",
        "党支部副书记",
        "党支部委员",
        "无"
      ]
    };
  },
  created() {
    this.viewOrEdit = this.$route.query.judge;
    this.idCard = this.$route.query.idCard;
    this.findData();
  },
  methods: {
    editOne() {
      //开启人员基本信息编辑功能
      this.showOne = true;
      this.editFlag = true;
    },

    peopleBaseCancle() {
      //人员基本信息取消编辑
      let _this = this;
      let parentsMethods = _this.$parent.$parent.$parent;
      parentsMethods.confirmFn("取消之后修改内容将丢失是否确认?", function(
        state
      ) {
        if (state == "sure") {
          (_this.showOne = false), (_this.editFlag = false);
          _this.findData();
        } else {
        }
      });
    },

    //人员基本信息确认编辑
    peopleBaseSure() {
      let _this = this;
      let parentsMethods = _this.$parent.$parent.$parent; //拿到index.vue里定义的内容
      parentsMethods.timingFn("success", "修改成功！");
      setTimeout(function() {
        (_this.showOne = false), (_this.editFlag = false);
      }, 1500);
      teaRelevant.editTeacherInfo(this.baseData).then(res => {
        this.findData();
      });
    },

    editTwo() {
      //开启学历学位信息编辑功能
      this.showTwo = true;
      this.editFlagTwo = true;
    },

    //学历学位信息取消编辑
    degreeInfoCancle() {
      let _this = this;
      let parentsMethods = _this.$parent.$parent.$parent;

      parentsMethods.confirmFn("取消之后修改内容将丢失是否确认?", function(
        state
      ) {
        if (state == "sure") {
          // parentsMethods.timingFn('success','启用成功！');
          (_this.showTwo = false), (_this.editFlagTwo = false);
          _this.findData();
        } else {
        }
      });
    },

    //学历学位信息确认编辑
    degreeInfoSure() {
      let _this = this;
      let parentsMethods = _this.$parent.$parent.$parent; //拿到index.vue里定义的内容
      parentsMethods.timingFn("success", "修改成功！");
      setTimeout(function() {
        (_this.showTwo = false), (_this.editFlagTwo = false);
      }, 1500);
      // console.log("编辑后的学历信息数据", this.teaEducationData);
      teaRelevant.editTeaEducation(this.teaEducationData).then(res => {
        if (res.status == 200) {
          this.findData();
        }
      });
    },
    editThree() {
      //开启职称岗位信息编辑功能
      this.showThree = true;
      this.editFlagThree = true;
    },
    jobInfoCancle() {
      //岗位职称信息取消编辑
      let _this = this;
      let parentsMethods = _this.$parent.$parent.$parent;
      parentsMethods.confirmFn("取消之后修改内容将丢失是否确认?", function(
        state
      ) {
        if (state == "sure") {
          (_this.showThree = false), (_this.editFlagThree = false);
          _this.findData();
        } else {
        }
      });
    },
    jobInfoSure() {
      //岗位职称信息确认编辑
      let _this = this;
      let parentsMethods = _this.$parent.$parent.$parent; //拿到index.vue里定义的内容
      parentsMethods.timingFn("success", "修改成功！");
      setTimeout(function() {
        (_this.showThree = false), (_this.editFlagThree = false);
      }, 1500);
      if(this.teaJobData.id){
         teaRelevant.editTeaJob(this.teaJobData).then(res => {
           if (res.status == "200") {
            this.findData();
           }
         });
      }else{
        this.teaJobData.id=new Date().getTime();
        this.teaJobData.idCard=this.idCard;
        teaRelevant.addTeaJob(this.teaJobData).then(res=>{
          this.findData()
        })
      }
     
    },
    editFour() {
      //开启职务信息功能编辑
      this.showFour = true;
      this.editFlagFour = true;
    },
    postInfoCancle() {
      //职务信息取消编辑
      let _this = this;
      let parentsMethods = _this.$parent.$parent.$parent;
      parentsMethods.confirmFn("取消之后修改内容将丢失是否确认?", function(
        state
      ) {
        if (state == "sure") {
          (_this.showFour = false), (_this.editFlagFour = false);
          _this.findData();
        } else {
        }
      });
    },
    postInfoSure() {
      //职务信息确认编辑
      let _this = this;
      let parentsMethods = _this.$parent.$parent.$parent; //拿到index.vue里定义的内容
      parentsMethods.timingFn("success", "修改成功！");
      setTimeout(function() {
        (_this.showFour = false), (_this.editFlagFour = false);
      }, 1500);
      teaRelevant.editTeaDuty(this.teaDutyData).then(res => {
        if (res.status == "200") {
          this.findData();
        }
      });
    },
    editFive() {
      //开启其他信息功能编辑
      this.showFive = true;
      this.editFlagFive = true;
    },
    otherInfoCancle() {
      //取消编辑其他信息
      let _this = this;
      let parentsMethods = _this.$parent.$parent.$parent;
      parentsMethods.confirmFn("取消之后修改内容将丢失是否确认?", function(
        state
      ) {
        if (state == "sure") {
          (_this.showFive = false), (_this.editFlagFive = false);
          _this.findData();
        } else {
        }
      });
    },
    otherInfoSure() {
      //确认编辑其他信息
      let _this = this;
      let parentsMethods = _this.$parent.$parent.$parent; //拿到index.vue里定义的内容
      parentsMethods.timingFn("success", "修改成功！");
      setTimeout(function() {//同步消失效果
        _this.showFive = false;
         _this.editFlagFive = false;
      }, 1500);
      teaRelevant.editTeaOther(this.teaOtherData).then(res => {
        if (res.status == "200") {
          this.findData();
        }
      });
    },
    getFileContent() {
      var reads = new FileReader();
      var file = this.$refs.shangc.files[0];
      // console.log(file.name);
      this.imgurl = file.name;
    },

    findData() {
      let obj = new Object();
      obj.idCard = this.idCard;
      teaRelevant.findTeaAll(obj).then(res => {
        if (res.status == 200) {
          this.Teacher = res.data.data.baseData.realname;
          let useData=res.data.data;
          //处理为null的数据
              for(var i  in useData){
                  for(var j in useData[i]){
                    if(useData[i][j]=='null'){
                      useData[i][j]=''
                    }
                  }
              }
             
          // this.baseData = useData.baseData; //个人基本信息
          // this.teaOtherData =  useData.teaOtherData; //教师其他信息
          // this.teaDutyData =  useData.teaDutyData; //职务信息
          // this.teaEducationData =  useData.teaEducationData; //学历学位信息
          // if(useData.teaJobData!=''){
          //   this.teaJobData =  useData.teaJobData; //职称岗位信息
          // }
          for(var m in useData){
            if(useData[m]!=''){
              this[m]=useData[m]
            }
          }




        }
      });
    }
  }
};
</script>
<style scoped>
/* input框 */
input,
select {
  width: 100%;
  height: 30px;
  border: solid 1px #99c0ee;
  outline: none;
  box-sizing: border-box;
  border-radius: 5px;
  text-indent: 2px;
  font-size: 12px;
}
.jz_img {
  width: 120px;
  height: 140px;
}

input[type="date"] {
  text-indent: 2px !important;
  font-size: 12px !important;
}
input[type="month"] {
  text-indent: 2px !important;
  font-size: 12px !important;
}

/* 编辑信息 */
.jz_bg {
  border: solid 1px #ed9026;
  cursor: pointer;
}
.jz_bg span {
  padding: 4px 14px;
  /* background: #ed9026; */
  background: linear-gradient(to right, #f29e17, #e26f4b);
  color: white;
  display: inline-block;
  margin: 2px;
}
.jz_bg .cancle {
  background: #818181;
}
.jz_bgx {
  border: solid 1px #818181 !important;
}
.jz_bian {
  display: flex;
}
.jz_bian > div:nth-of-type(1) {
  margin-right: 8px;
}
/* 表格部分 */
.jz_cright_1 h3 {
  box-sizing: border-box;
  padding: 0px 20px;
  height: 56px;
  line-height: 50px;
  border-bottom: solid 1px #dddddd;
  color: #5093e1;
}
.jz_set b {
  font-size: 14px;
  font-weight: normal;
  margin-right: 8px;
  color: #666666;
}
.jz_set {
  font-size: 14px;
  letter-spacing: 2px;
  color: #666666;
}
.jz_tablefile {
  padding: 0px 20px 20px;
}
.jz_tablefile .jz_tou {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0px 10px;
}
.jz_tou h4 {
  font-size: 18px;
  color: #5093e1;
}
.jz_tablefile .jz_tou .jz_xian {
  display: inline-block;
  /* width: 87%; */
  flex-grow: 1;
  border-bottom: dotted 2px #fee5c8;
}
.jz_tablefile tr,
.jz_tablefile td,
.jz_tablefile th {
  border: solid 1px #dddddd;
  text-align: center;
  height: 40px;
  padding: 2px;
  box-sizing: border-box;
}

.jz_all {
  width: 100%;
  table-layout: fixed;
  word-wrap: break-word;
}
.jz_all tr{
  width: 100%;
}
.jz_shang {
  /* margin-top: -40px; */
}
.wai {
  position: relative;
}
.wai::after {
  content: "";
  display: block;
  position: absolute;
  left: -3px;
  top: 18px;
  width: 126px;
  border-top: solid 1px #dddddd;
  transform: rotate(18deg);
}
.jz_shangchuan {
  width: 100%;
  height: 30px;
  line-height: 30px;
  background: rgba(0, 0, 255, 0.3);
  cursor: pointer;
}
</style>