import STViewTestimonial from './StrongTestimonialsViewTestimonial';

const { Component, Fragment, useEffect } = wp.element;

export const StrongTestimonialsViewDisplay = (props) => {
	const { testimonials, view, convertDateToUnix, sortTestimonialsByDate, generateReadMoreButton } = props;

	const { data, id } = view;

	// Helper function to generate class names
	const getClassNamesByLayout = (data, columns) => {
		let classNames = `strong-content strong-${data.layout} columns-${columns}`;
		if ('' == data.layout) {
			classNames = 'strong-content strong-normal columns-1';
		} else if ('masonry' == data.layout) {
			classNames += ' masonry';
		}
		if (data.pagination == 1 && data.pagination_settings.type == 'simple') {
			classNames += ' strong-paginated';
		}
		return classNames;
	};

	const generateMainContainerClasses = (data) => {
		let classNames = `strong-view strong-view-id-${id} ${data.template} wpmtst-${data.template}`;

		if (data.pagination == 1 && data.pagination_settings.type == 'simple') {
			classNames += ' strong-pager';
		}

		return classNames;
	};

	return [
		<div className={generateMainContainerClasses(data)} data-count={testimonials.length} data-state="idle">
			<div className={getClassNamesByLayout(data, data.column_count)}>
				{testimonials.length > 0 && (
					<Fragment>
						{testimonials.map((testimonial, index) => {
							if (data.count != -1) {
								if (index < data.count) {
									return [
										<STViewTestimonial
											testimonial={testimonial}
											index={index}
											data={data}
											convertDateToUnix={convertDateToUnix}
											sortTestimonialsByDate={sortTestimonialsByDate}
											generateReadMoreButton={generateReadMoreButton}
										/>
									];
								}
							} else {
								return [
									<STViewTestimonial
										testimonial={testimonial}
										index={index}
										data={data}
										convertDateToUnix={convertDateToUnix}
										sortTestimonialsByDate={sortTestimonialsByDate}
										generateReadMoreButton={generateReadMoreButton}
									/>
								];
							}
						})}
					</Fragment>
				)}
			</div>
			{1 == data.more_page && <Fragment>{generateReadMoreButton(data)}</Fragment>}
		</div>
	];
};

export default StrongTestimonialsViewDisplay;
