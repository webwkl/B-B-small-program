// pages/my/personallook/personallook.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: '/resource/images/mine/phone.png',
    date: '2017-11-11',
    form:{
      name:'陈云',
      sex:'男',
      email:"123@.COM",
      idcard:'11111111',
      

    },
    openid:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '个人资料',
    });
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  formSubmit: function (e) {
    // app.globalData.userInfo['openid'] = data.openid;
    // console.log(this.data.date)
    // console.log('form发生了submit事件，携带数据为：', e.detail)
    // var name = e.detail.value.name;
    // var phone = e.detail.value.phone;
    // // mobile
    // var email = e.detail.value.email;
    // var company = e.detail.value.mobile;
    // var job = e.detail.value.job;
    // var vip = e.detail.value.vip;
    // if (name == "" || phone == "" || email == "" || company == "" || job == "" || vip == "") {
    //   wx.showModal({
    //     title: '提示',
    //     content: '请输入完整信息！',
    //     });
    // }
    console.log(e.detail.value)
      var user = app.globalData.userInfo;
      wx.request({
        url: app.data.ceshiUrl + '/Author/information',
        method: 'post',
        data: {
          name: e.detail.value.name,
          sex: e.detail.value.sex,
          email: e.detail.value.email,
          card: e.detail.value.card,
          openid: user.openid,
          date: this.data.date
        },
        header: {
           'Content-Type':'application/x-www-form-urlencoded'
        },
        success: function (res) {
          console.log(res)
        }
      }) 
  },
  chooseimg: function(){
    var _this=this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        _this.setData({
          url: tempFilePaths
        })
        
      }
    })
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
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
    
  },
})