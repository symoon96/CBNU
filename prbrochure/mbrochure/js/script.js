$(document).ready(function(){
    AOS.init();

    $('#header .btn-menu').click(function(){
        if(!$(this).hasClass('on')) {
            $(this).addClass('on');
            $('.gnb').addClass('on');

            $('body').append("<div class='dim'></div>");
            $('body').css('overflow-y', 'hidden')
            $(".dim").fadeIn();
        } else {
            $(this).removeClass('on');
            $('.gnb').removeClass('on');
            $(".dim").remove();
            $('body').css('overflow-y', '')
        }
    });

    $('html').click(function(e) {   
        if($(e.target).parents('#header').length < 1 && !$(e.target).hasClass('.gnb')){   
            $('#header .btn-menu').removeClass('on');
            $('.gnb').removeClass('on');
            $(".dim").remove();
            $('body').css('overflow-y', '')
        }
    });
})