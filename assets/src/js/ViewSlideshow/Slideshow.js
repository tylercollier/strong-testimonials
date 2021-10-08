import { getMainContainerClasses, getSlideshowObject } from './Helper';
import Testimonial from '../components/Testimonial/Testimonial';

const { Fragment, useEffect } = wp.element;

export const Slideshow = (props) => {
	const { attributes } = props;
	const { id, template, testimonials, config, viewType } = attributes;

	useEffect(() => {
		if ( false !== config ) {
			initSliders(getSlideshowObject(config, testimonials));
		}
	});

	const initSliders = (config) => {
		console.log(config);
		let sliders = jQuery(
			'.strong-view.slider-container[data-state="idle"]'
		);

		if (sliders.length) {
			// Initialize independently
			sliders.each(function () {
				let $slider = jQuery(this);

				// don't init if it's only a single testimonial
				let count = $slider.data('count');
				if (count !== undefined && count === 1) {
					return;
				}

				$slider.strongSlider(config);
			});
		}
	};

	return (
		<Fragment>
			<div
				className={getMainContainerClasses(id, template, config)}
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
