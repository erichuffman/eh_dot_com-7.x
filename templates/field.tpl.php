<?php
/**
 * @file field.tpl.php
 * Default template implementation to display the value of a field.
 *
 */
?>
<?php foreach ($items as $delta => $item): ?>
  <?php if ($element['#label_display'] == 'inline') : ?>
    <div class="core-field__wrapper clearfix">
      <label class="inline-field-label"><?php print $label; ?></label>
      <div class="core-field__item-content">
        <?php print render($item); ?>
      </div>
    </div>
  <?php endif; ?>
  <?php if ($element['#label_display'] == 'above') : ?>
    <label class="block-field-label"><?php print $label; ?></label>
    <?php print render($item); ?>
  <?php endif; ?>
  <?php if ($element['#label_display'] == 'hidden') : ?>
    <?php print render($item); ?>
  <?php endif; ?>
<?php endforeach; ?>