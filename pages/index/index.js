//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/slider.jpg',
      '/images/slider.jpg',
      '/images/slider.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgwidth: 320,
    imgheight: 160
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
})
