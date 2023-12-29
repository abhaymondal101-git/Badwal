$( document ).ready(function() {
  // ==================*** Animation start ***=========================
  AOS.init();
  // ==================*** Animation start ***=========================

  // =================================Testimonial slider start=====================================
  var delta = 0;
    var scrollThreshold = 5;
  
    // detect available wheel event
    wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
        document.onmousewheel !== undefined ? "mousewheel" :         // Webkit and IE support at least "mousewheel"
        "DOMMouseScroll";                                            // let's assume that remaining browsers are older Firefox
  
    // Bind event handler
    $(window).on(wheelEvent, function (e) {
        // Do nothing if we weren't scrolling the carousel
        var carousel = $('.carousel.vertical:hover');
        if (carousel.length === 0)  return;
  
        // Get the scroll position of the current slide
        var currentSlide = $(e.target).closest('.item')
        var scrollPosition = currentSlide.scrollTop();
  
        // --- Scrolling up ---
        if (e.originalEvent.detail < 0 || e.originalEvent.deltaY < 0 || e.originalEvent.wheelDelta > 0) {
            // Do nothing if the current slide is not at the scroll top
            if(scrollPosition !== 0) return;
  
            delta--;
  
            if ( Math.abs(delta) >= scrollThreshold) {
                delta = 0;
                carousel.carousel('prev');
            }
        }
  
        // --- Scrolling down ---
        else {
            // Do nothing if the current slide is not at the scroll bottom
            var contentHeight = currentSlide.find('> .content').outerHeight();
            if(contentHeight > currentSlide.outerHeight() && scrollPosition + currentSlide.outerHeight() !== contentHeight) return;
  
            delta++;
            if (delta >= scrollThreshold)
            {
                delta = 0;
                carousel.carousel('next');
            }
        }
  
        // Prevent page from scrolling
        return false;
    });
  // ================================= / Testimonial slider end=====================================


    // =========================*** gallery area start ***==================================
    $(document).ready(function() {
        var $gallery = $('#gallery');
        var $boxes = $('.revGallery-anchor');
        $boxes.hide(); 
    
        $gallery.imagesLoaded( {background: true}, function() {
        $boxes.fadeIn();
    
            $gallery.isotope({
                // options
                sortBy : 'original-order',
                layoutMode: 'fitRows',
                itemSelector: '.revGallery-anchor',
                stagger: 30,
            });
        });	
    
        $('button').on( 'click', function() {
            var filterValue = $(this).attr('data-filter');
            $('#gallery').isotope({ filter: filterValue });
            $gallery.data('lightGallery').destroy(true);
            $gallery.lightGallery({
                selector: filterValue.replace('*','')
            });
        });
    });
    
    $(document).ready(function() {
        $("#gallery").lightGallery({ 
    }); 
    });
    
    //button active mode
    $('.button').click(function(){
    $('.button').removeClass('is-checked');
    $(this).addClass('is-checked');
    });
    
    
    //CSS Gram Filters on Mouse enter
    $("#gallery a .nak-gallery-poster").addClass("inkwell");
    
    $("#gallery a").on({
    mouseenter : function() {
    $(this).find(".nak-gallery-poster").removeClass("inkwell").addClass("walden");
    },
    mouseleave : function() {
    $(this).find(".nak-gallery-poster").removeClass("walden").addClass("inkwell");
    }
    }); 
  
  // =========================*** /gallery area end ***==================================

  // =========================*** scroll top area start ***==================================
  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 250) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
  // =========================*** /scroll top area end ***==================================

  // =========================*** counterUp area start ***==================================
  $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
    });
  });
  // =========================*** /counterUp area end ***==================================



//   $('.growth-card-slider').owlCarousel({
//     loop: true,
//     margin: 15,
//     nav: false,
//     autoplay: false,
//     autoplayTimeout: 2000,
//     autoplayHoverPause: true,
//     dots: false,
//     items: 1,
//     responsive: {
//         0:{
//             items: 1
//         },
//         600:{
//             items: 2
//         },
//         768:{
//             items:3
//         },
//         1000:{
//             items: 5
//         }
//     }
// });

});



