define("page/home", [
    "vue", 
    "text!page/home.html", 
    "css!page/home.css"
], function(Vue, tmpl, css){
    'use strict';
    
    return Vue.extend({
        template : tmpl
    });
});