import ViewSelectControl from '../components/ViewSelectControl';

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
	const { attributes, setAttributes, testimonialsFetch, dispatch } = props;
	const {
		id,
		slideshowType,
		testimonialsToShow,
		allTestimonialsCategories,
		selectedCategories,
		orderBy,
		template,
		slideshowSettings,
	} = attributes;

	const { buttons, dots } = slideshowSettings;

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
				<__experimentalRadio value="bold">
					{__('Bold', 'strong-testimonials')}
				</__experimentalRadio>
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
					title={__('Slideshow Settings', 'strong-testimonials')}
					initialOpen={true}
				>
					<SelectControl
						label={__('Type', 'strong-testimonials')}
						value={slideshowType}
						options={[
							{
								label: __('Single', 'strong-testimonials'),
								value: 'show_single',
							},
							{
								label: __('Multiple', 'strong-testimonials'),
								value: 'show_multiple',
							},
						]}
						onChange={(value) => {
							setAttributes({ slideshowType: value });
						}}
					/>
					<ToggleControl
						label={__('Buttons', 'strong-testimonials')}
						checked={buttons}
						help={
							buttons
								? __(
										'Buttons are turned on',
										'strong-testimonials'
								  )
								: __(
										'Buttons are turned off',
										'strong-testimonials'
								  )
						}
						onChange={() =>
							setAttributes({
								slideshowSettings: {
									...slideshowSettings,
									buttons: !buttons,
								},
							})
						}
					/>
					<ToggleControl
						label={__('Dots', 'strong-testimonials')}
						checked={dots}
						help={
							dots
								? __(
										'Dots are turned on',
										'strong-testimonials'
								  )
								: __(
										'Dots are turned off',
										'strong-testimonials'
								  )
						}
						onChange={() =>
							setAttributes({
								slideshowSettings: {
									...slideshowSettings,
									dots: !dots,
								},
							})
						}
					/>
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
					title={__('Testimonials Category', 'strong-testimonials')}
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
