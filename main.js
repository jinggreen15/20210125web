$("#banner").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500
});

$("#works").slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    // 響應式 RWD
    responsive: [
        // 平板:小於1025
        {
            breakpoint: 1025,
            settings: {
                // 一次顯示三格
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        // 手機:小於767
        {
            breakpoint: 767,
            settings: {
                // 一次顯示一格
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});