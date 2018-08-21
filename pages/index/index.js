// pages/index/index.js
var Moment = require("../../utils/moment.js");
var DATE_LIST = [];
var DATE_YEAR = new Date().getFullYear()
var DATE_MONTH = new Date().getMonth() + 1
var DATE_DAY = new Date().getDate()
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'/resource/images/ding.png',
    src1:'/resource/images/down.png',
    src2:'/resource/images/fixed.png',
    src3:'/resource/images/fixed_bottom.png',
    list:[],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    showModal:false,
    checkInDate: "",
    checkOutDate: "",
    shoucity: app.globalData.shoucity,            //地址
    shoucitycode: app.globalData.shoucitycode,    //地址编号     
    shoutime: app.globalData.shoutime,            //时间   
    shoumember: app.globalData.shoumember,        //用户
    shoushangquan: app.globalData.shoushangquan,  //商圈
    shouleixing: app.globalData.shouleixing,      //房间类型
    shouhuxing: app.globalData.shouhuxing,        //房间户型
    array: ['0','1', '2', '3', '4','5','6','7','8','9','10'],
    index:0,
    nowpage:1
  },
  bindPickerChange: function (e) {
    app.globalData.shoumember = e.detail.value;
    this.setData({
      index: e.detail.value
    })
    this.onShow();
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
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
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
  search: function (e){
    var like = e.detail.value;
    //设缓存缓存起来的日期
    wx.setStorage({
      key: 'ROOM_SOURCE_DATE',
      data: {
        checkInDate: Moment(new Date()).format('MM.DD'),
        checkOutDate: Moment(new Date()).add(1, 'day').format('MM.DD')
      }
    });

    let getDate = wx.getStorageSync("ROOM_SOURCE_DATE");
    var datas = 2018 + getDate.checkInDate;
    var datae = 2018 + getDate.checkOutDate;
    var timestime = datas + '-' + datae;

    if (getDate.checkInDate) {
      var ycheckInDate = getDate.checkInDate;
      var ycheckOutDate = getDate.checkOutDate;
    } else {
      var ycheckInDate = Moment(new Date()).format('MM.DD');
      var ycheckOutDate = Moment(new Date()).format('MM.DD');
    }

    if (getDate.checkInDate) {
      var ycheckInDate = getDate.checkInDate;
      var ycheckOutDate = getDate.checkOutDate;
    } else {
      var ycheckInDate = Moment(new Date()).format('MM.DD');
      var ycheckOutDate = Moment(new Date()).format('MM.DD');
    }


    let numberdata = wx.getStorageSync("number");
    let house = wx.getStorageSync("house");

    wx.setStorage({
      key: "number",
      data: {
        'numbers': this.data.numbers,
        'number_two': this.data.number_two,
        'smallprice': this.data.smallprice,
        'bigprice': this.data.bigprice,
        'like':like,
      }
    })

    if (house.huxing) {
      var huxing = house.huxing;
    } else {
      var huxing = 0;
    }


    if (numberdata.smallprice && numberdata.bigprice) {
      var smallprice = numberdata.smallprice;
      var bigprice = numberdata.bigprice;
    } else if (!numberdata.smallprice && numberdata.bigprice) {
      var smallprice = 0;
      var bigprice = numberdata.bigprice;
    } else if (numberdata.smallprice && !numberdata.bigprice) {
      var smallprice = numberdata.smallprice;
      var bigprice = 100000;
    } else {
      var smallprice = 0;
      var bigprice = 100000;
    }

    this.setData({
      checkInDate: ycheckInDate,
      checkOutDate: ycheckOutDate,
      shoucity: app.globalData.shoucity,            //地址
      shoucitycode: app.globalData.shoucitycode,    //地址编号
      shoutime: timestime,                         //时间
      shoumember: app.globalData.shoumember,        //可住人数
      shoushangquan: app.globalData.shoushangquan,  //商圈
      shouleixing: app.globalData.shouleixing,      //房间类型
      shouhuxing: app.globalData.shouhuxing,        //房间户型
      index: app.globalData.shoumember,
    });
    var that = this;
    wx.request({
      url: app.data.ceshiUrl + '/Index/index',
      method: 'post',
      data: { "city": app.globalData.shoucitycode, 'timestime': timestime, 'shoumember': app.globalData.shoumember, 'smallprice': smallprice, 'bigprice': bigprice, 'huxing': huxing, 'like': like},
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        that.setData({
          list: res.data,
        });
        //endInitData
      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        });
      },
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (e) { 
    //设缓存缓存起来的日期
    wx.setStorage({
      key: 'ROOM_SOURCE_DATE',
      data: {
        checkInDate: Moment(new Date()).format('MM.DD'),
        checkOutDate: Moment(new Date()).add(1, 'day').format('MM.DD')
      }
    });

    let getDate = wx.getStorageSync("ROOM_SOURCE_DATE");
    var datas = 2018 + getDate.checkInDate;
    var datae = 2018 + getDate.checkOutDate;
    var timestime = datas+'-'+datae;

    if (getDate.checkInDate){
      var ycheckInDate  = getDate.checkInDate;
      var ycheckOutDate = getDate.checkOutDate;
    }else{
      var ycheckInDate = Moment(new Date()).format('MM.DD');
      var ycheckOutDate= Moment(new Date()).format('MM.DD');
    }

    if (getDate.checkInDate) {
      var ycheckInDate = getDate.checkInDate;
      var ycheckOutDate = getDate.checkOutDate;
    } else {
      var ycheckInDate = Moment(new Date()).format('MM.DD');
      var ycheckOutDate = Moment(new Date()).format('MM.DD');
    }


    let numberdata = wx.getStorageSync("number");
    let house = wx.getStorageSync("house");

    wx.setStorage({
      key: "number",
      data: {
        'numbers': this.data.numbers,
        'number_two': this.data.number_two,
        'smallprice': this.data.smallprice,
        'bigprice': this.data.bigprice,
      }
    })

    if (house.huxing){
      var huxing = house.huxing;
    }else{
      var huxing = 0;
    }

    
    if (numberdata.smallprice && numberdata.bigprice){
      var smallprice  = numberdata.smallprice;
      var bigprice    = numberdata.bigprice;
    }else if (!numberdata.smallprice && numberdata.bigprice) {
      var smallprice = 0;
      var bigprice   = numberdata.bigprice;
    }else if (numberdata.smallprice && !numberdata.bigprice) {
      var smallprice = numberdata.smallprice;
      var bigprice   = 100000;
    }else{
      var smallprice = 0;
      var bigprice   = 100000;
    }
    
    this.setData({
      checkInDate: ycheckInDate,  
      checkOutDate: ycheckOutDate,
      shoucity: app.globalData.shoucity,            //地址
      shoucitycode: app.globalData.shoucitycode,    //地址编号
      shoutime: timestime,                         //时间
      shoumember: app.globalData.shoumember,        //可住人数
      shoushangquan: app.globalData.shoushangquan,  //商圈
      shouleixing: app.globalData.shouleixing,      //房间类型
      shouhuxing: app.globalData.shouhuxing,        //房间户型
      index: app.globalData.shoumember,
    });
    var that = this;
    wx.request({
      url: app.data.ceshiUrl + '/Index/index',
      method: 'post',
      data: { "city": app.globalData.shoucitycode, 'timestime': timestime, 'shoumember': app.globalData.shoumember, 'smallprice': smallprice, 'bigprice': bigprice, 'huxing': huxing},
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        that.setData({
          list: res.data,
        });
        //endInitData
      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        });
      },
    })
  },
  detaillianjie: function(e){
      var hid = e.currentTarget.dataset.textid;
      wx.navigateTo({
        url: '/pages/housingdetails/housingdetails?hid=' + hid,
      })  
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
    //设缓存缓存起来的日期
    wx.setStorage({
      key: 'ROOM_SOURCE_DATE',
      data: {
        checkInDate: Moment(new Date()).format('MM.DD'),
        checkOutDate: Moment(new Date()).add(1, 'day').format('MM.DD')
      }
    });

    let getDate = wx.getStorageSync("ROOM_SOURCE_DATE");
    var datas = 2018 + getDate.checkInDate;
    var datae = 2018 + getDate.checkOutDate;
    var timestime = datas + '-' + datae;

    if (getDate.checkInDate) {
      var ycheckInDate = getDate.checkInDate;
      var ycheckOutDate = getDate.checkOutDate;
    } else {
      var ycheckInDate = Moment(new Date()).format('MM.DD');
      var ycheckOutDate = Moment(new Date()).format('MM.DD');
    }

    if (getDate.checkInDate) {
      var ycheckInDate = getDate.checkInDate;
      var ycheckOutDate = getDate.checkOutDate;
    } else {
      var ycheckInDate = Moment(new Date()).format('MM.DD');
      var ycheckOutDate = Moment(new Date()).format('MM.DD');
    }


    let numberdata = wx.getStorageSync("number");
    let house = wx.getStorageSync("house");

    wx.setStorage({
      key: "number",
      data: {
        'numbers': this.data.numbers,
        'number_two': this.data.number_two,
        'smallprice': this.data.smallprice,
        'bigprice': this.data.bigprice,
      }
    })

    if (house.huxing) {
      var huxing = house.huxing;
    } else {
      var huxing = 0;
    }


    if (numberdata.smallprice && numberdata.bigprice) {
      var smallprice = numberdata.smallprice;
      var bigprice = numberdata.bigprice;
    } else if (!numberdata.smallprice && numberdata.bigprice) {
      var smallprice = 0;
      var bigprice = numberdata.bigprice;
    } else if (numberdata.smallprice && !numberdata.bigprice) {
      var smallprice = numberdata.smallprice;
      var bigprice = 100000;
    } else {
      var smallprice = 0;
      var bigprice = 100000;
    }

    this.setData({
      checkInDate: ycheckInDate,
      checkOutDate: ycheckOutDate,
      shoucity: app.globalData.shoucity,            //地址
      shoucitycode: app.globalData.shoucitycode,    //地址编号
      shoutime: timestime,                         //时间
      shoumember: app.globalData.shoumember,        //可住人数
      shoushangquan: app.globalData.shoushangquan,  //商圈
      shouleixing: app.globalData.shouleixing,      //房间类型
      shouhuxing: app.globalData.shouhuxing,        //房间户型
      index: app.globalData.shoumember,
      nowpage: this.data.nowpage+1
    });
    var that = this;
    wx.request({
      url: app.data.ceshiUrl + '/Index/index',
      method: 'post',
      data: { "city": app.globalData.shoucitycode, 'timestime': timestime, 'shoumember': app.globalData.shoumember, 'smallprice': smallprice, 'bigprice': bigprice, 'huxing': huxing,'nowpage':this.data.nowpage },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        var list = that.data.list;
        for (var i = 0; i < res.data.length; i++) {
          list.push(res.data[i]);
        }
        // 设置数组元素  
        that.setData({
          list: list
        });
      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        });
      },
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})