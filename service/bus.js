define("service/bus", ["vue"], function(Vue) {
    'use strict';

    if (window["bus"]) {
        return window["bus"];
    }

    var bus = new Vue({});
    window.bus = bus;
    return bus;
});