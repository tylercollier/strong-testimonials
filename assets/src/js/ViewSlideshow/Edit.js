import Loading from '../components/Loading';
import Slideshow from './Slideshow';
import { getDefaultSlideshowConfig } from './Helper';

const { Component, Fragment, useEffect } = wp.element;
const { withSelect, useSelect } = wp.data;
const { SelectControl, Spinner, Toolbar, Button } = wp.components;
const { BlockControls } = wp.blockEditor;
const { compose } = wp.compose;

export const ViewSlideshowEdit = (props) => {
	const { setAttributes, attributes } = props;
	const { status, testimonials, id, template, config } = attributes;

	const testimonialsFetch = useSelect((select) => {
		const { getEntityRecords } = select('core');
		const query = {
			post_status: 'publish',
			per_page: -1,
		};

		return getEntityRecords('postType', 'wpm-testimonial', query) || [];
	});
	/**
	 * This enables us to always fetch the testimonials and attribute them only
	 * once
	 */
	useEffect(() => {
		if (testimonials != 0) {
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
				});
			}
		}
	});

	useEffect(() => {
		if( id == 0 && template == '') {
			setAttributes({
				id: Math.floor(Math.random() * (10000 - 1 + 1)) + 1,
				template: 'default',
			});
		}


		if ( false == config ) {
			setAttributes({ config: getDefaultSlideshowConfig() });
		}
	});

	if (status === 'loading') {
		return [<Loading status={status} />];
	}

	return <Slideshow {...props} />;
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

export default ViewSlideshowEdit;
