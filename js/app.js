$('#menu').hide();
$('#content').hide();

$(document).ready(function(){
	$('#menu').fadeIn(2000);
	$(".fancybox").fancybox();
	$(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	

	$('.circle').on({
		mouseenter: function(){
			$(this).addClass('hover',200);
		},
		mouseleave: function(){
			$(this).removeClass('hover',200);
		}
	});
	
	$('.circle').on('click', function(){

		$(this).addClass('hover');
		var $this = $(this);
		$('#projects').removeClass('small-2 small-offset-2 columns', 1000, 'easeOutBounce');
		$('#services').removeClass('small-4 columns', 1000, 'easeOutBounce');
		$('#blog').removeClass('small-2 small-offset-3 columns', 1000, 'easeOutBounce');
		$('#contact').removeClass('small-5 columns', 1000, 'easeOutBounce');
		$('#header').removeClass('small-centered', 1000, 'swing');
		$('#menu').addClass('left', 1000);
		$('#content').fadeOut().removeClass('hide').delay(1200).queue(function(nxt){
			$(this).load($this.data('page')).fadeIn();
			nxt();
		});

		console.log($(this).data('page'))

	});


})