var main = function() {
  $('.icon-menu').click(function() {
    $('.menu').animate({
      right: "0px"
    }, 100);
    
    $('body').animate({
      right: "285px"
    }, 100);
  });

  $('.icon-close').click(function() {
    $('.menu').animate({
      right: "-285px"
    }, 100);

    $('body').animate({
      right: "0px"
    }, 100);
  });

};
$('.menu .lol li a').click(function() {
  $(this).parent().siblings().find('ul').fadeOut(300);
  $(this).next('ul').stop(true, false, true).fadeToggle(300);
  return false;
});
$(document).ready(main);



