import { getMainContainerClasses, getClassNamesByLayout } from './Helper';
import Testimonial from '../components/Testimonial/Testimonial';
import Pagination from './Pagination';

const { Fragment, useEffect } = wp.element;
export const Display = (props) => {
	const { attributes, initMasonry, setMasonryObj, test } = props;
	const {
		id,
		template,
		layout,
		columns,
		testimonials,
		pagination,
		testimonialsToShow,
	} = attributes;
	useEffect(() => {
		if ('masonry' == layout) {
			initMasonry(id, setMasonryObj);
		}
	}, [layout, columns]);
	return [
		<div
			className={getMainContainerClasses(id, template)}
			data-count={testimonials.length}
			data-state="idle"
		>
			<div className={getClassNamesByLayout(layout, columns)}>
				<Fragment>
					{false != testimonials && (
						<>
							{testimonials.map((testimonial, index) => {
								return [
									<Testimonial
										testimonial={testimonial}
										index={index}
										initMasonry={initMasonry}
										{...props}
									/>,
								];
							})}
						</>
					)}
				</Fragment>
			</div>
			{pagination && (
				<>
					<Pagination />
				</>
			)}
		</div>,
	];
};

export default Display;
