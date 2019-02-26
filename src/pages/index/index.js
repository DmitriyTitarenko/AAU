
$(document).ready(function() {
    $( ".menu-burger" ).click(function() {
        $( ".menu-block-left, .menu-block-right").slideToggle( "slow");
    });
    
    $( ".menu__close, .overlay, .menu__close-img--mob" ).click(function() {
        $( ".menu" ).slideToggle( "slow");
        if(window.innerWidth >= 321) {
            $('.overlay').slideToggle("slow");
        }
    });
});

$(document).ready(function () {
    $('.intro-slider').slick({
        dots: true,
        dotsClass: "intro-dots", //customize dot`s with add class dot`s
        infinite: false,
        prevArrow: false,
        nextArrow: false,
        // autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});



$(document).ready(function () {
    $('.tpc-slider__js').slick({
        dots: true,
        dotsClass: "main-dots", //customize dot`s with add class dot`s
        infinite: false,
        prevArrow: false,
        nextArrow: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        // autoplay: true, 
        infinite: true,
        autoplaySpeed: 1500,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 1000,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 820,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 620,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 430,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
    ]
    });
});

$(document).ready(function () {
    $('.event-link__slider-js').slick({
        dots: true,
        dotsClass: "main-dots", //customize dot`s with add class dot`s
        prevArrow: false,
        nextArrow: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        infinite: true,
        lazyLoad: 'ondemand',
        // autoplay: true, 
        autoplaySpeed: 1500,
        responsive: [
        {
            breakpoint: 1800,
            settings: {
            slidesToShow: 7,
            slidesToScroll: 1,
            dots: true
            }
        },
        {
            breakpoint: 1500,
            settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            dots: true
            }
        },
        {
            breakpoint: 1300,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 620,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 430,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
    ]
    });
});


$(document).ready(function() {
    $( ".panel-registration" ).click(function() {
        $( ".overlay-main, .reg-wrap").slideToggle('fast');
    });
    $('.reg-close').click(function() {
        $( ".overlay-main, .reg-wrap").slideToggle('fast');
    });
});

// calendar js

var monthNames = ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
            var calendarDate = new Date()
            var monthNum = calendarDate.getMonth();     
            var prevMonth = monthNames[monthNum - 1];
            var nextMonth = monthNames[monthNum + 1];

$(document).ready(function() {
    $('#calendar').fullCalendar({
        firstDay: 1,
        defaultView: 'month',
        header: {
            left: 'prev,next',
            center: 'title',
        },
        monthNames: ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
        monthNamesShort: ['Січ.','Лют.','Бер.','Квіт.','Трав.','Черв.','Лип.','Серп.','Вер.','Жовт.','Лис.','Груд.'],
        dayNames: ["Неділя","Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота"],
        dayNamesShort: ["НД","ПН","ВТ","СР","ЧТ","ПТ","СБ"],
        buttonText: {
        prev: prevMonth,
        next: nextMonth
        },
    });
});

// calendar js