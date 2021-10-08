/**
 * Generate heading of the testimonial
 * @param {array} testimonial
 * @returns component
 */
export const generateHeading = (testimonial) => {
	return (
		<h3 class="wpmtst-testimonial-heading testimonial-heading">
			<a href={testimonial.meta.meta.company_website[0]} rel="bookmark">
				{testimonial.title.rendered}
			</a>
		</h3>
	);
};

/**
 * Generate featured image or gravatar . whichever available
 * @param {obj} featuredImage
 * @param {obj} gravatar
 * @returns component
 */
export const generateFeaturedImage = (featuredImage, gravatar) => {
	let size = convertSizeToNumbers('thumbnail');
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
					class={`attachment-thumbnail size-thumbnail wp-post-image`}
					alt=""
					srcset={featuredImage}
					sizes={`(max-width: ${size}px) 100vw, ${size}px`}
				/>
			</div>
		);
	}
};

/**
 *
 * @param {string} size
 * @returns numeric format of size
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
