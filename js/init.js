$(document).ready(function(){
  //   $('.slick-slider').slick({
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       prevArrow: $('.arrow-left__link'),
  //       nextArrow: $('.arrow-right__link')
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

});