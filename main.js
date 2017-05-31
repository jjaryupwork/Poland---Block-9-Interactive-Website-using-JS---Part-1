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
$(document).ready(main);



