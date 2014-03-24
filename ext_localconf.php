<?php

/**
 *
 * default realurl configuration
 *
 */
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl'] = array (
	'_DEFAULT' => array (
		'init' => array (
			'enableCHashCache' => '1',
			'appendMissingSlash' => 'ifNotFile',
			'enableUrlDecodeCache' => '1',
			'enableUrlEncodeCache' => '1',
		),
		'redirects' => array (
		),
		'preVars' => array (
			array(
				'GETvar' => 'no_cache',
				'valueMap' => array(
					'no_cache' => 1,
				),
				'noMatch' => 'bypass',
			),
			array(
				'GETvar' => 'L',
				'valueMap' => array(
					'de' => '0',
					'en' => '1',
				),
				'valueDefault' => 'de',
				'valueDescription' => array(
					'de' => 'deutsch',
					'en' => 'english',
				),
				'noMatch' => 'bypass',
			),
		),
		'pagePath' => array (
			'type' => 'user',
			'userFunc' => 'EXT:realurl/class.tx_realurl_advanced.php:&tx_realurl_advanced->main',
			'spaceCharacter' => '-',
			'languageGetVar' => 'L',
			'expireDays' => '7',
			'rootpage_id' => '1',
		),
		'fixedPostVars' => array (
			'newsDetailConfiguration' => array(
				array(
					'GETvar' => 'tx_news_pi1[news]',
					'lookUpTable' => array(
						'table' => 'tx_news_domain_model_news',
						'id_field' => 'uid',
						'alias_field' => 'title',
						'addWhereClause' => ' AND NOT deleted',
						'useUniqueCache' => 1,
						'useUniqueCache_conf' => array(
							'strtolower' => 1,
							'spaceCharacter' => '-'
						)
					)
				)
			),
			'13' => 'newsDetailConfiguration',
		),
		'postVarSets' => array (
			'_DEFAULT' => array (
				'controller' => array(
					array(
						'GETvar' => 'tx_news_pi1[action]',
						'noMatch' => 'bypass'
					),
					array(
						'GETvar' => 'tx_news_pi1[controller]',
						'noMatch' => 'bypass'
					),
				),
			),
		),
		'fileName' => array (
			//
			// if you don't want .html-URLs set the following to "false" (e.g. 'defaultToHTMLsuffixOnPrev' => false,)
			// then you get http://www.yourdomain.com/imprint/ instead of http://www.yourdomain.com/imprint.html
			//
			'defaultToHTMLsuffixOnPrev' => true,
			'index' => array (
				'feed.rss' => array(
					'keyValues' => array(
						'type' => 9818,
					)
				),
				'sitemap.xml' => array(
					'keyValues' => array(
						'type' => 841132,
					)
				),
			),
		),
	),

);
?>