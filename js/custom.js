$(function () {
    const main_eh_slide = new Swiper('.main_eh_slide', {
        slidesPerView: "1.9",
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
    });


    // const MMS = new Swiper('.main_eh_slide', {
    //     loop: true,
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //     autoplay: {
    //         delay: 0,
    //         disableOnInteraction: false,
    //     },

    //     speed: 9000,
    // });
});



$(function () {

    $('.main_collection_slide').slick({
        arrows: false,
        // autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 4000,
        speed: 1000,
    });


    $('.main_collection .arrows .prev').on('click', function () {
        $('.main_collection_slide').slick('slickPrev');
    });

    $('.main_collection .arrows .next').on('click', function () {
        $('.main_collection_slide').slick('slickNext');
    });
});







$(function () {
    $('.main_notice .tab_menu li button').on('click', function () {
        let idx = $(this).parent().index();
        console.log(idx);

        $('.main_notice .tab_menu li button').removeClass('on');
        $(this).addClass('on');

        $('.main_notice .tab_content .itm').removeClass('on')
        $('.main_notice .tab_content .itm').eq(idx).addClass('on')
    });
});