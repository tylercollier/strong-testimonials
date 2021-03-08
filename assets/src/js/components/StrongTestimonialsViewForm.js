const { __ } = wp.i18n;
const { Component, Fragment, useEffect } = wp.element;
const { withSelect } = wp.data;
const { SelectControl, Spinner, Toolbar, Button } = wp.components;
const { BlockControls } = wp.blockEditor;
const { compose } = wp.compose;

export const StrongTestimonialsViewForm = (props) => {
	const {template } = props ;
	let requiredTextFields = [
		{ fieldName: 'client_name', renderName: 'Full Name', description: 'What is your full name ?' },
		{ fieldName: 'email', renderName: 'Email', description: 'What is you email adress?' }
	];
	let optionalTextFields = [
		{ fieldName: 'company_name', renderName: 'Company Name', description: 'What is your company name ?' },
		{
			fieldName: 'company_website',
			renderName: 'Company Website',
			description: 'Does your company have a website ? '
		},
		{ fieldName: 'post_title', renderName: 'Heading', description: 'A headline for your testimonial' }
	];
	let textFields = [ { required: requiredTextFields }, { optional: optionalTextFields } ];

	return [
		<Fragment>
			<div class={`strong-view strong-form ${template} wpmtst-${template}`}>
				<div id="wpmtst-form">
					<div class="strong-form-inner">
						<form id="wpmtst-submission-form">
							{requiredTextFields.map((type, val) => {
								return [
									<div class={`form-field field-${type.fieldName}`}>
										<label for={`wpmtst_${type.fieldName}`} class={`field-${type.fieldName}`}>
											{type.renderName}
										</label>
										<span class="required symbol" />
										<input
											id={`wpmtst_${type.fieldName}`}
											type="text"
											class="text"
											name={type.fieldName}
											value=""
											placeholder=""
											required=""
											tabindex="0"
										/>
										<span class="after">{type.description}</span>
									</div>
								];
							})}
							{optionalTextFields.map((type, val) => {
								return [
									<div class={`form-field field-${type.fieldName}`}>
										<label for={`wpmtst_${type.fieldName}`} class={`field-${type.fieldName}`}>
											{type.renderName}
										</label>

										<input
											id={`wpmtst_${type.fieldName}`}
											type="text"
											class="text"
											name={type.fieldName}
											value=""
											placeholder=""
											required=""
											tabindex="0"
										/>
										<span class="after">{type.description}</span>
									</div>
								];
							})}
							<div class="form-field field-post_content">
								<label for="wpmtst_post_content" class="field-post_content">
									Testimonial
								</label>
								<span class="required symbol" />
								<textarea
									id="wpmtst_post_content"
									name="post_content"
									class="textarea"
									required=""
									placeholder=""
									tabindex="0"
								/>
								<span class="after">What do you think about us?</span>
							</div>
							<div class="form-field field-featured_image">
								<label for="wpmtst_featured_image" class="field-featured_image">
									Photo
								</label>
								<div class="field-wrap">
									<input id="wpmtst_featured_image" type="file" name="featured_image" tabindex="0" />
								</div>
								<span class="after">Would you like to include a photo?</span>
							</div>
							<div class="form-field field-star_rating">
								<label for="wpmtst_star_rating" class="field-star_rating">
									Star rating
								</label>
								<div class="strong-rating-wrapper field-wrap in-form">
									<fieldset
										contenteditable="false"
										id="wpmtst_star_rating"
										name="star_rating"
										class="strong-rating"
										data-field-type="rating"
										tabindex="0"
									>
										<legend>rating fields</legend>
										<input
											type="radio"
											id="star_rating-star0"
											name="star_rating"
											value="0"
											checked="checked"
										/>
										<label for="star_rating-star0" title="No stars" />
										<input type="radio" id="star_rating-star1" name="star_rating" value="1" />
										<label for="star_rating-star1" title="1 star" />
										<input type="radio" id="star_rating-star2" name="star_rating" value="2" />
										<label for="star_rating-star2" title="2 stars" />
										<input type="radio" id="star_rating-star3" name="star_rating" value="3" />
										<label for="star_rating-star3" title="3 stars" />
										<input type="radio" id="star_rating-star4" name="star_rating" value="4" />
										<label for="star_rating-star4" title="4 stars" />
										<input type="radio" id="star_rating-star5" name="star_rating" value="5" />
										<label for="star_rating-star5" title="5 stars" />
									</fieldset>
								</div>
								<span class="after">Would you like to include star rating?</span>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Fragment>
	];
};

export default StrongTestimonialsViewForm;
