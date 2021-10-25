/**
 * Get testimonials categories
 */
export const getTestimonialsCategories = (setAttributes) => {
	wp.apiFetch({ path: `wp/v2/wpm-testimonial-category` }).then((res) => {
		setAttributes({ allTestimonialsCategories: res });
	});
};

export const getTestimonials = (
	attributes,
	setAttributes,
	testimonialsFetch
) => {
	if( attributes.testimonials.length == 0 ) {

		setAttributes({ testimonials: testimonialsFetch });
	}
};

/**
 *
 * @returns query object
 */
export const buildQuery = () => {
	let query = {};
	query['post_status'] = 'publish';
	query['per_page'] = 0 == testimonialsToShow ? -1 : testimonialsToShow;

	if (0 != selectedCategories.length) {
		query['wpm-testimonial-category'] = selectedCategories;
	}

	return query;
};