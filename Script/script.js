$(document).ready(function(){
			$('.toggle').click(function(){
				$('.nav-right').toggleClass('active');
			});
		});

var windowWidth = $(window).width();
if(windowWidth > 541){
    
$(window).on('scroll', function() {
						if($(window).scrollTop()) {
							$('nav').addClass('black');
							$(".nav-right").css("background-color", "transparent"); 
							$('.nav-right').addClass('black');
							}

						else{
							$('nav').removeClass('black');
							$(".nav-right").css("background-color", "#fff"); 
							$('.nav-right').removeClass('black');
						}
			});


}