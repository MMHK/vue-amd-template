/**
 * 入口主文件
 */
define('main', ['vue', 'config/router', 'service/bus',
  'service/bus'
],
  function (Vue, router, EventBus) {
    'use strict'

    var App = Vue.extend({
      /**
       * 自定义 vm 内部变量
       */
      data: function () {
        return {
          NavOpen: false
        }
      }
    })
    router.start(App, '#App')
  })

require(['main'])
