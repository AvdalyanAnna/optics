$(function() {
  if($('div').is('#about-map')){
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
          document.querySelectorAll('.contact-address').forEach(function(button) {
              button.addEventListener('click', function() {
                  var newCoords = [
                      parseFloat(this.getAttribute('data-longitude')),
                      parseFloat(this.getAttribute('data-latitude'))
                  ];
                  changeLocation(newCoords);

                  // Удаление класса 'active' у всех кнопок
                  document.querySelectorAll('.contact-address').forEach(function(btn) {
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
    reverse:true,
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

var swiper = new Swiper(".gift-slider", {
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

var swiper = new Swiper(".stock-slider", {
    pagination:   {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});