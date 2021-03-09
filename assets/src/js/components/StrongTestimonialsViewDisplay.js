import STViewTestimonial from './StrongTestimonialsViewTestimonial';

const { Component, Fragment, useEffect } = wp.element;

export const StrongTestimonialsViewDisplay = (props) => {
	const { testimonials, view, convertDateToUnix, sortTestimonialsByDate } = props;

	const { data, id } = view;
	console.log(data);
	const getClassNamesByLayout = (layout, columns) => {
		let classNames = `strong-content strong-${layout} columns-${columns}`;
		if ('' == layout) {
			classNames = 'strong-content strong-normal columns-1';
		} else if ('masonry' == layout) {
			classNames += ' masonry';
		}
		return classNames;
	};

	return [
		<div className={`strong-view strong-view-id-${id} ${data.template} wpmtst-${data.template}`}>
			<div className={getClassNamesByLayout(data.layout, data.column_count)}>
				{'masonry' == data.layout && (
					<Fragment>
						<div className="grid-sizer masonry-brick" />
						<div className="gutter-sizer masonry-brick" />
					</Fragment>
				)}
				{testimonials.length > 0 && (
					<Fragment>
						{testimonials.map((testimonial, index) => {
							return [
								<STViewTestimonial
									testimonial={testimonial}
									index={index}
									data={data}
									convertDateToUnix={convertDateToUnix}
									sortTestimonialsByDate={sortTestimonialsByDate}
								/>
							];
						})}
					</Fragment>
				)}
			</div>
		</div>
	];
};

export default StrongTestimonialsViewDisplay;
