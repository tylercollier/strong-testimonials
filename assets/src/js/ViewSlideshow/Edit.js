import Loading from '../components/Loading';
import Slideshow from './Slideshow';
import Inspector from './Inspector';
import { getDefaultSlideshowConfig } from './Helper';
import { getTestimonialsCategories } from '../components/Rest';
import { reducer } from '../components/Reducer';

const { Component, Fragment, useEffect, useReducer } = wp.element;
const { withSelect, useSelect } = wp.data;
const { SelectControl, Spinner, Toolbar, Button } = wp.components;
const { BlockControls, useBlockProps } = wp.blockEditor;
const { compose } = wp.compose;

export const ViewSlideshowEdit = (props) => {
	const { setAttributes, attributes } = props;
	const {
		status,
		testimonials,
		testimonialsToShow,
		selectedCategories,
		orderBy,
		id,
		query: newQuery,
		slideshowSettings,
		className,
		slideshowType,
	} = attributes;

	const { config } = slideshowSettings;

	const [initialState, dispatch] = useReducer(reducer, {
		orderBy: orderBy,
		selectedCategories: selectedCategories,
		testimonialsToShow: testimonialsToShow,
	});

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

	/**
	 * Initialize defaults . This happens only if no id is found.
	 */
	useEffect(() => {
		if (id == 0) {
			getTestimonialsCategories(setAttributes);
			setAttributes({
				id: Math.floor(Math.random() * (10000 - 1 + 1)) + 1,
				template: 'default',
				type: 'single',
			});
		}

		if (false == config) {
			setAttributes({
				slideshowSettings: {
					...slideshowSettings,
					config: getDefaultSlideshowConfig(),
				},
			});
		}
	}, []);

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


	/**
	 * This "useEffect" hook is used solely for changes that happen for properties that change the values of the query
	 */
	useEffect(() => {
		const getTestimonials = async () => {
			const response = await testimonialsFetch;
			if (response.length != 0) {
				setAttributes({ status: 'ready', testimonials: response });
				return response;
			}
		};
	}, [orderBy, selectedCategories, testimonialsToShow]);

	if (status === 'loading') {
		return [
			<>
				<Inspector
					{...props}
					testimonialsFetch={testimonialsFetch}
					dispatch={dispatch}
				/>
				<Loading status={status} />
			</>,
		];
	}

	return (
		<>
			<Inspector
				{...props}
				testimonialsFetch={testimonialsFetch}
				dispatch={dispatch}
			/>
			<Slideshow {...props} />
		</>
	);
};

export default ViewSlideshowEdit;
