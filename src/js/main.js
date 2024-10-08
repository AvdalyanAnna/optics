$(function (){

    $(".modal .modal__container").on("click", function (e) {
        e.stopPropagation();
    });

    $(".open__modal").on("click", function (e) {
        e.preventDefault();
        const open = $(this).data('open');
        $(open).fadeIn();
    });

    $(".modal .close, .modal, .modal-close ").on("click", function (e) {
        e.preventDefault();
        $(".modal").fadeOut(function () {
            $("body").css("overflow", "auto");
        });
    });
})

$(function () {
    if ($('div').is('#about-map')) {
        function init() {
            // Создание карты
            var myMap = new ymaps.Map("about-map", {
                center: [55.76, 37.64], // Координаты центра карты (Москва)
                zoom: 10 // Уровень масштабирования
            });

            // Добавление первоначальной метки на карту
            var myPlacemark = new ymaps.Placemark([55.76, 37.64], {
                hintContent: 'Метка',
                balloonContent: 'Это Москва'
            });

            myMap.geoObjects.add(myPlacemark);

            // Функция для изменения локации карты
            function changeLocation(newCoords) {
                myMap.setCenter(newCoords); // Изменение центра карты

                // Обновление метки на карте
                myPlacemark.geometry.setCoordinates(newCoords);
            }

            // Обработчик клика по кнопке
            // Добавление обработчиков событий на кнопки
            document.querySelectorAll('.contact-address').forEach(function (button) {
                button.addEventListener('click', function () {
                    var newCoords = [
                        parseFloat(this.getAttribute('data-longitude')),
                        parseFloat(this.getAttribute('data-latitude'))
                    ];
                    changeLocation(newCoords);

                    // Удаление класса 'active' у всех кнопок
                    document.querySelectorAll('.contact-address').forEach(function (btn) {
                        btn.classList.remove('active');
                    });

                    // Добавление класса 'active' к нажатой кнопке
                    this.classList.add('active');
                });
            });
        }

// Загрузка API Яндекс.Карт и вызов функции инициализации
        ymaps.ready(init);
    }

    $('.header__burger').on('click', function () {
        $(this).toggleClass('is_active')
        $('.header-menu').slideToggle()
    })

    $('.header-menu__item-open').on('click', function () {
        $('.header-menu__item-list').slideToggle()
        $(this).toggleClass('active')
    })

    $(".clients-list__inner-1").imageslider({
        slideItems: ".clients-item",
        slideContainer: ".clients-list",
        slideDistance: 1,
        slideDuratin: 20,
        resizable: true,
        pause: true,
    });
    $(".clients-list__inner-2").imageslider({
        slideItems: ".clients-item",
        slideContainer: ".clients-list",
        slideDistance: 1,
        slideDuratin: 20,
        reverse: true,
        resizable: true,
        pause: true,
    });
    $(".clients-list__inner-3").imageslider({
        slideItems: ".clients-item",
        slideContainer: ".clients-list",
        slideDistance: 1,
        slideDuratin: 20,
        resizable: true,
        pause: true,
    });

    let giftSwiper = new Swiper(".gift-slider", {
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            900: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });


    let stockSwiper = new Swiper(".stock-slider", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
    let productSwiper = new Swiper(".products-slide", {
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            900: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
        loop:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    let productSmallSwiper = new Swiper(".product-slide-small", {
        slidesPerView: 3,
        spaceBetween: 10,

        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        watchSlidesProgress: true,

    });

    let productBigSwiper = new Swiper(".product-slide-big", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        // freeMode: true,
        thumbs: {
            swiper: productSmallSwiper
        },

    });


    $('.product-filter__item-more').on('click', function () {
        const $this = $(this);
        $this.hide(0)
        $this.parent().find('.product-filter__item-more__show').slideToggle(300)
    })
    $('.js-example-basic-single').select2();
    $('.select').select2();

    function collision($div1, $div2) {
        var x1 = $div1.offset().left;
        var w1 = 40;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var w2 = 40;
        var r2 = x2 + w2;

        if (r1 < x2 || x1 > r2) return false;
        return true;

    }


    $('#slider').slider({
        range: true,
        min: 12000,
        max: 300000,
        values: [12000, 140000],
        slide: function (event, ui) {
            $('.product-price__min').val(ui.values[0]);
            $('.product-price__max').val(ui.values[1]);
        }
    });

    $('.product-price__min').val($('#slider').slider("values", 0).toLocaleString());
    $('.product-price__max').val($('#slider').slider("values", 1).toLocaleString());

    $('.product-price__min').on('blur change', function () {
        let minValue = parseInt($(this).val().replace(/\s+/g, ''), 10);
        if (!isNaN(minValue) && minValue >= 12000 && minValue <= $('#slider').slider('values', 1)) {
            $('#slider').slider('values', 0, minValue);
        } else {
            // Вернуть значение в поле ввода, если оно некорректно
            $(this).val($('#slider').slider("values", 1).toLocaleString());
        }
    });

    $('.product-price__max').on('blur change', function () {
        let maxValue = parseInt($(this).val().replace(/\s+/g, ''), 10);
        if (!isNaN(maxValue) && maxValue >= $('#slider').slider('values', 0) && maxValue <= 300000) {
            $('#slider').slider('values', 1, maxValue);
        } else {
            // Вернуть значение в поле ввода, если оно некорректно
            $(this).val($('#slider').slider("values", 0).toLocaleString());
            $('#slider').slider('values', 1, maxValue);
        }
    });

    $('.product-content__filter').on('click', function () {
        $('.product-filter').slideDown()
        $('body').addClass('overflow-hidden')
    })
    $('.product-filter__title-close').on('click', function () {
        $('.product-filter').slideUp()
        $('body').removeClass('overflow-hidden')
    })

    $('.products-buy__delete').on('click', function () {
        $(this).parents('.products-buy').remove()
    })

    $(document).on('click', '.kilograms .minus , .kilograms .plus  ', function () {
        var $this = $(this),
            min = +$this.parents('.kilograms').data('min') || 1,
            step = +$this.parents('.kilograms').data('step'),
            kilogram = $this.siblings('.kilogram').find('input'),
            kilogramVal = +kilogram.val();

        if ($this.hasClass('minus') && kilogramVal > min) {
            kilogramVal -= step;
            if (kilogramVal < step) {
                kilogram = step
            }
        } else if ($this.hasClass('plus')) {
            kilogramVal += step;
        }

        if (kilogramVal > min) {
            $this.parents('.kilograms').find('.minus').removeClass('disabled')
        } else {
            $this.parents('.kilograms').find('.minus').addClass('disabled')
        }
        kilogram.val(kilogramVal)
    })
})


let catalogSwiper = new Swiper(".catalog-slider__swiper", {
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let parallaxInstance1 =  new Parallax(document.querySelector('.effect-1'), {
    relativeInput: true
});
parallaxInstance1.friction(0.2, 0.2);
let parallaxInstance2 =  new Parallax(document.querySelector('.effect-2'), {
    relativeInput: true,
    invertX: false,
    invertY: true
});

let parallaxInstance3 =  new Parallax(document.querySelector('.effect-3'), {
    relativeInput: true,
    invertX: false,
    invertY: true
});
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    document.querySelector('.effect-1').style.transform = `translateY(${scrolled * 0.05}px)`;
    document.querySelector('.effect-2').style.transform = `translateY(-${scrolled * 0.05}px)`;
    document.querySelector('.effect-3').style.transform = `translateY(${scrolled * 0.05}px)`;
});



