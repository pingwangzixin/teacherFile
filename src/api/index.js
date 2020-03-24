import Axios from 'axios';
const $http = Axios;

const configure = {
  testTeacher: 'http://111.207.13.88:9127/',
  
  headersContent: {
    "content-type": "application/json"
  },
  port: {
    
    //登录
    login:'jeuc/api/uc/login',

    //学校列表
     schoolList:'jeuc/api/ea/office',
    
    //教师列表
    teaBaseList:'jeuc/api/TeaBase/list',


    findTeaAll: 'jeuc/api/TeaBase/findTeaAll',
    editTeacherInfo: 'jeuc/api/TeaBase/update',
    delTeaBase:'jeuc/api/TeaBase/delete',


    //教师停用启用
    teaBaseUseOrNo:'jeuc/api/TeaBase/updateState',


    //学历学位信息
    TeaEducationData:'jeuc/api/TeaEducation/list',
    addTeaEducationData:'jeuc/api/TeaEducation/add',
    editTeaEducation: 'jeuc/api/TeaEducation/update',

    //职称岗位信息
    teaJobData:'jeuc/api/TeaJob/list',
    addTeaJob:'jeuc/api/TeaJob/add',
    editTeaJob:'jeuc/api/TeaJob/update',
    delTeaJob:'jeuc/api/TeaJob/delete',

    //职务信息
    teaDutyData:'jeuc/api/TeaDuty/list',
    addTeaDuty:'jeuc/api/TeaDuty/add',
    editTeaDuty:'jeuc/api/TeaDuty/update',
    delTeaDuty:'jeuc/api/TeaDuty/delete',

    //其他信息
    teaOtherData:'jeuc/api/TeaOther/list',
    addTeaOther:'jeuc/api/TeaOther/add',
    editTeaOther:'jeuc/api/TeaOther/update',
    delTeaOther:'jeuc/api/TeaOther/delete',
    
    //年度考核
    yearCheckData: 'jeuc/api/TeaAssessment/list',
    addYearCheckData: 'jeuc/api/TeaAssessment/add',
    editYearCheckData: 'jeuc/api/TeaAssessment/update',
    delYearCheck:'jeuc/api/TeaAssessment/delete',

    //专业型称号
    teaProNameData: 'jeuc/api/TeaProname/list',
    addTeaProName: 'jeuc/api/TeaProname/add',
    editTeaProName: 'jeuc/api/TeaProname/update',
    delTeaProName:'jeuc/api/TeaProname/delete',

    //教师长病假
    teaFallillData: 'jeuc/api/TeaFallill/list',
    addTeaFallill: 'jeuc/api/TeaFallill/add',
    editTeaFallill: 'jeuc/api/TeaFallill/update',
    delTeaFallill:'jeuc/api/TeaFallill/delete',

    //课堂满意度
    classAgreeData:'jeuc/api/TeaLessonscore/list',
    addClassAgree:'jeuc/api/TeaLessonscore/add',
    editClassAgree:'jeuc/api/TeaLessonscore/update',
    delClassAgree:'jeuc/api/TeaLessonscore/delete',

    //听课情况数据
    listenClassData:'jeuc/api/TeaListen/list',
    addListenClass:'jeuc/api/TeaListen/add',
    editListenClass:'jeuc/api/TeaListen/update',

    //任课情况数据
    teachClassData:'jeuc/api/TeaSubject/list',
    addTeachClass:'jeuc/api/TeaSubject/add',
    editTeachClass:'jeuc/api/TeaSubject/update',

    
    importYearCheck:'jeuc/api/TeaAssessment/import',//导入年度考核模板
    importSelfFile:'jeuc/api/TeaBase/import',//导入个人档案模版
    importTeaFallill:'jeuc/api/TeaFallill/import',//导入长病假模板
    importTeaProName:'jeuc/api/TeaProname/import',//导入专业型称号模板
    //下载模板
    downloadModule:'jeuc/api/TeaBase/download',

    //教师查询接口
    teacherQuery:'jeuc/api/TeaBase/findLeaderList',
  }
};

const $Axios = {
  get: function (url, data) {
    return $http({
      method: 'get',
      url: configure.testTeacher + url,
      params: data,
      headers: configure.headersContent
    })
  },
  post: function (url, data) {
    return $http({
      method: 'post',
      url: configure.testTeacher + url,
      data: data,
      headers: configure.headersContent
    })
  },
}


const teaRelevant = {

  //登录接口
  login:(data)=>{
    return $http({
      method: 'get',
      url: 'http://111.207.13.88:8881/' +configure.port.login,
      params: data,
      headers: configure.headersContent
    })
  },


  schoolList:(data) => {
    return $Axios.get(configure.port.schoolList, data)
  },

  //教师个人档案详情
  findTeaAll: (data) => {
    return $Axios.get(configure.port.findTeaAll, data)
  },

  //编辑教师档案个人基本信息 
  editTeacherInfo: (data) => {
    return $Axios.post(configure.port.editTeacherInfo, data)
  },

  //教师列表
  teaBaseList: (data) => {
    return $Axios.get(configure.port.teaBaseList, data)
  },
  teaBaseUseOrNo: (data) => {
    return $Axios.get(configure.port.teaBaseUseOrNo, data)
  },
  delTeaBase: (data) => {
    return $Axios.get(configure.port.delTeaBase, data)
  },

  //编辑教师档案学历学位信息
  editTeaEducation: (data) => {
    return $Axios.post(configure.port.editTeaEducation, data)
  },


  //职称岗位信息
  teaJobData:(data)=>{
    return $Axios.get(configure.port.teaJobData, data)
  },
  editTeaJob:(data)=>{
    return $Axios.post(configure.port.editTeaJob, data)
  },
  addTeaJob:(data)=>{
    return $Axios.post(configure.port.addTeaJob, data)
  },



  //职务信息
  editTeaDuty:(data)=>{
    return $Axios.post(configure.port.editTeaDuty, data)
  },


  //其他信息
  editTeaOther:(data)=>{
    return $Axios.post(configure.port.editTeaOther, data)
  },

  //年度考核数据
  yearCheckData: (data) => {
    return $Axios.get(configure.port.yearCheckData, data)
  },
  addYearCheckData: (data) => {
    return $Axios.post(configure.port.addYearCheckData, data)
  },
  editYearCheckData: (data) => {
    return $Axios.post(configure.port.editYearCheckData, data)
  },
  delYearCheck: (data) => {
    return $Axios.get(configure.port.delYearCheck, data)
  },

  //教师专业型称号数据
  teaProNameData: (data) => {
    return $Axios.get(configure.port.teaProNameData, data)
  },
  addTeaProName: (data) => {
    return $Axios.post(configure.port.addTeaProName, data)
  },
  editTeaProName: (data) => {
    return $Axios.post(configure.port.editTeaProName, data)
  },
  delTeaProName: (data) => {
    return $Axios.get(configure.port.delTeaProName, data)
  },

  //教师长病假记录列表
  teaFallillData: (data) => {
    return $Axios.get(configure.port.teaFallillData, data)
  },
  addTeaFallill: (data) => {
    return $Axios.post(configure.port.addTeaFallill, data)
  },
  editTeaFallill: (data) => {
    return $Axios.post(configure.port.editTeaFallill, data)
  },


  //课堂满意度数据
  classAgreeData:(data)=>{
    return $Axios.get(configure.port.classAgreeData, data)
  },
  addClassAgree:(data)=>{
    return $Axios.post(configure.port.addClassAgree, data)
  },
  editClassAgree:(data)=>{
    return $Axios.post(configure.port.editClassAgree, data)
  },
  delClassAgree:(data)=>{
    return $Axios.get(configure.port.delClassAgree, data)
  },

  //听课情况
  listenClassData:(data)=>{
    return $Axios.get(configure.port.listenClassData, data)
  },
  addListenClass:(data)=>{
    return $Axios.post(configure.port.addListenClass, data)
  },
  editListenClass:(data)=>{
    return $Axios.post(configure.port.editListenClass, data)
  },

  //任课情况
  teachClassData:(data)=>{
    return $Axios.get(configure.port.teachClassData, data)
  },
  addTeachClass:(data)=>{
    return $Axios.post(configure.port.addTeachClass, data)
  },
  editTeachClass:(data)=>{
    return $Axios.post(configure.port.editTeachClass, data)
  },


  //导入年度考核模板
  importYearCheck:(data)=>{
    return $Axios.post(configure.port.importYearCheck, data)
  },
  importSelfFile:(data)=>{
    return $Axios.post(configure.port.importSelfFile, data)
  },
  importTeaFallill:(data)=>{
    return $Axios.post(configure.port.importTeaFallill, data)
  },
  importTeaProName:(data)=>{
    return $Axios.post(configure.port.importTeaProName, data)
  },


  //模板下载
  downloadModule:(data)=>{
    return $Axios.get(configure.port.downloadModule,data)
  },

  //教师查询
  teacherQuery:(data)=>{
    return $Axios.get(configure.port.teacherQuery, data)
  },

}

export {
  teaRelevant
}
