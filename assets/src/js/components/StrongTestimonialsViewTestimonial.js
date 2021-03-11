const { Component, Fragment, useEffect } = wp.element;

export const StrongTestimonialsViewTestimonial = (props) => {
	const { testimonial, index, data, generateReadMoreButton } = props;
	const { id, title, content } = testimonial;
	const { meta } = testimonial.meta;
	const { client_section } = data;

	const stars = [ 1, 2, 3, 4, 5 ];

	const initPager = (data) => {
		let pagers = jQuery('.strong-pager[data-state="idle"]');

		if (pagers.length) {
			pagers.each(function() {
				jQuery(this).strongPager(data);
			});
		}
	};

	// const initMasonry = () => {
	// 	let grids = jQuery('.strong-view[data-state="idle"] .strong-masonry');
	// 	grids.prepend('<div class="grid-sizer"></div><div class="gutter-sizer"></div>');
	// 	grids.masonry({
	// 		columnWidth: '.grid-sizer',
	// 		gutter: '.gutter-sizer',
	// 		itemSelector: '.wpmtst-testimonial',
	// 		percentPosition: true
	// 	});
	// 	grids.closest('.strong-view').attr('data-state', 'init');
	// };
	useEffect(() => {
		if (1 == data.pagination) {
			let obj = {
				pageSize: data.pagination_settings.per_page,
				pagerLocation: data.pagination_settings.nav,
				div: '.strong-content'
			};
			initPager(obj);
		}
		if ('masonry' == data.layout) {
			// setTimeout(() => initMasonry(), 6000);
		}
	});

	const generateHeading = (testimonial, titleLink) => {
		if ('none' == titleLink) {
			return <h3 class="wpmtst-testimonial-heading testimonial-heading">{title.rendered}</h3>;
		} else if ('wpmtst_testimonial' == titleLink) {
			return (
				<h3 class="wpmtst-testimonial-heading testimonial-heading">
					<a href={testimonial.link} rel="bookmark">
						{title.rendered}
					</a>
				</h3>
			);
		} else {
			return (
				<h3 class="wpmtst-testimonial-heading testimonial-heading">
					<a href={testimonial.meta.company_website[0]} rel="bookmark">
						{title.rendered}
					</a>
				</h3>
			);
		}
	};

	const generateFeaturedImage = (featuredImage, gravatar, data) => {
		let size = convertSizeToNumbers(data.thumbnail_size);
		if (false == featuredImage) {
			return (
				<div class="wpmtst-testimonial-image testimonial-image">
					<img
						alt=""
						src={gravatar}
						srcset={gravatar}
						class={`avatar avatar-${size} photo`}
						height={size}
						width={size}
						loading="lazy"
					/>
				</div>
			);
		} else {
			return (
				<div class="wpmtst-testimonial-image testimonial-image">
					<img
						width={size}
						height={size}
						src={featuredImage}
						class={`attachment-${data.thumbnail_size} size-${data.thumbnail_size} wp-post-image`}
						alt=""
						srcset={featuredImage}
						sizes={`(max-width: ${size}px) 100vw, ${size}px`}
					/>
				</div>
			);
		}
	};

	/**
	Helper function to convert text size into numeric form
	 */
	const convertSizeToNumbers = (size) => {
		switch (size) {
			case 'widget-thumbnail':
				return '75';
				break;
			case 'thumbnail':
				return '150';
				break;
			case 'medium':
				return '300';
				break;
			case 'large':
				return '1024';
				break;
		}
	};

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
					{data.title == 1 && generateHeading(testimonial, data.title_link)}
					<p>{content.raw.replace(/(<([^>]+)>)/gi, '')}</p>
				</div>
				{data.thumbnail == 1 && generateFeaturedImage(testimonial.meta.featured_image, st_views.gravatar, data)}
				{client_section.length > 0 && (
					<Fragment>
						{client_section.map((section, index) => {
							switch (section.type) {
								case 'text':
									return (
										<div class={`wpmtst-testimonial-field testimonial-field ${section.class}`}>
											{meta[section.field]}
										</div>
									);
									break;
								case 'link':
									return (
										<div class={`wpmtst-testimonial-field testimonial-field ${section.class}`}>
											<a href={`${meta[section.url]}`} target="_blank" rel="nofollow  ">
												{meta[section.field]}
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
														if (star == meta.star_rating) {
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
				{1 == data.more_page &&
				'wpmtst_after_testimonial' == data.more_page_hook && (
					<Fragment>{generateReadMoreButton(data)}</Fragment>
				)}
			</div>
		</div>
	];
};

export default StrongTestimonialsViewTestimonial;
