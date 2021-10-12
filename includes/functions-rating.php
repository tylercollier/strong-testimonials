<?php

/**
 * Print the star rating form.
 *
 * @since 2.12.0
 * @since 2.23.2 $field_array
 *
 * @param array|string $field
 * @param int $value
 * @param string $class
 * @param bool $echo
 * @param string $field_array If included, set field name in array. In post editor meta box.
 *
 * @return string
 */
function wpmtst_star_rating_form( $field, $value, $class, $echo = true, $field_array = '' ) {
    $value = (int) $value;
	if ( $field && is_array( $field ) && isset( $field['name'] ) ) {
		$name = $field['name'];
		if ( $field_array ) {
		    $name = $field_array . '[' . $name . ']';
		}
	} else {
		$name = 'rating';
	}
	ob_start(); ?>
	<div class="strong-rating-wrapper field-wrap <?php echo esc_attr( $class ); ?>"><!-- cheap trick to collapse whitespace around inline-blocks
		--><fieldset contenteditable=false
                     id="wpmtst_<?php echo esc_attr( $field['name'] ); ?>"
                     name="<?php echo esc_attr( $field['name'] ); ?>"
                     class="strong-rating"
                     data-field-type="rating"
                     tabindex="0">
                        <legend><?php esc_html_e('rating fields', 'strong-testimonials' ) ?></legend><!--

			--><input type="radio" id="<?php echo esc_attr( $field['name'] ); ?>-star0" name="<?php echo esc_attr( $name ); ?>" value="0" <?php checked( $value, 0 ); ?> /><!--
			--><label for="<?php echo esc_attr( $field['name'] ); ?>-star0" title="No stars"></label><!--

			--><input type="radio" id="<?php echo esc_attr( $field['name'] ); ?>-star1" name="<?php echo esc_attr( $name ); ?>" value="1" <?php checked( $value, 1 ); ?> /><!--
			--><label for="<?php echo esc_attr( $field['name'] ); ?>-star1" title="1 star"></label><!--

			--><input type="radio" id="<?php echo esc_attr( $field['name'] ); ?>-star2" name="<?php echo esc_attr( $name ); ?>" value="2" <?php checked( $value, 2 ); ?> /><!--
			--><label for="<?php echo esc_attr( $field['name'] ); ?>-star2" title="2 stars"></label><!--

			--><input type="radio" id="<?php echo esc_attr( $field['name'] ); ?>-star3" name="<?php echo esc_attr( $name ); ?>" value="3" <?php checked( $value, 3 ); ?> /><!--
			--><label for="<?php echo esc_attr( $field['name'] ); ?>-star3" title="3 stars"></label><!--

			--><input type="radio" id="<?php echo esc_attr( $field['name'] ); ?>-star4" name="<?php echo esc_attr( $name ); ?>" value="4" <?php checked( $value, 4 ); ?> /><!--
			--><label for="<?php echo esc_attr( $field['name'] ); ?>-star4" title="4 stars"></label><!--

			--><input type="radio" id="<?php echo esc_attr( $field['name'] ); ?>-star5" name="<?php echo esc_attr( $name ); ?>" value="5" <?php checked( $value, 5 ); ?> /><!--
			--><label for="<?php echo esc_attr( $field['name'] ); ?>-star5" title="5 stars"></label><!--

		--></fieldset><!--
	--></div>
	<?php
	$html = ob_get_contents();
	ob_end_clean();
	$html = preg_replace( '/<!--(.|\s)*?-->/', '', $html );

	if ( $echo ) {
		echo $html;
		return true;
	}

    return $html;
}

/**
 * @param int $value
 * @param $class
 * @param bool $echo
 *
 * @return bool|string
 */
function wpmtst_star_rating_display( $value = 0, $class = 'in-view', $echo = true ) {
    $value = (int) $value;
	$star_solid   = '<svg class="star_solid" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="-8 -8 584 520"><path  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>';
	$star_regular = '<svg class="star_regular" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="-8 -8 584 520"><path  d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>';
	ob_start(); ?>
	<span class="strong-rating-wrapper <?php echo esc_attr( $class )	; ?>">
		<span class="strong-rating"><!-- cheap trick to collapse whitespace around inline-blocks
			--><span class="star" style="display: none;"></span><!--
			--><span class="star"><?php echo ( 1 <= $value ) ? $star_solid : $star_regular ; ?></span><!--
			--><span class="star"><?php echo ( 2 <= $value ) ? $star_solid : $star_regular ; ?></span><!--
			--><span class="star"><?php echo ( 3 <= $value ) ? $star_solid : $star_regular ; ?></span><!--
			--><span class="star"><?php echo ( 4 <= $value ) ? $star_solid : $star_regular ; ?></span><!--
			--><span class="star"><?php echo ( 5 <= $value ) ? $star_solid : $star_regular ; ?></span><!--
		--></span>
	</span>
	<?php
	$html = ob_get_contents();
	ob_end_clean();
	$html = preg_replace( '/<!--(.|\s)*?-->/', '', $html );

	if ( $echo ) {
	    echo $html;
	    return true;
	}

    return $html;
}
