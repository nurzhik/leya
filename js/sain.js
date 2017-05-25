$(document).ready(function() {
	$('.com-ul').slick({
  	infinite: true,
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	infinite:false
	});
	// $('.com-item__info').on('click', function () {
	// 	 if($('.com-item__info').hasClass('com-item__info--active')){
	// 	 	 $('.p-photos').addClass('p-photos--active');
	// 	 }
	// 	 else{
	// 	 		$('.p-photos').removeClass('p-photos--active');
	// 	 }
	// });

	$('.com-item__info').on('click', function () {
		 if($(this).hasClass('com-item__info--active')){
		 	 $(this).removeClass('com-item__info--active');
		 	 if($('.com-item__info').hasClass('com-item__info--active')){
		 	 		
		 	 }
		 	 else{
					$('.p-photos').removeClass('p-photos--active');
		 	 }
		 }
		 else{
		 		$(this).addClass('com-item__info--active');
		 		if($('.com-item__info').hasClass('com-item__info--active')){
		 	 		$('.p-photos').addClass('p-photos--active');
		 	 }
		 	 else{
					$('.p-photos').removeClass('p-photos--active');
		 	 }
		 }
	});
	$('.kom1').on('click', function () {
		if($(this).hasClass('kom1--active')){
			$(this).removeClass('kom1--active');
			$('.plan-1').removeClass('plan-1--active');
		}
		else{
			$(this).addClass('kom1--active');
			$('.plan-1').addClass('plan-1--active');
		}
	});
	$('.kom2').on('click', function () {
		if($(this).hasClass('kom2--active')){
			$(this).removeClass('kom2--active');
			$('.plan-2').removeClass('plan-2--active');
		}
		else{
			$(this).addClass('kom2--active');
			$('.plan-2').addClass('plan-2--active');
		}
	});
	$('.p-ul li').on('click', function () {
		$('.floor-part__plan').removeClass('floor-part__plan--active');
		$('.floor-part__right').addClass('floor-part__right--active')
	});
 	$('.plan-item').on('click', function () {
	 	$('.floor-part__plan').addClass('floor-part__plan--active');
	 	$('.floor-part__right').removeClass('floor-part__right--active');
	 	$('.com-item__info').removeClass('com-item__info--active');
	 	$('.p-photos').removeClass('p-photos--active');
	 	$('.kom1').removeClass('kom1--active');
	 	$('.kom2').removeClass('kom2--active');
	 	$('.kom3').removeClass('kom3--active');
	 	$('.kom4').removeClass('kom4--active');
	 	$('.kom5').removeClass('kom5--active');
	 	$('.kom6').removeClass('kom6--active');
	 });	
		$('.floor').on('click', function () {
			if($(this).hasClass('ui-state-active')){
				$('.floor-part__plan').addClass('floor-part__plan--active');
				$('.floor-part__right').removeClass('floor-part__right--active');
			}
			else{
				$('.floor-part__plan').addClass('floor-part__plan--active');
				$('.floor-part__right').removeClass('floor-part__right--active');
			}
		});		
  $('.com-ul .slick-prev').addClass('hidden');   
   var slides = $('.com-ul .slide').length;		
     $('.com-ul').on('afterChange', function (event, slick, currentSlide) {
     		
        if(currentSlide === 3) {
            $('.slick-next').addClass('hidden');
        }
        else {
            $('.slick-next').removeClass('hidden');
        }

        if(currentSlide === slides) {
            $('.slick-prev').addClass('hidden');
        }
        else {
            $('.slick-prev').removeClass('hidden');
        }  
    })	
});