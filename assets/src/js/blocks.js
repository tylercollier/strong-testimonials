import DisplayEdit from './ViewDisplay/Edit';
import SlideshowEdit from './ViewSlideshow/Edit';

/**
 * Import wp deps
 */

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { createBlock } = wp.blocks;

class ViewDisplay {
	constructor() {
		this.registerBlock();
	}

	registerBlock() {
		this.blockName = 'strongtestimonials/view';

		this.blockAttributes = {
			id: {
				type: 'number',
				default: 0,
			},
			viewType: {
				type: 'string',
				default: 'display',
			},
			status: {
				type: 'string',
				default: 'ready',
			},
			template: {
				type: 'string',
				default: '',
			},
			layout: {
				type: 'string',
				default: '',
			},
			columns: {
				type: 'number',
				default: 2,
			},
			testimonialsToShow: {
				type: 'number',
				default: 0,
			},
			testimonials: {
				type: 'array',
				default: [],
			},
			allTestimonialsCategories: {
				type: 'array',
				default: [],
			},
			selectedCategories: {
				type: 'array',
				default: [],
			},
			orderBy: {
				type: 'string',
				default: 'desc',
			},
			pagination: {
				type: 'boolean',
				default: false,
			},
			query: {
				type: 'object',
				default: {
					per_page: -1,
					pages: 0,
					offset: 0,
					order: 'desc',
					orderBy: 'date',
				},
			},
			align: {
				type: 'string',
				default: 'center',
			},
		};

		registerBlockType(this.blockName, {
			title: 'Display',
			description: __(
				'A beatiful display to show all your testimonials',
				'strong-testimonials'
			),
			icon: 'editor-quote',
			category: 'strong-testimonials-view',
			supports: {
				align: ['center', 'wide', 'left', 'right'],
				default: 'center',
				customClassName: false,
			},
			attributes: this.blockAttributes,
			transforms: {
				to: [
					{
						attributes: {
							...this.attributes,
						},
						type: 'block',
						priority: 7,
						blocks: ['strongtestimonials/slideshow'],
						transform: function (attributes) {
							return createBlock('strongtestimonials/slideshow', {
								id: attributes.id,
								status: attributes.status,
								template: attributes.template,
								testimonials: attributes.testimonials,
								testimonialsToShow:
									attributes.testimonialsToShow,
								allTestimonialsCategories:
									attributes.allTestimonialsCategories,
								selectedCategories:
									attributes.selectedCategories,
								orderBy: attributes.orderBy,
								query: attributes.query,
								align: attributes.align,
							});
						},
					},
				],
			},
			edit: DisplayEdit,
			save: () => {
				return null;
			},
		});
	}
}

class ViewSlideshow {
	constructor() {
		this.registerBlock();
	}

	registerBlock() {
		this.blockName = 'strongtestimonials/slideshow';

		this.blockAttributes = {
			id: {
				type: 'number',
				default: 0,
			},
			viewType: {
				type: 'string',
				default: 'slideshow',
			},
			status: {
				type: 'string',
				default: 'ready',
			},
			slideshowType: {
				type: 'string',
				default: '',
			},
			template: {
				type: 'string',
				default: '',
			},
			testimonialsToShow: {
				type: 'number',
				default: 0,
			},
			testimonials: {
				type: 'array',
				default: [],
			},
			allTestimonialsCategories: {
				type: 'array',
				default: [],
			},
			selectedCategories: {
				type: 'array',
				default: [],
			},
			orderBy: {
				type: 'string',
				default: 'desc',
			},
			align: {
				type: 'string',
				default: 'center',
			},
			slideshowSettings: {
				type: 'object',
				default: {
					config: false,
					button: false,
					dots: false,
				},
			},
		};

		registerBlockType(this.blockName, {
			title: 'Slideshow',
			description: __(
				'A beautiful slideshow to show all your testimonials',
				'strong-testimonials'
			),
			icon: 'editor-quote',
			category: 'strong-testimonials-view',
			supports: {
				align: ['center', 'wide', 'left', 'right'],
			},
			attributes: this.blockAttributes,
			styles: [
				{
					name: 'default',
					label: 'Default',
					isDefault: true,
				},
				{ name: 'modern', label: 'Modern' },
				{ name: 'simple', label: 'Simple' },
				{ name: 'bold', label: 'Bold' },
				{ name: 'unstyled', label: 'Unstyled' },
			],
			transforms: {
				to: [
					{
						attributes: {
							...this.attributes,
						},
						type: 'block',
						priority: 7,
						blocks: ['strongtestimonials/view'],
						transform: function (attributes) {
							return createBlock('strongtestimonials/view', {
								id: attributes.id,
								status: attributes.status,
								template: attributes.template,
								testimonials: attributes.testimonials,
							});
						},
					},
				],
			},
			edit: SlideshowEdit,
			save: () => {
				return null;
			},
		});
	}
}

let viewDisplay = new ViewDisplay();
let viewSlideshow = new ViewSlideshow();
