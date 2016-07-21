$(document).ready(function(){

  $('<a class="left-button" href="#"></a><a class="right-button" href="#"></a>').appendTo('#carousel');

  $('#carousel li').each(function(){
    $('<div class="darken"></div><img src="img/shine.png" class="shine" />').appendTo($(this));
    $('<h3>'+$(this).find('img').attr('title')+'</h3><span>'+$(this).find('img').data('desc')+'</span>').appendTo($(this));
  });

  $('#carousel').on('click', 'a', function(e){

    e.preventDefault();
    $('.left, .right').css('z-index','');

    if( $(this).hasClass('left-button') ){

      $('.left').removeClass('left').addClass('left-to-current');
      $('.right').removeClass('right').addClass('right-to-left');
      $('.current').removeClass('current').addClass('current-to-right');

      setTimeout(function(){
        $('.left-to-current').removeClass('left-to-current').addClass('current');
        $('.right-to-left').removeClass('right-to-left').addClass('left');
        $('.current-to-right').removeClass('current-to-right').addClass('right');
      }, 400);

    } else if( $(this).hasClass('right-button') ){

      $('.left').removeClass('left').addClass('left-to-right').css('z-index','0');
      $('.right').removeClass('right').addClass('right-to-current');
      $('.current').removeClass('current').addClass('current-to-left').css('z-index','2');

      setTimeout(function(){
        $('.right-to-current').removeClass('right-to-current').addClass('current');
        $('.left-to-right').removeClass('left-to-right').addClass('right');
        $('.current-to-left').removeClass('current-to-left').addClass('left');
      }, 400);

    }

  });

});
