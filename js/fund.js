$(document).ready(function(){

	$('.showpage').eq(1).click(function(){

			$('.detail .page').eq(1).css({transform:'scale(1)',webkitTransform:'scale(1)'});
			$('.detail .page').not($('.detail .page').eq(1)).css({transform:'scale(0)',webkitTransform:'scale(0)'});
	});
	$('.showpage').eq(2).click(function(){

			$('.detail .page').eq(2).css({transform:'scale(1)',webkitTransform:'scale(1)'});
			$('.detail .page').not($('.detail .page').eq(2)).css({transform:'scale(0)',webkitTransform:'scale(0)'});
	});
	$('.showpage').eq(3).click(function(){

			$('.detail .page').eq(3).css({transform:'scale(1)',webkitTransform:'scale(1)'});
			$('.detail .page').not($('.detail .page').eq(3)).css({transform:'scale(0)',webkitTransform:'scale(0)'});
	});
	$('.showpage').eq(0).click(function(){

			$('.detail .page').eq(0).css({transform:'scale(1)',webkitTransform:'scale(1)'});
			$('.detail .page').not($('.detail .page').eq(0)).css({transform:'scale(0)',webkitTransform:'scale(0)'});
	});

	$('.close').click(function(){
		$('.detail .page').css({transform:'scale(0)',webkitTransform:'scale(0)'});
	})
	$('.prev').click(function(){
		$('.detail .page').eq($('.prev').index($(this))).css({transform:'scale(0)',webkitTransform:'scale(0)'});
		
		$('.detail .page').eq($('.prev').index($(this))).prev().css({transform:'scale(1)',webkitTransform:'scale(1)'});
		
	});
	$('.next').click(function(){
		$('.detail .page').eq($('.next').index($(this))).css({transform:'scale(0)',webkitTransform:'scale(0)'});
		$('.detail .page').eq($('.next').index($(this))).next().css({transform:'scale(1)',webkitTransform:'scale(1)'});
	});

	$('.pro_click').click(function(){
		$('.pugi').addClass("donplay");
		$('.pugi').eq($('.pro_click').index($(this))).removeClass("donplay");
	});
})