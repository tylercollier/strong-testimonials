import { getMainContainerClasses, getClassNamesByLayout } from './Helper';
import Testimonial from '../components/Testimonial/Testimonial';
const { Fragment } = wp.element;
export const Display = (props) => {
	const { attributes } = props;
	const { id, template, layout, columns, testimonials } = attributes;

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
