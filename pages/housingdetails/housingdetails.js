// pages/housingdetails/housingdetails.js
var amapFile = require('../../libs/amap-wx.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/resource/images/bg.png',
      '/resource/images/bg.png'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    isFold: false, 
    hid:'',
    src:'',
    imgurl: app.data.imgurl,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var hid = options.hid;
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: "0c9719827b7ce70c63bec5326ca02257" });
    wx.getSystemInfo({
      success: function (data) {
        var height = data.windowHeight-300;
        var width = data.windowWidth;
        var size = width + "*" + height;
        myAmapFun.getStaticmap({
          location:'117.330412,39.737266',
          zoom: 10,
          size: size,
          scale: 2,
          //labels: "朝阳公园,2,0,16,0xFFFFFF,0x008000:116.48482,39.94858",
          success: function (data) {
            that.setData({
              src: data.url,
              hid: hid,
            })
          },
          fail: function (info) {
            wx.showModal({ title: info.errMsg })
          }
        })

      }
    })
    
    wx.request({
      url: app.data.ceshiUrl + '/Houses/detail',
      method: 'post',
      data: { "hid": hid },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        that.setData(res.data);
      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        });
      },
    })

    wx.setNavigationBarTitle({
      title: '房源详情',
    })
  },

  tall: function () {
    wx.makePhoneCall({
      phoneNumber: '15810148981' //仅为示例，并非真实的电话号码
    })
  },

  flodFn: function () {
    console.log(1)
    this.setData({
      isFold: true
    });
  },
  flodFn2: function () {
    this.setData({
      isFold: false
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  usterdetail: function(e){
    wx.navigateTo({
      url: '/pages/landlord/landlord?hid=' + this.data.hid, 
    })
  },
  gengduo: function(e){
    console.log(this.data.hid);
    console.log(111);
    wx.navigateTo({
      url: '/pages/more/more?hid=' + this.data.hid,
    })
  },
  ljyd: function(e){
    if (app.globalData.userInfo.openid==''){
      console.log('请先授权');
      wx.navigateTo({
        url: '/pages/fillorder/fillorder?hid=' + this.data.hid,
      })
    }else{
      wx.navigateTo({
        url: '/pages/fillorder/fillorder?hid=' + this.data.hid,
      })
    }
  },
  pinglun: function (e){
    wx.navigateTo({
      url: '/pages/allevaluation/allevaluation?hid=' + this.data.hid,
    })
  },
  view_moneysure: function (e) {
    var that = this;
    wx.request({
      url: app.data.ceshiUrl + '/Pay/Pay',
      method: 'post',
      data: {
        'openid': app.globalData.userInfo.openid,
        'total_fee': 1,
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        wx.requestPayment(
          {
            'timeStamp': res.data['timeStamp'],
            'nonceStr': res.data['nonceStr'],
            'package': res.data['package'],
            'signType': "MD5",
            'paySign': res.data['paySign'],
            'success': function (res) {
              console.log(res);
            },
            'fail': function (res) {
              console.log(res);
            },
            'complete': function (res) { }
          })
      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        });
      },
    })
  },
})