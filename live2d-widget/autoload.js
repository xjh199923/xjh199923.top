// build time:Thu May 28 2020 08:45:20 GMT+0800 (中国标准时间)
const live2d_path="https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/";$("<link>").attr({href:live2d_path+"waifu.css",rel:"stylesheet"}).appendTo("head");$.ajax({url:live2d_path+"live2d.min.js",dataType:"script",cache:true});$.ajax({url:live2d_path+"waifu-tips.js",dataType:"script",cache:true});$(window).on("load",function(){initWidget(live2d_path+"waifu-tips.json","https://live2d.fghrsh.net/api")});
//rebuild by neat 