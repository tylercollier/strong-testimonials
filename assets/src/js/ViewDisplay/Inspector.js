import ViewSelectControl from './ViewSelectControl';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const {
	Button,
	PanelBody,
	RangeControl,
	SelectControl,
	__experimentalNumberControl,
} = wp.components;

const Inspector = (props) => {
	const { attributes, setAttributes, testimonialsFetch, dispatch } = props;
	const {
		layout,
		columns,
		testimonialsToShow,
		maxTestimonialCount,
		allTestimonialsCategories,
		selectedCategories,
		orderBy,
	} = attributes;


	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__('Layout Settings', 'strong-testimonials')}
					initialOpen={true}
				>
					<SelectControl
						label={__('Type', 'strong-testimonials')}
						value={layout}
						options={[
							{
								label: __('List', 'strong-testimonials'),
								value: '',
							},
							{
								label: __('Masonry', 'strong-testimonials'),
								value: 'masonry',
							},
							{
								label: __('Columns', 'strong-testimonials'),
								value: 'columns',
							},
							{
								label: __('Grid', 'strong-testimonials'),
								value: 'grid',
							},
						]}
						onChange={(value) => setAttributes({ layout: value })}
					/>
					{layout != '' && (
						<RangeControl
							label={__('Columns', 'strong-testimonials')}
							value={columns}
							onChange={(value) =>
								setAttributes({ columns: value })
							}
							min={2}
							max={4}
						/>
					)}
					<>
						<label>No. of testimonials</label>
						<__experimentalNumberControl
							isShiftStepEnabled={true}
							onChange={(value) =>
								setAttributes({
									testimonialsToShow: parseInt(value),
								})
							}
							shiftStep={10}
							value={testimonialsToShow}
							min={-1}
							max={maxTestimonialCount}
						/>
					</>
				</PanelBody>
				<PanelBody
					title={__('Testimonial Category', 'strong-testimonials')}
					initialOpen={true}
				>
					{undefined != allTestimonialsCategories && (
						<>
							<ViewSelectControl
								setAttributes={setAttributes}
								allTestimonialsCategories={
									allTestimonialsCategories
								}
								selectedCategories={selectedCategories}
								testimonialsFetch={testimonialsFetch}
								dispatch={dispatch}
							/>
						</>
					)}
				</PanelBody>
				<PanelBody
					title={__('Order By', 'strong-testimonials')}
					initialOpen={true}
				>
					<SelectControl
						value={orderBy}
						options={[
							{
								label: __(
									'Newest First',
									'strong-testimonials'
								),
								value: 'desc',
							},
							{
								label: __(
									'Oldest First',
									'strong-testimonials'
								),
								value: 'asc',
							},
						]}
						onChange={(value) =>
							dispatch({
								type: 'ORDERBYCHANGE',
								payload: { value, setAttributes },
							})
						}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
};
export default Inspector;
