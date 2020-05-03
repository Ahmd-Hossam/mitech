$(document).ready(function() {


/************************************ start navbar  *******************/
  $('nav .bars').on('click',function(){
    $('.popup').fadeIn(500)
    $('aside').animate({
      right:0
    },400)
  });

  $('aside .humburger').on('click',function(){
    $('.popup').delay(500).fadeOut(1000)
    $('aside').animate({
      right:'-70%'
    },10)
  });


  $('.popup').on('click',function(){
    $(this).fadeOut(500);
    $('aside').animate({
      right:'-70%'
    },10)
  });
  $('aside').on('click',function(e){
    e.stopPropagation()
  })
/************************************ end navbar    *******************/

/************************************ start popup  *******************/
$('aside .menus .menu h2 .icons .down').on('click',function(){
  $('aside .menus .menu ul').removeClass('show');
    $(this).parent('.icons').parent('h2').next('ul').addClass('show');
      $(this).fadeOut(.1);
        $(this).siblings('.up').fadeIn(.1);

        $(this).parent('.icons').parent('h2').parent('.menu').siblings('.menu').children('h2').children('.icons').children('.up').fadeOut(.1);
        $(this).parent('.icons').parent('h2').parent('.menu').siblings('.menu').children('h2').children('.icons').children('.down').fadeIn(.1)
});

$('aside .menus .menu h2 .icons .up').on('click',function(){
  $('.popup .menus .menu ul').removeClass('show')
    $(this).parent('.icons').parent('h2').next('ul').removeClass('show');
      $(this).fadeOut(.1);
        $(this).siblings('.down').fadeIn(.1)
});
/************************************ end popup *******************/

/************************************ start go to section  *******************/
$('.go_to li a').on('click',function(){
  $('body,html').animate({
    scrollTop:$($(this).data('scroll')).offset().top-20
  },1000)
  $('.popup').fadeOut(500);
  $('aside').animate({
    right:'-70%'
  },100)
})
/************************************ end go to section   *******************/





/************************************ start slider  *******************/
  var owl = $(".owl-demo");
  owl.owlCarousel({
      items : 4, //10 items above 1000px browser width
      itemsDesktop : [1000,3], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
  owl.trigger('owl.play',1500);// auto work
  

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
    var stor=0;
    $('.slider .main .item').each(function(){
      stor=$(this).height()+40;
    });

    $('.slider .main .item').each(function(){
      $(this).css('height',stor)
    });
      // end  the same height
/************************************ end  slider  *******************/





/************************************ start case slider  *******************/
var owl2 = $(".owl-demo2");
owl2.owlCarousel({
    items : 1, //10 items above 1000px browser width
    itemsDesktop : [1000,1], //5 items between 1000px and 901px
    itemsDesktopSmall : [900,1], // betweem 900px and 601px
    itemsTablet: [600,1], //2 items between 600 and 0
    itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
});


$(".next").click(function(){
  owl2.trigger('owl.next');
})
$(".prev").click(function(){
  owl2.trigger('owl.prev');
})
/************************************ end case slider  *******************/




/************************************ start contact us   *******************/
$('.form form .details ul li').hover(function(){
    $(this).addClass('active_backcolor').siblings().removeClass('active_backcolor')
});

$('.form form .details ul li').on('click',function(){
  $('.form form .details span').html($(this).html())
});

$('.form form .details span,.dropdown').on('click',function(){
  $('.form form .details span,.dropdown').toggleClass('back_wight')
  $('.form form .details span').toggleClass('box_shadow')
  $('.form form .details ul').toggleClass('hide')
  $('.form form .details .dropdown').toggleClass('rotate')
});




var storeinput='';
$('form input').on('click',function(){
  $(this).addClass('box_shadow');
  storeinput=($(this).attr('placeholder'))
  $(this).attr('placeholder','')
  $(this).css({
    background:'#fff',
  })
})
$('form input').blur(function(){
  $(this).removeClass('box_shadow');
  $(this).attr('placeholder',storeinput)
  $(this).css({
    background:'#f8f8f8',
  })
})



var storetext='';
$('form textarea').on('click',function(){
  $(this).addClass('box_shadow');
  storetext=($(this).attr('placeholder'))
  $(this).attr('placeholder','')
  $(this).css({
    background:'#fff',
  })
})
$('form textarea').blur(function(){
  $(this).removeClass('box_shadow');
  $(this).attr('placeholder',storetext)
  $(this).css({
    background:'#f8f8f8',
  })
})
/************************************ end contact us    *******************/



/************************************ start scroll to top   *******************/
$('.to_top i').on('click',function(){
  $('html,body').animate({
    scrollTop:0
  })
});
$(window).scroll(function(){
  if($(this).scrollTop() > 2000){
    $('.to_top').fadeIn()
  }else $('.to_top').fadeOut()
})
/************************************ end scroll to top     *******************/

});//end page 