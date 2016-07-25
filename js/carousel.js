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

      $('.left').removeClass().addClass('left-to-current');
      $('.right').removeClass().addClass('right-to-left');
      $('.current').removeClass().addClass('current-to-right');

      setTimeout(function(){
        $('.left-to-current').removeClass().addClass('current');
        $('.right-to-left').removeClass().addClass('left');
        $('.current-to-right').removeClass().addClass('right');
      }, 400);

    } else if( $(this).hasClass('right-button') ){

      $('.left').removeClass().addClass('left-to-right').css('z-index','0');
      $('.right').removeClass().addClass('right-to-current');
      $('.current').removeClass().addClass('current-to-left').css('z-index','2');

      setTimeout(function(){
        $('.right-to-current').removeClass().addClass('current');
        $('.left-to-right').removeClass().addClass('right');
        $('.current-to-left').removeClass().addClass('left');
      }, 400);

    }

  });

});
