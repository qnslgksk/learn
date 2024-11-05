// program popup
$(document).ready(function(){
    $('#btnProgramView').click(function(){
        $('.program_pop_dim').addClass('open');
    })
    $('#btnProgramPopClose').click(function(){
        $('.program_pop_dim').removeClass('open');
    })
});

// benefit popup
$(document).ready(function(){
    $('.benefit_pop_dim').addClass('show');
    $('#btnBenefitPopClose').click(function(){
        $('.benefit_pop_dim').removeClass('show');
    })
});

// visual Swiper
$(function () {
    const swiper = new Swiper('.visual', {
        loop: true,
        slidesPerView: 1,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
    });
    swiper.on('slideChange', function () {
        var idx = swiper.realIndex;
        if(idx == '0'){
            color('#F17785')
            // $('.gnb li').each(function(){
            //     if($(this).hasClass('active')){
            //         $(this).children('a').css('color', '#F17785')
            //     }
            // })
        }else if(idx == '1'){
            color('#ABCD05')
            // $('.gnb li').each(function(){
            //     if($(this).hasClass('active')){
            //         $(this).children('a').css('color', '#ABCD05')
            //     }
            // })
        }
    });

    function color(co){
        $('.gnb li').each(function(){
            if($(this).hasClass('active')){
                $(this).children('a').css('color', co)
            }
        })
    }
    const swiper1 = new Swiper('.letter', {
        slidesPerView: "auto",
        spaceBetween: 15,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    const swiper2 = new Swiper('.program', {
        slidesPerView: "auto",
        spaceBetween: 15,
        breakpoints:{
            580:{
                slidesPerView:3,
            },
            960:{
                slidesPerView:4,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});