import { teaRelevant } from "@/api";
export default {
  name: 'mainTi',
  mounted() {
  
   


    var chartXueduan = this.$HighCharts.chart("chart_1", {
        chart: {
          backgroundColor: "transparent"
        },
        credits: {
          enabled: false //不显示highCharts版权信息
        },
        title: {
          floating: true, //让环形里的文字漂浮
          text: "学前教育 3027", //      text: '圆心显示的标题'
          style: {
            color: "white",
            fontSize: 14
          }
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        legend: {
          layout: "horizontal",
          enabled: true,
          align: "left",
          symbolHeight: 16,
          symbolWidth: 16,
          symbolRadius: 0,
          itemStyle: {
            lineHeight: "14px",
            fontSize: "12px",
            letterSpacing: 0,
            fontWeight: "normal",
            color: "white"
          },
          itemMarginTop: 8,
          width: 320,
          y: 20 //往下偏移
        },
        plotOptions: {
          pie: {
            showInLegend: true,
            colors: [
              //圆环颜色，如果数据多于颜色的个数，则颜色会重复出现
              "red","blue","#e9da59","#73d84b","#3adfd2","#20acff","#275caa", "#8d84f0"
            ],
            size: 188,
            allowPointSelect: true,
            cursor: "pointer",
            // enableMouseTracking: false,
            dataLabels: {
              connectorWidth: 1, //连接数据标签到饼图切片的线的宽度。
              distance: 18, //数据标签距离
              connectorPadding: 0, //从数据标签到连接器的距离。
              enabled: true, //是否启用数据标签
              connectorColor: "white", // 连接线颜色，默认是扇区颜色
              color: "white", //标签颜色
              format: "{point.percentage:.1f}%",
              style: {
                fontWeight: "normal",
                fontSize: "12px"
              },
              useHTML: true
            },
            point: {
              events: {
                mouseOver: function (e) {
                  // 鼠标滑过时动态更新标题
                  // 标题更新函数，API 地址：https://api.hcharts.cn/highcharts#Chart.setTitle
                  chartXueduan.setTitle({
                    text: e.target.name + "\t"
                    // text: e.target.name+ '\t'+ e.target.y + ' %'
                  });
                },
              }
            }
          }
        },
        series: [{
          type: "pie",
          innerSize: "85%", //控制饼空心的大小
          name: "市场份额",
          data: this.dataXueduan,
        }]
      },
      function (c) {
        var centerY = c.series[0].center[1], // 图表初始化完毕后的会掉函数
          titleHeight = parseInt(c.title.styles.fontSize); // 环形图圆心
        // 动态设置标题位置
        c.setTitle({
          y: centerY + titleHeight / 2
        });
      }
    );
    var chartXueli=this.$HighCharts.chart('chart_2',{
      chart: {
        backgroundColor: "transparent",
        marginLeft: -160
      },
      credits: {
        enabled: false //不显示highCharts版权信息
      },
      title: {
        text: null //      text: '圆心显示的标题'
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
      },
    
      legend: {
        symbolRadius: 0,
        itemDistance: 10,
        align: 'right',
        verticalAlign: 'middle',
        width: 200,
        floating: true,
        x: 30,
        y: 0,
        symbolHeight: 0,
        itemMarginTop: 10,
        maxHeight: '260px',
        itemStyle: {
          "color": "white",
          "cursor": "pointer",
          "fontSize": "12px",
          "fontWeight": 'normal'
        }
      },
      plotOptions: {
        pie: {
          showInLegend: true,
          colors: [ //圆环颜色，如果数据多于颜色的个数，则颜色会重复出现
            "red", "blue", "#e9da59", "#73d84b", "#3adfd2", "#20acff", "#275caa", "#8d84f0"
          ],
          size: 90,
          allowPointSelect: false,
          cursor: "pointer",
          enableMouseTracking: false,
          dataLabels: {
            connectorWidth: 2,
    
            enabled: false, //是否启用数据标签
            format: "{point.percentage:.1f} %",
          
          },
        }
      },
      series: [{
          type: "pie",
          innerSize: "90%", //控制饼空心的大小
          name: "市场份额",
          data: this.dataXueli
        }],
    })
    var chartNl=this.$HighCharts.chart('chart_3',{
      chart: {
        reflow: true,
        backgroundColor: "transparent",
        marginLeft: -160
      },
      credits: {
        enabled: false //不显示highCharts版权信息
      },
      title: {
        text: null //      text: '圆心显示的标题'
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
      },
    
      legend: {
        symbolRadius: 0,
        itemDistance: 10,
        align: 'right',
        verticalAlign: 'middle',
        width: 200,
        floating: true,
        x: 80,
        y: 0,
        symbolHeight: 0,
        itemMarginTop: 10,
        maxHeight: '260px',
        itemStyle: {
          "color": "white",
          "cursor": "pointer",
          "fontSize": "12px",
          "fontWeight": 'normal'
        },
        width: 260,
      },
      plotOptions: {
        pie: {
          showInLegend: true,
          colors: [ //圆环颜色，如果数据多于颜色的个数，则颜色会重复出现
            "red", "blue", "#e9da59", "#73d84b", "#3adfd2", "#20acff", "#275caa", "#8d84f0"
          ],
          size: 90,
          allowPointSelect: true,
          cursor: "pointer",
          enableMouseTracking: false,
          dataLabels: {
            connectorWidth: 2,
    
            enabled: false, //是否启用数据标签
            format: "{point.percentage:.1f} %",
          },
        }
      },
      series: [{
          type: "pie",
          innerSize: "90%", //控制饼空心的大小
          name: "市场份额",
          data:this.dataNian
        }],
    });
    var chartNv=this.$HighCharts.chart('chart_4',{
      chart: {
        reflow: true,
        backgroundColor: "transparent",
        marginLeft: -160
      },
      credits: {
        enabled: false //不显示highCharts版权信息
      },
      title: {
        text: null //      text: '圆心显示的标题'
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
      },
    
      legend: {
        symbolRadius: 0,
        itemDistance: 10,
        align: 'right',
        verticalAlign: 'middle',
        width: 200,
        floating: true,
        x: 30,
        y: 0,
        symbolHeight: 0,
        itemMarginTop: 10,
        maxHeight: '260px',
        itemStyle: {
          "color": "white",
          "cursor": "pointer",
          "fontSize": "12px",
          "fontWeight": 'normal'
        }
      },
      plotOptions: {
        pie: {
          showInLegend: true,
          colors: [ //圆环颜色，如果数据多于颜色的个数，则颜色会重复出现
            "red", "blue", "#e9da59", "#73d84b", "#3adfd2", "#20acff", "#275caa", "#8d84f0"
          ],
          size: 90,
          allowPointSelect: true,
          cursor: "pointer",
          enableMouseTracking: false,
          dataLabels: {
            connectorWidth: 2,
            enabled: false, //是否启用数据标签
            format: "{point.percentage:.1f} %",
          },
          zones: [{
            dashStyle: 'dotted'
          }]
    
        }
      },
      series: [{
          type: "pie",
          innerSize: "90%", //控制饼空心的大小
          name: "市场份额",
          data: this.dataNv
        }],
    })

  },
  created() {
    for (let i = 0; i < 2; i++) {
      this.keyTeacher[i] = this.keyTeacherData.slice(this.pageSize * i, this.pageSize * (i + 1))
    }
    this.dataShow = this.keyTeacher[this.currentPage]
  },
  data() {
    return {
      flag: true,
     
      lunboHeight: 1,
      longbar: 1, //点击导航效果
      id1: "chart_1", //学段人数比例
      dataXueduan:[{ name: "学前教育  3027",y: 28.0,url: "http://bbs.hcharts.cn"},["小学  2993", 14],
      { name: "普通初中1485", y: 18,url: "http://www.hcharts.cn"},["成人中等专业学校  70", 8],["特殊教育", 28], ["其他  215", 4],],
      //学历比例
      dataXueli:[{name: "博士 0%",y: 45.0,url: "http://bbs.hcharts.cn"},
      ["硕士 3%", 26.8],{ name: "本科 67%", y: 12.8, url: "http://www.hcharts.cn"},["专科  19%", 8.5],["其他 12%", 0.7]],
     //年龄分布;
      dataNian: [{ name: "25以下  8%", y: 8,url: "http://bbs.hcharts.cn"},["26-30 11%", 11],
      {  name: "31-35 12%", y: 12,url: "http://www.hcharts.cn"},["36-40 16%", 16],["40以上  53%", 53]],
      //男女比例
      dataNv:[{ name: "男",y: 80.0, }, { name: "女",y: 12.8,}],
      currentPage: 0, //当前页
      pageSize: 5, //每页显示数量
      all: 2, //总页数
      keyTeacherData: [{
          title: '区学科带头人',
          num: 58
        },
        {
          title: '省特级教师',
          num: 50
        },
        {
          title: '名教师',
          num: 42
        },
        {
          title: '名校长',
          num: 50
        },
        {
          title: '区教学新秀',
          num: 46
        },
        {
          title: '名教师',
          num: 42
        },
        {
          title: '名校长',
          num: 50
        },
        {
          title: '区教学新秀',
          num: 46
        },
      ], //模拟的骨干教师整体数据
      cur: 1,

      keyTeacher: [], //要显示内容的数组
      dataShow: '' //每页显示的内容
    };
  },
  
  methods: {
    //点击隐藏显示教师大数据
    hiddens() {
      this.flag = !this.flag;
    },
    //点击打开
    open() {
      this.flag = !this.flag;
    },
    // 点击后退
    backs() {
      this.longbar--;
      if (this.longbar == 0) {
        this.longbar = 7;
      }
    },
    //点击前进
    gos() {
      this.longbar++;
      if (this.longbar == 8) {
        this.longbar = 1;
      }
    },
    teachersQuery() { //教师查询
      this.$router.push({
        path: "/index/teachersQuery"
      });
    },
    filteContrast(){//筛选对比
      this.$router.push({
        path: "/index/filteContrast"
      });
    },
    teachersManage(){//教师管理
      this.$router.push({
        path: "/index/teachersManage"
      });
    },
    userCenter(){//用户中心
      this.$router.push({
        path: "/index/userCenter"
      });
    },
    dataCount(){//数据统计
      this.$router.push({
        path: "/index/dataCount"
      });
    },
    electronBook(){//电子证书
      this.$router.push({
        path: "/index/electronBook",
      });
    },
    tui() {
      this.currentPage = 0
      this.dataShow = this.keyTeacher[this.currentPage]
    },
    qian() {
      if (this.cur < this.all) {
        this.cur++;
      }
      this.currentPage = 1
      this.dataShow = this.keyTeacher[this.currentPage]
    }
  }
}
