const { Component, Fragment, useEffect } = wp.element;
import { generateFeaturedImage, generateHeading } from './Helper';

export const Testimonial = (props) => {
	const { testimonial, attributes, viewType } = props;
	const { id, title, content } = testimonial;
	const { meta } = testimonial.meta;

	const stars = [1, 2, 3, 4, 5];

	if( 'display' == viewType ){
		const { layout, columns } = attributes;
		const initMasonry = () => {
			let grids = jQuery('.strong-view[data-state="idle"] .strong-masonry');
			grids.prepend(
				'<div class="grid-sizer"></div><div class="gutter-sizer"></div>'
			);
			grids.masonry({
				columnWidth: '.grid-sizer',
				gutter: '.gutter-sizer',
				itemSelector: '.wpmtst-testimonial',
				percentPosition: true,
			});
			grids.closest('.strong-view').attr('data-state', 'init');
		};
		useEffect(() => {
			if ('masonry' == layout) {
				initMasonry();
			}
		});
	}




	return [
		<div className={`wpmtst-testimonial testimonial post-${id} t-slide`}>
			<div className="wpmtst-testimonial-inner testimonial-inner">
				<div className="wpmtst-testimonial-content testimonial-content">
					{generateHeading(testimonial)}
					<p>
						{testimonial.content.raw.replace(/(<([^>]+)>)/gi, '')}
					</p>
				</div>
				{generateFeaturedImage(
					testimonial.meta.featured_image,
					st_views.gravatar
				)}
				<div class="clear"></div>
			</div>
		</div>,
	];
};

export default Testimonial;
