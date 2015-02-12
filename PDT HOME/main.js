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

	$('.pillar-block').hide();
	$('.pillar-block').show("drop", 2000);
	
	$('html').hide();
	$('html').show("fade", 1000)

	$('.photos').flickrPhotoStream({ id: '130431157@N07', setId: '72157648446324673' });
 $('.photos').flickrPhotoStream({
          id: '130431157@N07',             // Flickr Id
          setId: '72157648446324673',          // Flick "Set" Id
          container: '<img />',    // wrap the image
          cssClass: 'photos-item'  // applied to the image's link
      }).done(function () {});
}

