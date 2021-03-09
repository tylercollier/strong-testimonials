const { Component, Fragment, useEffect } = wp.element;

export const StrongTestimonialsViewTestimonial = (props) => {
	const { testimonial, index, data } = props;
	const { id, title, content } = testimonial;
	const { client_section } = data;
    console.log(testimonial);
	return [
		<div className={`wpmtst-testimonial testimonial post-${id}`}>
			<div className="wpmtst-testimonial-inner testimonial-inner">
				<div className="wpmtst-testimonial-content testimonial-content">
					<h3 class="wpmtst-testimonial-heading testimonial-heading">{title.rendered}</h3>
					<p>{content.raw}</p>
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
							}
						})}
					</Fragment>
				)}
			</div>
		</div>
	];
};

export default StrongTestimonialsViewTestimonial;
