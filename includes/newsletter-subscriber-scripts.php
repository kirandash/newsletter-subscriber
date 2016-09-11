<?php

// Add scripts
function ns_add_script() {
	wp_enqueue_style( 'ns-main-style', plugins_url() . '/newsletter-subscriber/css/style.css' );
	wp_enqueue_script( 'ns-main-script', plugins_url() . '/newsletter-subscriber/js/main.js', array('jquery'), '1.0.0', true );
}

add_action( 'wp_enqueue_scripts', 'ns_add_script' );

?>