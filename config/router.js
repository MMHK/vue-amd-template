/**
 * 客户端页面路由
 */
define('config/router', ['vue', 'vue-router', 'service/bus'], function (Vue, VueRouter, Bus) {
  'use strict'

  Vue.use(VueRouter)

  var options = {}
  if (IN_PRO) {
    options['history'] = true
    options['root'] = IN_PRO.root || ''
  }

  var router = new VueRouter(options)

  /**
   * url 路由，使用hash 代替真实的url匹配
   * 由于使用AMD方式，这里使用了一种异步引入VM方式实现。
   */
  router.map({
    /**
    * 首页
    */
    '/': {
      component: function (resolve) {
        require(['page/home'], resolve)
      }
    }
  })

  /**
   * 全局路由切换钩子，当完成page 切换时触发
   */
  router.afterEach(function (transition) {
    /**
     * 触发关闭右侧菜单
     */
    Bus.$emit('nav.change', false)
  })

  return router
})
