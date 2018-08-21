var cityObj= [];
var app = getApp();
var that = this;
var hotlist=[];
wx.request({
  url: app.data.ceshiUrl + '/Index/regiona',
  method: 'post',
  // data: { "city": that.data.city },
  header: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  },
  success: function (res) {
    cityObj = res.data.list;
    hotlist = res.data.hotlist;
    //endInitData
  },
  fail: function (e) {
    wx.showToast({
      title: '网络异常！',
      duration: 2000
    });
  },
})


function hotlista() {
  return hotlist;
}

//城市检索的首字母
var searchLetter = ["A", "B", "C", "D", "E", "F", "G", "H","J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"]

function searchLetter() {
    return searchLetter;
}

//对城市信息进行分组
function cityList() {
    
    var tempObj=[];
    for (var i = 0; i < searchLetter.length; i++) {
        var initial = searchLetter[i];
        var cityInfo = [];
        var tempArr = {};
        tempArr.initial = initial;
        for (var j = 0; j < cityObj.length; j++) {
            if (initial == cityObj[j].initial) {
                cityInfo.push(cityObj[j]);
            }
        }
        tempArr.cityInfo = cityInfo;
        tempObj.push(tempArr);
    }
    return tempObj;
}

function pushCity() {

}
module.exports = {
    searchLetter: searchLetter,
    cityList: cityList,
    hotlista: hotlista
}