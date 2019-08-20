let priceFilter = {'min':'', 'max':''};
let roomsFilter;
let squareFilter = {'min':'', 'max':''};
let floorFilter = {'min':'', 'max':''};
let sectionFilter;


(function() {
	$( function() {
		$( '#slider_price' ).slider({
		  range: true,
		  min: 2345000,
		  max: 15000000,
		  values: [ 2345000, 11786000 ],
		  slide: function( event, ui ) {
		  	$('#min_price').val(ui.values[0]);
        priceFilter.min = ui.values[0];
		  	$('#max_price').val(ui.values[1]);
        priceFilter.max = ui.values[1];
		  }
		});
  });
  

  $('.only_number').on('keydown', function(e){
    if(e.key.length == 1 && e.key.match(/[^0-9'".]/)){
      return false;
    };
  })

  $( "#min_price" ).on( "change", function() {
  	let slider = $('#slider_price');
  	if ($(this).val() < slider.slider( "option", "min" )) {
  		$(this).val(slider.slider( "option", "min" ));
  	};
  	if ($(this).val() > slider.slider('values', 1)) {
  		$(this).val(slider.slider('values', 1));
  	};
  	slider.slider('values', 0, $(this).val());
    priceFilter.min = ui.values[0];

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
    priceFilter.max = ui.values[1];
  });

  $('.select').on('click', function() {
    let open_block = $(this).attr('href');
    $(this).addClass('open');
    $(open_block).slideDown().focus();
  });
  $('.select_block').on('focusout', function () {
    $(this).slideUp();
    $(this).prevAll('a').removeClass('open');
  });
  $('[name = rooms_block]').on('change', function() {
    console.log($('[name = rooms_block]:checked').length);
    let text = '';
    $('[name = rooms_block]:checked').each(function(indx, element) {
      $(element).
    });
  })
}());
