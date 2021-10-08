/**
 *
 * @param {int} id generated view id
 * @param {string} template template.
 * @returns {string} class names.
 */
export const getMainContainerClasses = (id, template) => {
	let classNames = `strong-view strong-view-id-${id} ${template} wpmtst-${template}`;

	// if (data.pagination == 1 && data.pagination_settings.type == 'simple') {
	// 	classNames += ' strong-pager';
	// }

	return classNames;
};

/**
 *
 * @param {string} layout selected layout
 * @param {int} columns number of columns
 * @returns classNames
 */
export const getClassNamesByLayout = (layout, columns) => {
	let classNames = `strong-content strong-${layout} columns-${columns}`;
	if ('' == layout) {
		classNames = 'strong-content strong-normal columns-1';
	} else if ('masonry' == layout) {
		classNames += ' masonry';
	}
	// if (data.pagination == 1 && data.pagination_settings.type == 'simple') {
	// 	classNames += ' strong-paginated';
	// }
	return classNames;
};
