(function() {
	$( function() {
		$( '#slider_price' ).slider({
		  range: true,
		  min: 2345000,
		  max: 15000000,
		  values: [ 2345000, 11786000 ],
		  slide: function( event, ui ) {
		  	$('#min_price').val(ui.values[0])
		  	$('#max_price').val(ui.values[1])
		  }
		});
  });
  $( "#min_price" ).on( "change", function() {
  	let slider = $('#slider_price');
  	if ($(this).val() < slider.slider( "option", "min" )) {
  		$(this).val(slider.slider( "option", "min" ));
  	};
  	if ($(this).val() > slider.slider('values', 1)) {
  		$(this).val(slider.slider('values', 1));
  	};
  	slider.slider('values', 0, $(this).val());
  });

  $( "#max_price" ).on( "change", function() {
  	let slider = $('#slider_price');
  	if ($(this).val() > slider.slider( "option", "max" )) {
  		$(this).val(slider.slider( "option", "max" ));
  	};
  	if ($(this).val() < slider.slider('values', 0)) {
  		$(this).val(slider.slider('values', 0));
  	};
  	slider.slider('values', 1, $(this).val());
  });

 //  $('.price_input').on("keyup", function() {
 //    this.value = this.value.replace(/ /g,"");
 //    this.value = this.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	// })
}())
