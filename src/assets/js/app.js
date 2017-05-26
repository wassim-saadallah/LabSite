(function ($, document, window) {

	$(document).ready(function () {

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function () {
			$(".mobile-navigation").slideToggle();
		});

		$(".hero").flexslider({
			directionNav: false,
			controlNav: true,
		});

		var map = $(".map");
		var latitude = map.data("latitude");
		var longitude = map.data("longitude");
		if (map.length) {

			map.gmap3({
				map: {
					options: {
						center: [latitude, longitude],
						zoom: 15,
						scrollwheel: false
					}
				},
				marker: {
					latLng: [latitude, longitude],
				}
			});

		}
	});



	$(document).ready(function () {

		var form = '<div class="row contact-form">'
			+ '<form action="#">'
			+ '<div class="col-md-4">'
			+ '<p><input type="text" placeholder="ton nom..."></p>'
			+ '</div>'
			+ '<div class="col-md-12">'
			+ '<p>'
			+ '<textarea name="" placeholder="Commentaire..."></textarea>'
			+ '</p>'
			+ '<p class="text-right">'
			+ '<input type="submit" value="Commenter">'
			+ '</p>'
			+ '</div>'
			+ '</form>'
			+ '</div>';
		$('.reply').click(function (e) {
			let target = $(this);
			e.preventDefault();
			if (target.attr("toggled") === "off") {
				target.parent().append(form);
				target.attr("toggled", "on")
			}
			else {
				target.next().remove();
				target.attr("toggled", "off");
			}
		});

		$(document).ready(function () {
			$('.clickable').mouseenter(function(e){
				$(this).css('background','#edf2f4')
			})
			$('.clickable').mouseleave(function(e){
				$(this).css('background','white')
			})
			$('.clickable').click(function(e){
				window.location.replace('project.html');
			})
		})
	});

	$(window).load(function () {

	});

})(jQuery, document, window);