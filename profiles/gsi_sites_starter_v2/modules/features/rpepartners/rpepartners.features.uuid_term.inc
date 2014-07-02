<?php
/**
 * @file
 * rpepartners.features.uuid_term.inc
 */

/**
 * Implements hook_uuid_features_default_terms().
 */
function rpepartners_uuid_features_default_terms() {
  $terms = array();

  $terms[] = array(
    'name' => 'Side Event Of',
    'description' => '',
    'format' => 'filtered_html',
    'weight' => 0,
    'uuid' => '07f22660-13a1-498c-bf1a-0664ace15cb4',
    'vocabulary_machine_name' => 'partner_type',
    'url_alias' => array(
      0 => array(
        'alias' => 'partner-type/side-event',
        'language' => 'und',
      ),
    ),
  );
  $terms[] = array(
    'name' => 'In Partnership With',
    'description' => '',
    'format' => 'filtered_html',
    'weight' => 0,
    'uuid' => '7143871b-3503-4c62-9b32-9564d4bfc545',
    'vocabulary_machine_name' => 'partner_type',
    'url_alias' => array(
      0 => array(
        'alias' => 'partner-type/partnership',
        'language' => 'und',
      ),
    ),
  );
  $terms[] = array(
    'name' => 'Founding Partner',
    'description' => '',
    'format' => 'filtered_html',
    'weight' => 0,
    'uuid' => '8628d9bb-4e57-47ca-a420-e329a84c1870',
    'vocabulary_machine_name' => 'partner_type',
    'url_alias' => array(
      0 => array(
        'alias' => 'partner-type/founding-partner',
        'language' => 'und',
      ),
    ),
  );
  $terms[] = array(
    'name' => 'Sponsors',
    'description' => '',
    'format' => 'filtered_html',
    'weight' => 0,
    'uuid' => 'd5e23d0c-f860-430e-b8c1-ae083239ef13',
    'vocabulary_machine_name' => 'partner_type',
    'url_alias' => array(
      0 => array(
        'alias' => 'partner-type/sponsors',
        'language' => 'und',
      ),
    ),
  );
  $terms[] = array(
    'name' => 'Co-Hosted By',
    'description' => '',
    'format' => 'filtered_html',
    'weight' => 0,
    'uuid' => 'dccb0dee-9798-4035-b044-6724e2ebf9b5',
    'vocabulary_machine_name' => 'partner_type',
    'url_alias' => array(
      0 => array(
        'alias' => 'partner-type/co-hosted',
        'language' => 'und',
      ),
    ),
  );
  return $terms;
}
