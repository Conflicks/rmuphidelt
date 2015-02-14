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


	

	// $('.notselected').click(function(){
	// 	$(this).removeClass('notselected');
	// 	var _this = $(this);
	// 	var memberSelected = _this.attr('data-position');
	// 	$('.eboard-logo-circle.notselected').toggle("fade");
	// 	_this.show(50);
	// 	_this.css({"float":"left"});
	// 	if (memberSelected == 'president') {
	// 		$('#bio-container').toggle("fade").css({"width":"63.75%", "margin":"0 auto"});		
	// 		$('#bio-container').toggle("fade").append( "<p class='bio-text'>Wes Moore is a junior accounting major from Cabot, Pennsylvania.  Since joining Phi Delta Theta in the spring of his freshman year, Wes has had the opportunity to travel to Las Vegas, St. Louis, Hartford, and New York City for fraternal conferences and leadership building programs. Along with being president of Phi Delta Theta, Wes is a member of the Robert Morris Honors Program, serves as the treasurer of the College Republicans, and interns in the Financial Operations Department at Robert Morris University. Prior to being elected president Wes served as the social and recruitment chairman of Phi Delta Theta. Some of Wes's accomplishments at Robert Morris University include being a Dean's Scholar in the School of Business and winning an intramural soccer championship. After finishing his undergraduate degree in accounting, Wes plans to graduate in May of 2017 with a Master's degree in competitive intelligence systems and go on to pass the CPA exam.</p> ")			
	// 	} else if (memberSelected == 'vicepresident') {
	// 		$('#bio-container').css({"width":"63.75%", "margin":"0 auto"});		
	// 		$('#bio-container').append( "<p class='bio-text'>Nicholas Tufarolo is a junior finance major from Lancaster, PA.  He is actively involved in College Republicans, National Society of Collegiate Scholars, and the RMU investment network.  Nicholas Tufarolo was initiated into Phi Delta Theta with the Psi pledge class on December 2, 2012. Nicholas began his term as Vice President this spring semester, and he has also served as the chapter’s fundraising chairman and Phikeia Educator. Nicholas’ goals before graduation include becoming an Iron Phi and getting accepted to UPenn’s Wharton MBA program. After graduate school, he hopes to work in Pittsburgh in investment banking or financial planning, before retiring to his hometown of Lancaster, PA.</p> ")			
	// 	} else if (memberSelected == 'secretary') {
	// 		$('#bio-container').css({"width":"63.75%", "margin":"0 auto"});		
	// 		$('#bio-container').append( "<p class='bio-text'>Cory Desimone is a junior Actuarial Science major with a minor in Finance from Pittsburgh, PA.  Within the fraternity he has previously served on the chapter’s executive board as secretary and currently holds the position of Alumni Relations chairman. Cory, is also heavily involved in clubs such as a treasurer for Actuarial Science Club,and a member of College Democrats, Italian Club and is also the Captain of the Robert Morris University Club Inline Hockey Team, Cory is also a Mentor for the Early Success Program. According to Cory: “Being in this fraternity has truly been a great experience. I not only gained valuable skills and leadership opportunities that will help me in life but I have also created life-long friendships with all of my brothers.” </p> ")			
	// 	} else if (memberSelected == 'treasurer') {
	// 		$('#bio-container').css({"width":"63.75%", "margin":"0 auto"});		
	// 		$('#bio-container').append( "<p class='bio-text'>Zachary Lander is a sophomore mechanical engineer major from York, Pennsylvania.  Along with being the secretary of Phi Delta Theta Pennsylvania Pi chapter, Zack is a member of the club baseball team, an active member of mechatronics, and the president of the American Society of Mechanical Engineers. He is a graduate from Central York High School.  Phi Delta Theta has proved to Zack to be a very important and supportive stepping stone in both his academic and athletic successes.</p> ")			
	// 	} else if (memberSelected == 'recruitment') {
	// 		$('#bio-container').css({"width":"50%", "margin":"0 auto"});		
	// 		$('#bio-container').append( "<p class='bio-text'>Asa Bull is sophomore actuarial science student at Robert Morris University and works as a retirement intern at Towers Watson in downtown Pittsburgh. He is a member of the cheer team and rugby team, as well as the university honors program. Additionally, he is the Community Advisor for the honors dormitory. He has served as Chaplain and Scholarship chair for the PA Pi chapter of Phi Delta Theta, and has represented his chapter in various events such as Phighting Sexual Assualt, Deepher Dude, and ANAD week among others.</p> ")			
	// 	} else if (memberSelected == 'phikeia1') {
	// 		$('#bio-container').css({"width":"50%", "margin":"0 auto"});		
	// 		$('#bio-container').append( "<p class='bio-text'>Bill Bliss is a junior Biomedical Engineering major at Robert Morris University from Johnsonburg, PA. Bill is also part of the Biomedical Engineering Society, College Republicans and the Mechatronics club, Honors College, and the National Society of Collegiate Scholars. He also works at Joseph A. Banks as a part time sales associate. Bill has played on a multitude of intramural teams as well. Bill has served as our chapter Scholarship Chairman for three semesters, and now serves as one of the two Phikeia Educators.</p> ")			
	// 	} else if (memberSelected == 'phikeia2') {
	// 		$('#bio-container').css({"width":"50%", "margin":"0 auto"});		
	// 		$('#bio-container').append( "<p class='bio-text'>Mark Tilley is a sophomore nursing major. He is from Eighty-Four, Pennsylvania and graduated from Canon McMillan High School in 2013. At Robert Morris University, he is an honors student and is majoring in nursing, which takes up much of his time.  He has been a member of the fraternity since his initiation in the spring semester of 2014. Mark is also serving as a newly elected Phikeia educator. Outside of studying and the participating in the fraternity, Mark enjoys working out, playing golf, and hanging out with friends.  As a brother, he plans to make the most out of his college experience and create friendships that will last a lifetime. </p> ")			
	// 	}	
	// 	  else {
	
	// 	};

	// 	memberSelected = 0;
	// 	// $('#bio-container').css("margin-right":"400px");		
	// });

}


