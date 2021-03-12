<?php 

/**
 * Class that handles all the assets and includes for every block 
 * 
 * @since 2.40.5
 */

class Strong_Gutemberg {

    private $view_id;

    public function __construct() {
        add_action( 'init', array( $this,'register_block_type') );
        add_action( 'init', array( $this,'generate_js_vars') );
        add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_block_assets'), 1);
    }

    public function register_block_type() {

        wp_register_script( 'st-block-js', WPMTST_URL . 'assets/js/blocks-js.js', array( 'wp-i18n', 'wp-element', 'wp-editor', 'wp-blocks', 'wp-components', 'wp-api', 'wp-data'), WPMTST_VERSION );

        wp_register_style( 'st-block-css', WPMTST_URL . 'assets/css/blocks.css', array(), WPMTST_VERSION );

        register_block_type( 'strongtestimonials/view', array(
            'render_callback' => array( $this, 'render_view' ),
            'editor_script'   => 'st-block-js',
			'editor_style'    => 'st-block-css',
        ));

    }

    public function enqueue_block_assets() { 
        $screen = get_current_screen();

        $view_array       = wpmtst_get_view( $this->view_id );
        $view             = unserialize( $view_array['value'] );
        
        wp_enqueue_style($view['template']);
        if( 'columns' == $view['layout']) {
            wp_enqueue_style('column-style', WPMTST_PUBLIC_URL . 'css/columns.css');
        } else if ( 'grid' == $view['layout'] ) {
            wp_enqueue_style('grid-style', WPMTST_PUBLIC_URL . 'css/grid.css');
        } else if( 'masonry' == $view['layout']) {
            wp_enqueue_style('masonry-style', WPMTST_PUBLIC_URL . 'css/masonry.css');
        }
        
        if( $view['pagination'] != 0 ) {
            wp_register_script( 'wpmtst-pager',
            WPMTST_PUBLIC_URL . "js/lib/strongpager/jquery-strongpager.js",
            array( 'jquery', 'imagesloaded' ),
            false,
            true );
        }
        wp_register_script( 'jquery-actual', WPMTST_PUBLIC_URL . "js/lib/actual/jquery-actual.js",
        array( 'jquery' ),'1.0.16', true );

        wp_register_script( 'verge', WPMTST_PUBLIC_URL . "js/lib/verge/verge.js", array(), '1.10.2', true );
        wp_enqueue_script( 'wpmtst-slider', WPMTST_PUBLIC_URL . "js/lib/strongslider/jquery-strongslider.js", array( 'jquery-actual', 'imagesloaded', 'underscore', 'verge' ), false, true );
        
        wp_enqueue_style("slider-controls-" . $view['slideshow_settings']['controls_type'] . "-" . $view['slideshow_settings']["controls_style"] );

        
        
        

        wp_enqueue_script('wpmtst-slider2');
    }

    public function generate_js_vars() {

        wp_localize_script(
            'st-block-js', 'st_views', array(
                'adminURL'     => admin_url(),
                'ajaxURL'      => admin_url( 'admin-ajax.php' ),
                'views'        => wpmtst_unserialize_views( wpmtst_get_views() ),
                'gravatar'     => wpmtst_gravatar_url()
            )
        );
    }

    public function render_view( $attributes ) {

        if( 0 == count( $attributes ) ) {
            return;
        }

        if( '0' == $attributes['id'] ) {
            return;
        }
        $this->view_id = $attributes['id'];

        return "[testimonial_view id={$attributes['id']}]";
        
    }



}

new Strong_Gutemberg();