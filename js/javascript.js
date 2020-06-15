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