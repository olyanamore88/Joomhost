$(function(){

$('.revierws-slider').slick({
   infinite: true,
   slidesToShow: 2,
   slidesToScroll: 2,
   arrows: false,
   dots: true,
   responsive: [
      {
        breakpoint: 1106,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
   ]
   
});

$('.menu-btn').on('click', function(){
   $('.menu-btn ,.menu__list').toggleClass('active');
   $('body').toggleClass('lock');
});

});