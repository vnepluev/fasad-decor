$(document).ready(function(){
    // $('.slider').slick({
    //    slidesToShow: 1,
    //    slidesToScroll: 1,
    //    prevArrow: $('.arrow-left'),
    //    nextArrow: $('.arrow-right')
    // });

  let btnModal = document.querySelector('#callback-btn');
  let btnModal1 = document.querySelector('#callback-btn1');
  let modal = document.querySelector('#modal');
  // Кнопка закрытия модального окна
  let btnClose = document.querySelector('#btn-modal-close'); 

  // при клике на кнопку "Заказать обратный звонок"
  btnModal.addEventListener('click', function () {
    modal.classList.add('modal-active');
  })
  btnModal1.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.add('modal-active');
  })

  // закрытие модального окна "Заказать звонок"
  btnClose.addEventListener('click', function () {
    modal.classList.remove('modal-active');
  })
  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      modal.classList.remove('modal-active');
      e.stopPropagation();
		}
  });


  const headerSection = document.querySelector('header');
  const headerSlides = headerSection.querySelectorAll('.slider__items');
  const heroSection = headerSection.querySelector('.hero');
  const heroSliderPagination = headerSection.querySelector('.slider-circle')
  const paginationBullets = headerSection.querySelectorAll('.slider-circle__svg');

  let currentSlide = 0;
  let sliderInterval;

  function addInterval (ms) {
    // записываем интревал в глобальную переменную чтобы иметь возможность 
    // в разных частях программы его сбрасывать
    // я это сделал через замыкания 
    sliderInterval = setInterval(function() {
      headerSlides[currentSlide].classList.remove('slider__items--visible');
      paginationBullets[currentSlide].classList.remove('is-active');
      currentSlide++;

      if (currentSlide + 1 > headerSlides.length) {
        currentSlide = 0;
      }
      headerSlides[currentSlide].classList.add('slider__items--visible');
      paginationBullets[currentSlide].classList.add('is-active');

    }, ms);
  }

  function deleteInterval (interval) {
    clearInterval(interval);
  }

  addInterval(5000);

  heroSection.addEventListener('mouseleave', () => addInterval(5000))
  heroSection.addEventListener('mouseenter', () => deleteInterval(sliderInterval))

// конструкция .forEach проходится по каждому элементу
// который мы получили с помощью querySelectorAll
// foreach принимает функцию и вызвает ее для каждого элемента
  paginationBullets.forEach(function (bullet){
    // в функцию колбэк мы передаем 1 элемент массива(массив булитов поэтому 
    // в параметр функции пишем булит)
    bullet.addEventListener('click', function (e) {
      // так как foreach это по сути продвинутый цикл то мы на каждый элемент 
      // в цикле навешиваем прослушиватель событий(или обработчик события) по клику, 
      // второй аргумент это функция которая принимает событие 
      deleteInterval(sliderInterval);
      // останавливаем интервал после клика и отменяем действия браузера(так как там ссылка)
      e.preventDefault();
      // проверяем тот элемент на который кликнули 
      // если он содержит активный класс то просто выходим из функции ничего не делая
      if(this.classList.contains('is-active')) return;
      // если класса нету то:
      // 1 - удаляем с текущего слайда класс который отвечает за его отображение 
      headerSlides[currentSlide].classList.remove('slider__items--visible');
      // 2 - устанавливаем номер текущего слайда равный тому на какой булит нажали по счету
      currentSlide = [...paginationBullets].indexOf(this);
      // 3 - добавляем класс отображения тому слайду который соответствует булиту
      // штука не надежная тут бы лучше получать номера каждого булита через data- атрибут 
      // чтобы обезапаситься от неверного выбора слайда
      headerSlides[currentSlide].classList.add('slider__items--visible');
      // тут мы находим на каком булите установлен активный класс и убираем его 
      let currentBullet = heroSliderPagination.querySelector('.is-active');
      currentBullet.classList.remove('is-active');
      // тут присвиваем активный класс тому булиту на который кликнули
      this.classList.add('is-active');
      /** можно сделать что то вроде таймера или еще одно событие повесить которое будет
       * опять запускать интервал что-то вроде если нужно после кликак по булиту 
       * запускать таймер в данном примере слайды начнут опять переключаться через 10 секунд
       * setTimeout(function() {
       *    addInterval(5000);
       * }, 5000)
       */
    })
  })

  //
  // Добавляем навигацию стрелками
  // arrow-right__link
  const arrowLeft = document.querySelector('.arrow-left__link');
  const arrowRight = document.querySelector('.arrow-right__link');

  arrowLeft.addEventListener('click', function (e) {
    deleteInterval(sliderInterval);
    e.preventDefault();

    headerSlides[currentSlide].classList.remove('slider__items--visible');
    
    currentSlide--;

    if (currentSlide < 0) {
      currentSlide = headerSlides.length - 1;
    }
      headerSlides[currentSlide].classList.add('slider__items--visible');
      let currentBullet = heroSliderPagination.querySelector('.is-active');
      currentBullet.classList.remove('is-active');
      paginationBullets[currentSlide].classList.add('is-active');
  });

  arrowRight.addEventListener('click', function (e) {
    deleteInterval(sliderInterval);
    e.preventDefault();

    headerSlides[currentSlide].classList.remove('slider__items--visible');
    
    currentSlide++;

    if (currentSlide + 1 > headerSlides.length) {
      currentSlide =  0;
    }
      headerSlides[currentSlide].classList.add('slider__items--visible');
      let currentBullet = heroSliderPagination.querySelector('.is-active');
      currentBullet.classList.remove('is-active');
      paginationBullets[currentSlide].classList.add('is-active');
  });
});