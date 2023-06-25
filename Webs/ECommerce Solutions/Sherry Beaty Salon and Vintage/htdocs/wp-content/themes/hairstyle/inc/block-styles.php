<?php
/**
 * Block Styles
 *
 * @link https://developer.wordpress.org/reference/functions/register_block_style/
 *
 */

if ( function_exists( 'register_block_style' ) ) {
	/**
	 * Register block styles.
	 *
	 * @since Hairstyle 1.0
	 *
	 * @return void
	 */
	function hairstyle_register_block_styles() {
		// Columns: Overlap.
		register_block_style(
			'core/columns',
			array(
				'name'  => 'hairstyle-columns-overlap',
				'label' => esc_html__( 'Overlap', 'hairstyle' ),
			)
		);

		// Cover: Borders.
		register_block_style(
			'core/cover',
			array(
				'name'  => 'hairstyle-border',
				'label' => esc_html__( 'Borders', 'hairstyle' ),
			)
		);

		// Group: Borders.
		register_block_style(
			'core/group',
			array(
				'name'  => 'hairstyle-border',
				'label' => esc_html__( 'Borders', 'hairstyle' ),
			)
		);

		// Image: Borders.
		register_block_style(
			'core/image',
			array(
				'name'  => 'hairstyle-border',
				'label' => esc_html__( 'Borders', 'hairstyle' ),
			)
		);

		// Image: Frame.
		register_block_style(
			'core/image',
			array(
				'name'  => 'hairstyle-image-frame',
				'label' => esc_html__( 'Frame', 'hairstyle' ),
			)
		);

		// Latest Posts: Dividers.
		register_block_style(
			'core/latest-posts',
			array(
				'name'  => 'hairstyle-latest-posts-dividers',
				'label' => esc_html__( 'Dividers', 'hairstyle' ),
			)
		);

		// Latest Posts: Borders.
		register_block_style(
			'core/latest-posts',
			array(
				'name'  => 'hairstyle-latest-posts-borders',
				'label' => esc_html__( 'Borders', 'hairstyle' ),
			)
		);

		// Media & Text: Borders.
		register_block_style(
			'core/media-text',
			array(
				'name'  => 'hairstyle-border',
				'label' => esc_html__( 'Borders', 'hairstyle' ),
			)
		);

		// Separator: Thick.
		register_block_style(
			'core/separator',
			array(
				'name'  => 'hairstyle-separator-thick',
				'label' => esc_html__( 'Thick', 'hairstyle' ),
			)
		);

		// Social icons: Dark gray color.
		register_block_style(
			'core/social-links',
			array(
				'name'  => 'hairstyle-social-icons-color',
				'label' => esc_html__( 'Dark gray', 'hairstyle' ),
			)
		);
	}
	add_action( 'init', 'hairstyle_register_block_styles' );
}
