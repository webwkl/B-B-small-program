// pages/evaluatedetail/evaluatedetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hui: 0,
    fen: 0,
    ban: false,
    item: {
      fen: '3.5',
      src: '/resource/images/landlord/photo_s.png',
      title: '交通便利。周边配套设施齐全，房间非常安静',
      name: '王某某',
      title:'120条评价',
      images: [
        { src: '/resource/images/landlord/pingjia.png' },
        { src: '/resource/images/landlord/pingjia.png' },
        { src: '/resource/images/landlord/pingjia.png' }
      ],
      leave_message: " 位置很棒，住宿环境也不错",
      date: '2018年6月6日点评',
      reply_src: '/resource/images/reply.png',
      reply: '房东回复：离开的时候很干净，棒棒的房客'
    },
    checkin_date:'2018年6月6日入住',
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '查看评价',
    })
    console.log(options);
    this.pingfen(this.data.item.fen)
  },
  pingfen: function (i) {
    var y = String(parseFloat(i)).indexOf(".");
    console.log(parseFloat(i));
    if (y == 1) {
      this.setData({
        ban: true,
        hui: 5 - parseInt(i) - 1,
        fen: parseInt(i)
      })
    } else {
      this.setData({
        hui: 5 - i,
        fen: parseFloat(i),
        ban: false
      })
    }
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