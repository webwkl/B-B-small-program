//index.js 
//获取应用实例 
//status 0 待付款  1待入住 2已入住 3已离店 4已取消
var app = getApp()
Page({
  data: {
    // 页面配置  
    winWidth: 0,
    winHeight: 0,
    endtime:'1605540080',
    time:'',
    // tab切换 
    currentTab: 0,
    items:[{
        status:'0',
        title:'【华章】 衡复文化区独门花园Loft古···',
        totalmoney:'5666',
        date:'06.25-06.26',
        url:'',
        time:'',
        },
       {
        status: '1',
        title: '【华章】 衡复文化区独门花园Loft古···',
        totalmoney: '5666',
        date: '06.25-06.26',
        url: '',
        time: '',
      },
       {
         status: '2',
         title: '【华章】 衡复文化区独门花园Loft古···',
         totalmoney: '5666',
         date: '06.25-06.26',
         url: '',
         time: '',
       },
       {
         status: '3',
         title: '【华章】 衡复文化区独门花园Loft古···',
         totalmoney: '5666',
         date: '06.25-06.26',
         url: '',
         time: '',
       },
       
    ]
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '订单',
    })
  },
  // 页面渲染完成后 调用
  onReady: function () {
    var totalSecond = this.data.endtime - Date.parse(new Date()) / 1000;

    var interval = setInterval(function () {
      // 秒数
      var second = totalSecond;

      // 天数位
      var day = Math.floor(second / 3600 / 24);
      var dayStr = day.toString();
      if (dayStr.length == 1) dayStr = '0' + dayStr;

      // 小时位
      var hr = Math.floor((second - day * 3600 * 24) / 3600);
      var hrStr = hr.toString();
      if (hrStr.length == 1) hrStr = '0' + hrStr;

      // 分钟位
      var min = Math.floor((second - day * 3600 * 24 - hr * 3600) / 60);
      var minStr = min.toString();
      if (minStr.length == 1) minStr = '0' + minStr;

      // 秒位
      var sec = second - day * 3600 * 24 - hr * 3600 - min * 60;
      var timeString = hrStr + '小时' + minStr + '分' + sec + '秒'
      var secStr = sec.toString();
      if (secStr.length == 1) secStr = '0' + secStr;

      this.setData({
        time: timeString,
      });
      totalSecond--;
      if (totalSecond < 0) {
        clearInterval(interval);
        wx.showToast({
          title: '活动已结束',
        });
        this.setData({
          time: "",
          countDownHour: '00',
          countDownMinute: '00',
          countDownSecond: '00',
        });
      }
    }.bind(this), 1000);
  },

  // 滑动切换tab 
  // bindChange: function (e) {
  //   var that = this;
  //   that.setData({ currentTab: e.detail.current });
  // },
  // 点击tab切换 
  swichNav: function (e) {
    console.log(e);
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }


})

