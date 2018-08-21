var Moment = require("../../utils/moment.js");
var DATE_LIST = [];
var DATE_YEAR = new Date().getFullYear()
var DATE_MONTH = new Date().getMonth() + 1
var DATE_DAY = new Date().getDate()
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkInDate: "",
    checkOutDate: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设缓存缓存起来的日期
    wx.setStorage({
      key: 'ROOM_SOURCE_DATE',
      data: {
        checkInDate: Moment(new Date()).format('YYYY-MM-DD'),
        checkOutDate: Moment(new Date()).add(1, 'day').format('YYYY-MM-DD')
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  bindgetuserinfo: function (cb) {
    app.globalData.userInfo['nickName']  = cb.detail.userInfo.nickName;
    app.globalData.userInfo['avatarUrl'] = cb.detail.userInfo.avatarUrl;

    //app.globalData.userInfo   avatarUrl  nickName
    var that = this
    if (app.globalData.userInfo.sesessionId) {
      // console.log(app.globalData.userInfo.sesessionId);
      typeof cb == "function" && cb(app.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function (res) {
          var code = res.code;
          that.getUserSessionKey(code);
        }
      });
    }
  },
  getUserSessionKey: function (code) {
    //013rUqiE1jQTW00fsAjE1LKiiE1rUqif
    //用户的订单状态
    var that = this;
    wx.request({
      url: app.data.ceshiUrl + '/Author/getsessionkey',
      method: 'post',
      data: {
        code: code
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        //--init data      
        var data = res.data;
        // console.log(data)
        if (data.status == 0) {
          wx.showToast({
            title: data.err,
            duration: 2000
          });
          return false;
        }

        // app.globalData.userInfo['sessionId'] = data.session_key;
        app.globalData.userInfo['openid'] = data.openid;
        // console.log(222);
        that.onLoginUser();
      },
      fail: function (e) {
        // console.log(111231231);
        wx.showToast({
          title: '网络异常！err:getsessionkeys',
          duration: 2000
        });
      },
    });
  }, 
  onLoginUser: function () {
    var that = this;
    var user = app.globalData.userInfo;

    wx.request({
      url: app.data.ceshiUrl + '/Author/authorization_login',
      method: 'post',
      data: {
        avatarUrl: user.avatarUrl,
        nickName: user.nickName,
        openid: user.openid
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        //--init data        
        var data = res.data.arr;
        console.log(res)
        var status = res.data.status;
        if (status != 1) {
          wx.showToast({
            title: res.data.msg,
            duration: 3000
          });
          return false;
        }
        wx.setStorage({
          key: 'ROOM_SOURCE_DATE',
          data: {
            openid: user.openid,
          }
        });
      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！err:authlogin',
          duration: 2000
        });
      },
    });
  },
})