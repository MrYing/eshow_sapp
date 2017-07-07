// FadeBack.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectIndex: 0
  },

  /**
   * 意见提交
   */
  saveinfo: function () {
      wx.redirectTo({
        url: '../FadeBackSuccess/FadeBackSuccess',
    })
  },

  /**
   * 点击第一个按钮
   */
  seleBtn0: function () {
    var that = this;
    that.setData({
        selectIndex: 0
    })
  },

  /**
   * 点击第二个按钮
   */
  seleBtn1: function () {
      var that = this;
      that.setData({
          selectIndex: 1
      })
  },

  /**
   * 点击第三个按钮
   */
  seleBtn2: function () {
      var that = this;
      that.setData({
          selectIndex: 2
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