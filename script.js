(function($){
 // Checkout Options

	  $('.checkboxes input[type=radio]').on('click', function(){

	  	var $this = $(this),
	  		option = $this.closest('[data-auto-refill-price]'),
	  		autoRefillPrice = option.data('auto-refill-price'),
	  		oneTimePrice = option.data('one-time-price'),
	  		autoRefillSave = option.data('auto-refill-save'),
	  		oneTimeSave = option.data('one-time-save'),
	  		price, save, n

	  	if( $this.val() == 'auto-refill' ) {
	  		option.removeClass('one-time-option')
	  		price = autoRefillPrice
	  		save = autoRefillSave
	  	}else if( $this.val() == 'one-time' ){
	  		option.addClass('one-time-option')
	  		price = oneTimePrice
	  		save = oneTimeSave
	  	}

	  	n = parseFloat(price).toFixed(2).toString().split(".")
	  	
	  	option.find('.current-price .price-integer').html(n[0])
	  	option.find('.current-price .price-decimal').html(n[1])

	  	n = parseInt(save)

	  	option.find('.save').html(n)

	  });

	  $('.au-a2').on('click', function(){
	  	$('.option-more-info').hide();
	  });
	  $('.au-a1').on('click', function(){
	  	$('.option-more-info').show();
	  });
})(jQuery);