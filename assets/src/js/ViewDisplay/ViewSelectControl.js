const { useEffect } = wp.element;
const ViewSelectControl = (props) => {
	const { allTestimonialsCategories, selectedCategories, setAttributes } =
		props;
	useEffect(() => {
		let categories = [];
		allTestimonialsCategories.forEach((category) => {
			categories.push({
				value: category.id,
				label: category.name,
				count: category.count,
				slug: category.slug,
			});
		});
		if( !jQuery('.st-testimonial-categories-input').hasClass('selectize-control') ) {
			let selectInput = jQuery('.st-testimonial-categories-input').selectize({
				valueField: 'value',
				plugins: ['remove_button'],
				labelField: 'label',
				searchField: ['label', 'value'],
				multiple: true,
				create: false,
				placeholder: 'Search for category...',
				preload: true,
				allowEmptyOptions: true,
				closeAfterSelect: true,
				options: selectedCategories.concat(categories),
				render: {
					option: function (item, escape) {
						return (
							'<div class="st-categories">' +
							'<p class="st-category-name">' +
							escape(item.label) +
							'</p>' +
							'<p class="st-category-count">' +
							escape(item.count) +
							'</p>' +
							'</div>'
						);
					},
				},
				onChange: (value) => {
					let res = value.split(',');
					setAttributes({ selectedCategories: res });
				},
			});
		}

	}, []);

	return <input className="st-testimonial-categories-input" value={0 == selectedCategories.length ? '' : selectedCategories.join() }/>;
};

export default ViewSelectControl;
