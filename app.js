//app.js
App({
  data: {
    hostUrl: 'https://chunyu.yeyuming.com',
    hostImg: 'http://img.ynjmzb.net',
    hostVideo: 'http://zhubaotong-file.oss-cn-beijing.aliyuncs.com',
    userId: 1,
    appId: "wx7f9e03557563cb12",
    appKey: "",
    imgurl:'https://qingquan.lichengdai.com',
    ceshiUrl: 'https://qingquan.lichengdai.com/Home',
    type_list: '0',
    city_jop: '全国',
  },
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:{
      sessionId:'',
      openid:'',
      NickName:'',
      HeadUrl:'',
      id:'',
    },
    shoucity:'北京',
    shoucitycode:'010',
    shoutime: '',
    shoumember:2,
    shoushangquan:'',
    shouleixing:'',
    shouhuxing: ''
  }
})