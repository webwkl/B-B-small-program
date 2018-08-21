var Moment = require("../../utils/moment.js");
var DATE_LIST = [];
var DATE_YEAR = new Date().getFullYear()
var DATE_MONTH = new Date().getMonth() + 1
var DATE_DAY = new Date().getDate()
var app = getApp();
// pages/fillorder/fillorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: '/resource/images/ding.png',
    checkInDate: "",
    checkOutDate: "",
    h4_title: "【华章】衡复文化区独门花园LOFT古典新中式洋楼",
    text:"整套房子 | 1室1厅1卫 | 华章",
    time:"6月26日-7月1日  共2晚",
    endtime:"最早入住时间14:00，最晚退房12:00",
    right:"/resource/images/right.png",
    right_red: "/resource/images/right_red.png",
    nums:0,
    array: ['身份证号', '护照', '军官证'],
    index: 0,
    showModal: false,
    switch2Checked:false,
    integral:1300,
    money:13.00,
    yes:true,
    all_money:1268,
    bottom_red: "/resource/images/bottom_red.png",
    home_free:456,
    datestart: 8.03,
    dateend: 8.05,
    days:3,
    clean_free:46,
    clean_ci:3,
    oddclean:16,
    deduction:4.8,
    offer:68,
    go_count:false
  },
  // 相加
  upup: function () {
    this.data.nums += 1;
    console.log(1)
    // 将其赋值
    this.setData({
      nums: this.data.nums,
    })
  },
  // 相减
  dndn: function () {
    console.log(2)
    if (this.data.nums <= 0) {
      return;
    }
    this.data.nums -= 1;
    // 将其赋值
    this.setData({
      nums: this.data.nums,
    })
  },
  showModal: function (event) {
    
    this.setData({
      showModal: true,
    })

  },
  hideModal: function () {
    this.setData({
      showModal: false,
    });
  },
  go_count:function(){
    
    if (this.data.go_count ==  true) {
      this.setData({
        go_count: false,
      });
    }else{
      this.setData({
        go_count: true,
      });
    }
  },
  switch2Change: function (e) {
    this.setData({
      switch2Checked: e.detail.value,
    });
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    //设缓存缓存起来的日期
    wx.setStorage({
      key: 'ROOM_SOURCE_DATE',
      data: {
        checkInDate: Moment(new Date()).format('MM.DD'),
        checkOutDate: Moment(new Date()).add(1, 'day').format('MM.DD')
      }
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
  
  }
})