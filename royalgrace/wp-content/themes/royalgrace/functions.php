<?php
/**
 * theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package theme
 */

if ( ! function_exists( 'theme_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function theme_setup() {
	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(array(
		'headerMenu'    => 'Header Menu',
		'footerMenu'    => 'Footer Menu',
	));

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );
}
endif;
add_action( 'after_setup_theme', 'theme_setup' );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function theme_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'theme' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'theme' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'theme_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function theme_scripts() {
	// Styles
	//wp_enqueue_style( 'theme-style', get_stylesheet_uri() );
	wp_enqueue_style( 'theme-main-style', get_template_directory_uri() . '/dist/css/bundle.css' );
  // Scripts
	wp_enqueue_script( 'theme-script', get_template_directory_uri() . '/dist/js/bundle.js', null, null, true);
}
add_action( 'wp_enqueue_scripts', 'theme_scripts' );

function mihdan_add_async_attribute( $tag, $handle ) {
    if ( 'theme-script' !== $handle ) {
        return $tag;
    }
 
    return str_replace( ' src', ' async="async" src', $tag );
}
add_filter( 'script_loader_tag', 'mihdan_add_async_attribute', 10, 2 );

/**
 * Clear WP HEAD
 */
require get_template_directory() . '/include/clear-wp-head.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/include/customizer.php';

/**
 * Create custom post types and taxonomy.
 */
require get_template_directory() . '/include/setup.php';
/**
 * Php helpers
 */
require get_template_directory() . "/helpers/index.php";

// Theme Options
if( function_exists('acf_add_options_page') ) {
	acf_add_options_page(array(
		'page_title' 	=> 'Theme options',
		'menu_title'	=> 'Theme options',
		'menu_slug' 	=> 'theme-options',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));
}

//remove br/p tags
add_filter( 'wpcf7_autop_or_not', '__return_false' );

// Enable font size & font family selects in the editor
if ( ! function_exists( 'wpex_mce_buttons' ) ) {
	function wpex_mce_buttons( $buttons ) {
	array_unshift( $buttons, 'fontselect' ); // Add Font Select
	array_unshift( $buttons, 'fontsizeselect' ); // Add Font Size Select
	return $buttons;
	}
   }
   add_filter( 'mce_buttons_2', 'wpex_mce_buttons' );
   
   function prefix_tinymce_toolbar( $args ) {
   
	   $args['fontsize_formats'] = "8px 10px 12px 13px 14px 16px 18px 20px 22px 24px 26px 28px 32px 36px 40px";
   
	   return $args;
   
   }
   add_filter( 'tiny_mce_before_init', 'prefix_tinymce_toolbar' );

// disable plugins update 
remove_action( 'load-update-core.php', 'wp_update_plugins' );
add_filter( 'pre_site_transient_update_plugins', create_function( '$a', "return null;" ) );
wp_clear_scheduled_hook( 'wp_update_plugins' );