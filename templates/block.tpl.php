<?php
/**
 * @file
 * Returns the HTML for a block.
 *
 */
?>
<div id="<?php print $block_html_id; ?>" class="<?php print $classes; ?>"<?php print $attributes; ?>>

  <?php print render($title_prefix); ?>
  <?php if ($title): ?>
    <div class="block-title-wrapper">
      <h4<?php print $title_attributes; ?>><?php print $title; ?></h4>
    </div>
  <?php endif; ?>
  <?php print render($title_suffix); ?>

  <?php print $content; ?>

</div>
