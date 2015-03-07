$(document).ready(function(){

	$('#basicuse').jflickrfeed({
		limit: 8,
		qstrings: {
			id: '37304598@N02'
		},
		itemTemplate: '<li><a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
	});
	
	$('#cbox').jflickrfeed({
		limit: 60,
		qstrings: {
			id: '130431157@N07'
		},
		itemTemplate: '<li>'+
						'<a rel="colorbox" href="{{image}}" title="{{title}}">' +
							'<img src="{{image_s}}" alt="{{title}}" />' +
						'</a>' +
					  '</li>'
	}, function(data) {
		$('#cbox a').colorbox();
	});

});