// pages/landlord/landlord.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFold:true,
    hui:0,
    fen:0,
    ban:false,
   items:{
     name:"陈云",
     num:'123',
     fen: '3.5',
     date:'2017年01月10日',
     text:'位置很棒，住宿环境也不错',
     text1:'我是一位60多岁的老人；曾经的人民教师，现在是重庆小面20强之一的小面馆老板。从出生开始，我就在这儿。这座城市给予我太多的梦想与快乐，我希望也能分享给你。我喜欢美食和下厨，也喜欢旅游，这座城市的山山水水都留有我的足迹，所以，陌生的你不用担心，我会',
     url:'/resource/images/landlord/photo_s.png',
   },
   house:[
     {
       url:'/resource/images/landlord/house.png',
       title:'国贸观景房',
       num:'5.0',
       people:'3',
       count:'15'
     },
      {
       url: '/resource/images/landlord/house.png',
       title: '国贸观景房',
       num: '5.0',
       people: '4',
       count: '15'
     }
   ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: app.data.ceshiUrl + '/User/data',
      method: 'post',
      data: { 'hid': 1 },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res);
        that.setData(res.data);
        //endInitData
      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        });
      },
    })

    wx.setNavigationBarTitle({
      title: '房东主页',
    })
    
    this.pingfen(this.data.items.fen)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  pingfen: function(e){
      console.log(e);
  },
  onReady: function () {
  
  },
  //点击查看全部
  showAll: function (e) {
    this.setData({
      isFold: !this.data.isFold,
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  //显示星星的函数
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