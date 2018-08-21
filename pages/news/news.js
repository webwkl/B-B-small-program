// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      news:[
        {
          person:'/resource/images/person.png',
          massage:'您好，订单预定成功！',
          show:true,
          name:'系统通知',
          time:'刚刚',
          url:'../news/systemnews/systemnews'
        },
        {
          person: '/resource/images/person.png',
          massage: '您好，请问您什么时间入住？',
          show: true,
          name: '小明',
          time: '14:12',
        },
        {
          person: '/resource/images/person.png',
          massage: '国贸CBD|三里屯的阳光复古浪漫，公寓...',
          show: false,
          name: '小红',
          time: '18:03'
        },
      ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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