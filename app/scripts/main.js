$(document).ready(function(){

	$('.text').mouseover(function(){
		$('.line').css('background', '#acacac');
		$('.year').css('color', 'rgb(117, 115, 115)');
	});

	$('.text').mouseleave(function(){
		$('.line').css('background', 'rgb(68, 68, 68)');
		$('.year').css('color', 'white');
	});

	$('.horse').mouseover(function(){
		$('.line-active').addClass('farm-active').text('1 YR 6 MOS');
	});

	$('.horse').mouseleave(function(){
		$('.line-active').removeClass('farm-active').text('');
	});

	$('.newspaper').mouseover(function(){
		$('.line-active').addClass('newspaper-active').text('1 YR 5 MOS');
	});

	$('.newspaper').mouseleave(function(){
		$('.line-active').removeClass('newspaper-active').text('');
	});

	$('.film').mouseover(function(){
		$('.line-active').addClass('film-active').text('1 YR 6 MOS')
	});

	$('.film').mouseleave(function(){
		$('.line-active').removeClass('film-active').text('');
	});

	$('.business').mouseover(function(){
		$('.line-active').addClass('business-active').text('1 YR 9 MOS');
	});

	$('.business').mouseleave(function(){
		$('.line-active').removeClass('business-active').text('');
	});

	$('.asu').mouseover(function(){
		$('.line-active').addClass('asu-active').text('3 YR 6 MOS');
	});

	$('.asu').mouseleave(function(){
		$('.line-active').removeClass('asu-active').text('');
	});

	$('.magic').mouseover(function(){
		$('.line-active').addClass('magic-active').text('1 YR 5 MOS');
	});

	$('.magic').mouseleave(function(){
		$('.line-active').removeClass('magic-active').text('');
	});

	$('div#school.text').mouseover(function(){
		console.log('hover')
		$('.line-active').addClass('tiy-active').text('3 MOS');
	});

	$('div#school.text').mouseleave(function(){
		$('.line-active').removeClass('tiy-active').text('');
	});

	$('.home').click(function (event) {
	  event.preventDefault();
	  $('.top-view-container').scrollView();
	});

	$('.projects').click(function (event) {
	  event.preventDefault();
	  $('.my-work').scrollView();
	});

	$('.about').click(function (event) {
	  event.preventDefault();
	  $('.resume').scrollView();
	});

	$('.click-contact').click(function (event) {
	  event.preventDefault();
	  $('.contact-me').scrollView();
	});

	$('.print').click(function(){
		printPage();
	});
});

// scrolling feature for menu
$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
}

// print page function for resume.html file
function printPage() {
	window.print();
	console.log('print')
}