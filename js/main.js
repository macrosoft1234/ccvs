
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


$(document).ready(function(){
      //form slider
      $('.resslider').bxSlider({
          nextSelector: '#slider-next',
          prevSelector: '#slider-prev',
          nextText: '<i class="fa fa-arrow-circle-right fa-lg"></i>',
          prevText: '<i class="fa fa-arrow-circle-left fa-lg"></i>'
        });

    
    // Background Imaeg fader
    $('#slideshow').cycle({
        fx: 'fade',
        pager: '#smallnav', 
        pause:   1, 
        speed: 1800,
        timeout:  5500 
    });

    //Thank You Text Change
    function InOut( elem )
    {
     elem.delay()
         .fadeIn(900)
         .delay(3500)
         .fadeOut(
              function(){
                 
                 if(elem.next().length > 0) // if there is a next element
                   {InOut( elem.next() );} // use it
                 else
                   {InOut( elem.siblings(':first'));} // if not, then use go back to the first sibling

               }
             );
    }

    $(function(){
    $('.thank-you li').hide();
    InOut( $('.thank-you li:first') );

    });

  
}); //end document.ready






