$('.four').mouseover(function(){
	$('.line').css('background', '#acacac')
	$('.year').css('color', 'rgb(117, 115, 115)')
})

$('.four').mouseleave(function(){
	$('.line').css('background', 'rgb(68, 68, 68)')
	$('.year').css('color', 'white')
})

$('.horse').mouseover(function(){
	$('.line-active').addClass('farm-active').text('1 YR 6 MOS')
});

$('.horse').mouseleave(function(){
	$('.line-active').removeClass('farm-active').text('')
});

$('.newspaper').mouseover(function(){
	$('.line-active').addClass('newspaper-active').text('1 YR 5 MOS')
});

$('.newspaper').mouseleave(function(){
	$('.line-active').removeClass('newspaper-active').text('')
});

$('.film').mouseover(function(){
	$('.line-active').addClass('film-active').text('1 YR 6 MOS')
});

$('.film').mouseleave(function(){
	$('.line-active').removeClass('film-active').text('')
});

$('.business').mouseover(function(){
	$('.line-active').addClass('business-active').text('1 YR 9 MOS')
});

$('.business').mouseleave(function(){
	$('.line-active').removeClass('business-active').text('')
});


// $('.asu').mouseover(function(){
// 	$('.line-active').addClass('asu-active').text('3 YR 6 MOS')
// 	$('.line').css('background', '#acacac')
// });

// $('.asu').mouseleave(function(){
// 	$('.line-active').removeClass('asu-active').text('')
// 	$('.line').css('background', 'rgb(68, 68, 68')
// });