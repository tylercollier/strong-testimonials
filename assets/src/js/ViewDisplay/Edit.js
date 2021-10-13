import Loading from '../components/Loading';
import Display from './Display';
import Inspector from './Inspector';
import { getTestimonialsCategories } from '../components/Rest';

const { __ } = wp.i18n;
const { Component, Fragment, useEffect } = wp.element;
const { withSelect, useSelect } = wp.data;
const { SelectControl, Spinner, Toolbar, Button } = wp.components;
const { BlockControls } = wp.blockEditor;
const { compose } = wp.compose;

export const ViewDisplayEdit = (props) => {
	const { setAttributes, attributes } = props;
	const {
		status,
		testimonials,
		testimonialsToShow,
		selectedCategories,
		orderBy,
	} = attributes;

	const testimonialsFetch = useSelect((select) => {
		const { getEntityRecords } = select('core');
		const query = {
			post_status: 'publish',
			per_page: 0 == testimonialsToShow ? -1 : testimonialsToShow,
			order: 'asc' == orderBy ? 'asc' : 'desc',
		};

		if (selectedCategories.length != 0 && selectedCategories.join() != '') {
			query['wpm-testimonial-category'] = selectedCategories;
		}

		return getEntityRecords('postType', 'wpm-testimonial', query) || [];
	});

	const initMasonry = () => {
		let grids = jQuery('.strong-view .strong-masonry');

		if (jQuery('.grid-sizer').length == 0) {
			grids.prepend(
				'<div class="grid-sizer"></div><div class="gutter-sizer"></div>'
			);
		}

		let masonry = grids.masonry({
			columnWidth: '.grid-sizer',
			gutter: '.gutter-sizer',
			itemSelector: '.wpmtst-testimonial',
			percentPosition: true,
		});

		grids.closest('.strong-view').attr('data-state', 'init');
	};

	// Initalize defaults if no id is found. This only takes place once.
	useEffect(() => {
		if (0 == attributes.id) {
			getTestimonialsCategories(setAttributes);
			setAttributes({
				id: Math.floor(Math.random() * (10000 - 1 + 1)) + 1,
				layout: '',
				template: 'default',
				columns: 2,
			});
		}
	}, []);
	/**
	 * This enables us to always fetch the testimonials and attribute them only
	 * once
	 */
	useEffect(() => {
		if (testimonials.length != 0) {
			//Handle change of number of testimonials
			if (
				testimonialsToShow != 0 &&
				testimonialsToShow !== testimonials.length
			) {
				let currentTestimonials = testimonials.length;

				if (currentTestimonials < testimonialsToShow) {
					setAttributes({ testimonials: testimonialsFetch });
				}

				if (currentTestimonials > testimonialsToShow) {
					setAttributes({ testimonials: testimonialsFetch });
				}
			}
		} else {
			if (testimonialsFetch.length == 0) {
				setAttributes({ status: 'loading' });
			} else if (
				testimonialsFetch.length != 0 &&
				testimonials.length == 0
			) {
				setAttributes({
					status: 'ready',
					testimonials: testimonialsFetch,
					//get the max test count , so we don't exced the max in the inspector . runs only once
					maxTestimonialCount: testimonialsFetch.length,
				});
			}
		}
	});

	useEffect(() => {
		// let p = new Promise((resolve, reject) => {
		// 	let updatedTestimonials = testimonialsFetch;
		// 	if (updatedTestimonials.length != 0) {
		// 		resolve(updatedTestimonials);
		// 	} else {
		// 		reject(updatedTestimonials, 'loading');
		// 	}
		// });
		// p.then((updatedTestimonials) => {
		// 	setAttributes({ testimonials: updatedTestimonials });
		// }).catch((updatedTestimonials, message) => {
		// 	updatedTestimonials = testimonialsFetch;
		// 	setAttributes({ testimonials: updatedTestimonials });
		// });
		// if (0 != updatedTestimonials.length) {
		// 	setAttributes({
		// 		status: 'ready',
		// 		testimonials: updatedTestimonials,
		// 	});
		// }

	}, [orderBy]);

	useEffect(() => {});

	if (status === 'loading') {
		return [<Loading status={status} />];
	}

	return (
		<>
			<Inspector {...props} testimonialsFetch={testimonialsFetch} />
			<Display {...props} initMasonry={initMasonry} />
		</>
	);
};

const applyWithSelect = withSelect((select, props) => {
	const { getEntityRecords } = select('core');
	const query = {
		post_status: 'publish',
		per_page: -1,
	};

	return {
		testimonials:
			getEntityRecords('postType', 'wpm-testimonial', query) || [],
	};
});

const applyWithFilters = wp.components.withFilters(
	'wpst.StrongTestimonialViewEdit'
);

// export default compose(applyWithSelect, applyWithFilters)(StrongTestimonialViewEdit);

export default ViewDisplayEdit;
