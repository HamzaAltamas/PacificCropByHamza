// call us popup 
$("#call_btn").click(function(){
  $(".call_us_popup").toggleClass("call_us_in")
})
$("#call_out").click(function(){
  $(".call_us_popup").removeClass("call_us_in")
})
// nav toggle
$(".navbar-toggler").click(function(){
  $(".navbar-toggler-icon").toggleClass("fa-xmark")
})




// theme btn 
$("#theme_btn").click(function(){
  $("#theme_btn").toggleClass("fa-sun")
})
$("#theme_btn").click(function(){
  $("body").toggleClass("theme_changed")
})

// varified customer slider
$('.varified_customer_slider').slick({
  
  infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'.prevv',
    nextArrow:'.nextv',
    
    centerMode:true,
    centerPadding:"0",
    autoplay:true,
    autoplaySpeed:1000,

  
});

// test slider
$('.test_slider').slick({
  
  infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:'.prev',
    nextArrow:'.next',
    
    
    centerPadding:"0",
    autoplay:true,
    autoplaySpeed:1000,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
         
        }
      },
      {
        breakpoint: 499,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],


  
});

// navbar fix and backtopbtn
$(window).scroll(function(){
  var scrolling = $(this).scrollTop()
  if(scrolling > 10){
    $("nav").addClass("navdown")
  }else{
     $("nav").removeClass("navdown")
  }
  if(scrolling > 10){
    $(".backtop").fadeIn(1000)
  }else{
     $(".backtop").fadeOut(1000)
  }
 
  
})

// backtop button
$(".backtop").click(function(){
  $("html,body").animate({
    scrollTop:0,
  },
  )
},)