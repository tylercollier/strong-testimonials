import { getMainContainerClasses, getClassNamesByLayout } from './Helper';
import Testimonial from '../components/Testimonial/Testimonial';
const { Fragment, useEffect } = wp.element;
export const Display = (props) => {
	const { attributes, initMasonry } = props;
	const { id, template, layout, columns, testimonials } = attributes;
	useEffect(() => {
		if( 'masonry' == layout ) {

			initMasonry();

		}
	}, [columns]);
	return [
		<div
			className={getMainContainerClasses(id, template)}
			data-count={testimonials.length}
			data-state="idle"
		>
			<div className={getClassNamesByLayout(layout, columns)}>
				<Fragment>
					{testimonials.map((testimonial, index) => {
						return [
							<Testimonial
								testimonial={testimonial}
								index={index}
								{...props}
							/>,
						];
					})}
				</Fragment>
			</div>
			{/* {1 == data.more_page && (
				<Fragment>{generateReadMoreButton(data)}</Fragment>
			)} */}
		</div>,
	];
};

export default Display;
