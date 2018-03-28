
// -----------------------------------Carousel Time Show-----------------------------

$(document).ready(function(){
 $('.carousel').carousel({
 	interval:6000

	});
});

// --------------------------------------Run Nice Scroll-----------------------------

$(document).ready(

  function() { 

    $("html").niceScroll();

  }

);

//------------------------------------------Run Top Scroll-----------------------------

var scrollButton =$("#scroll-top");

$(window).scroll(function()
{

	 $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();

		
});
	


	scrollButton.click(function()
	{

		$("html,body").animate( {scrollTop:0} , 600);
	});
 
 //------------------------------------------------------------------------------------------------------------