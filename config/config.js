/**
 * requireJS 依赖配置
 */
requirejs.config({
    baseUrl: BASE_PATH,
    waitSeconds: 3,
    paths: {
        "text": "lib/text/text",
        "vue": "lib/vue/dist/vue.min",
        "vue-router": "lib/vue-router/dist/vue-router.min",
        "vue-resource": "lib/vue-resource/dist/vue-resource.min",
        "vue-validator": "lib/vue-validator/dist/vue-validator.min",
        "promise": "lib/promise/promise-6.1.0",
        "lodash": "lib/lodash/dist/lodash.min",
        "css": "lib/require-css/css.min"
    },
    map: {
        '*': {
            'css': 'lib/require-css/css.min'
        }
    },
    shim: {
        "vue-router": {
            deps: ["vue"]
        },
        "vue-resource": {
            deps: ["vue"]
        }
    }
});