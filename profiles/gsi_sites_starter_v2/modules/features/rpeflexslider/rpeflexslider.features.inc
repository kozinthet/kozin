<?php
/**
 * @file
 * rpeflexslider.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function rpeflexslider_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function rpeflexslider_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function rpeflexslider_node_info() {
  $items = array(
    'flexslider' => array(
      'name' => t('Flexslider'),
      'base' => 'node_content',
      'description' => t('Flexslider'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
