import STViewTestimonial from './StrongTestimonialsViewTestimonial';

const { Component, Fragment, useEffect } = wp.element;

export const StrongTestimonialsViewSlideshow = (props) => {
	const { testimonials, view, convertDateToUnix, sortTestimonialsByDate, generateReadMoreButton } = props;
	console.log(props);
	const { data, id } = view;
	const { slideshow_settings } = data;
	const generateMainContainerClasses = (data) => {
		let classNames = `strong-view strong-view-id-${id} ${data.template} wpmtst-${data.template} slider-container slider-mode-${slideshow_settings.effect}`;

		if (1 == slideshow_settings.adapt_height) {
			classNames += ' slider-adaptive';
		}

		return classNames;
	};

	useEffect(() => {
		let breakpoints = {
			single: {
				maxSlides: slideshow_settings.show_single.max_slides,
				moveSlides: slideshow_settings.show_single.move_slides,
				slideMargin: slideshow_settings.show_single.margin
			},
			multiple: slideshow_settings.breakpoints
		};
		const sliderObj = {
			mode: slideshow_settings.effect,
			speed: slideshow_settings.speed,
			pause: slideshow_settings.pause,
			autoHover: slideshow_settings.auto_hover,
			autoStart: slideshow_settings.auto_start,
			infiniteLoop: slideshow_settings.continuous_sliding,
			stopAutoOnClick: slideshow_settings.stop_auto_on_click,
			adaptiveHeight: slideshow_settings.adapt_height,
			adaptiveHeightSpeed: slideshow_settings.adapt_height_speed,
			controls: 0,
			autoControls: 0,
			pager: 0,
			type: slideshow_settings.type,
			breakpoints: breakpoints
		};
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
