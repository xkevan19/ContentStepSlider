// infinite slider only works with 3+ slides, so if less than 3 we need to duplicate
function duplicateSlides(slider, slides) {
  if(slides.length < 3) {
    // Duplicate slider content
    slider.append(slider.html());
    // Re count slides
    var slidesRecount = jQuery('.slider .slider__slide');
    // Recursive function until more than 3 slides
    duplicateSlides(slider, slidesRecount);
  } else {
    // Remove active class if any already added
    slides.removeClass('slider__slide--active');
    // Only add active class to first slide once recursion has finished
    jQuery(slides[0]).addClass('slider__slide--active');
  }
}

jQuery(document).ready(function() {
  var $sliderContainers = jQuery('.slider');
  var $body = jQuery('body');
  
  $sliderContainers.each(function() {
    // Cache this
    var $sliderContainer = jQuery(this);
    // Get the inner slider for duplicate slides function
    var $sliderInner = $sliderContainer.find('.slider__inner');
    // Get all the slides
    var $slides = $sliderContainer.find('.slider__slide');
    // Duplicate slides
    duplicateSlides($sliderInner, $slides);
    // Get the background colour of the active slide
    var bg = $sliderContainer.find('.slider__slide--active').children('.slider__slide__content').data('background');
    // Lighten using tinycolor
    var lightenBy = 15;
    var lighten = tinycolor(bg).lighten(lightenBy).toString();
    var lightenDouble = tinycolor(bg).lighten(lightenBy * 2).toString();
    // Apply lightened background color to container
    $sliderContainer.css('background-color', lighten);
    $body.css('background-color', lightenDouble);
    // Move the last slide in front of the first
    var $first = $slides.filter(':first');
    var $last = $slides.filter(':last');
    $first.before($last);

    $sliderContainer.on('click', '.controls button', function() {
      $slides.addClass('slider__slide--animate');
      var $clicked = jQuery(this);
      var $activeSlide = $sliderContainer.find('.slider__slide--active');
      $first = $sliderContainer.find('.slider__slide:first');
      $last = $sliderContainer.find('.slider__slide:last');
      if($clicked.hasClass('next')) {
        // Get the background colour of the next active slide
        var nextBg = jQuery('.slider__slide--active').next().children('.slider__slide__content').data('background');
        // Lighten using tinycolor
        var nextLighten = tinycolor(nextBg).lighten(lightenBy).toString();
        var nextLightenDouble = tinycolor(nextBg).lighten(lightenBy * 2).toString();
        // Apply lightened background color to container
        $sliderContainer.css('background-color', nextLighten);
        // Apply double lightened background color to body
        $body.css('background-color', nextLightenDouble);
        // Add active class to next slide, remove from this slide
        $activeSlide.removeClass('slider__slide--active').next().addClass('slider__slide--active');
        // Move first slide to last place
        $last.after($first);
      } else if($clicked.hasClass('previous')) {
        // Get the background colour of the previous active slide
        var prevBg = jQuery('.slider__slide--active').prev().children('.slider__slide__content').data('background');
        // Lighten using tinycolor
        var prevLighten = tinycolor(prevBg).lighten(lightenBy).toString();
        var prevLightenDouble = tinycolor(prevBg).lighten(lightenBy * 2).toString();
        // Apply lightened background color to container
        $sliderContainer.css('background-color', prevLighten);
        // Add active class to previous slide, remove from this slide
        // Apply double lightened background color to body
        $body.css('background-color', prevLightenDouble);
        
        $activeSlide.removeClass('slider__slide--active').prev().addClass('slider__slide--active');
        // Move last slide to first place
        $first.before($last);
      }
    });
    $(window).resize(function(){
      $slides.removeClass('slider__slide--animate');
    });
  });
});