config {
	no_cache = {$snet_tmpl_basic.config.no_cache}

	admPanel = {$snet_tmpl_basic.config.admPanel}

	xmlprologue = none

	### Kommentar im Quelltext ###
	headerComment (
	(c) by stimme.net - info@stimme.net - www.stimme.net
	Die Internetagentur - TYPO3 Websites für Heilbronn, Hohenlohe, Kraichgau
	)

	### Doctype Definition            ###
	# bitte Conditions am Ende beachten #
	#####################################
	doctype = html5


	### Anpassung fuer HTML5 ###
	disableImgBorderAttr = 1

	### XHTML Cleaning on/off (values: all, cached, output) ###
	#####################
	xhtml_cleaning = all

	### TYPO3-Quelltext aufraeumen ###
	#########################
	disablePrefixComment = 1
	removeDefaultJS = external
	minifyJS = 1
	inlineStyle2TempFile = 1

	### Max.Groesse fuer Bilder entspricht Original ###
	##################################
	noScaleUp = 1

	### Sinnvolle Namen fuer Tempfiles ###
	###########################
	meaningfulTempFilePrefix = 50

	### Spamschutz fuer Emailadressen ###
	###########################
	spamProtectEmailAddresses = 2
	spamProtectEmailAddresses_atSubst = (at)
	spamProtectEmailAddresses_lastDotSubst = .

	### Spracheinstellungen           ###
	### default = German              ###
	# bitte Conditions am Ende beachten #
	#####################################

	### Language UID ###
	################
	sys_language_uid = 0

	### Language key ###
	################
	language = de

	### Language value for <html> Tag ###
	###########################
	#htmlTag_langKey = de_DE
	htmlTag_setParams = lang="de"

	### PHP:setlocale ###
	###############
	locale_all = de_DE@euro

	### Ausgabe des Seitentitels im <TITLE> abschalten ###
	#####################################
	noPageTitle = 2

	### HTTP_GET_VARS which should be passed on with links in TYPO3 ###
	###############################################
	#linkVars = L(0-2), print(1)
	linkVars >
	uniqueLinkVars = 1

	### ClassicTemplate Charset ###
	#######################
	metaCharset = utf-8

	### ClassicTemplate external Target. Uses by typolink if no target is set ###
	############################################
	extTarget = _blank

	### ClassicTemplate internal Target. Uses by typolink if no target is set ###
	###########################################
	intTarget = _self
	
	### Sprache ###
	###############
	sys_language_mode = strict
	
}

### XHTML Prolog   ###
# Fuer IE abschalten #
######################
[browser = msie]
    config.xmlprologue = none
[global]

### Doctype-Switch ###
# Fuer IE abschalten #
######################
[browser = msie] && [version = <6, =6]
    config.doctypeSwitch = 1
[global]

[globalVar = GP:L=1]
	# Englisch
    config.sys_language_uid = 1
    config.language = en
    config.locale_all = en_EN
    config.htmlTag_setParams = lang="en"
[global]