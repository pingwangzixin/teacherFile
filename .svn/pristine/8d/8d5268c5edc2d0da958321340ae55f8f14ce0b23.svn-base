import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//登录页
const login=()=>import('@/components/login.vue')
//首页
const index=()=>import('@/components/index.vue')
const main=()=>import('@/components/main.vue')//首页主体部分

//教师查询
const teachersQuery=()=>import('@/components/teachersQuery/teachersQuery.vue')
const teachersDetails=()=>import('@/components/teachersQuery/teachersDetails.vue')
const checkTeacherCommon=()=>import('@/components/teachersQuery/checkTeacherCommon.vue')
const checkTeacherFile=()=>import('@/components/teachersQuery/checkTeacherFile.vue')

//筛选对比
const filteContrast=()=>import('@/components/filteContrast/filteContrast.vue')

//教师管理
const  teachersManage=()=>import('@/components/teachersManage/teachersManage.vue')
const  teachersMessageEntering=()=>import('@/components/teachersManage/teachersMessageEntering.vue')

//用户中心
const  userCenter=()=>import('@/components/userCenter/userCenter.vue');

//数据统计
const  dataCount=()=>import('@/components/dataCount/dataCount.vue');

//电子证书
const electronBook=()=>import('@/components/electronBook/electronBook.vue');
const credentialInfo=()=>import('@/components/electronBook/credentialInfo.vue')

//教师平台
const teacherTerrace=()=>import('@/components/teacherTerrace/teacherTerrace.vue')
const teacherBase=()=>import('@/components/teacherTerrace/teacherBase.vue')
const teaHonorShow=()=>import('@/components/teacherTerrace/teaHonorShow.vue')
const newAddDirectYouthTea=()=>import('@/components/teacherTerrace/newAddDirectYouthTea/newAddDirectYouthTea.vue')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/index',
      name: 'index',
      component: index,//页面的头部以及弹窗信息
      redirect:'/index/main',
      children:[
        {//首页主体页面
          path:'/index/main',
          name: 'main',
          component: main,
        },
         {//教师查询页面
          path:'/index/teachersQuery',
          name: 'teachersQuery',
          component: teachersQuery,
          meta:{title:'教师查询'}
        },
         {//教师详情页面
          path:'/index/teachersDetails',
          name: 'teachersDetails',
          component: teachersDetails,
          meta:{title:'教师详情'}
        },
         {//筛选对比页面
          path:'/index/filteContrast',
          name: 'filteContrast',
          component:filteContrast,
          meta:{title:'筛选对比'}
        },
        {//教师管理页面
          path:'/index/teachersManage',
          name: 'teachersManage',
          component:teachersManage,
          meta:{title:'教师管理'}
        },
        {//数据统计页面
          path:'/index/dataCount',
          name: 'dataCount',
          component:dataCount,
          meta:{title:'数据统计'}
        },
        {//用户中心页面
          path:'/index/userCenter',
          name:'userCenter',
          component:userCenter,
          meta:{title:'用户中心'}
        },
        {//电子证书页面
          path:'/index/electronBook',
          name:'electronBook',
          component:electronBook,
          meta:{title:'电子证书'}
        },
        {//电子证书查看详情页面
          path:'/index/credentialInfo',
          name:'credentialInfo',
          component:credentialInfo,
          meta:{title:'电子证书'}
        },
        {//教师平台页面
          path:'/index/teacherTerrace',
          name:'teacherTerrace',
          component:teacherTerrace,
          meta:{title:'教师平台'}
        },
        {//教师平台跳转到教师基本信息页面
          path:'/index/teacherBase',
          name:'teacherBase',
          component:teacherBase,
          meta:{title:'教师平台'}
        },
        {//教师综合性荣誉、条线荣誉、电子证书展示
          path:'/index/teaHonorShow',
          name:'teaHonorShow',
          component:teaHonorShow,
        },
        {//新增指导青年教师情况
          path:'/index/newAddDirectYouthTea',
          name:'newAddDirectYouthTea',
          component:newAddDirectYouthTea,
        },
        {//教师个人档案页面
          path:'/index/checkTeacherCommon',
          name: 'checkTeacherCommon',
          component:checkTeacherCommon,//教师个人档案页面左侧公共部分
          meta:{title:'教师个人档案'},
          redirect:'/index/checkTeacherCommon/checkTeacherFile',
          children:[
            {//教师个人档案     详情/编辑页
              path:'/index/checkTeacherCommon/checkTeacherFile', 
              name:'checkTeacherFile',
              component:checkTeacherFile,
            },
            {//教师信息录入页面
              path:'/index/checkTeacherCommon/teachersMessageEntering', 
              name:'teachersMessageEntering',
              component:teachersMessageEntering,
            },
          ]
        },
      ],
    },

 
  ]
})
