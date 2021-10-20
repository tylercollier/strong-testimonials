import { getMainContainerClasses, getSlideshowObject } from './Helper';
import Testimonial from '../components/Testimonial/Testimonial';

const { Fragment, useEffect, useState } = wp.element;

export const Slideshow = (props) => {
	const { attributes } = props;
	const {
		id,
		template,
		testimonials,
		slideshowSettings,
		viewType,
		slideshowType,
	} = attributes;
	const { config } = slideshowSettings;

	useEffect(() => {
		if (false !== config) {
			initSliders(
				{
					mode: 'horizontal',
					speed: .1,
					pause: config.pause,
					autoHover: config.auto_hover,
					autoStart: 0,
					infiniteLoop: config.continuous_sliding,
					stopAutoOnClick: config.stop_auto_on_click,
					adaptiveHeight: true,
					controls: 1,
					autoControls: 1,
					pager: 'full' == config.pager_type ? 1 : 0,
					slideCount: testimonials.length,
					debug: false,

					type: slideshowType,
					breakpoints: {
						single: {
							maxSlides: 1,
							moveSlides: 1,
							slideMargin: 1,
						},
						multiple: {
							desktop: {
								width: 1200,
								maxSlides: 2,
								moveSlides: 1,
								slideMargin: 20,
							},
							large: {
								width: 1024,
								maxSlides: 2,
								moveSlides: 1,
								slideMargin: 20,
							},
							medium: {
								width: 640,
								maxSlides: 1,
								moveSlides: 1,
								slideMargin: 10,
							},
							small: {
								width: 480,
								maxSlides: 1,
								moveSlides: 1,
								slideMargin: 1,
							},
						},
					},
					startText: '',
					stopText: '',
					prevText: 'text' == config.controls_style ? 'Prev' : '',
					nextText: 'text' == config.controls_style ? 'Next' : '',
					buildPager: 'text' == config.pager_style ? null : 'icons',
					simpleSetPager: 1,
				}
			);
		}

	}, slideshowType);

	const initSliders = (config) => {
		let slider = jQuery(
			`.strong-view-id-${id}.slider-container[data-state="idle"]`
		).strongSlider(config);
	};
	return (
		<Fragment>
			<div
				className={getMainContainerClasses(
					id,
					template,
					slideshowSettings,
					slideshowType
				)}
				data-count={testimonials.length}
				data-slider-var={`strong_slider_id_${id}`}
				data-state="idle"
			>
				{' '}
				<div class="strong-content wpmslider-content">
					{testimonials.length > 0 && (
						<Fragment>
							{testimonials.map((testimonial, index) => {
								return [
									<Testimonial
										testimonial={testimonial}
										index={index}
										viewType={viewType}
									/>,
								];
							})}
						</Fragment>
					)}
				</div>
			</div>
		</Fragment>
	);
};

export default Slideshow;
