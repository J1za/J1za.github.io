<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <?php get_template_part( 'template-parts/head' ); ?>
</head>

<body <?php body_class("page-body"); ?>>
    <div class="wrapper" id="app">
        <div class="content">
            <header class="header">
                <div class="header__top">
                    <div class="container">
                        <div class="header__top-inner">
                            <div class="logo">
                                <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
                                    <img src="<?php the_field('логотип', 'option'); ?>" alt="">
                                </a>
                            </div>
                            <div class="header__main">
                                <div class="header__main-adress">
                                    <?php the_field('текстх', 'option'); ?>
                                </div>
                                <div class="header__main-phone">
                                    <img src="<?php echo get_theme_file_uri( '/dist/icons/phoneIcon.svg' ); ?>" alt="">
                                    <a
                                        href="tel:<?php the_field('телефон', 'option'); ?>"><?php the_field('телефон', 'option'); ?></a>
                                </div>
                                <a href="<?php the_field('url_для_кнопки', 'option'); ?>" class="header__main-shop">
                                    <img src="<?php echo get_theme_file_uri( '/dist/icons/cart.svg' ); ?>" alt="">
                                    <p><?php the_field('название_кнопки', 'option'); ?></p>
                                </a>
                                <div class="header__main-other">
                                    <div class="lang">
                                        <a class="lang-btn lang-active" href="#">
                                            <span>rus</span>
                                        </a>
                                        <a class="lang-btn" href="#">
                                            <span>Est</span>
                                        </a>
                                    </div>
                                    <div class="links">
                                        <a href="#">
                                            <img src="<?php echo get_theme_file_uri( '/dist/icons/facebook.svg' ); ?>"
                                                alt="">
                                        </a>
                                        <a href="#">
                                            <img src="<?php echo get_theme_file_uri( '/dist/icons/youtube.svg' ); ?>"
                                                alt="">
                                        </a>
                                        <a href="#">
                                            <img src="<?php echo get_theme_file_uri( '/dist/icons/instagram.svg' ); ?>"
                                                alt="">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header__bottom">
                    <div class="container">
                        <?php wp_nav_menu( [
                                'theme_location'=>   'headerMenu',
                                'menu'            => 'header_menu',
                                'container'       => 'nav',
                                'container_class' => 'menu',
                                'items_wrap'        => '<ul>%3$s</ul>',
                                'fallback_cb'     => 'wp_page_menu',
                        ] ); ?>
                        </nav>
                    </div>
                </div>
            </header>