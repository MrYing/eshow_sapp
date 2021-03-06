// Communicate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      imgUrls: [
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
  },

  /**
   * 发布动态
   */
  publishDynamic: function() {
      wx.navigateTo({
          url: '../PublishDynamic/PublishDynamic',
          success: function (res) {
              // success
          },
          fail: function () {
              // fail
          },
          complete: function () {
              // complete
          }
      })
  },

  /**
   * 聊天页面
   */
  clickHeadImage: function(){
      wx.navigateTo({
          url: '../../Index/ExhibitorInfo/ExhibitorInfo',
          success: function (res) {
              // success
          },
          fail: function () {
              // fail
          },
          complete: function () {
              // complete
          }
      })
  },
  
  /**
   * 选召唤图片
   */
  selectImageAction: function() {
      wx.showActionSheet({
          itemList: ['相机', '相册'],
          success: function (res) {
              console.log(res.tapIndex)
              if(0 == res.tapIndex){
                  wx.chooseImage({
                      count: 1, // 默认9
                      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                      sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
                      success: function (res) {
                          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                          var tempFilePaths = res.tempFilePaths
                      }
                  })
              }else if(1 == res.tapIndex){
                  wx.chooseImage({
                      count: 1, // 默认9
                      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                      sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有
                      success: function (res) {
                          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                          var tempFilePaths = res.tempFilePaths
                      }
                  })
              }
          },
          fail: function (res) {
              console.log(res.errMsg)
          }
      })
  },

  onLoad: function (options) {
      var that = this
      wx.getSystemInfo({
          success: function (res) {
              that.setData({
                  MaxHeigth: res.windowHeight,
                  MaxWidth: res.windowWidth
              })
          }
      })
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