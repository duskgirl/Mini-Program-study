// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },
  checkboxChangeHandle(event){
    console.log(event)
    console.log(event.currentTarget.dataset.param)
    console.log(event.detail.value)
  },
  // 自定义事件：关于事件冒泡
  fatherHandle: function(){
    console.log('你点击父亲干啥')
  },
  sonHandle: function(event){
    console.log('你点击儿子干啥')
    console.log(event)
    console.log('你点击的是第' + event.target.dataset.index+ '个儿子')
  }
})