jQuery(document).ready(function() {
	jQuery(".item-hover").show();
	jQuery(".item-hover").css("opacity","0");
		jQuery('.view-exhibitors-artist-alley.view-id-exhibitors_artist_alley .views-row').each(function(){
			var shortText = '';
			//jQuery('.views-field-field-exhibitors-artist-alley-de .field-content').each(function(){
				var textLength = jQuery(this).find('.views-field-field-exhibitors-artist-alley-de .field-content').text().length;
				var text = jQuery(this).find('.views-field-field-exhibitors-artist-alley-de .field-content').text();
				if(textLength > 140)
				{
					shortText = jQuery.trim(text).substring(0, 140)
			    .split(" ").slice(0, -1).join(" ") + "...";
					//jQuery(this).html(shortText);
					//console.log("AA");
				}
				else
				{
					shortText = text;
					jQuery(this).find('.views-field-nothing').css('display','none');
				}
			//});	
			var tampDescription = "<span class='views-label views-label-field-exhibitors-artist-alley-de-tamp'>Product Description: </span><div class='field-content'><p>"+shortText+"</p></div>";
			jQuery(this).find('.views-field-nothing-1').html(tampDescription);
			//console.log(shortText);
		});

		jQuery('.view-booth-highlights.view-id-booth_highlights .views-row').each(function(){
			var shortText = '';
			//jQuery('.views-field-field-exhibitors-artist-alley-de .field-content').each(function(){
				var textLength = jQuery(this).find('.views-field-field-celebrity-guest-write-up .field-content').text().length;
				var text = jQuery(this).find('.views-field-field-celebrity-guest-write-up .field-content').text();
				if(textLength > 130)
				{
					shortText = jQuery.trim(text).substring(0, 130)
			    .split(" ").slice(0, -1).join(" ") + "...";
					//jQuery(this).html(shortText);
					//console.log("AA");
				}
				else
				{
					shortText = text;
					jQuery(this).find('.views-field-nothing').css('display','none');
				}
			//});	
			var tampDescription = "<span class='views-label views-label-field-exhibitors-artist-alley-de-tamp'>Celebrity / Guest Write-up: </span><div class='field-content'><p>"+shortText+"</p></div>";
			jQuery(this).find('.views-field-nothing-1').html(tampDescription);
			//console.log(shortText);
		});

		jQuery('.view-exhibitors-artist-alley.view-id-exhibitors_artist_alley .views-field-nothing').click(function() {
			// jQuery('.view-exhibitors-artist-alley.view-id-exhibitors_artist_alley').each(function(){
			// 	jQuery(this).find('.nav').removeClass('nav');
			// });
			jQuery(this).parent().toggleClass("nav");
		});

		jQuery('.view-booth-highlights.view-id-booth_highlights .views-field-nothing').click(function() {
			// jQuery('.view-exhibitors-artist-alley.view-id-exhibitors_artist_alley').each(function(){
			// 	jQuery(this).find('.nav').removeClass('nav');
			// });
			jQuery(this).parent().toggleClass("nav");
		});

		jQuery(window).scroll(function(){
				if(jQuery(window).scrollTop() > jQuery("#slider-header").height())
				{
					jQuery(".front #header-wrapper").addClass("header-fixed");
				}
				else
				{
					jQuery(".front #header-wrapper").removeClass("header-fixed");
				}
			});

		// var jcontrols = '<div class="orbit-shadow left"><a class="overlay-link jcarousel-control-prev inactive" data-jcarouselcontrol href=""></a><div class="orbit-control left"><i class="icon-left-open-big"></i><div class="circle"></div></div></div><div class="orbit-shadow right"><a class="overlay-link jcarousel-control-next inactive" data-jcarouselcontrol href=""></a><div class="orbit-control right"><i class="icon-right-open-big"></i><div class="circle"></div></div></div>';

  //       jQuery('.jcarousel').before(jcontrols);
		jQuery(".item-hover").show();
		jQuery(".item-hover").css("opacity","0");

		jQuery(".item-container").hover(function () {
			jQuery(this).children('.item-img').children('img').stop().animate({opacity: 0.8}, function(){
				jQuery(this).parent().siblings().css('opacity',0.8);
			});
		},
		 
		// ON MOUSE OUT
		function () {
			jQuery(this).children('.item-img').children('img').stop().animate({opacity: 0.8}, function(){
				jQuery(this).parent().siblings().css('opacity',0);
			});
		});
	jQuery('.jcarousel').jcarousel({
            // Options go here
            center: true,
            wrap: 'circular'
        }).jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        })
        // var colWidth = jQuery('.view-id-slider.view-display-id-block .view-content').width();
        // jQuery('.jcarousel li').width(colWidth);
        jQuery('.jcarousel li').width('980px');
        jQuery('.jcarousel li').height('432px');
        jQuery('.jcarousel').jcarousel('scroll', 1, true);
        //jQuery('.jcarousel ul').css({'margin-left': '-' + marginLeft.toString() + 'px'});
        /*
         Prev control initialization
         */
        jQuery('.jcarousel-control-prev').on('jcarouselcontrol:active', function() {
            jQuery(this).removeClass('inactive');
        }).on('jcarouselcontrol:inactive', function() {
            jQuery(this).addClass('inactive');
        }).jcarouselControl({
            // Options go here
            target: '-=1'
        });

        /*
         Next control initialization
         */
        jQuery('.jcarousel-control-next').on('jcarouselcontrol:active', function() {
            jQuery(this).removeClass('inactive');
        }).on('jcarouselcontrol:inactive', function() {
            jQuery(this).addClass('inactive');
        }).jcarouselControl({
            // Options go here
            target: '+=1'
        });
        /*
         Pagination initialization
         */
        jQuery('.jcarousel-pagination').on('jcarouselpagination:active', 'a', function() {
            jQuery(this).addClass('active');
        }).on('jcarouselpagination:inactive', 'a', function() {
            jQuery(this).removeClass('active');
        }).jcarouselPagination({
            // Options go here
        });
        // jQuery(".container.wide").waitForImages({
        //     waitForAll: true,
        //     finished: function() {
        //         jQuery('.jcarousel').jcarouselAutoscroll('start');
        //     }
        // });
		jQuery(".views-field.views-field-nothing").waitForImages({
            waitForAll: true,
            finished: function() {
                jQuery('.jcarousel').jcarouselAutoscroll('start');
            }
        });
        jQuery('.jcarousel').hover(function() {
            jQuery('.jcarousel').jcarouselAutoscroll('stop');
        }, function() {
            jQuery('<div class="jcaro"></div>usel').jcarouselAutoscroll('start');
        })
        jQuery('.jcarousel').on('jcarousel:fullyvisiblein', 'li', function(event, carousel) {
            // "this" refers to the item element
            // "carousel" is the jCarousel instance
            //console.log(this);
            var link = jQuery(jQuery(jQuery(this).children('.container.wide')[0]).children('.overlay-link')[0]).attr('href');
            var text = jQuery(jQuery(jQuery(this).children('.container.wide')[0]).children('.overlay-link')[0]).data('button');
            jQuery('#read-more').attr('href', link);
            jQuery('#read-more button h2').fadeOut(100, function() {
                jQuery(this).text(text).fadeIn(100);
            });
        });
});