(function($) {
$(function() {

	function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}
	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
	function eraseCookie(name) {
		createCookie(name,"",-1);
	}

	$('ul.tab-container-nav').each(function(i) {
		var cookie = readCookie('tabCookie' + i);
		if (cookie) {
			$(this).find('li').removeClass('active').eq(cookie).addClass('active')
				.closest('div.tab-container').find('div.year-tabs-item ').removeClass('active').eq(cookie).addClass('active');
		}
	});

	$('ul.tab-container-nav').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tab-container').find('div.year-tabs-item').removeClass('active').eq($(this).index()).addClass('active');
		var ulIndex = $('ul.tab-container-nav').index($(this).parents('ul.tab-container-nav'));
		eraseCookie('tabCookie' + ulIndex);
		createCookie('tabCookie' + ulIndex, $(this).index(), 365);
	});


	$('ul.tab-month-menu-nav').each(function(i) {
		var cookie = readCookie('tabCookie' + i);
		if (cookie) {
			$(this).find('li').removeClass('active').eq(cookie).addClass('active')
				.closest('div.tab-month').find('div.tab-month__item ').removeClass('active').eq(cookie).addClass('active');
		}
	});

	$('ul.tab-month-menu-nav').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tab-month').find('div.tab-month__item').removeClass('active').eq($(this).index()).addClass('active');
		var ulIndex = $('ul.tab-month-menu-nav').index($(this).parents('ul.tab-month-menu-nav'));
		eraseCookie('tabCookie' + ulIndex);
		createCookie('tabCookie' + ulIndex, $(this).index(), 365);
	});
});
})(jQuery);