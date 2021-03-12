import STViewTestimonial from './StrongTestimonialsViewTestimonial';

const { Component, Fragment, useEffect } = wp.element;

export const StrongTestimonialsViewSlideshow = (props) => {
	const { testimonials, view, convertDateToUnix, sortTestimonialsByDate, generateReadMoreButton } = props;

	const { data, id } = view;
	const { slideshow_settings } = data;

	const generateMainContainerClasses = (data) => {
		let classNames = `strong-view strong-view-id-${id} ${data.template} wpmtst-${data.template} slider-container slider-mode-${slideshow_settings.effect}`;

		if (1 == slideshow_settings.adapt_height) {
			classNames += ' slider-adaptive';
		}
		if ('none' != slideshow_settings.controls_type) {
			if ('sides' == slideshow_settings.controls_type) {
				classNames += ` controls-type-sides controls-style-${slideshow_settings.controls_style}`;
			} else if ('simple' == slideshow_settings.controls_type || 'full' == slideshow_settings.controls_type) {
				classNames += ` nav-position-${slideshow_settings.nav_position} controls-style-${slideshow_settings.controls_style}`;
			}

			if ('full' == slideshow_settings.pager_type) {
				classNames += ` pager-type-full pager-style-${slideshow_settings.pager_style}`;
			}
		}

		return classNames;
	};

	const sliderObj = {
		mode: slideshow_settings.effect,
		speed: slideshow_settings.speed,
		pause: slideshow_settings.pause,
		autoHover: slideshow_settings.auto_hover,
		autoStart: 0,
		infiniteLoop: slideshow_settings.continuous_sliding,
		stopAutoOnClick: slideshow_settings.stop_auto_on_click,
		adaptiveHeight: slideshow_settings.adapt_height,
		adaptiveHeightSpeed: slideshow_settings.adapt_height_speed,
		controls: 1,
		autoControls: 'full' == slideshow_settings.controls_type ? 1 : 0,
		pager: 'full' == slideshow_settings.pager_type ? 1 : 0,
		slideCount: testimonials.length,
		debug: false,

		type: slideshow_settings.type,
		breakpoints: {
			single: {
				maxSlides: slideshow_settings.show_single.max_slides,
				moveSlides: slideshow_settings.show_single.move_slides,
				slideMargin: slideshow_settings.show_single.margin
			},
			multiple: slideshow_settings.breakpoints
		},
		startText: 'text' == slideshow_settings.controls_style ? 'Start' : '',
		stopText: 'text' == slideshow_settings.controls_style ? 'Stop' : '',
		prevText: 'text' == slideshow_settings.controls_style ? 'Prev' : '',
		nextText: 'text' == slideshow_settings.controls_style ? 'Next' : '',
		buildPager: 'text' == slideshow_settings.pager_style ? null : 'icons',
		simpleSetPager: 1
	};
	useEffect(() => {
		initSliders(sliderObj);
	});

	const initSliders = (sliderObj) => {
		let sliders = jQuery('.strong-view.slider-container[data-state="idle"]');

		if (sliders.length) {
			// Initialize independently
			sliders.each(function() {
				let $slider = jQuery(this);

				// don't init if it's only a single testimonial
				let count = $slider.data('count');
				if (count !== undefined && count === 1) {
					return;
				}

				$slider.strongSlider(sliderObj);
			});
		}
	};

	return (
		<Fragment>
			<div
				className={generateMainContainerClasses(data)}
				data-count={testimonials.length}
				data-slider-var={`strong_slider_id_${id}`}
				data-state="idle"
			>
				{' '}
				<div class="strong-content wpmslider-content">
					{testimonials.length > 0 && (
						<Fragment>
							{testimonials.map((testimonial, index) => {
								if (data.count != -1) {
									if (index < data.count) {
										return [
											<STViewTestimonial
												testimonial={testimonial}
												index={index}
												data={data}
												convertDateToUnix={convertDateToUnix}
												sortTestimonialsByDate={sortTestimonialsByDate}
												generateReadMoreButton={generateReadMoreButton}
											/>
										];
									}
								} else {
									return [
										<STViewTestimonial
											testimonial={testimonial}
											index={index}
											data={data}
											convertDateToUnix={convertDateToUnix}
											sortTestimonialsByDate={sortTestimonialsByDate}
											generateReadMoreButton={generateReadMoreButton}
										/>
									];
								}
							})}
						</Fragment>
					)}
				</div>
			</div>
		</Fragment>
	);
};

export default StrongTestimonialsViewSlideshow;
