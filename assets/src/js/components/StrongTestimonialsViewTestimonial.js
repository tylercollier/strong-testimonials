const { Component, Fragment, useEffect } = wp.element;

export const StrongTestimonialsViewTestimonial = (props) => {
	const { testimonial, index, data } = props;
	const { id, title, content } = testimonial;
	const { client_section } = data;

	const stars = [ 1, 2, 3, 4, 5 ];

	/**
	Helper function to convert wordpress date into readable format
	 */
	const convertDateToReadable = (date) => {
		date = new Date(date);
		let renderDate = `${date.toLocaleString('en-US', { month: 'long' })} `; // December
		renderDate += `${date.toLocaleString('en-US', { day: 'numeric' })} `; // 9
		renderDate += `${date.toLocaleString('en-US', { year: 'numeric' })} `; // 2019

		return renderDate;
	};

	return [
		<div className={`wpmtst-testimonial testimonial post-${id}`}>
			<div className="wpmtst-testimonial-inner testimonial-inner">
				<div className="wpmtst-testimonial-content testimonial-content">
					<h3 class="wpmtst-testimonial-heading testimonial-heading">{title.rendered}</h3>
					<p>{content.raw.replace(/(<([^>]+)>)/gi, '')}</p>
				</div>
				{client_section.length > 0 && (
					<Fragment>
						{client_section.map((section, index) => {
							switch (section.type) {
								case 'text':
									return (
										<div class={`wpmtst-testimonial-field testimonial-field ${section.class}`}>
											{testimonial.meta[section.field]}
										</div>
									);
									break;
								case 'link':
									return (
										<div class={`wpmtst-testimonial-field testimonial-field ${section.class}`}>
											<a
												href={`${testimonial.meta[section.url]}`}
												target="_blank"
												rel="nofollow  "
											>
												{testimonial.meta[section.field]}
											</a>
										</div>
									);
									break;
								case 'rating':
									return (
										<div className="wpmtst-testimonial-field testimonial-field ">
											<span className="strong-rating-wrapper in-view">
												<span className="strong-rating">
													<span className="star" style={{ display: 'none' }} />
													{stars.map((star, index) => {
														if (star == testimonial.meta.star_rating) {
															return <span className="star current" />;
														}
														return <span className="star" />;
													})}
												</span>
											</span>
										</div>
									);
									break;
								case 'date':
									return (
										<div class="wpmtst-testimonial-field testimonial-field ">
											{convertDateToReadable(testimonial.date.split('T')[0])}
										</div>
									);
									break;
							}
						})}
					</Fragment>
				)}
			</div>
		</div>
	];
};

export default StrongTestimonialsViewTestimonial;
