import Loading from '../components/Loading';
import Display from './Display';
import Inspector from './Inspector';
import { getTestimonialsCategories } from '../components/Rest';

const { __ } = wp.i18n;
const { Component, Fragment, useEffect, useReducer, useState, useRef } =
	wp.element;
const { withSelect, useSelect } = wp.data;
const { SelectControl, Spinner, Toolbar, Button } = wp.components;
const { BlockControls } = wp.blockEditor;
const { compose } = wp.compose;

function reducer(initialState, action) {
	switch (action.type) {
		case 'ORDERBYCHANGE':
			initialState.orderBy = action.payload.value;
			action.payload.setAttributes({
				orderBy: action.payload.value,
				testimonials: [],
				status: 'loading',
			});
			return initialState;

		case 'SELECTEDCATEGORYCHANGE':
			action.payload.setAttributes({
				selectedCategories: action.payload.value,
				testimonials: [],
				status: 'loading',
			});

			return initialState;
		case 'TESTIMONIALSTOSHOWCHANGE':
			if (action.payload.value != '') {
				action.payload.setAttributes({
					testimonialsToShow: parseInt(action.payload.value),
					testimonials: [],
					status: 'loading',
				});
			}
			return initialState;

		case 'OFFSETCHANGE':
			action.payload.setAttributes({
				query: {
					...action.payload.query,
					offset: parseInt(action.payload.value),
				},
				testimonials: [],
				status: 'loading',
			});
			return initialState;

		case 'PAGESCHANGE':
			action.payload.setAttributes({
				query: {
					...action.payload.query,
					pages: parseInt(action.payload.value),
				},
				testimonials: [],
				status: 'loading',
			});
			return initialState;

		default:
			return initialState;
	}
}

export const ViewDisplayEdit = (props) => {
	const { setAttributes, attributes } = props;
	const {
		status,
		testimonials,
		testimonialsToShow,
		selectedCategories,
		orderBy,
		id,
		query: newQuery,
	} = attributes;

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
			offset: newQuery.offset,
			pages: newQuery.pages,
		};

		if (selectedCategories.length != 0 && selectedCategories.join() != '') {
			query['wpm-testimonial-category'] = selectedCategories;
		}

		return getEntityRecords('postType', 'wpm-testimonial', query) || [];
	});
	//Set the masonry object state to false to begin with .
	const [masonryObj, setMasonryObj] = useState(false);

	const initMasonry = (id, setMasonryObj) => {
		let grid = jQuery(`.strong-view-id-${id} .strong-masonry`);

		if (jQuery('.grid-sizer').length == 0) {
			grid.prepend(
				'<div class="grid-sizer"></div><div class="gutter-sizer"></div>'
			);
		}

		let masonry = grid.masonry({
			columnWidth: '.grid-sizer',
			gutter: '.gutter-sizer',
			itemSelector: '.wpmtst-testimonial',
			percentPosition: true,
		});
		// Pass in the event listener the setMasonryObj function
		masonry[0].setMasonryObj = setMasonryObj;

		masonry.on('layoutComplete', onMasonryLayoutComplete);

		grid.closest(`.strong-view-id-${id}`).attr('data-state', 'init');

		return;
	};

	const onMasonryLayoutComplete = (event, items) => {
		//Set the masonry object to the state
		event.currentTarget.setMasonryObj(event.currentTarget);
	};

	const destroyMasonry = (id, masonryObj) => {
		if (false != masonryObj) {
			jQuery(masonryObj).masonry('destroy');
			return true;
		}

		return false;
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
	 * This "useEffect" hook is used solely for changes that happen for properties that change the values of the testimonials
	 */
	useEffect(() => {
		const getTestimonials = async() => {
			const response = await testimonialsFetch;
			if (response.length != 0) {
				setAttributes({ status: 'ready', testimonials: response });
				return response;
			}
		}
	}, [orderBy, selectedCategories, testimonialsToShow]);


	if (status === 'loading') {
		return [
			<>
				<Inspector
					{...props}
					testimonialsFetch={testimonialsFetch}
					dispatch={dispatch}
					destroyMasonry={destroyMasonry}
					masonryObj={masonryObj}
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
				destroyMasonry={destroyMasonry}
				masonryObj={masonryObj}
			/>
			<Display
				{...props}
				initMasonry={initMasonry}
				setMasonryObj={setMasonryObj}
			/>
		</>
	);
};

export default ViewDisplayEdit;
