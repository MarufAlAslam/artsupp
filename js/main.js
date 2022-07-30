$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    prevArrow: '<button class="btn prevBtn"><i class="fa fa-caret-left"></i></button>',
    nextArrow: '<button class="btn nextBtn"><i class="fa fa-caret-right"></i></button>',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

$('.slider-1').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    prevArrow: '<button class="btn prevBtn"><i class="fa fa-caret-left"></i></button>',
    nextArrow: '<button class="btn nextBtn"><i class="fa fa-caret-right"></i></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});



$('.mapslider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
});


$('.grid').masonry({
    // options
    itemSelector: '.grid-item',
});

$('.menutoggler').click(function (e) {
    e.preventDefault()
    $(this).toggleClass('active')
    $('.sideMenu').toggleClass('active')
})

var clk = 1
$('.imgLoader').click(function () {
    if (clk == 5) {
        clk = 0
    }
    clk++
    $('.img1').attr("src", "img/" + clk + "1.jpg")
    $('.img2').attr("src", "img/" + clk + "2.jpg")
    $('.img3').attr("src", "img/" + clk + "3.jpg")
    $('.img4').attr("src", "img/" + clk + "4.jpg")
    $('.img5').attr("src", "img/" + clk + "5.jpg")

    console.log(clk)
})