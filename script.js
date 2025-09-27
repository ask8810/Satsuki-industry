$('.effect').on('inview', function() {
	 var $item = $(this);
	 $item.addClass('start');
});

var $header = $('header');

var w_h = $(window).height();
var topBtn = $('.to_top');


if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {


$(window).scroll(function () {

        if ($(this).scrollTop() > 100 && menuOpen == false) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
} else {


$(window).scroll(function () {
	var w_h = $(window).height();
		var s_top = $(this).scrollTop(); //繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺ｮ蛟､繧貞叙蠕�
		var l_top = w_h / 2;
		var ml_top = l_top + s_top / 2;

        if ($(this).scrollTop() > 100 && menuOpen == false) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
		 if ($(window).scrollTop() > 300) {
                $header.addClass('fixed');
            } else {
                $header.removeClass('fixed');
            }
    });
}

$(function(){
	
	topBtn.hide();

$('a[href^=#]').click(function(){
var speed = 500;
var href= $(this).attr("href");
var target = $(href == "#" || href == "" ? 'html' : href);
var position = target.offset().top;
$("html, body").animate({scrollTop:position}, speed, "swing");
return false;
});


});



//繧ｹ繝槭�繝｡繝九Η繝ｼ
var bnrBtn = $('#g_navi');
var menuOpen = false;
var scrollpos;

$('.bg_bl').hide();

var ttt = false;

$(function(){
        $(".menu_btn").on("click", function() {
	if(ttt == false) {
          bnrBtn.fadeIn();
          menuOpen = true;
		  $('.om').hide();
		  $('.to_top').hide();
		  $('.bg_bl').fadeIn();
		  scrollpos = $(window).scrollTop();
      $('body').addClass('fixed').css({'top': -scrollpos});
	        $(".menu_btn").addClass('opened');
	  ttt = true;
	} else {
		bnrBtn.fadeOut();
          menuOpen = false;
		  $('.om').show();
		  $('.bg_bl').fadeOut();
		  $('body').removeClass('fixed').css({'top': 0});
		  $(".menu_btn").removeClass('opened');
      window.scrollTo( 0 , scrollpos );
	  ttt = false;
	}
        });
});


$('#g_navi a[href]').on('click', function(event) {
	if(ttt == true) {
    $('.menu_btn').trigger('click');
	}
});


//繧｢繧ｳ繝ｼ繝�ぅ繧ｪ繝ｳ
$(function(){
        $(".ac_menu").on("click", function() {
            $(this).next().slideToggle(); 
            $(this).toggleClass("active"); 
        });
});

// 繧ｵ繧､繝医い繧ｯ繧ｻ繧ｹ譎ゅヵ繧ｧ繝ｼ繝峨う繝ｳ 
$(function(){
 
    $('body').hide();
    $('body').fadeIn(300);
     
});

$(window).fadeThis();

