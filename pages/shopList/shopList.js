// pages/shopList/shopList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopList:[],
    catId: 1,
    limit: 20,
    page: 0,
    hasMore: true
  },
  //自定义加载更多的发送请求函数 
  loadMore: function(){
    if(!this.data.hasMore) return
    wx.request({
      url: 'https://locally.uieee.com/categories/' + this.data.catId + '/shops',
      data: {
        _limit: this.data.limit,
        _page: ++this.data.page
      },
      success: (res) => {
        var flag = res.data.length === 0 ? false : true
        this.setData({
          hasMore: flag
        })
         var shopList = this.data.shopList.concat(res.data)
        this.setData({
          shopList: shopList
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.title){
      wx.setNavigationBarTitle({
        title: options.title
      })
    }
    this.setData({
      catId: options.cat
    })
    this.loadMore()
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
    // 设置数据初始化
    this.setData({
      shopList: [],
      page: 0,
      hasMore: true
    })
    // 重新发送请求获取数据
    this.loadMore()
    // 停止当前页面下拉刷新，否则下拉刷新在手机端一直存在
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})