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
				maxSlides: 2,
				moveSlides: 1,
				margin: 20,
			},
			large: {
				description: 'Large',
				width: 1024,
				maxSlides: 2,
				moveSlides: 1,
				margin: 20,
			},
			medium: {
				description: 'Medium',
				width: 640,
				maxSlides: 2,
				moveSlides: 1,
				margin: 10,
			},
			small: {
				description: 'Small',
				width: 480,
				maxSlides: 2,
				moveSlides: 1,
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
		pager_type: 'full',
		pager_style: 'buttons',
		nav_position: 'inside',
	};
};

/**
 * Class generator
 * @param {integer} id
 * @param {string} template
 * @param {object} config
 * @returns classNames
 */
export const getMainContainerClasses = (id, template, slideshowSettings, slideshowType ) => {
	///strong-view strong-view-id-1 default wpmtst-default slider-container carousel slider-mode-horizontal slider-adaptive controls-type-sides-outside controls-style-buttons pager-type-full pager-style-buttons nav-position-outside

	//strong-view strong-view-id-3586 default wpmtst-default slider-container slider-mode-fade slider-adaptive carousel slider-mode-horizontal  controls-type-sides controls-style-buttons pager-type-full pager-style-buttons
	let classNames = `strong-view strong-view-id-${id} ${template} wpmtst-${template} slider-container slider-mode-fade slider-adaptive`;

	if( 'show_multiple' == slideshowType ) {
		classNames += ' carousel slider-mode-horizontal ';
	}

	if (slideshowSettings.buttons == true) {
		classNames += ` controls-type-sides controls-style-buttons`;
	}

	if (slideshowSettings.dots === true) {
		classNames += ` pager-type-full pager-style-buttons`;
	}

	return classNames;
};
