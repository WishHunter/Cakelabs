let priceFilter = {'min':'', 'max':''};
let roomsFilter ='';
let squareFilter = {'min':'', 'max':''};
let floorFilter = {'min':'', 'max':''};
let sectionFilter = [];


(function() {
  $('.only_number').on('keydown', function(e){
    if(e.key.length == 1 && e.key.match(/[^0-9'".]/)){
      return false;
    };
  });

  $('.select').on('click', function() {
    if (!($(this).hasClass())) {
      $(this).addClass('open');
      $(this).parent('.sorts').addClass('border');
      $($(this).attr('href')).slideDown().focus();
    }
  });
  $('.select_block').on('focusout', function () {
    $(this).slideUp();
    $(this).prevAll('a').removeClass('open');
    $(this).parent('.sorts').removeClass('border');
  });
  $('[name = sorts_block]').on('change', function() {
    $(this).parents('.select_block').prevAll('a').html($(this).next().html());
    $(this).parents('.select_block').slideUp();
    $(this).parents('.select_block').prevAll('a').removeClass('open');
    $(this).parents('.select_block').parent('.sorts').removeClass('border');
  });


  //Фильтр цены
	$( function() {
		$('#slider_price').slider({
		  range: true,
		  min: 2345000,
		  max: 15000000,
		  values: [ 2345000, 15000000 ],
		  slide: function( event, ui ) {
		  	$('#min_price').val(ui.values[0]);
        priceFilter.min = ui.values[0];
		  	$('#max_price').val(ui.values[1]);
        priceFilter.max = ui.values[1];
		  }
		});
  });
  
  $('#min_price').on('change', function() {
  	let slider = $('#slider_price');
  	if ($(this).val() < slider.slider('option', 'min')) {
  		$(this).val(slider.slider('option', 'min'));
  	};
  	if ($(this).val() > slider.slider('values', 1)) {
  		$(this).val(slider.slider('values', 1));
  	};
  	slider.slider('values', 0, $(this).val());
    priceFilter.min = $(this).val();

  });

  
  $('#max_price').on('change', function() {
  	let slider = $('#slider_price');
  	if ($(this).val() > slider.slider( 'option', 'max' )) {
  		$(this).val(slider.slider( 'option', 'max' ));
  	};
  	if ($(this).val() < slider.slider('values', 0)) {
  		$(this).val(slider.slider('values', 0));
  	};
  	slider.slider('values', 1, $(this).val());
    priceFilter.max = $(this).val();
  });

  //Фильтр колличества комнат
  $('[name = rooms_block]').on('change', function() {
    let text = '';
    $('[name = rooms_block]:checked').each(function(indx, element) {
      if (indx == 0) {
        text += $(element).next('p').html();
        roomsFilter += $(element).val();

      } else {
        text += `, ${$(element).next('p').html()}`;
        roomsFilter += `, ${$(element).val()}`;
      }
    });
    if ($('[name = rooms_block]:checked').length == 0 || $('[name = rooms_block]:checked').length == $('[name = rooms_block]').length) {
      text = `Любое`;
      roomsFilter = ``;
    }
    $('.rooms_block_links').children('span').html(text);
  });

  //Фильтр площади
  $('#min_square').on('change', function() {
    squareFilter['min'] = $(this).val();
  });
  $('#max_square').on('change', function() {
    squareFilter['max'] = $(this).val();
  });

  //Фильтр этажа
  $('#min_floor').on('change', function() {
    floorFilter['min'] = $(this).val();
  });
  $('#max_floor').on('change', function() {
    floorFilter['max'] = $(this).val();
  });

  //Фильтр секции
  $('.section_residential').on('click', function() {
    $(this).toggleClass('active');
    sectionFilter.length = 0;
    $('.section_residential.active').each(function() {
      sectionFilter.push($(this).attr('id'));
    });
    if ($('.section_residential.active').length == 0 || $('.section_residential.active').length == $('.section_residential').length) {
      sectionFilter.length = 0;
    }; 
  });

  //Сбросить все фильтры
  $('#reset_filters').on('click', function(e) {
    e.preventDefault();
    console.log(`${priceFilter.toString()} + ${roomsFilter} + ${squareFilter} + ${floorFilter} + ${sectionFilter}`);
    priceFilter = {'min':'', 'max':''};
    roomsFilter = '';
    squareFilter = {'min':'', 'max':''};
    floorFilter = {'min':'', 'max':''};
    sectionFilter.length = 0;

    $('#slider_price').slider('values', 0, $('#slider_price').slider('option', 'min'));
    $('#min_price').val($('#slider_price').slider('option', 'min'));
    $('#slider_price').slider('values', 1, $('#slider_price').slider('option', 'max'));
    $('#max_price').val($('#slider_price').slider('option', 'max'));

    $('[name = rooms_block]:checked').each(function() {
      $(this).prop('checked', false);
    });
    $('.rooms_block_links').children('span').html('Любое');

    $('#min_square').val('');
    $('#max_square').val('');

    $('#min_floor').val('');
    $('#max_floor').val('');

    $('.section_residential.active').each(function() {
      $(this).removeClass('active');
    });
    console.log(`${priceFilter} + ${roomsFilter} + ${squareFilter} + ${floorFilter} + ${sectionFilter}`);
    return false;
  });
}());
