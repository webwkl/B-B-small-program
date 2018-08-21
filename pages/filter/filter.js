var Moment = require("../../utils/moment.js");
var DATE_LIST = [];
var DATE_YEAR = new Date().getFullYear()
var DATE_MONTH = new Date().getMonth() + 1
var DATE_DAY = new Date().getDate()
var app = getApp();
// pages/filter/filter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    down_red:'/resource/images/down_red.png',
    array: [{
        message: '前门',
        m_id:0,
      }, {
        message: '鼓楼大街',
        m_id: 1,
      },
      {
        message: '来佛营',
        m_id: 2,
      },
      {
        message: '北土城',
        m_id: 3,
      },
    ],
    array1: [{
        message: '筒子楼',
        m_id: 0,
      }, {
        message: '公寓',
        m_id: 1,
      },
      {
        message: '别墅',
        m_id: 2,
      },
      {
        message: '胡同',
        m_id: 3,
      },
    ],
    array2: [{
        message: '一居室',
        m_id: 0,
      }, {
        message: '两居室',
        m_id: 1,
      },
      {
        message: '三居室',
        m_id: 2,
      },
      {
        message: '其他',
        m_id: 3,
      },
    ],
    currentItemId: "0",
    currentItemId1: "0",
    currentItemId2: "0",
    numbers:0,
    number_two:0,
    checkInDate: "",
    checkOutDate: "",
    smallprice:'',
    bigprice: ''
  },
  click: function (e) {
    this.setData({
      currentItemId: e.currentTarget.dataset.num
    })
  },
  click1: function (e) {
    this.setData({
      currentItemId1: e.currentTarget.dataset.num
    })
  },
  click2: function (e) {
    wx.setStorage({
      key: "house",
      data: {
        'huxing': e.currentTarget.dataset.num+1,
      }
    })

    this.setData({
      currentItemId2: e.currentTarget.dataset.num
    })
  },
  down_go: function (e) {
    this.setData({
      t_height: e.currentTarget.dataset.t_height
    })
  },
  // 相加
  upup: function () {
    console.log(this.data.numbers);
    this.data.numbers += 1;
      // 将其赋值
    console.log(this.data.numbers);
      this.setData({
        numbers: this.data.numbers,
      })
  },
  // 相减
  dndn: function () {
    console.log(2)
    if (this.data.numbers <= 0) {
      return;
    }
    this.data.numbers -= 1;
      // 将其赋值
      this.setData({
        numbers: this.data.numbers,
      })
  },
  upup1: function () {
    this.data.number_two += 1;
    console.log(12)
    // 将其赋值
    this.setData({
      number_two: this.data.number_two,
    })
  },
  // 相减
  dndn1: function () {
    console.log(21)
    if (this.data.number_two <= 0) {
      return;
    }
    this.data.number_two -= 1;
    // 将其赋值
    this.setData({
      number_two: this.data.number_two,
    })
  },
  //页面跳转与赋值
  letGo: function () {
    wx.setStorageSync('numbers', this.data.numbers);
    wx.setStorageSync('number_two', this.data.number_two);
    app.globalData.shoumember = this.data.numbers + this.data.number_two;
    wx.setStorage({
      key: "number",
      data: {
        'numbers': this.data.numbers,
        'number_two': this.data.number_two,
        'smallprice': this.data.smallprice,
        'bigprice': this.data.bigprice,
      }
    })

    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  chongzhi:function (){
    wx.navigateTo({
      url: '/pages/filter/filter'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    let getDate = wx.getStorageSync("ROOM_SOURCE_DATE");
    let numberdata = wx.getStorageSync("number");
    let house = wx.getStorageSync("house");

    if (house.huxing) {
      this.setData({
        currentItemId2: house.huxing-1
      })
    }

    

    if (numberdata.numbers) {
      this.setData({
        numbers: numberdata.numbers,
      })
    }
    if (numberdata.number_two) {
      this.setData({
        number_two: numberdata.number_two,
      })
    }
    if (numberdata.bigprice) {
      this.setData({
        bigprice: numberdata.bigprice,
      })
    }
    if (numberdata.smallprice) {
      this.setData({
        smallprice: numberdata.smallprice,
      })
    }
    if (getDate.checkInDate) {
      this.setData({
        checkInDate: getDate.checkInDate,
        checkOutDate: getDate.checkOutDate,
      })
    }
  },
  smallprice: function (e){
    this.setData({
      smallprice: e.detail.value
    });
  },
  bigprice: function (e) {
    this.setData({
      bigprice: e.detail.value
    });
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