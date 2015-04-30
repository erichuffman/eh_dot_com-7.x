<?php
/**
 * @file
 * Contains theme override hooks to alter Drupal's markup for the erichuffman.com theme.
 *
 */

/**
 * Override or insert variables into the html templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("html" in this case.)
 */
function eh_dot_com_preprocess_html(&$variables, $hook) {
  // Open Sans Google font
  drupal_add_css("http://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800,300", 'external');
  // Merriweather Google font
  drupal_add_css("http://fonts.googleapis.com/css?family=Merriweather:900,900italic,700italic,700", 'external');
  // Font Awesome
  drupal_add_css("//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css", 'external');
}

/**
 * Override or insert variables into the page template.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("page" in this case.)
 */
function eh_dot_com_preprocess_page(&$variables, $hook) {

}

/**
 * Override or insert variables into the block templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("block" in this case.)
 */
function eh_dot_com_preprocess_block(&$variables, $hook) {
  
  // Per Zen theme... Drupal 7 should use a $title variable instead of $block->subject.
  $variables['title'] = isset($variables['block']->subject) ? $variables['block']->subject : '';

}