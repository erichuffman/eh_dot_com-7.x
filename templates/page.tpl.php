<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 */
?>

<div class="structure__main-wrapper">
  
  <header class="structure__header structure-wrap">
    <nav class="primary-menu-wrapper">
      <div class="row clearfix">
        <?php print render($page['sticky_menu']); ?>
      </div>
    </nav>
    <hgroup class="identity-wrapper">
      <div class="row clearfix">
        <h1 class="main-site-name"><a href="<?php print $front_page; ?>"><?php print $site_name; ?></a></h1>
        <h2 class="main-site-slogan element-invisible"><?php print $site_slogan; ?></h2> 
      </div>
    </hgroup>
  </header>
  
  <?php if ($breadcrumb) : ?>
    <section class="structure__breadcrumb">
      <div class="row clearfix">
        <?php print $breadcrumb; ?>
      </div>
    </section>
  <?php endif; ?>
    
  <?php
    // Render the sidebars to see if there's anything in them.
    $aside_left  = render($page['left_sidebar']);
    $aside_right = render($page['right_sidebar']);
    $aside_status = '';
    if ($aside_left || $aside_right) {
      $aside_status = 'aside-count-one';
    }
    if ($aside_left && $aside_right) {
      $aside_status = 'aside-count-two';
    }
  ?>
  
  <section class="structure__content<?php if ($aside_left) : print ' with-aside-left'; endif; if ($aside_right) : print ' with-aside-right'; endif; print ' ' . $aside_status; ?>">
    <div class="row clearfix">
      <?php print render($title_prefix); ?>
      <?php if ($title): ?>
        <h3 class="main-title"><?php print $title; ?></h3>
      <?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php if ($messages || $tabs || $action_links) : ?>
        <div class="help-content">
          <?php print $messages; ?>
          <?php print render($tabs); ?>
          <?php print render($page['help']); ?>
          <?php if ($action_links): ?>
            <ul class="action-links"><?php print render($action_links); ?></ul>
          <?php endif; ?>
        </div>
      <?php endif; ?>
      <?php 
        $content_top = render($page['main_top']);
        $content_bottom = render($page['main_bottom']);
      ?>
      <div class="main-content-wrapper">
        <?php if ($content_top) : ?>
          <div class="main-top">
            <?php print $content_top; ?>
          </div>
        <?php endif; ?>
        <div class="main-content">
          <?php print render($page['content']); ?>
        </div>
        <?php if ($content_bottom) : ?>
          <div class="main-bottom">
            <?php print $content_bottom; ?>
          </div>
        <?php endif; ?>
      </div>
      <?php if ($aside_left) : ?>
        <aside class="aside-left-wrapper">
          <?php print $aside_left; ?>
        </aside>
      <?php endif; ?>
      <?php if ($aside_right) : ?>
        <aside class="aside-right-wrapper">
          <?php print $aside_right; ?>
        </aside>
      <?php endif; ?>
      <?php if ($feed_icons): ?>
        <div class="feed-icons">
          <?php print $feed_icons; ?>
        </div>
      <?php endif; ?>
    </div>
  </section>
    
  <footer class="structure__footer">
    <div class="row clearfix">
      <?php print render($page['footer']); ?>
    </div>
  </footer>

</div>