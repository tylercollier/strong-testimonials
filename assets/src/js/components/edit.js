import Inspector from './inspector';
import STViewForm from './StrongTestimonialsViewForm';
import STStyle from './StrongTestimonialsStyle';
import STViewDisplay from './StrongTestimonialsViewDisplay';
import STViewSlideshow from './StrongTestimonialsViewSlideshow';

/**
 * Wordpress deps
 */

const { __ } = wp.i18n;
const { Component, Fragment, useEffect } = wp.element;
const { withSelect } = wp.data;
const { SelectControl, Spinner, Toolbar, Button } = wp.components;
const { BlockControls } = wp.blockEditor;
const { compose } = wp.compose;

export const StrongTestimonialViewEdit = (props) => {
	const { attributes, setAttributes, testimonials } = props;
	const { id, views, status, mode, view } = attributes;

	useEffect(() => {
		setAttributes({ status: 'ready', views: st_views.views });

		if (id != 0) {
			onIdChange(id);
		}

		// Sort testimonials before proceding further
		if (testimonials != undefined && testimonials.length > 1 && props.attributes.sorted != true) {
			testimonials.map((testimonial, index) => {
				testimonial.unixDate = convertDateToUnix(testimonial.date);
			});
			if (view != undefined) {
				sortTestimonialsByDate(testimonials, view.data.order);
			}
		}
	});
	const onIdChange = (id) => {
		props.setAttributes({ status: 'ready', id: id });
		getSelectedView(id);
	};

	// Get only the required view settings to pass in the appropiate
	// element
	const getSelectedView = (id) => {
		let view = st_views.views.filter((view) => view.id == id);

		setAttributes({ view: view[0] });
		return view[0];
	};

	const selectOptions = () => {
		let options = [ { value: 0, label: __('None') } ];

		st_views.views.forEach(function(view) {
			options.push({ value: view.id, label: view.name });
		});

		return options;
	};

	/**
	Sorting helper functions
	 */
	const convertDateToUnix = (date) => {
		let unixDate = new Date(date).getTime();
		return unixDate;
	};

	const sortTestimonialsByDate = (testimonials, order) => {
		if ('oldest' == order) {
			testimonials.sort((a, b) => {
				return a.unixDate - b.unixDate;
			});
		} else if ('menu_order' == order) {
			testimonials.sort((a, b) => {
				return a.menu_order - b.menu_order;
			});
		} else if ('random' == order) {
			randomize(testimonials);
		}

		setAttributes({ sorted: true, testimonials: testimonials });
	};

	const randomize = (testimonials) => {
		let currentIndex = testimonials.length,
			temporaryValue,
			randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = testimonials[currentIndex];
			testimonials[currentIndex] = testimonials[randomIndex];
			testimonials[randomIndex] = temporaryValue;
		}

		return testimonials;
	};

	const generateReadMoreButton = (data) => {
		let url = st_views.adminURL.split('/');
		url = `${url[0]}${url[2]}/?p=${data.more_page_id}`;
		if ('wpmtst_view_footer' == data.more_page_hook) {
			return (
				<div className="readmore-page">
					<a href={url}>{data.more_page_text}</a>
				</div>
			);
		} else if ('wpmtst_after_testimonial' == data.more_page_hook) {
			return (
				<div className="readmore">
					<a href={url}>{data.more_page_text}</a>
				</div>
			);
		}
	};

	///////////

	const blockControls = (
		<BlockControls>
			{st_views.views.length > 0 && (
				<Toolbar>
					<Button label={__('Edit View')} icon="edit" target="_blank" />
				</Toolbar>
			)}
		</BlockControls>
	);
	if (status === 'loading') {
		return [
			<Fragment>
				<div className="st-block-preview">
					<div className="st-block-preview__content">
						<div className="st-block-preview__logo"> </div>
						<Spinner />
					</div>
				</div>
			</Fragment>
		];
	}

	if (id == 0) {
		return [
			<Fragment>
				<Inspector onIdChange={(id) => onIdChange(id)} selectOptions={selectOptions()} {...props} />
				<div className="st-block-preview">
					<div class="st-block-preview__content">
						<div className="st-block-preview__logo" />
						{st_views.views.length === 0 && (
							<Fragment>
								<h6>{__("You don't seem to have any views.")}</h6>
								<Button
									href={
										st_views.adminURL +
										'edit.php?post_type=wpm-testimonial&page=testimonial-views&action=add'
									}
									target="_blank"
									isDefault
								>
									{__('Add New View')}
								</Button>
							</Fragment>
						)}
						{st_views.views.length > 0 && (
							<Fragment>
								<SelectControl
									label="Select a view:"
									className="st-view-select"
									key={id}
									value={id}
									options={selectOptions()}
									onChange={(value) => onIdChange(parseInt(value))}
								/>
								{id != 0 && (
									<Button
										target="_blank"
										href={
											st_views.adminURL +
											'edit.php?post_type=wpm-testimonial&page=testimonial-views&action=edit&id=' +
											id
										}
										isSecondary
									>
										{__('Edit Settings')}
									</Button>
								)}
							</Fragment>
						)}
					</div>
				</div>
			</Fragment>
		];
	}

	if (id != 0 && testimonials.length > 0) {
		if (view != undefined) {
			if ('form' == view.data.mode) {
				return [
					<Fragment>
						<Inspector onIdChange={(id) => onIdChange(id)} selectOptions={selectOptions()} {...props} />
						<STViewForm view={view} />
						<STViewForm view={view} />
					</Fragment>
				];
			} else if ('display' == view.data.mode) {
				return [
					<Fragment>
						<Inspector onIdChange={(id) => onIdChange(id)} selectOptions={selectOptions()} {...props} />
						<STViewDisplay
							view={view}
							testimonials={testimonials}
							convertDateToUnix={convertDateToUnix}
							sortTestimonialsByDate={sortTestimonialsByDate}
							generateReadMoreButton={generateReadMoreButton}
						/>
					</Fragment>
				];
			} else if ('slideshow' == view.data.mode) {
				return [
					<Fragment>
						<Inspector onIdChange={(id) => onIdChange(id)} selectOptions={selectOptions()} {...props} />
						<STViewSlideshow
							view={view}
							testimonials={testimonials}
							convertDateToUnix={convertDateToUnix}
							sortTestimonialsByDate={sortTestimonialsByDate}
							generateReadMoreButton
						/>
					</Fragment>
				];
			}
		}
		return null;
	}
	return null;
};

const applyWithSelect = withSelect((select, props) => {
	const { getEntityRecords } = select('core');
	const query = {
		post_status: 'publish',
		per_page: -1
	};

	return {
		testimonials: getEntityRecords('postType', 'wpm-testimonial', query) || []
	};
});

const applyWithFilters = wp.components.withFilters('wpst.StrongTestimonialViewEdit');

export default compose(applyWithSelect, applyWithFilters)(StrongTestimonialViewEdit);
