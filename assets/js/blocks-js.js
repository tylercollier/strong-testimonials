/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.StrongTestimonialViewEdit = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _inspector = __webpack_require__(8);

var _inspector2 = _interopRequireDefault(_inspector);

var _StrongTestimonialsViewForm = __webpack_require__(7);

var _StrongTestimonialsViewForm2 = _interopRequireDefault(_StrongTestimonialsViewForm);

var _StrongTestimonialsStyle = __webpack_require__(5);

var _StrongTestimonialsStyle2 = _interopRequireDefault(_StrongTestimonialsStyle);

var _StrongTestimonialsViewDisplay = __webpack_require__(6);

var _StrongTestimonialsViewDisplay2 = _interopRequireDefault(_StrongTestimonialsViewDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Wordpress deps
 */

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment,
    useEffect = _wp$element.useEffect;
var withSelect = wp.data.withSelect;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    Spinner = _wp$components.Spinner,
    Toolbar = _wp$components.Toolbar,
    Button = _wp$components.Button;
var BlockControls = wp.blockEditor.BlockControls;
var compose = wp.compose.compose;
var StrongTestimonialViewEdit = exports.StrongTestimonialViewEdit = function StrongTestimonialViewEdit(props) {
	var attributes = props.attributes,
	    setAttributes = props.setAttributes,
	    testimonials = props.testimonials;
	var id = attributes.id,
	    views = attributes.views,
	    status = attributes.status,
	    mode = attributes.mode,
	    view = attributes.view;

	console.log(view);
	useEffect(function () {
		setAttributes({ status: 'ready', views: st_views.views });

		if (id != 0) {
			_onIdChange(id);
		}
	}, []);
	var _onIdChange = function _onIdChange(id) {
		props.setAttributes({ status: 'ready', id: id });
		getSelectedView(id);
	};

	// Get only the required view settings to pass in the appropiate
	// element
	var getSelectedView = function getSelectedView(id) {
		var view = st_views.views.filter(function (view) {
			return view.id == id;
		});

		setAttributes({ view: view[0] });
		return view[0];
	};

	var selectOptions = function selectOptions() {
		var options = [{ value: 0, label: __('None') }];

		st_views.views.forEach(function (view) {
			options.push({ value: view.id, label: view.name });
		});

		return options;
	};

	var blockControls = React.createElement(
		BlockControls,
		null,
		st_views.views.length > 0 && React.createElement(
			Toolbar,
			null,
			React.createElement(Button, { label: __('Edit View'), icon: 'edit', target: '_blank' })
		)
	);
	if (status === 'loading') {
		return [React.createElement(
			Fragment,
			null,
			React.createElement(
				'div',
				{ className: 'st-block-preview' },
				React.createElement(
					'div',
					{ className: 'st-block-preview__content' },
					React.createElement(
						'div',
						{ className: 'st-block-preview__logo' },
						' '
					),
					React.createElement(Spinner, null)
				)
			)
		)];
	}

	if (id == 0) {
		return [React.createElement(
			Fragment,
			null,
			React.createElement(_inspector2.default, _extends({ onIdChange: function onIdChange(id) {
					return _onIdChange(id);
				}, selectOptions: selectOptions() }, props)),
			React.createElement(
				'div',
				{ className: 'st-block-preview' },
				React.createElement(
					'div',
					{ 'class': 'st-block-preview__content' },
					React.createElement('div', { className: 'st-block-preview__logo' }),
					st_views.views.length === 0 && React.createElement(
						Fragment,
						null,
						React.createElement(
							'h6',
							null,
							__("You don't seem to have any views.")
						),
						React.createElement(
							Button,
							{
								href: st_views.adminURL + 'edit.php?post_type=wpm-testimonial&page=testimonial-views&action=add',
								target: '_blank',
								isDefault: true
							},
							__('Add New View')
						)
					),
					st_views.views.length > 0 && React.createElement(
						Fragment,
						null,
						React.createElement(SelectControl, {
							label: 'Select a view:',
							className: 'st-view-select',
							key: id,
							value: id,
							options: selectOptions(),
							onChange: function onChange(value) {
								return _onIdChange(parseInt(value));
							}
						}),
						id != 0 && React.createElement(
							Button,
							{
								target: '_blank',
								href: st_views.adminURL + 'edit.php?post_type=wpm-testimonial&page=testimonial-views&action=edit&id=' + id,
								isSecondary: true
							},
							__('Edit Settings')
						)
					)
				)
			)
		)];
	}

	if (id != 0 && testimonials.length > 0) {
		if (view != undefined) {
			if ('form' == view.data.mode) {
				return [React.createElement(
					Fragment,
					null,
					React.createElement(_inspector2.default, _extends({ onIdChange: function onIdChange(id) {
							return _onIdChange(id);
						}, selectOptions: selectOptions() }, props)),
					React.createElement(_StrongTestimonialsViewForm2.default, { view: view }),
					React.createElement(_StrongTestimonialsViewForm2.default, { view: view })
				)];
			} else if ('display' == view.data.mode) {
				return [React.createElement(
					Fragment,
					null,
					React.createElement(_inspector2.default, _extends({ onIdChange: function onIdChange(id) {
							return _onIdChange(id);
						}, selectOptions: selectOptions() }, props)),
					React.createElement(_StrongTestimonialsViewDisplay2.default, { view: view, testimonials: testimonials })
				)];
			}
		}
		return null;
	}
	return null;
};

var applyWithSelect = withSelect(function (select, props) {
	var _select = select('core'),
	    getEntityRecords = _select.getEntityRecords;

	var query = {
		post_status: 'publish',
		per_page: -1
	};

	return {
		testimonials: getEntityRecords('postType', 'wpm-testimonial', query) || []
	};
});

var applyWithFilters = wp.components.withFilters('wpst.StrongTestimonialViewEdit');

exports.default = compose(applyWithSelect, applyWithFilters)(StrongTestimonialViewEdit);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _edit = __webpack_require__(0);

var _edit2 = _interopRequireDefault(_edit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Import wp deps
 */

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;

var StrongTestimonialView = function () {
	function StrongTestimonialView() {
		_classCallCheck(this, StrongTestimonialView);

		this.registerBlock();
	}

	_createClass(StrongTestimonialView, [{
		key: 'registerBlock',
		value: function registerBlock() {
			this.blockName = 'strongtestimonials/view';

			this.blockAttributes = {
				id: {
					type: 'number',
					default: 0
				},
				mode: {
					type: 'string',
					default: 'display'
				}
			};

			registerBlockType(this.blockName, {
				title: 'Strong Testimonial View',
				description: __('Render ST View', 'strong-testimonials'),
				icon: 'editor-quote',
				category: 'common',
				supports: {
					align: true,
					customClassName: false
				},
				// getEditWrapperProps() {
				// 	return {
				// 		'data-align': 'center'
				// 	};
				// },
				attributes: this.blockAttributes,
				edit: _edit2.default,
				save: function save() {
					return null;
				}
			});
		}
	}]);

	return StrongTestimonialView;
}();

var strongTestimonialsView = new StrongTestimonialView();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var StrongTestimonialsStyle = function StrongTestimonialsStyle(props) {
	console.log(props);
	var data = props.view.data;


	var id = '.strong-view-id-' + props.view.id;
	var background = data.background;

	var style = '';

	if ('single' == background.type) {
		style += id + ' .strong-form-inner { background: ' + background.color + '; }';
	} else if ('gradient' == background.type) {
		style += 'background: {' + background.gradient1 + '};\n\tbackground: -moz-linear-gradient(top, {' + background.grandient1 + '} 0%, {' + background.gradient2 + '}} 100%);\n\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%, {' + background.grandient1 + '}), color-stop(100%, {' + background.gradient2 + '}}));\n\tbackground: -webkit-linear-gradient(top,  {' + background.grandient1 + '} 0%, {' + background.gradient2 + '}} 100%);\n\tbackground: -o-linear-gradient(top, {' + background.grandient1 + '} 0%, {' + background.gradient2 + '}} 100%);\n\tbackground: -ms-linear-gradient(top, {' + background.grandient1 + '} 0%, {' + background.gradient2 + '}} 100%);\n\tbackground: linear-gradient(to bottom, {' + background.grandient1 + '} 0%, {' + background.gradient2 + '}} 100%);\n\tfilter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'{' + background.grandient1 + '}\', endColorstr=\'{' + background.gradient2 + '}}\', GradientType=0);';
	}

	if ('custom' == data['font-color'].type) {
		style += id + ' .strong-form-inner { color: ' + data['font-color'].color + ' }';
	}
	return [React.createElement('style', {
		dangerouslySetInnerHTML: {
			__html: '\n      \t\t\t\t' + style + '\n    \t\t\t\t'
		}
	})];
};

exports.default = StrongTestimonialsStyle;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.StrongTestimonialsViewDisplay = undefined;

var _StrongTestimonialsViewTestimonial = __webpack_require__(11);

var _StrongTestimonialsViewTestimonial2 = _interopRequireDefault(_StrongTestimonialsViewTestimonial);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment,
    useEffect = _wp$element.useEffect;
var StrongTestimonialsViewDisplay = exports.StrongTestimonialsViewDisplay = function StrongTestimonialsViewDisplay(props) {
	var testimonials = props.testimonials,
	    view = props.view;
	var data = view.data,
	    id = view.id;


	var getClassNamesByLayout = function getClassNamesByLayout(layout, columns) {
		var classNames = 'strong-content strong-' + layout + ' columns-' + columns;
		if ('' == layout) {
			classNames = 'strong-content strong-normal columns-1';
		} else if ('masonry' == layout) {
			classNames += ' masonry';
		}
		return classNames;
	};

	return [React.createElement(
		'div',
		{ className: 'strong-view strong-view-id-' + id + ' ' + data.template + ' wpmtst-' + data.template },
		React.createElement(
			'div',
			{ className: getClassNamesByLayout(data.layout, data.column_count) },
			'masonry' == data.layout && React.createElement(
				Fragment,
				null,
				React.createElement('div', { className: 'grid-sizer masonry-brick' }),
				React.createElement('div', { className: 'gutter-sizer masonry-brick' })
			),
			testimonials.length > 0 && React.createElement(
				Fragment,
				null,
				testimonials.map(function (testimonial, index) {
					return [React.createElement(_StrongTestimonialsViewTestimonial2.default, { testimonial: testimonial, index: index, data: data })];
				})
			)
		)
	)];
};

exports.default = StrongTestimonialsViewDisplay;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment,
    useEffect = _wp$element.useEffect;
var withSelect = wp.data.withSelect;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    Spinner = _wp$components.Spinner,
    Toolbar = _wp$components.Toolbar,
    Button = _wp$components.Button;
var BlockControls = wp.blockEditor.BlockControls;
var compose = wp.compose.compose;
var StrongTestimonialsViewForm = exports.StrongTestimonialsViewForm = function StrongTestimonialsViewForm(props) {
	var template = props.view.data.template;
	var id = props.view.id.id;

	var requiredTextFields = [{ fieldName: 'client_name', renderName: 'Full Name', description: 'What is your full name ?' }, { fieldName: 'email', renderName: 'Email', description: 'What is you email adress?' }];
	var optionalTextFields = [{ fieldName: 'company_name', renderName: 'Company Name', description: 'What is your company name ?' }, {
		fieldName: 'company_website',
		renderName: 'Company Website',
		description: 'Does your company have a website ? '
	}, { fieldName: 'post_title', renderName: 'Heading', description: 'A headline for your testimonial' }];
	var textFields = [{ required: requiredTextFields }, { optional: optionalTextFields }];

	return [React.createElement(
		Fragment,
		null,
		React.createElement(
			'div',
			{ className: 'strong-view strong-form strong-view-id-' + props.view.id + ' ' + template + ' wpmtst-' + template },
			React.createElement(
				'div',
				{ id: 'wpmtst-form' },
				React.createElement(
					'div',
					{ className: 'strong-form-inner' },
					React.createElement(
						'form',
						{ id: 'wpmtst-submission-form' },
						requiredTextFields.map(function (type, val) {
							return [React.createElement(
								'div',
								{ className: 'form-field field-' + type.fieldName },
								React.createElement(
									'label',
									{ 'for': 'wpmtst_' + type.fieldName, className: 'field-' + type.fieldName },
									type.renderName
								),
								React.createElement('span', { className: 'required symbol' }),
								React.createElement('input', {
									id: 'wpmtst_' + type.fieldName,
									type: 'text',
									className: 'text',
									name: type.fieldName,
									value: '',
									placeholder: '',
									required: '',
									tabindex: '0'
								}),
								React.createElement(
									'span',
									{ className: 'after' },
									type.description
								)
							)];
						}),
						optionalTextFields.map(function (type, val) {
							return [React.createElement(
								'div',
								{ className: 'form-field field-' + type.fieldName },
								React.createElement(
									'label',
									{ 'for': 'wpmtst_' + type.fieldName, className: 'field-' + type.fieldName },
									type.renderName
								),
								React.createElement('input', {
									id: 'wpmtst_' + type.fieldName,
									type: 'text',
									className: 'text',
									name: type.fieldName,
									value: '',
									placeholder: '',
									required: '',
									tabindex: '0'
								}),
								React.createElement(
									'span',
									{ className: 'after' },
									type.description
								)
							)];
						}),
						React.createElement(
							'div',
							{ className: 'form-field field-post_content' },
							React.createElement(
								'label',
								{ 'for': 'wpmtst_post_content', className: 'field-post_content' },
								'Testimonial'
							),
							React.createElement('span', { className: 'required symbol' }),
							React.createElement('textarea', {
								id: 'wpmtst_post_content',
								name: 'post_content',
								className: 'textarea',
								required: '',
								placeholder: '',
								tabindex: '0'
							}),
							React.createElement(
								'span',
								{ className: 'after' },
								'What do you think about us?'
							)
						),
						React.createElement(
							'div',
							{ className: 'form-field field-featured_image' },
							React.createElement(
								'label',
								{ 'for': 'wpmtst_featured_image', className: 'field-featured_image' },
								'Photo'
							),
							React.createElement(
								'div',
								{ className: 'field-wrap' },
								React.createElement('input', { id: 'wpmtst_featured_image', type: 'file', name: 'featured_image', tabindex: '0' })
							),
							React.createElement(
								'span',
								{ className: 'after' },
								'Would you like to include a photo?'
							)
						),
						React.createElement(
							'div',
							{ className: 'form-field field-star_rating' },
							React.createElement(
								'label',
								{ 'for': 'wpmtst_star_rating', className: 'field-star_rating' },
								'Star rating'
							),
							React.createElement(
								'div',
								{ className: 'strong-rating-wrapper field-wrap in-form' },
								React.createElement(
									'fieldset',
									{
										contenteditable: 'false',
										id: 'wpmtst_star_rating',
										name: 'star_rating',
										className: 'strong-rating',
										'data-field-type': 'rating',
										tabindex: '0'
									},
									React.createElement(
										'legend',
										null,
										'rating fields'
									),
									React.createElement('input', {
										type: 'radio',
										id: 'star_rating-star0',
										name: 'star_rating',
										value: '0',
										checked: 'checked'
									}),
									React.createElement('label', { 'for': 'star_rating-star0', title: 'No stars' }),
									React.createElement('input', { type: 'radio', id: 'star_rating-star1', name: 'star_rating', value: '1' }),
									React.createElement('label', { 'for': 'star_rating-star1', title: '1 star' }),
									React.createElement('input', { type: 'radio', id: 'star_rating-star2', name: 'star_rating', value: '2' }),
									React.createElement('label', { 'for': 'star_rating-star2', title: '2 stars' }),
									React.createElement('input', { type: 'radio', id: 'star_rating-star3', name: 'star_rating', value: '3' }),
									React.createElement('label', { 'for': 'star_rating-star3', title: '3 stars' }),
									React.createElement('input', { type: 'radio', id: 'star_rating-star4', name: 'star_rating', value: '4' }),
									React.createElement('label', { 'for': 'star_rating-star4', title: '4 stars' }),
									React.createElement('input', { type: 'radio', id: 'star_rating-star5', name: 'star_rating', value: '5' }),
									React.createElement('label', { 'for': 'star_rating-star5', title: '5 stars' })
								)
							),
							React.createElement(
								'span',
								{ className: 'after' },
								'Would you like to include star rating?'
							)
						),
						React.createElement(
							'div',
							{ className: 'form-field wpmtst-submit' },
							React.createElement(
								'label',
								null,
								React.createElement('input', {
									type: 'submit',
									id: 'wpmtst_submit_testimonial',
									name: 'wpmtst_submit_testimonial',
									value: 'Add Testimonial',
									className: 'button',
									tabindex: '0'
								})
							)
						)
					)
				)
			)
		)
	)];
};

exports.default = StrongTestimonialsViewForm;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;

/**
 * Inspector controls
 */

var Inspector = function (_Component) {
	_inherits(Inspector, _Component);

	function Inspector(props) {
		_classCallCheck(this, Inspector);

		return _possibleConstructorReturn(this, (Inspector.__proto__ || Object.getPrototypeOf(Inspector)).apply(this, arguments));
	}

	_createClass(Inspector, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    attributes = _props.attributes,
			    setAttributes = _props.setAttributes,
			    onIdChange = _props.onIdChange,
			    selectOptions = _props.selectOptions;
			var id = attributes.id,
			    views = attributes.views,
			    testimonials = attributes.testimonials;

			return React.createElement(
				Fragment,
				null,
				React.createElement(
					InspectorControls,
					null,
					React.createElement(
						PanelBody,
						{ title: __('View Settings'), initialOpen: true },
						st_views.views.length === 0 && React.createElement(
							Fragment,
							null,
							React.createElement(
								'p',
								null,
								__("You don't seem to have any views.")
							),
							React.createElement(
								Button,
								{
									href: st_views.adminURL + 'edit.php?post_type=wpm-testimonial&page=testimonial-views&action=add',
									target: '_blank',
									isDefault: true
								},
								__('Add New View')
							)
						),
						st_views.views.length > 0 && React.createElement(
							Fragment,
							null,
							React.createElement(SelectControl, {
								label: __('Select View'),
								key: id,
								value: id,
								options: selectOptions,
								onChange: function onChange(value) {
									return onIdChange(parseInt(value));
								}
							}),
							id != 0 && React.createElement(
								Button,
								{
									target: '_blank',
									href: st_views.adminURL + 'edit.php?post_type=wpm-testimonial&page=testimonial-views&action=edit&id=' + id,
									isSecondary: true
								},
								__('Edit View')
							)
						)
					)
				)
			);
		}
	}]);

	return Inspector;
}(Component);

exports.default = Inspector;

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment,
    useEffect = _wp$element.useEffect;
var StrongTestimonialsViewTestimonial = exports.StrongTestimonialsViewTestimonial = function StrongTestimonialsViewTestimonial(props) {
	var testimonial = props.testimonial,
	    index = props.index,
	    data = props.data;
	var id = testimonial.id,
	    title = testimonial.title,
	    content = testimonial.content;
	var client_section = data.client_section;


	return [React.createElement(
		"div",
		{ className: "wpmtst-testimonial testimonial post-" + id },
		React.createElement(
			"div",
			{ className: "wpmtst-testimonial-inner testimonial-inner" },
			React.createElement(
				"div",
				{ className: "wpmtst-testimonial-content testimonial-content" },
				React.createElement(
					"h3",
					{ "class": "wpmtst-testimonial-heading testimonial-heading" },
					title.rendered
				),
				React.createElement(
					"p",
					null,
					content.raw
				)
			),
			client_section.length > 0 && React.createElement(
				Fragment,
				null,
				client_section.map(function (section, index) {
					switch (section.type) {
						case 'text':
							return React.createElement(
								"div",
								{ "class": "wpmtst-testimonial-field testimonial-field " + section.class },
								testimonial.meta[section.field]
							);
							break;
						case 'link':
							return React.createElement(
								"div",
								{ "class": "wpmtst-testimonial-field testimonial-field " + section.class },
								React.createElement(
									"a",
									{
										href: "" + testimonial.meta[section.url],
										target: "_blank",
										rel: "nofollow  "
									},
									testimonial.meta[section.field]
								)
							);
					}
				})
			)
		)
	)];
};

exports.default = StrongTestimonialsViewTestimonial;

/***/ })
/******/ ]);