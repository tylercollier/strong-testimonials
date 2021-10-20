export function reducer(initialState, action) {
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