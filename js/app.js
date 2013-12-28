$(document).ready(function(){
	$('.circle').on('click', function(){
		$('#projects').removeClass('small-1 small-offset-2 columns', 500);
		$('#services').removeClass('small-4 columns', 500);
		$('#blog').removeClass('small-1 small-offset-3 columns', 500);
		$('#contact').removeClass('small-5 columns', 500);
		$('#header').removeClass('small-centered', 500);
		$('#menu').addClass('left');
		$('#content').load('projects.html')
	});


})