<?php
/**
 * @file
 * Returns the HTML for the basic html structure of a single Drupal page.
 *
 */
?><!DOCTYPE html>
<!--[if lte IE 9]><html class="lte-ie9"><![endif]-->
<!--[if (gt IE 9)|(gt IEMobile 7)]><!--><html <?php print $rdf_namespaces; ?>><!--<![endif]-->
<head>
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="apple-touch-icon" href="<?php print base_path() . drupal_get_path('theme', 'eh_dot_com'); ?>/apple-touch-icon.png">
  <?php print $styles; ?>
  <?php print $scripts; ?>
</head>
<body class="<?php print $classes; ?>" <?php print $attributes;?>>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
</body>
</html>
