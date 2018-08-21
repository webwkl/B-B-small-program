// pages/system/system.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[
      {
        date:'2017.06.01',
        src:'/resource/images/photo.png',
        title:'系统通知"',
        msg:'您好，欢迎您入住青城。您的订单5456543445已经确认，地址：北京市海淀区石塘路45号'
      },
      {
        date: '2017.06.01',
        src: '/resource/images/photo.png',
        title: '系统通知"',
        msg: '您好，欢迎您入住青城。您的订单5456543445已经确认，地址：北京市海淀区石塘路45号'
      },
      {
        date: '2017.06.01',
        src: '/resource/images/photo.png',
        title: '系统通知"',
        msg: '您好，欢迎您入住青城。您的订单5456543445已经确认，地址：北京市海淀区石塘路45号'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '系统通知',
    })
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