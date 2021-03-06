var GalleryWidget = {};
var galleryWidgetObj = {};

(function( win, $, undefined ) {
    'use strict';

    var galleryWidget = {};
    var _data = {};

    GalleryWidget = function(){
    	if( ! (this instanceof GalleryWidget))
    		return new GalleryWidget();
    };

    GalleryWidget.prototype = {
    	init: function(){
    		galleryWidget.$topNode = $('.gallery-widget');
    		galleryWidget.$nav = $('.gallery-widget__main-wrapper__nav-arrows');
    		galleryWidget.$slides = $('.gallery-widget .slide');
    		galleryWidget.$slidesImg = $('.gallery-widget .slide img');
    		galleryWidget.$scrollingWrapper = $('.gallery-widget__main-wrapper__scrolling-wrapper');
    		galleryWidget.$scroller = $('.gallery-widget__main-wrapper__scrolling-wrapper__scroller');
    		galleryWidget.$IMGs = $('.gallery-widget__main-wrapper__scrolling-wrapper .slide img');
    		galleryWidget.nav = { 'prev': {}, 'next': {} };
    		galleryWidget.slideInterval = {};

    		_data._current = 0;

    		this.eventHandlers();
    	},
    	eventHandlers: function(){
    		var thisRef = this;

    		$(window).load(function(){
				thisRef.updateSlideDim();
			});

			$(window).resize(function () {
				thisRef.updateSlideDim();
			});

			galleryWidget.$nav.on('click', this.advanceGallery);
    	},
    	advanceGallery: function(e){
    		var thisRef = this;
			var thisObj = !this.autoSlide? $(this) : carouselNav.next;
			var direction = thisObj.attr('title');
			var detachedObj = {};
			var targetSlide, hideDuration, showDuration, appendMethod; // Set vars that modify the direction of the slide

			/*if(thisObj.attr('direction') === 'prev'){
				if(_data._current > 0){
					_data._current -= 1;
					targetSlide = _data._current;
				}else{
					targetSlide = (galleryWidget.$slides.length-1);
				}

				hideDuration = 0; showDuration = 500; appendMethod = 'prependTo';
			}else {
				_data._current += 1;
				targetSlide = _data._current; hideDuration = 500; showDuration = 0; appendMethod = 'appendTo';
			}

			console.log(targetSlide);

			galleryWidget.$slides.eq( targetSlide ).animate( { 'padding-left': 100 }, hideDuration );

			galleryWidget.$slides.eq( targetSlide ).hide(0).promise().done(function(){
				this.detach().promise().done(function(){
					detachedObj = this;
					console.log(this);
					console.log(this.html());

					detachedObj[appendMethod]( thisRef.$carousel ).show(showDuration).promise().done(function(){
						
					});
				});
			});*/

    		console.log("Move: " + thisObj.attr('title'));
    	},
    	updateSlideDim: function(){
    		_data.width = galleryWidget.$topNode.width();
    		var scrollingWrapperW = _data.width * galleryWidget.$slides.length;

    		galleryWidget.$IMGs.hide();

    		galleryWidget.$slides.width(_data.width);
    			_data.height = galleryWidget.$slidesImg.height();

    		galleryWidget.$scrollingWrapper.width(_data.width);
    		galleryWidget.$scrollingWrapper.height(_data.height);
    		galleryWidget.$scroller.width( (_data.width * galleryWidget.$slides.length) ).height(_data.height);
    			//galleryWidget.$scroller.css('padding-left', (_data.width)).css('left', -_data.width);
    		galleryWidget.$IMGs.show();

    		console.log("_data.width: " + _data.width);
    		console.log("_data.height: " + _data.height);
    		console.log(scrollingWrapperW);
    	},
    	autoSlide: function() {
    		var thisRef = this;

	    	slideInterval = setInterval( function(){
				thisRef.advanceGallery();
			}, 10000);
		}
    };
})(window, jQuery);

$(function(){
	galleryWidgetObj = GalleryWidget();
	galleryWidgetObj.init();
});