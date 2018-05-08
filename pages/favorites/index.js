//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgwidth: 700,
    imgheight: 350
  },
  imageLoad: function (e) {
    var windowWidth = 320;
    var windowHeight = 720;
    wx.getSystemInfo({
      success: function (res) {
        windowWidth = res.windowWidth;
        windowHeight = res.windowHeight;
      }
    });
    this.setData({
      imgwidth: windowWidth,
      imgheight: windowWidth / 2,
    })
  },
  play:function(){
    wx.navigateTo({
      url: '../play/index',
    })
  },
})
