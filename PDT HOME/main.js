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

	$('#eboard-back').hide();

	$('.star-detail').click(function(){
		var _this = $(this);
		$('.star-detail.underline').removeClass('underline');
		_this.addClass('underline');
	});

	$('.pillar-block').hide();
	$('.pillar-block').show("drop", 2000);
	
	$('html').hide();
	$('html').show("fade", 2000);

	$('div#slider-detail-caption').mouseenter(function(){
		$(this).animate({
			height: "+=20px",
		}, 250, function(){
		});
	});

	$('div#slider-detail-caption').mouseleave(function(){
		$(this).animate({
			height: "-=20px",
		}, 250, function(){

		});
	});


	$('.eboard-logo-circle').click(function(){
		$('#eboard-container-4').hide("fade", 100);
		$('#eboard-container-3').hide("fade", 100);
		secondhalf_function(function (){
		});
	});

	$('#eboard-back').click(function(){
		$(this).hide();
		$('#biodiv').html('')
		$('#eboard-container-4').show("fade", 500);
		$('#eboard-container-3').show("fade", 500);
		$('#biodiv').css({"width":"100%", "margin":"0 auto"});

	});
}

function secondhalf_function() {
	$('#biodiv').css({"width":"40%", "margin":"0 auto"});
		$('#biodiv').hide();
		$('#biodiv').show("fade", 500);
		$('#biodiv').html(presidentbio);
	$('#eboard-back').show();

}

presidentbio = "'<div class='eboard-logo-circle inline circle-hover center' id='presidentimage' dataposition='president' ></div><p>Wes Moore is a junior accounting major from Cabot, Pennsylvania.  Since joining Phi Delta Theta in the spring of his freshman year, Wes has had the opportunity to travel to Las Vegas, St. Louis, Hartford, and New York City for fraternal conferences and leadership building programs. Along with being president of Phi Delta Theta, Wes is a member of the Robert Morris Honors Program, serves as the treasurer of the College Republicans, and interns in the Financial Operations Department at Robert Morris University. Prior to being elected president Wes served as the social and recruitment chairman of Phi Delta Theta. Some of Wes's accomplishments at Robert Morris University include being a Dean's Scholar in the School of Business and winning an intramural soccer championship. After finishing his undergraduate degree in accounting, Wes plans to graduate in May of 2017 with a Master’s degree in competitive intelligence systems and go on to pass the CPA exam.<p>'"

vicebio = "'<p>Nicholas Tufarolo is a junior finance major from Lancaster, PA.  He is actively involved in College Republicans, National Society of Collegiate Scholars, and the RMU investment network.  Nicholas Tufarolo was initiated into Phi Delta Theta with the Psi pledge class on December 2, 2012. Nicholas began his term as Vice President this spring semester, and he has also served as the chapter’s fundraising chairman and Phikeia Educator. Nicholas' goals before graduation include becoming an Iron Phi and getting accepted to UPenn's Wharton MBA program. After graduate school, he hopes to work in Pittsburgh in investment banking or financial planning, before retiring to his hometown of Lancaster, PA.</p>'"

load = "'<div id='eboard-container-4'><div class='eboard-logo-circle inline circle-hover' id='presidentimage' dataposition='president'></div><div class='eboard-logo-circle inline circle-hover' id='viceimage' data-position='vice'></div><div class='eboard-logo-circle inline circle-hover' id='treasurerimage'></div><div class='eboard-logo-circle inline circle-hover' id='secretaryimage'></div><p></p></div><div id='eboard-container-3'><div class='eboard-logo-circle inline circle-hover' id='recruitmentimage'></div><div class='eboard-logo-circle inline circle-hover' id='educator1image'></div><div class='eboard-logo-circle inline circle-hover' id='educator2image'></div></div>'"