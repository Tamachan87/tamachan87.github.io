$(document).ready(function() {

	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('li.sidebar').click(function() {

		//REMOVE THE ON CLASS FROM ALL BUTTONS
		$('li.sidebar').removeClass('on');
		  
		//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	 	$('.content').slideUp('normal');
   
		//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
		if($(this).next().is(':hidden') == true) {
			
			//ADD THE ON CLASS TO THE BUTTON
			$(this).addClass('on');
			  
			//OPEN THE SLIDE
			$(this).next().slideDown('slow');
		 } 
		  
	 });
	 
	$('.content').hide();

	$('img').toggle(function() {
		$(this).animate({width: '75%'}, 'slow');
	}, function(){
		$(this).animate({width: '30%'}, 'slow');
		});

})