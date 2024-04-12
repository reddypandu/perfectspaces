/*
*****************************************************
*	CUSTOM JS DOCUMENT                              *
*	Single window load event                        *
*   "use strict" mode on                            *
*****************************************************
*/

if ( jQuery('body').hasClass( 'animsition' ) ) {

				 jQuery('body').wrapInner( '<div class="animsition"></div>' ).removeClass( 'animsition' );

				var loaderStyle = app_vars.page_transition_spinner,
					loaderSpinnerColor = app_vars.loading_spinner_color,
					loaderBgColor = app_vars.loading_background_color,
					loaderBgStyle = ' style="background-color:' + loaderSpinnerColor + ';"',
					loaderBorderStyle1 = ' style="border:2px solid ' + loaderSpinnerColor + ';"',
					loaderBorderStyle2 = ' style="border-color:' + loaderSpinnerColor + ' transparent;"',
					loaderBorderStyle3 = ' style="border-color:' + loaderSpinnerColor + ';"',
					loaderBorderStyle4 = ' style="border-left-color:transparent; border-right-color:transparent; border-bottom-color:' + loaderSpinnerColor + ';"',
					loaderBorderStyle4 = ' style="border-left-color:transparent; border-right-color:transparent; border-bottom-color:' + loaderSpinnerColor + ';"',
					loaderBgBorderStyle = ' style="background-color:' + loaderSpinnerColor + '; border-color:' + loaderSpinnerColor + ';"',
					loaderBgImageStyle = ' style="background-image:-webkit-linear-gradient(transparent 0%, transparent 70%, ' + loaderSpinnerColor + ' 30%, ' + loaderSpinnerColor + ' 100%); background-image:linear-gradient(transparent 0%, transparent 70%, ' + loaderSpinnerColor + ' 30%, ' + loaderSpinnerColor + ' 100%);"',
					loaderStyleHtml = '';

				if ( loaderStyle == '1' ) {
				   
					loaderStyleHtml = '<div class="ball-pulse"><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div></div>';
				} else if ( loaderStyle == '2' ) {
					loaderStyleHtml = '<div class="ball-grid-pulse"><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div></div>';
				} else if ( loaderStyle == '3' ) {
					loaderStyleHtml = '<div class="ball-clip-rotate"><div' + loaderBorderStyle1 + '></div></div>';
				} else if ( loaderStyle == '4' ) {
					loaderStyleHtml = '<div class="ball-clip-rotate-pulse"><div' + loaderBgStyle + '></div><div' + loaderBorderStyle2 + '></div></div>';
				} else if ( loaderStyle == '5' ) {
					loaderStyleHtml = '<div class="ball-clip-rotate-multiple"><div' + loaderBorderStyle1 + '></div><div' + loaderBorderStyle1 + '></div></div>';
				} else if ( loaderStyle == '6' ) {
					loaderStyleHtml = '<div class="square-spin"><div' + loaderBgBorderStyle + '></div></div>';
				} else if ( loaderStyle == '7' ) {
					loaderStyleHtml = '<div class="ball-pulse-rise"><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div></div>';
				} else if ( loaderStyle == '8' ) {
					loaderStyleHtml = '<div class="ball-rotate"><div' + loaderBgStyle + '></div></div>';
				} else if ( loaderStyle == '9' ) {
					loaderStyleHtml = '<div class="cube-transition"><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div></div>';
				} else if ( loaderStyle == '10' ) {
					loaderStyleHtml = '<div class="ball-zig-zag"><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div></div>';
				} else if ( loaderStyle == '11' ) {
					loaderStyleHtml = '<div class="ball-zig-zag-deflect"><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div></div>';
				} else if ( loaderStyle == '12' ) {
					loaderStyleHtml = '<div class="ball-triangle-path"><div' + loaderBorderStyle3 + '></div><div' + loaderBorderStyle3 + '></div><div' + loaderBorderStyle3 + '></div></div>';
				} else if ( loaderStyle == '13' ) {
					loaderStyleHtml = '<div class="ball-scale"><div' + loaderBgStyle + '></div></div>';
				} else if ( loaderStyle == '14' ) {
					loaderStyleHtml = '<div class="line-scale"><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div></div>';
				} else if ( loaderStyle == '15' ) {
					loaderStyleHtml = '<div class="line-scale-party"><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div></div>';
				} else if ( loaderStyle == '16' ) {
					loaderStyleHtml = '<div class="ball-scale-multiple"><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div></div>';
				} else if ( loaderStyle == '17' ) {
					loaderStyleHtml = '<div class="ball-pulse-sync"><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div></div>';
				} else if ( loaderStyle == '18' ) {
					loaderStyleHtml = '<div class="ball-beat"><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div></div>';
				} else if ( loaderStyle == '19' ) {
					loaderStyleHtml = '<div class="line-scale-pulse-out"><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div></div>';
				} else if ( loaderStyle == '20' ) {
					loaderStyleHtml = '<div class="line-scale-pulse-out-rapid"><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div></div>';
				} else if ( loaderStyle == '21' ) {
					loaderStyleHtml = '<div class="ball-scale-ripple"><div' + loaderBorderStyle1 + '></div></div>';
				} else if ( loaderStyle == '22' ) {
					loaderStyleHtml = '<div class="ball-scale-ripple-multiple"><div' + loaderBorderStyle1 + '></div><div' + loaderBorderStyle1 + '></div><div' + loaderBorderStyle1 + '></div></div>';
				} else if ( loaderStyle == '23' ) {
					loaderStyleHtml = '<div class="ball-spin-fade-loader"><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div></div>';
				} else if ( loaderStyle == '24' ) {
					loaderStyleHtml = '<div class="line-spin-fade-loader"><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div></div>';
				} else if ( loaderStyle == '25' ) {
					loaderStyleHtml = '<div class="triangle-skew-spin"><div' + loaderBorderStyle4 + '></div></div>';
				} else if ( loaderStyle == '26' ) {
					loaderStyleHtml = '<div class="pacman"><div' + loaderBorderStyle3 + '></div><div' + loaderBorderStyle3 + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div></div>';
				} else if ( loaderStyle == '27' ) {
					loaderStyleHtml = '<div class="ball-grid-beat"><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div><div' + loaderBgStyle + '></div></div>';
				} else if ( loaderStyle == '28' ) {
					loaderStyleHtml = '<div class="semi-circle-spin"><div' + loaderBgImageStyle + '></div></div>';
				}

				jQuery( '.animsition' ).animsition( {
					inClass : 'fade-in',
					outClass : 'fade-out',
					inDuration : 1500,
					outDuration : 800,
					linkElement : '.animsition-link, a[href^="' + app_vars.home_url + '"]:not([target="_blank"]):not([href^="' + app_vars.current_page_url + '#"]):not([href^="#"]):not([href*="#respond"]):not([href*="javascript"]):not([href*=".jpg"]):not([href*=".jpeg"]):not([href*=".gif"]):not([href*=".png"]):not([href*=".mov"]):not([href*=".swf"]):not([href*=".mp4"]):not([href*=".flv"]):not([href*=".avi"]):not([href*=".mp3"]):not([href^="mailto:"])',
					loading : true,
					loadingParentElement : 'body',
					loadingClass : 'loading-spinner',
					unSupportCss : [
						'animation-duration',
						'-webkit-animation-duration',
						'-o-animation-duration'
					],
					overlay : false,
					overlayClass : 'animsition-overlay-slide',
					overlayParentElement : 'body'
				} );

				jQuery( '.loading-spinner' ).css( 'background-color', loaderBgColor );
				jQuery( '.loading-spinner' ).append( loaderStyleHtml );
				jQuery( '.loading-spinner' ).fadeIn();
			}
			

jQuery(window).on("load", function() {

	"use strict";

	
	var preLoader = jQuery('.preloader');
	var countNumber= jQuery(".count-number");
	var skillCaption = jQuery(".skill-caption");
	var progressBar = jQuery(".progress-bar");
    var toolTip = jQuery('[data-toggle="tooltip"]');
	var MixItUp1 =  jQuery('#MixItUp1');
	var fancybox =  jQuery('.fancybox');
	var fancybox =  jQuery('.fancybox');
	var faqsAccordion =  jQuery('#faqs-accordion');
	var waTabBtn= jQuery('.wa-tabs .tab-btn');
	var waTabContainer= jQuery('.wa-tabs .tab');
	var swiperbox =  jQuery( '.swipebox' );
	var $wowAnimate = jQuery( '.wow' );
		


	if ( $wowAnimate.length > 0 ) {
		var wow = new WOW( {
			mobile: false
		} );

		wow.init();
	}
	
// ============================================
// PreLoader On window Load
// =============================================
	
	preLoader.addClass('loaderout');
	
// ============================================
// Fun Factor / Counter
// =============================================	

	countNumber.appear(function() {
		jQuery(this).each(function() {
			var datacount = jQuery(this).attr('data-count');
			jQuery(this).find('.counter').delay(6000).countTo({
				from: 10,
				to: datacount,
				speed: 3000,
				refreshInterval: 50,
			});
		});
	});	
	
// ============================================
// swiper-box
// =============================================	
    swiperbox.swipebox( {
		useCSS : true, // false will force the use of jQuery for animations
		useSVG : true, // false to force the use of png for buttons
		initialIndexOnArray : 0, // which image index to init when a array is passed
		hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
		removeBarsOnMobile : true, // false will show top bar on mobile devices
		hideBarsDelay : 3000, // delay before hiding bars on desktop
		videoMaxWidth : 1140, // videos max width
		beforeOpen: function() {}, // called before opening
		afterOpen: null, // called after opening
		afterClose: function() {}, // called after closing
		loopAtEnd: false // true will return to the first image after the last image is reached
	} );	
// ============================================
// Skill bar
// ============================================

    if (skillCaption.length) {
        skillCaption.appear(function() {
            jQuery(function() {
                toolTip.tooltip({
                    trigger: 'manual'
                }).tooltip('show');
            });

            // $(window).scroll(function() {
            // if($( window ).scrollTop() > 10){  // scroll down abit and get the action   
            progressBar.each(function() {
                var each_bar_width = jQuery(this).attr('aria-valuenow');
                jQuery(this).width(each_bar_width + '%');
            });
            //});
        });
    }
	
	
//============================================
// MixItUp settings
//============================================

	if(MixItUp1.length){    
		  MixItUp1.mixItUp({
				  selectors: {
				  filter: '.filter-1'
			  }
		  });
	}

  
	
//=========================================
// Tabs
//=========================================			
	
	if(waTabBtn.length){
		waTabBtn.on('click', function(e) {
			e.preventDefault();
			var target = jQuery(jQuery(this).attr('href'));
			waTabBtn.removeClass('active-btn');
			jQuery(this).addClass('active-btn');
			waTabContainer.fadeOut(0);
			waTabContainer.removeClass('active-tab');
			jQuery(target).fadeIn(500);
			jQuery(target).addClass('active-tab');
		});
		
	}
	
	
//========================================
// Accordion 
//======================================== 	
	
	if(faqsAccordion.length) {
	      faqsAccordion.accordion();
	}
//========================================
// LightBox / Fancybox
//======================================== 	
	
	if(fancybox.length) {
	     fancybox.fancybox();
	}
	
//***************************************
// Map initialization function Calling
//****************************************
 
	initMap(); 
 
 
//***************************************
// All Owl Carousel function Calling
//****************************************
 
	owlCarouselInit();  
 var subscribeForm= jQuery('.newsletter form'); 
 var msResult = jQuery( '.subscribe-form-result' )
         jQuery('.newsletter form button').on('click', function(){
 					jQuery.ajax( {
						type: 'POST',
						url: app_vars.ajax_url,
						dataType: 'JSON',
						data: subscribeForm.serialize(),
						success: function( data ) {
							if ( data.error ) {
								msResult.html( '<i class="fa fa-times-circle-o"></i> ' + data.error );
							} else {
								msResult.html( '<i class="fa fa-check-circle-o"></i> ' + data.success );
							}

							msResult.show( 'slow' ).delay( 3000 ).hide( 'slow' );
						},
						error: function( data, errorThrown ){
							console.log( errorThrown );
						}
					} );
         })
					
			/*************** Contact-form *****************/
			
	jQuery.validate({
		form : '.enquiry-form',
		modules : 'security',
		onSuccess : function() {
			contactform();
			return false; // Will stop the submission of the form
		}
	});
	
	function contactform(){
	    var thisForm = jQuery( ".enquiry-form" );
		var formdata = thisForm.serialize();
		if(thisForm.find('.contact-form-response p').hasClass('success')){
		    thisForm.find('.contact-form-response p').removeClass('success');
		}
		if(thisForm.find('.contact-form-response p').hasClass('error')){
		    thisForm.find('.contact-form-response p').removeClass('error');
		}
	    thisForm.find('.contact-form-response img').fadeIn();
		formdata += '&action=bjcwp_enquiry_mail';
		jQuery.ajax({
			type : "post",
			url : jQuery('.bjcwp_ajaxurl').val(),
			dataType: 'JSON',
			data : formdata, 
			success: function(response) {
			    thisForm.find('.contact-form-response img').fadeOut();
    			if(response.success){
    			    thisForm[0].reset();
    			    thisForm.find('.contact-form-response p').addClass('success').text(response.success).fadeIn(500);
    			}
    			if(response.error){
    			    thisForm.find('.contact-form-response p').addClass('error').text(response.error).fadeIn(500);
    			}
			}
		});
		
	}
				/*************** Get a quote form *****************/
			
	jQuery.validate({
		form : '.get-a-qoute',
		modules : 'security',
		onSuccess : function() {
			getaqouteform();
			return false; // Will stop the submission of the form
		}
	});
	
	function getaqouteform(){
	    var thisForm = jQuery( ".get-a-qoute" );
		var formdata = thisForm.serialize();
		if(thisForm.find('.contact-form-response p').hasClass('success')){
		    thisForm.find('.contact-form-response p').removeClass('success');
		}
		if(thisForm.find('.contact-form-response p').hasClass('error')){
		    thisForm.find('.contact-form-response p').removeClass('error');
		}
	    thisForm.find('.contact-form-response img').fadeIn();
		formdata += '&action=bjcwp_getaquote_mail';
		jQuery.ajax({
			type : "post",
			url : jQuery('.bjcwp_ajaxurl_quote').val(),
			dataType: 'JSON',
			data : formdata, 
			success: function(response) { console.log(response.success);
			    thisForm.find('.contact-form-response img').fadeOut();
    			if(response.success){
    			    thisForm[0].reset();
    			    thisForm.find('.contact-form-response p').addClass('success').text(response.success).fadeIn(500);
    			}
    			if(response.error){
    			    thisForm.find('.contact-form-response p').addClass('error').text(response.error).fadeIn(500);
    			}
			}
		});
		
	}
	

	
	
			jQuery( '.loading-spinner' ).fadeOut();
}); 		// End of the window load event


//***************************************
// Contact Page Map
//****************************************  

 function initMap() {
	 "use strict";
	
   var mapDiv = jQuery('#gmap_canvas');	
   
   if (mapDiv.length) {  
     var myOptions = {
         zoom: 10,
         center: new google.maps.LatLng(-37.81614570000001, 144.95570680000003),
         mapTypeId: google.maps.MapTypeId.ROADMAP
     };
     var map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
     var marker = new google.maps.Marker({
         map: map,
         position: new google.maps.LatLng(-37.81614570000001, 144.95570680000003)
     });
     var infowindow = new google.maps.InfoWindow({
         content: '<strong>Envato</strong><br>Envato, King Street, Melbourne, Victoria<br>'
     });
     google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map, marker);
     });
	 
     infowindow.open(map, marker);
   }
   
 }
 
 
/* ---------------------	
	All owl Carousels 
/* --------------------- */
function owlCarouselInit() {
	
	"use strict";	
	
	//==========================================
	// owl carousels settings
	//===========================================
    
	var home1MainSlider = jQuery('.home1-main-slider');
	var testimonialSection1 = jQuery('#testimonial-section1');
	var testimonialSection2 = jQuery('#testimonial-section2');
	var testimonialSidebar = jQuery('#testimonial-sidebar');
	var waProductSidebar = jQuery('#wa-product-sidebar');	
	var serviceCarousel1 = jQuery('#service-carousel1');
	var processCarousel = jQuery('#process-carousel');
	var couponCarousel = jQuery("#coupon-carousel");
	var teamCarousel = jQuery("#team-carousel");
	var homeBlogCarousel = jQuery("#home-blog-carousel");
	var waPartnerCarousel = jQuery('.wa-partner-carousel');
	var premiumProductCarousel = jQuery('#premium-product-carousel');
	
	
	if(premiumProductCarousel.length > 0) { 
		 premiumProductCarousel.owlCarousel({
		        loop:true,
                autoPlay: false, 
                items : 3,
                nav:true,
                dots:false,
                navText: ['', ''],
                margin: 0,
                stagePadding: 0,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                navRewind: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                },
                animateOut: '',
                animateIn: '',
                center: '',
                merge: '',
                autoWidth: ''
			  
		});
    }
	
	if (home1MainSlider.length > 0) {
    	home1MainSlider.owlCarousel({
    				items: 1,
    				dots: true,
    				loop: true,
    				mouseDrag: true,
    				touchDrag: true,
    				nav: true,
    				autoplay: true,
    				navText: ['', ''],
    				margin: 0,
    				stagePadding: 0,
    				autoplayTimeout: 5000,
    				autoplayHoverPause: true,
    				navRewind: false,
    				responsive: {},
    				animateOut: '',
    				animateIn: '',
    				center: '',
    				merge: '',
    				autoWidth: ''
    			});
    }
	
	if(testimonialSection2.length > 0) { 
		 testimonialSection2.owlCarousel({		 
                autoPlay: false, 
                items : 3,
                nav:true,
                dots:false,
                navText: ['', ''],
                margin: 0,
                stagePadding: 0,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                navRewind: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                },
                animateOut: '',
                animateIn: '',
                center: '',
                merge: '',
                autoWidth: ''
			  
		});
    }	

	if (teamCarousel.length > 0) { 
		teamCarousel.owlCarousel({ 
            autoPlay: false, 
            items : 4,
            nav:true,
            dots:false,
            navRewind: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            },
            animateOut: '',
            animateIn: '',
            center: '',
            merge: '',
            autoWidth: ''
	  });
	}
	
	if(homeBlogCarousel.length > 0) { 	 
		 homeBlogCarousel.owlCarousel({		 
            autoPlay: false, 
            items : 3,
            nav:true,
            dots:false,
            navRewind: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            },
            animateOut: '',
            animateIn: '',
            center: '',
            merge: '',
            autoWidth: '' 
			  
		});
    }
	
  	if (waPartnerCarousel.length > 0) {
		waPartnerCarousel.owlCarousel({ 
            autoPlay: false, 
            items : 4,
            margin:5,
            nav:true,
            dots:false,
            navRewind: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            },
            animateOut: '',
            animateIn: '',
            center: '',
            merge: '',
            autoWidth: '' 
	  });
	}

}


