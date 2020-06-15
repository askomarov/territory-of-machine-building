$(function () {
   $('.comment__like').click(function () {
      $(this).toggleClass('like-active');
   });
});


$(document).ready(function () {
   $('.navbar-toggler').click(function (event) {
      $('body').toggleClass('lock');
   })
});


//=====затемнение фона hedera
let header = document.querySelector('.navbar__content');  /*нашли хедер*/
let body = document.querySelector('body');
let scrollPrev = 0;
$(window).scroll(function () {
   var scrolled = $(window).scrollTop();

   if (scrolled > 100 && scrolled > scrollPrev) {
      header.classList.add('out');
   } else {
      header.classList.remove('out');
   }
   scrollPrev = scrolled;
});

window.onscroll = function () {            /*функция при прокручивании*/
   if (window.pageYOffset > 100) {				/* если прокрутил больше чем на 200px*/
      header.classList.add('dark');		/*добавялется класс нашей кнопке и она появляется*/
   } else {
      header.classList.remove('dark'); /* если меньше то класс удаляется и кнопка исчезает*/
   }
};
// upButton.onclick = function () {
//    window.scrollTo(0, 0);  		/*при нажатии на кпноку прокрутить в начало координат*/
// };
