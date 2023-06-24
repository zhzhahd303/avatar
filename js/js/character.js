$(document).ready(function(){
    $('.p1').animate({opacity:1},800).css('transform', 'translateY(0px)');
    $('#picture>div').click(function(){
        var i=$(this).index();
        $('#two>div').eq(i).show().siblings('div').hide();
        one.src='img/character'+(i+1)+'.png';
    });
   
    });