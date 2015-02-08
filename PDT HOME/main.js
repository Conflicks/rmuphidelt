$(document).ready(function(){

	BindEventHandlers();
});

function BindEventHandlers() {
	$('.nav-link').hover(function(){
		var _this = $(this);
		_this.addClass("nav-link-hover");
	});

	$('.star-detail').mouseenter(function(){
		$(this).css({"color":"#666","margin-left":"5px"});

	});

	$('.star-detail').mouseleave(function(){
		$(this).css({"color":"rgb(0, 43, 84)","margin-left":"0px"});

	});

	$('.star-detail').click(function(){
		var _this = $(this);
		$('.star-detail.underline').removeClass('underline');
		_this.addClass('underline');
	});

	$('#body-container').hide();
	$('#body-container').show("scale", 1000);
}
