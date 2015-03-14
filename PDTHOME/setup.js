$(document).ready(function(){


	
	$('#cbox').jflickrfeed({
		feedapi: 'photos_public.gne',
		limit: 25,
		qstrings: {
			id: '130431157@N07',
			tags: 'websitefeed1'
		},
		itemTemplate: '<li>'+
						'<a rel="colorbox" href="{{image}}" title="{{title}}">' +
							'<img src="{{image_s}}" alt="{{title}}" />' +
						'</a>' +
					  '</li>'
	}, function(data) {
		$('#cbox a').colorbox();
	});

	$('#cbox1').jflickrfeed({
		limit: 25,
		qstrings: {
			id: '28027835@N04'
		},
		itemTemplate: '<li>'+
						'<a rel="colorbox" href="{{image}}" title="{{title}}">' +
							'<img src="{{image_s}}" alt="{{title}}" />' +
						'</a>' +
					  '</li>'
	}, function(data) {
		$('#cbox1 a').colorbox();
	});

});