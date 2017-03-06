// 引入zepto-modules模块
var $ = require('zepto-modules/zepto');
require('zepto-modules/event');
require('zepto-modules/ajax');
require('zepto-modules/form');
require('zepto-modules/ie');
require('zepto-modules/touch');
module.exports = $;

// 隐藏主体
$("#mainContent").hide();
//$(".swiper-container").hide();
var wx = require('./components/weixin/jweixin-1.0.0.js');

// 引入swiper模块
var Swiper = require('./components/swiper/swiper.min.js');

var swiperAnimate = require('./components/swiper/swiper.animate1.0.2.min.js');

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    mousewheelControl: true,
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    swiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
	    swiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
	  }, 
	onSlideChangeEnd: function(swiper){ 
		swiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	} 
});

// iscroll 模块
var IScroll = require('./components/iscroll/iscroll.js');

$('#enter').click(function(){
	$(".swiper-container").hide();
	$("#mainContent").show();
})

// experience 第一页

$.ajax({
  type: 'GET',
  url: './mock/experience.json',
  dataType:'json',
  success: function(data) {
  	var html = "";
  	for (var i = 0; i < data.length; i++) {
  		html += '<div class="mui-card"><div class="mui-card-header"><span style="color:#3399CC;font-size:18px;line-height:30px;">'
  				+data[i].name
  				+'</span></div><div class="mui-card-header mui-card-media" style="height:16rem;background-image:url(./'
  				+ data[i].image
  				+')"></div><div class="mui-card-content"><div class="mui-card-content-inner"><p>Timestamp '
  				+ data[i].time
  				+'</p><p style="color: #003366;font-size:15px;">'
  				+ '校训：'
  				+ data[i].motto
  				+'</p></div></div><div class="mui-card-footer"><a class="mui-card-link"> </a><a class="mui-card-link" style="color:#6699CC;">了解更多>></a></div></div>'
  	};
  	$("#page1").html(html);
    console.log(data);
  }
});

// 第二页 skill

$.ajax({
  type: 'GET',
  url: './mock/skill.json',
  dataType:'json',
  success: function(data) {
  	var html = "";
  	for (var i = 0; i < data.length; i++) {
  		html += '<li class="mui-table-view-cell mui-media"><a class=""><i class="mui-media-object mui-pull-left iconfont icon-'
  				+ data[i].image
  				+'" style="width:42px;height:42px;display:block;font-size:30px;text-align:center;line-height:42px;"></i><div class="mui-media-body">'
  				+ data[i].category
  				+'<span style="float:right;font-size:15px;padding-right:5px;">'
  				+ data[i].level
  				+'</span>'
  				+'<p class="mui-ellipsis">'
  				+ data[i].name
  				+'</p></div></a></li>'
  	};
  	$("#page2").html(html);
    console.log(data);
  }
});

// 第三页 project

$.ajax({
type: 'GET',
url: './mock/project.json',
dataType:'json',
success: function(data) {
	var html = "";
	for (var i = 0; i < data.length; i++) {
		html += '<div class="mui-card" style="margin:0;"><div class="mui-card"><div class="mui-card-header" style="color:#3399CC;">'
				+ data[i].name
				+ '</div><p><img src="'
				+ data[i].image1
				+ '" data-preview-src="" data-preview-group="1"></p><div class="mui-card-footer">'
				+ data[i].title1
				+ '</div></div><div class="mui-card"><div class="mui-card-header" style="font-size:15px;color:#003366">技术：'
				+ data[i].tech
				+ '</div><p><img src="'
				+ data[i].image2
				+ '" data-preview-src="" data-preview-group="1"></p><p><img src="'
				+ data[i].image3
				+ '" data-preview-src="" data-preview-group="1"></p><div class="mui-card-footer">'
				+ data[i].title2
				+ '</div><div>'
	};
	$("#page3").html(html);
    console.log(data);
}
});

$("#bgmOn").on('click', function(){
	$("#bgmOn").css({"display":"none"});
	$("#bgmOff").css({"display":"block"});
})
$("#bgmOff").on('click', function(){
	$("#bgmOn").css({"display":"block"});
	$("#bgmOff").css({"display":"none"});
})


