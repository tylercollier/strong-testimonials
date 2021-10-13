<?php

/**
 * Class that handles all the assets and includes for every block
 *
 * @since 2.40.5
 */

class Strong_Gutemberg {

	private $attributes;

	public function __construct() {
		add_action( 'init', array( $this, 'register_block_type' ) );
		add_action( 'init', array( $this, 'generate_js_vars' ) );
		// add_action( 'init', array( $this, 'testimonial_rest_fetch'));
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_block_assets' ), 1 );
		add_filter( 'block_categories_all', array( $this, 'view_category' ), 10, 2 );
		add_filter( 'rest_endpoints', array( $this, 'add_rest_method' ) );
	}

	public function register_block_type() {

		wp_register_script( 'st-block-js', WPMTST_URL . 'assets/js/blocks-js.js', array( 'wp-i18n', 'wp-element', 'wp-editor', 'wp-blocks', 'wp-components', 'wp-api', 'wp-data' ), WPMTST_VERSION );

		wp_register_style( 'st-block-css', WPMTST_URL . 'assets/css/blocks.css', array(), WPMTST_VERSION );

		register_block_type(
			'strongtestimonials/view',
			array(
				'render_callback' => array( $this, 'render_view' ),
				'editor_script'   => 'st-block-js',
				'editor_style'    => 'st-block-css',
			)
		);

		register_block_type(
			'strongtestimonials/slideshow',
			array(
				'render_callback' => array( $this, 'render_view' ),
				'editor_script'   => 'st-block-js',
				'editor_style'    => 'st-block-css',
			)
		);

	}

	public function enqueue_block_assets() {
		$screen = get_current_screen();

		$view_array       = wpmtst_get_view( 1 );
        $view             = unserialize( $view_array['value'] );

		$attributes_defaults = array(
			'template' => 'default',
			'layout'   => ''
		);

		wp_enqueue_script( 'st-selectize', WPMTST_PUBLIC_URL . 'js/selectize.js', null, MODULA_LITE_VERSION, true );
		wp_enqueue_style( 'st-selectize', WPMTST_PUBLIC_URL . 'css/selectize.default.css' );

		wp_parse_args( $this->attributes, $attributes_defaults );

		wp_enqueue_style( 'testimonials' . $this->attributes['template'], WPMTST_URL . 'templates/' . $this->attributes['template'] . '/content.css' );
		if( isset( $this->attributes['layout'] ) ) {
			if ( 'columns' == $this->attributes['layout'] ) {
				wp_enqueue_style( 'column-style', WPMTST_PUBLIC_URL . 'css/columns.css' );
			} elseif ( 'grid' == $this->attributes['layout'] ) {
				wp_enqueue_style( 'grid-style', WPMTST_PUBLIC_URL . 'css/grid.css' );
			} elseif ( 'masonry' == $this->attributes['layout'] ) {
				wp_enqueue_style( 'masonry-style', WPMTST_PUBLIC_URL . 'css/masonry.css' );
			}
		}


		wp_enqueue_script(
			'jquery-actual',
			WPMTST_PUBLIC_URL . 'js/lib/actual/jquery-actual.js',
			array( 'jquery' ),
			'1.0.16',
			true
		);

		WPMST()->render->add_script( 'jquery-masonry' );
		wp_enqueue_script( 'verge', WPMTST_PUBLIC_URL . 'js/lib/verge/verge.js', array(), '1.10.2', true );
		wp_enqueue_script( 'wpmtst-slider', WPMTST_PUBLIC_URL . 'js/lib/strongslider/jquery-strongslider.js', array( 'jquery-actual', 'imagesloaded', 'underscore', 'verge' ), false, true );

		// wp_enqueue_style( 'slider-controls-' . $view['slideshow_settings']['controls_type'] . '-' . $view['slideshow_settings']['controls_style'] );

		wp_enqueue_script( 'wpmtst-slider2' );
	}

	public function generate_js_vars() {

		wp_localize_script(
			'st-block-js',
			'st_views',
			array(
				'adminURL'     => admin_url(),
				'ajaxURL'      => admin_url( 'admin-ajax.php' ),
				'testimonials' => $this->get_testimonials(),
				'gravatar'     => wpmtst_gravatar_url(),
			)
		);
	}

	public function render_view( $attributes ) {

		// if( 0 == count( $attributes ) ) {
		// return;
		// }

		// if( '0' == $attributes['id'] ) {
		// return;
		// }
		$this->attributes = $attributes;

		// return "[testimonial_view id={$attributes['id']}]";

		return 'caca';

	}

	public function view_category( $block_categories, $editor_context ) {
		if ( ! empty( $editor_context->post ) ) {
			array_push(
				$block_categories,
				array(
					'slug'     => 'strong-testimonials-view',
					'title'    => __( 'Strong Testimonials Views', 'strong-testimonials' ),
					'icon'     => null,
					'priority' => 1,
				)
			);
		}
		return $block_categories;
	}

	private function get_testimonials() {
		$args = array(
			'posts_per_page' => -1,
			'post_type'      => 'wpm-testimonial',
			'post_status'    => 'publish',
		);

		$testimonials = get_posts( $args );

		return $testimonials;
	}

	public function testimonial_rest_fetch() {

		$response = wp_remote_get( 'http://modulatesting2.local/wp-json/wp/v2/wpm-testimonial' );
		var_dump( $response );
		$data = false;

		if ( ! is_wp_error( $response ) ) {

			return wp_remote_retrieve_body( $response );

			// Decode the data that we got.
			$data = wp_remote_retrieve_body( $response );

		}
		return $data;

	}



	public function add_rest_method( $endpoints ) {
		if ( is_wp_version_compatible( '5.5' ) ) {
			return $endpoints;
		}

		foreach ( $endpoints as $route => $handler ) {
			if ( isset( $endpoints[ $route ][0] ) ) {
				$endpoints[ $route ][0]['methods'] = array( WP_REST_Server::READABLE, WP_REST_Server::CREATABLE );
			}
		}

		return $endpoints;
	}


}

new Strong_Gutemberg();
