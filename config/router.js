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
    },
    'search': {
      component: function (resolve) {
        require(['page/search'], resolve)
      }
    },
    'brand/:brand_id': {
      component: function (resolve) {
        require(['page/brand'], resolve)
      }
    },
    'detail/:post_id': {
      component: function (resolve) {
        require(['page/post'], resolve)
      }
    },
    'profile': {
      component: function (resolve) {
        require(['page/profile'], resolve)
      },
      subRoutes: {
        '/': {
          component: function (resolve) {
            require(['page/profile-home'], resolve)
          }
        }
      }
    },
    'profile/edit': {
      component: function (resolve) {
        require(['page/profile-edit'], resolve)
      }
    },
    'basic_login': {
      component: function (resolve) {
        require(['page/basic_login'], resolve)
      }
    },
    'share_box': {
      component: function (resolve) {
        require(['page/share-box'], resolve)
      }
    },
    'alogin_share': {
      component: function (resolve) {
        require(['page/alogin-share'], resolve)
      }
    },
    'intro': {
      component: function (resolve) {
        require(['page/intro'], resolve)
      }
    },
    'intro_shop': {
      component: function (resolve) {
        require(['page/intro-shop'], resolve)
      }
    },
    'invite_frd': {
      component: function (resolve) {
        require(['page/invite-frd'], resolve)
      }
    },
    'invite_shop': {
      component: function (resolve) {
        require(['page/invite-shop'], resolve)
      }
    },
    'shop_form': {
      component: function (resolve) {
        require(['page/shop-form'], resolve)
      }
    },
    'setting': {
      component: function (resolve) {
        require(['page/setting'], resolve)
      }
    },
    'login_start': {
      component: function (resolve) {
        require(['page/login-start'], resolve)
      }
    },
    'term_policy': {
      component: function (resolve) {
        require(['page/term_policy'], resolve)
      }
    },
    'login_share': {
      component: function (resolve) {
        require(['page/login-share'], resolve)
      }
    },
    'withdraw': {
      component: function (resolve) {
        require(['page/withdraw'], resolve)
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
    window.scrollTo(0, 0)
  })

  return router
})
