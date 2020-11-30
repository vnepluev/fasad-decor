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

  setInterval(function() {

    slides[sliderIndex].classList.remove('slider__items--visible');
    sliderIndex++;

    if (sliderIndex+1 > slides.length) {
      sliderIndex = 0;
    } 
    slides[sliderIndex].classList.add('slider__items--visible');
    
  }, 6000);

});