// automations

 (function($) {

	"use strict";

	/*
	-------------
	| Preloader |
	------------- 
	*/ 
   $(window).load(function() {

      	// will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      	});       

  	})


  	/*
	--------------------
  	| FitText Settings |
  	--------------------
	*/
  	setTimeout(function() {

   	$('#intro h1').fitText(1, { minFontSize: '42px', maxFontSize: '84px' });

  	}, 100);


	/*
	---------------
	| Alert Boxes |
  	--------------- 
	*/
	$('.alert-box').on('click', '.close', function() {
	  	$(this).parent().fadeOut(500);
	});	


	/*
	----------------
	| Stat Counter |
  	---------------- 
	*/
   	var statSection = $("#stats"),
       	stats = $(".stat-count");

   	statSection.waypoint({

   	handler: function(direction) {

      	if (direction === "down") {       		

			stats.each(function () {
			   	var $this = $(this);

		  	$({ Counter: 0 }).animate({ Counter: $this.text() }, {
		   	duration: 4000,
		   	easing: 'swing',
		   	step: function (curValue) {
		      	$this.text(Math.ceil(curValue));
		    	}
		  	});
		});

    	} 

    	// trigger once only
    	this.destroy();      	

		},
			
		offset: "90%"
	
	});	


	
	/*
	-------------------
	| Navigation Menu |
    -------------------
	*/  
   	var toggleButton = $('.menu-toggle'),
       nav = $('.main-navigation');

   	// toggle button
   	toggleButton.on('click', function(e) {

		e.preventDefault();
		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();

	});

   	// nav items
  	nav.find('li a').on("click", function() {   

   	// update the toggle button 		
   	toggleButton.toggleClass('is-clicked'); 
   	// fadeout the navigation panel
   	nav.fadeOut();   		
   	     
  	});


   	/*
	-------------------------------------------------------
  	| Highlight the current section in the navigation bar |
  	-------------------------------------------------------
	*/
	var sections = $("section"),
	navigation_links = $("#main-nav-wrap li a");	

	sections.waypoint( {

       	handler: function(direction) {

		   	var active_section;

			active_section = $('section#' + this.element.id);

			if (direction === "up") active_section = active_section.prev();

				var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');			

         		navigation_links.parent().removeClass("current");
				active_link.parent().addClass("current");

		}, 

		offset: '25%'
	});


	/*
	--------------------
	| Smooth Scrolling |
  	-------------------- 
	*/
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   		var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       		'scrollTop': $target.offset().top
      	}, 800, 'swing', function () {
      		window.location.hash = target;
      	});

  	});  
  

   	/*
   	-------------------------------
    | Placeholder Plugin Settings |
	-------------------------------
	*/ 
	$('input, textarea, select').placeholder()  


 	/*
	----------------------
	| Back to top button |
   	----------------------
	*/ 
	var pxShow = 300; 					// height on which the button will show
	var fadeInTime = 400; 				// how slow/fast you want the button to show
	var fadeOutTime = 400; 				// how slow/fast you want the button to hide
	var scrollSpeed = 300; 				// how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

   	// Show or hide the sticky footer button
	jQuery(window).scroll(function() {

		if (!( $("#header-search").hasClass('is-visible'))) {

			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}

		}		

	});		

})(jQuery);

/*
--------------------------
| Make the header opaque |
--------------------------
*/ 

window.onscroll = function() {headerOpacityFunction()};
var intro_height = document.getElementById('intro'). offsetHeight;
function headerOpacityFunction() {
	if (document.body.scrollTop >= 0 || document.getElementById("headerbg").style.opacity <= 1) {
		document.getElementById("headerbg").style.opacity = Math.min(1, 1 - ((intro_height - document.documentElement.scrollTop)/ intro_height))
	}
}
