"use strict";

$(document).ready(function () {
  /************************************ start slider  *******************/
  var owl = $("#owl-demo");
  owl.owlCarousel({
    items: 4,
    //10 items above 1000px browser width
    itemsDesktop: [1000, 3],
    //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 3],
    // betweem 900px and 601px
    itemsTablet: [600, 1],
    //2 items between 600 and 0
    itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option

  });
  /* Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',2000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  });  */
  // start the same height

  var stor = 0;
  $('.slider .main .item').each(function () {
    stor = $(this).height() + 40;
  });
  $('.slider .main .item').each(function () {
    $(this).css('height', stor);
  }); // end  the same height

  /************************************ start slider  *******************/
}); //end page