        </div>
        <!--close content class tag-->
        <footer class="footer">

            <div class="footer__menu">
                <div class="container">
                    <?php wp_nav_menu( [
                                'theme_location'=>   'footerMenu',
                                'container'       => 'nav',
                                'container_class' => 'menu',
                                'items_wrap'        => '<ul>%3$s</ul>',
                                'fallback_cb'     => 'wp_page_menu',
                        ] ); ?>
                </div>
            </div>
            <div class="footer__top">
                <div class="container">
                    <div class="footer__top-inner">
                        <div class="logof">
                            <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
                                <img src="<?php the_field('логофутер', 'option'); ?>" alt="">
                            </a>
                        </div>
                        <?php if(get_field('добавить_адрес_и_ифнормацию', 'option')): ?>
                        <?php while(has_sub_field('добавить_адрес_и_ифнормацию', 'option')): ?>

                            <div class="footer__adress">
                            <div class="footer__adress-title">
                            <?php the_sub_field('заголовок'); ?>
                            </div>
                            <div class="footer__adress-info">
                            <?php the_sub_field('информация'); ?>
                            </div>
                        </div>

                        <?php endwhile; ?>
                        <?php endif; ?>
                        <div class="links">
                            <a href="#">
                                <img src="<?php echo get_theme_file_uri( '/dist/icons/facebookg.svg' ); ?>" alt="">
                            </a>
                            <a href="#">
                                <img src="<?php echo get_theme_file_uri( '/dist/icons/youtubeg.svg' ); ?>" alt="">
                            </a>
                            <a href="#">
                                <img src="<?php echo get_theme_file_uri( '/dist/icons/instagramg.svg' ); ?>" alt="">
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <div class="container">
                <div class="footer__bottom">
                    <p><?php the_field('текст_слева', 'option'); ?></p>
                    <p><?php the_field('текст_справа', 'option'); ?></p>
                </div>
            </div>
        </footer>
        </div>
        <!--close wrapper class tag-->
        <?php wp_footer(); ?>

        </body>

        </html>