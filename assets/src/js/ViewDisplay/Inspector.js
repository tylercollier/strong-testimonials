import ViewSelectControl from './ViewSelectControl';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment, useState } = wp.element;
const { InspectorControls } = wp.blockEditor;
const {
	Button,
	PanelBody,
	RangeControl,
	SelectControl,
	__experimentalNumberControl,
	__experimentalInputControl,
	ToggleControl,
	__experimentalRadio,
	__experimentalRadioGroup,
} = wp.components;

const Inspector = (props) => {
	const {
		attributes,
		setAttributes,
		testimonialsFetch,
		dispatch,
		destroyMasonry,
		masonryObj,
	} = props;
	const {
		id,
		layout,
		columns,
		testimonialsToShow,
		allTestimonialsCategories,
		selectedCategories,
		pagination,
		orderBy,
		query,
		template,
	} = attributes;

	const TemplateRadioGroup = () => {
		return (
			<__experimentalRadioGroup
				label={__('Type', 'strong-testimonials')}
				onChange={(value) => {
					setAttributes({ template: value });
				}}
				checked={template}
			>
				<__experimentalRadio value="default">
					{__('Default', 'strong-testimonials')}
				</__experimentalRadio>
				<__experimentalRadio value="modern">
					{__('Modern', 'strong-testimonials')}
				</__experimentalRadio>
				<__experimentalRadio value="bold">{__('Bold', 'strong-testimonials')}</__experimentalRadio>
				<__experimentalRadio value="simple">
					{__('Simple', 'strong-testimonials')}
				</__experimentalRadio>
				<__experimentalRadio value="unstyled">
					{__('Unstyled', 'strong-testimonials')}
				</__experimentalRadio>
			</__experimentalRadioGroup>
		);
	};

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
						]}
						onChange={(value) => {
							if ('masonry' != value) {
								destroyMasonry(id, masonryObj);
							}
							setAttributes({ layout: value });
						}}
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
							onChange={(value) => {
								dispatch({
									type: 'TESTIMONIALSTOSHOWCHANGE',
									payload: { value, setAttributes },
								});
							}}
							shiftStep={10}
							value={testimonialsToShow}
							min={0}
							max={100}
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
						onChange={(value) => {
							dispatch({
								type: 'ORDERBYCHANGE',
								payload: { value, setAttributes },
							});
						}}
					/>
				</PanelBody>
				<PanelBody
					title={__('Pagination', 'strong-testimonials')}
					initialOpen={true}
				>
					<ToggleControl
						label={__('Toggle Pagination', 'strong-testimonials')}
						checked={pagination}
						help={
							pagination
								? __(
										'Pagination is turned on',
										'strong-testimonials'
								  )
								: __(
										'Pagination is turned off',
										'strong-testimonials'
								  )
						}
						onChange={() =>
							setAttributes({ pagination: !pagination })
						}
					/>
					{pagination && (
						<>
							<__experimentalInputControl
								type="number"
								label={__(
									'Items Per Page',
									'strong-testimonials'
								)}
								min={1}
								max={100}
								value={testimonialsToShow}
								onChange={(value) => {
									dispatch({
										type: 'TESTIMONIALSTOSHOWCHANGE',
										payload: { value, setAttributes },
									});
								}}
							/>
							<__experimentalInputControl
								type="number"
								label={__('Offset', 'strong-testimonials')}
								min={0}
								max={100}
								onChange={(value) => {
									dispatch({
										type: 'OFFSETCHANGE',
										payload: {
											value,
											setAttributes,
											query,
										},
									});
								}}
								value={query.offset}
							/>
							<__experimentalInputControl
								type="number"
								label={__(
									'Max Pages To Show',
									'strong-testimonials'
								)}
								min={0}
								max={100}
								value={query.pages}
								onChange={(value) => {
									dispatch({
										type: 'PAGESCHANGE',
										payload: {
											value,
											setAttributes,
											query,
										},
									});
								}}
							/>
						</>
					)}
				</PanelBody>
				<PanelBody
					initialOpen={true}
					title={__('Template Settings', 'strong-testimonials')}
				>
					{TemplateRadioGroup}
				</PanelBody>
			</InspectorControls>
		</>
	);
};
export default Inspector;
