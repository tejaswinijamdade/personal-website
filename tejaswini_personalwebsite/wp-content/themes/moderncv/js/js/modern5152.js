jQuery(window).on("load", function(){     
"use strict";

jQuery.ready.then(function(){

 // intro begin
 var count = 0;
 // page number of frame intro
 var pagenum = 4;
 var playing = true;
 var idSound = jQuery('#playerintro');
 var loader = jQuery('.preloaderintro');
 var n = document.getElementById('playerintro');
 var eleintro = jQuery('.bgintro img, .logointro, .taglineintro, .subheading, .welcomecv, .myname');
 var box = jQuery('#boxintro');
 var boxskip = jQuery('#boxskip');
 
 //preloader
 loader.fadeOut('slow', function() {
   box.fadeIn(300);
   
   // start sound
   idSound[0].volume = 0;
   idSound.animate({
     volume: 1
   }, 3000);
   n.play();

   //sound button
   jQuery('#soundintro').on('click', function(e) {
     jQuery(this).toggleClass("soundOffintro");
     if (playing === false) {
       n.play();
       playing = true;
       idSound[0].volume = 0;
       idSound.animate({
         volume: 1
       }, 1000);
     } else {
       playing = false;
       idSound[0].volume = 1;
       idSound.animate({
         volume: 0
       }, 1000);
     }
   });
   setTimeout(animationstart, 1000);
 });

 // animation intro start
 function animationstart() {
   count++;
   window.page = jQuery('#frame' + count).each(function() {
     var jQuerythis = jQuery(this);
     var timeframe = jQuery(this).attr('data-frame');
     if (count === pagenum) {
     setTimeout(mainpage, 5000);
        } else {
     setTimeout(animress, timeframe);
     }
   });
   page.fadeIn(1000);
   
   jQuery([eleintro]).each(function(index, foundElements) {
           foundElements.each(function(element) {
            var jQuerythis = jQuery(this);
            var time = jQuery(this).attr('data-time');
            setTimeout(function() {
            jQuerythis.addClass('intro');
            }, time);
        });
    });
   jQuery([eleintro]).each(function(index, foundElements) {
           foundElements.each(function(element) {
            var jQuerythis = jQuery(this);
            var time = jQuery(this).attr('data-time');
            setTimeout(function() {
            jQuerythis.addClass('intro');
            }, time);
        });
    });
 }

 // animation intro end
 function animress() { 
   page.fadeOut(1000);
   eleintro.removeClass('intro');
   setTimeout(animationstart, 1000);
 }
 
 // skipp button
 jQuery(document).on('mouseenter', box,  function(){
         boxskip.show();
 }).on('mouseleave', box, function() {
        boxskip.hide();
 });
 jQuery('#skipbtn').on('click', function() {
 mainpage();
 });
 // end intro


// start website
function mainpage(){
    "use strict";
    
    // end intro wrapper
    box.remove();
    // variable navigation
    var Mc1  = jQuery('#wrappermodern');
    var Mc2  = jQuery('#wrapfooter').show();
    var Mcimg1  = jQuery('.bgmodern img');
    var Mctoggle = jQuery('.sidebar-nav li a');
    var Mciconmenu = jQuery('.anim-nav');
    
    // element variable page
    var elepage = jQuery('div, h1, h2, h3, h4, h5, p, ul, li, .modernicon, .modernbutton');
    
    // page var
    var idx = jQuery('#home');
    var abt = jQuery('#about');
    var resume = jQuery('#resume');
    var skill = jQuery('#skill');
    var porto = jQuery('#portfolio');
    var contact = jQuery('#contact');
	var holdside = jQuery('.holdsidebar');

    // responsive
    if(jQuery(window).width() < 1025){
    idx.fadeIn(2000);
	page();
    Mc1.removeClass('toggled');
    Mc2.addClass('opacino');
    Mcimg1.css('position', 'fixed');
    
    // menu toggle
    Mctoggle.on('click', function() {
        Mctoggle.removeClass('active');
        jQuery(this).addClass('active');
        Mciconmenu.toggleClass('open');
        Mc1.toggleClass('toggled');
        Mc2.toggleClass('opacino');
        Mc2.toggleClass('opaci');
    });
    // end responsive
    }else{	
    // desktop    
    (jQuery(window).width() > 1025)
	idx.fadeIn(2000);
	page();
    Mc2.removeClass('opacino');
    Mcimg1.css('position', '');
    Mc1.addClass('toggled');
    // end desktop
    }
    
    // menu toggle
      Mciconmenu.on('click', function(e) {
        e.preventDefault();
        jQuery(this).toggleClass('open');
        Mc1.toggleClass('toggled');
        Mc2.toggleClass('opacino');
        Mc2.toggleClass('opaci');
    });
    
    // menu active
    Mctoggle.on('click', function() {
        Mctoggle.removeClass('active');
        jQuery(this).addClass('active');
    });

//slideshow home start
jQuery(function() {
    var slideBegin = 8000,
        transSpeed = 300,
        simple_slideshow = jQuery('#homeSlider'),
        listItems = simple_slideshow.children('.bgmodern'),
        listLen = listItems.length,
        i = 0,
        changeList = function() {
            listItems.eq(i).fadeOut(transSpeed, function() {
                i += 1, i === listLen && (i = 0), listItems.eq(i).fadeIn(transSpeed)
            })
        };
    listItems.not(':first').hide(), setInterval(changeList, slideBegin);
});
jQuery(function() {
    var slideBegin = 3000,
        transSpeed = 500,
        simple_slideshow = jQuery('#homeSlidertext'),
        listItems = simple_slideshow.children('h3'),
        listLen = listItems.length,
        i = 0,
        changeList = function() {
            listItems.eq(i).fadeOut(transSpeed, function() {
                i += 1, i === listLen && (i = 0), listItems.eq(i).fadeIn(transSpeed)
            })
        };
    listItems.not(':first').hide(), setInterval(changeList, slideBegin);
});
//slideshow home end
      
    
    // function page
    jQuery('#home-btn').on('click', function(e) {
    e.preventDefault();
	holdside.show();
	jQuery(".current").fadeOut(1200, function() {
				pagereset();						 
                idx.fadeIn(2000);
                jQuery(".current").removeClass("current");
                idx.addClass("current");
				page();
            });
    });
    
    jQuery('#about-btn').on('click', function(e) {
    e.preventDefault();
	holdside.show();
	jQuery(".current").fadeOut(1200, function() {
				pagereset();						 
                abt.fadeIn(2000);
                jQuery(".current").removeClass("current");
                abt.addClass("current");
				page();
            });
    });
    
    jQuery('#resume-btn').on('click', function(e) {
    e.preventDefault();
	holdside.show();
	jQuery(".current").fadeOut(1200, function() {
				pagereset();						 
                resume.fadeIn(2000);
                jQuery(".current").removeClass("current");
                resume.addClass("current");
				page();
            });
    });
    
    jQuery('#skill-btn').on('click', function(e) {
    e.preventDefault();
	holdside.show();
	jQuery(".current").fadeOut(1200, function() {
				pagereset();						 
                skill.fadeIn(2000);
                jQuery(".current").removeClass("current");
                skill.addClass("current");
				page();
            });
    });
    
    jQuery('#porto-btn').on('click', function(e) {
    e.preventDefault();
	holdside.show();
	jQuery(".current").fadeOut(1200, function() {
				pagereset();						 
                porto.fadeIn(3000);
                jQuery(".current").removeClass("current");
                porto.addClass("current");
				page();
            });
    });
    
    jQuery('#contact-btn, #hireme').on('click', function(e) {
    e.preventDefault();
	holdside.show();
	 jQuery('#contact-btn').addClass("active");
	jQuery('#home-btn').removeClass("active");
	jQuery(".current").fadeOut(1200, function() {
				pagereset();						 
                contact.fadeIn(2000);
                jQuery(".current").removeClass("current");
                contact.addClass("current");
				page();
            });
    });
    // function page end

// start animation
function page(){
     jQuery([elepage]).each(function(index, foundElements) {
           foundElements.each(function(element) {
            var jQuerythis = jQuery(this);
            var time = jQuery(this).attr('data-time');
            setTimeout(function() {
            jQuerythis.addClass('intro');
            }, time);
        });
        setTimeout(function () {
        holdside.hide();}, 2500
        );
    });
}

// reset animation
function pagereset(){
    elepage.removeClass('intro');
    jQuery(':input','#form1', '#emailSubscribe').val('');
    jQuery('#error_message, #error_email', '.message').fadeOut(1500);
    jQuery('#error_message').fadeOut(500);
    jQuery('#error_email').fadeOut(500);
    jQuery('#mail_success').fadeOut(500);
}

// Subscribe
jQuery("#overBtn").on("click",function(){jQuery("#Sub").toggleClass("activeSub")}),jQuery(document).mousedown(function(s){var e=jQuery(".overSub");0===e.has(s.target).length&&(e.removeClass("activeSub"),jQuery("#subscribeemail").val(""),jQuery("form#subscribe .subscribeerror").remove(),jQuery(".subscribesuccess").hide())}),jQuery("form#subscribe").submit(function(){jQuery("form#subscribe .subscribeerror").remove();var s=!1;if(jQuery(".subscribfield").each(function(){if(""==jQuery.trim(jQuery(this).val()))jQuery(this).prev("label").text(),jQuery(this).parent().append('<span class="subscribeerror">Please fill your email</span>'),jQuery(this).addClass("inputError"),s=!0;else if(jQuery(this).hasClass("subscribeemail")){var e=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?jQuery/;e.test(jQuery.trim(jQuery(this).val()))||(jQuery(this).prev("label").text(),jQuery(this).parent().append('<span class="subscribeerror">Please fill valid email</span>'),jQuery(this).addClass("inputError"),s=!0)}}),!s){jQuery("form#subscribe input.submit").fadeOut("slow",function(){jQuery(this).parent().append("")});var e=jQuery(this).serialize();jQuery.post(jQuery(this).attr("action"),e,function(){jQuery("form#subscribe").fadeIn(1e3,function(){jQuery(".subscribesuccess").fadeIn(1e3)}),setTimeout(function(){jQuery("#subscribeemail").val(""),jQuery("#Sub").removeClass("activeSub"),jQuery(".subscribesuccess").hide()},2500)})}return!1});


// contact form
jQuery(function(){jQuery('#send').on('click', function(e) {
e.preventDefault();var e=jQuery('#name').val(),a=jQuery('#email').val(),s=jQuery('#message').val(),r=!1;if(0==a.length||"-1"==a.indexOf("@")||"-1"==a.indexOf(".")){var r=!0;jQuery("#error_email").fadeIn(500)}else jQuery("#error_email").fadeOut(500);if(0==s.length){var r=!0;jQuery("#error_message").fadeIn(500)}else jQuery("#error_message").fadeOut(500);return 0==r&&(jQuery("#send").attr({disabled:"true",value:"Loading..."}),jQuery.ajax({type:"POST",url:"send.php",data:"name="+e+"&email="+a+"&subject=You Got Email&message="+s,success:function(e){"success"==e?(jQuery(".smart-btn").remove(),jQuery("#mail_success").fadeIn(500)):(jQuery("#mail_failed").html(e).fadeIn(500),jQuery("#send").removeAttr("disabled").attr("value","send").remove())}})),!1})});
}
// end website



/*
*
plugin start
*
*/

// Magnific Popup - v0.9.9
jQuery('.big-img').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: false,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        }
    });

});


// isotope
var jQuerycontainer = jQuery('#galleryporto');
    jQuerycontainer.isotope({
        itemSelector: '.port',
        filter: '*',
});
jQuery('#filters li.filt-modern').on('click', function(e) {
    e.preventDefault();
    var jQuerythis = jQuery(this);
    if ( jQuerythis.hasClass('selected') ) {
        return false;
        }
    var jQueryoptionSet = jQuerythis.parents();
    jQueryoptionSet.find('.selected').removeClass('selected');
    jQuerythis.addClass('selected');
            
    var selector = jQuery(this).attr('data-filter');
    jQuerycontainer.isotope({ 
    filter: selector,
});
return false;
});

// counter modern
function count(e){
 var current = parseInt(e.html(), 10);
	current = current + 1; 
	e.html(++current);
	if(current > e.data('count')){
	e.html(e.data('count'));
	} else {    
	setTimeout(function(){count(e)}, 50);
   }
 }        	
  jQuery(".stat-count").each(function() {
  jQuery(this).data('count', parseInt(jQuery(this).html(), 10));
  jQuery(this).html('0');
  count(jQuery(this));
});


// owlCarousel testimonial
var owl = jQuery("#owl-testimonial");
   owl.owlCarousel({
   items : 1,
    itemsDesktop : [1000,1], 
   itemsDesktopSmall : [900,1], 
   itemsTablet: [600,1],
   itemsMobile : false,
   autoPlay : 3000,
   stopOnHover : true
});
   
// owlCarousel our client
var owl = jQuery("#owl-modern");
   owl.owlCarousel({
   items : 5, 
   itemsDesktop : [1000,4], 
   itemsDesktopSmall : [900,3], 
   itemsTablet: [600,2],
   itemsMobile : false,
   autoPlay : 1500,
   stopOnHover : true
});

/*
*
plugin end
*
*/


});