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
    imgheight: 160,
    showItem:1,
    userInfo:'',
  },
  onReady:function(){
    // if (app.globalData.userInfo) {
    //   console.log(1)
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //   })
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回  
    //   // 所以此处加入 callback 以防止这种情况  
    //   console.log(2)
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //     })
    //   }
    // }
    // else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理 
    //   console.log(3)
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //       })
    //     }
    //   })
    // }  
  },
  onLoad:function(){
     app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
        })
     } 
  },
  onShow:function(){
    var userInfo = app.globalData.userInfo
    this.setData({
      userInfo: userInfo
    })
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
  trials:function(){
      var showItem=1;
      this.setData({
        showItem:showItem
      })
  },
  packages: function () {
    var showItem = 2;
    this.setData({
      showItem: showItem
    })
    
  },
  about: function () {
    var showItem = 3;
    this.setData({
      showItem: showItem
    })
  },
  vip: function () {
    var showItem = 4;
    this.setData({
      showItem: showItem
    })
  },
  Load:function(){
    wx.navigateTo({
      url: '../account/index',
    })
  },
  play: function () {
    wx.navigateTo({
      url: '../play/index',
    })
  },
})
