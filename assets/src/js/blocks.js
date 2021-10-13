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
			maxTestimonialCount: {
				type: 'number',
				default: -1,
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
			template: {
				type: 'string',
				default: '',
			},
			testimonials: {
				type: 'array',
				default: [],
			},
			config: {
				type: 'object',
				default: false,
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
