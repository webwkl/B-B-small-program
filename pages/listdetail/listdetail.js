// pages/listdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form:{
      name:'陈云',
      idcard:'11222222',
      phone:'1111111',
      num:'1222222',
      starttime:'2018-06-23  14:21:23',
      insurance:"已选择住宿意外险",
      money:'598'
    },
    items:{
      status:'0',//0 代付款，1 待评价
      title:'【华章】衡复文化区独门花园LOFT古典新中式洋楼',
      totalmoney:'598',
      expense:"300",
      nights:"3",
      date:'07.02 - 08.05',
      cleaning:'3',
      cleansmouney:'300',
      cleanmouney:'16',
      jifen:'4.8',
      discount:"68"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '订单详情',
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