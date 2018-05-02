$('.kobe').hide();
$('.caption').hide();

$('button').on('click', function(){
	$('.kobe').fadeToggle(1000);
	$('.caption').fadeToggle(1000);
});
