/**
 * Get default slideshow config.
 * @returns {obj} default slideshow config
 */
export const getDefaultSlideshowConfig = () => {
	return {
		type: 'show_single',
		show_single: { max_slides: 1, move_slides: 1, margin: 1 },
		breakpoints: {
			desktop: {
				description: 'Desktop',
				width: 1200,
				max_slides: 2,
				move_slides: 1,
				margin: 20,
			},
			large: {
				description: 'Large',
				width: 1024,
				max_slides: 2,
				move_slides: 1,
				margin: 20,
			},
			medium: {
				description: 'Medium',
				width: 640,
				max_slides: 1,
				move_slides: 1,
				margin: 10,
			},
			small: {
				description: 'Small',
				width: 480,
				max_slides: 1,
				move_slides: 1,
				margin: 1,
			},
		},
		effect: 'fade',
		speed: 1,
		pause: 8,
		auto_start: true,
		continuous_sliding: true,
		auto_hover: true,
		adapt_height: true,
		adapt_height_speed: 0.5,
		stretch: 0,
		stop_auto_on_click: true,
		controls_type: 'simple',
		controls_style: 'buttons',
		pager_type: 'none',
		pager_style: 'buttons',
		nav_position: 'inside',
	};
};

/**
 *
 * @param {object} config
 * @param {array} testimonials
 * @returns object
 */
export const getSlideshowObject = (config, testimonials) => {

	return {
		mode: config.effect,
		speed: config.speed,
		pause: config.pause,
		autoHover: config.auto_hover,
		autoStart: 0,
		infiniteLoop: config.continuous_sliding,
		stopAutoOnClick: config.stop_auto_on_click,
		adaptiveHeight: config.adapt_height,
		adaptiveHeightSpeed: config.adapt_height_speed,
		controls: 1,
		autoControls: 1,
		pager: 'full' == config.pager_type ? 1 : 0,
		slideCount: testimonials.length,
		debug: false,

		type: config.type,
		breakpoints: {
			single: {
				maxSlides: config.show_single.max_slides,
				moveSlides: config.show_single.move_slides,
				slideMargin: config.show_single.margin,
			},
			multiple: config.breakpoints,
		},
		startText: 'text' == config.controls_style ? 'Start' : '',
		stopText: 'text' == config.controls_style ? 'Stop' : '',
		prevText: 'text' == config.controls_style ? 'Prev' : '',
		nextText: 'text' == config.controls_style ? 'Next' : '',
		buildPager: 'text' == config.pager_style ? null : 'icons',
		simpleSetPager: 1,
	};
};

/**
 * Class generator
 * @param {integer} id
 * @param {string} template
 * @param {object} config
 * @returns classNames
 */
export const getMainContainerClasses = (id, template, config) => {
	let classNames = `strong-view strong-view-id-${id} ${template} wpmtst-${template} slider-container slider-mode-${config.effect}`;

	if (1 == config.adapt_height) {
		classNames += ' slider-adaptive';
	}
	if ('none' != config.controls_type) {
		if ('sides' == config.controls_type) {
			classNames += ` controls-type-sides controls-style-${config.controls_style}`;
		} else if (
			'simple' == config.controls_type ||
			'full' == config.controls_type
		) {
			classNames += ` nav-position-${config.nav_position} controls-style-${config.controls_style}`;
		}

		if ('full' == config.pager_type) {
			classNames += ` pager-type-full pager-style-${config.pager_style}`;
		}
	}

	return classNames;
};
