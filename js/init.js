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

  //
  // Слайдер для главной страницы
  //

  let sliderIndex = 0;
  const slides = document.querySelectorAll('.slider__items');

  // для переключателей переменные
  const slidesCircle = document.querySelectorAll('.slider-circle__svg');
  const slidesCircleActive = document.querySelectorAll('.slider-circle__svg--active');
  slidesCircleActive[0].style.display = 'flex';
  slidesCircle[0].style.display = 'none';

  setInterval(function() {

    slides[sliderIndex].classList.remove('slider__items--visible');
    slidesCircleActive[sliderIndex].style.display = 'none';
    slidesCircle[sliderIndex].style.display = 'flex';

    sliderIndex++;

    if (sliderIndex+1 > slides.length) {
      sliderIndex = 0;
    } 
    slides[sliderIndex].classList.add('slider__items--visible');

    slidesCircleActive[sliderIndex].style.display = 'flex';
    slidesCircle[sliderIndex].style.display = 'none';
    
  }, 5000);

});