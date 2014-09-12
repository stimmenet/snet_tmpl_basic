###
# This are the default TS-constants for metaseo
##

plugin.metaseo {

	# cat=plugin.metaseo.pageTitle/enable/07; type=string; label= Sitetitle : Overwrite the template sitetitle with a custom one
  pageTitle.sitetitle = {$snet_tmpl_basic.config.siteName}

    # cat=plugin.metaseo.metaTags/page/01; type=string; label= Meta Description: Short description of your webpage.
  metaTags.description = INSERT DEFAULT DESCRIPTION
    # cat=plugin.metaseo.metaTags/page/02; type=string; label= Meta Keywords: Comma separated list of keywords.
  metaTags.keywords = INSERT DEFAULT KEYWORDS
    # cat=plugin.metaseo.metaTags/page/05; type=string; label= Meta Author: Enter name of author.
  metaTags.author = INSERT DEFAULT AUTHOR
    # cat=plugin.metaseo.metaTags/page/06; type=string; label= Meta Publisher: Enter name of publisher.
  metaTags.publisher = STIMME.NET
    # cat=plugin.metaseo.metaTags/page/10; type=int+; label= Revisit after: Number of days between search engine visits.
  metaTags.revisit = 30
    # cat=plugin.metaseo.metaTags/enable/28; type=boolean; label= Meta Description: Enable Dublin Core (DC.) metatags
  metaTags.enableDC  = 0

  ### removed due to w3c-standards
    # cat=plugin.metaseo.metaTags/page/03; type=string; label= Meta Copyright info: Copyright information (eg. "Me Myself and I, %YEAR%. All rights reserved.", %YEAR% will be substituted with the current year).
  metaTags.copyright =
    # cat=plugin.metaseo.metaTags/page/04; type=string; label= Meta Reply-to email: Enter the e-mail adress for contact issues
  metaTags.email =
    # cat=plugin.metaseo.metaTags/page/07; type=options[,Arabic=ar,Chinese=zh,Danish=dk,Dutch=nl,English=en,Finnish=fi,French=fr,German=de,Greek=el,Hebrew=he,Icelandic=is,Italian=it,Japanese=ja,Norwegian=no,Polish=pl,Portuguese=pt,Russian=ru,Spanish=es,Swedish=sv,Turkish=tr,Multi language=mul]; label= Meta Language: Select language of the content.
  metaTags.language =
    # cat=plugin.metaseo.metaTags/enable/20; type=boolean; label= Publish LastUpdate-Time: Should the crawler be informed about the time a page was last updated.
  metaTags.useLastUpdate = 0
    # cat=plugin.metaseo.metaTags/enable/21; type=boolean; label= Detect Language: Should the language information automatically be detected.
  metaTags.useDetectLanguage = 0

    # cat=plugin.metaseo.services/page/02; type=string; label= Google Crawler Verification: Verification code for google webmaster tools
  metaTags.googleVerification =

    # cat=plugin.metaseo.userAgent/ie/1; type=options[,Highest Version=edge,10.x=10,9.x=9,8.x=8,7.x=7,6.x=6,5.x=5]; label= IE Compatibility Mode: Compatibility mode for Microsoft Internet Explorer.
  userAgent.ieCompatibilityMode =

    # cat=plugin.metaseo.services/page/06; type=string; label= Google Analytics: Code for google analytics (eg. UA-12345456-1)
  services.googleAnalytics =
    # cat=plugin.metaseo.services/page/07; type=string; label= Google Analytics Download & Click Domain Name: "auto", "none", single domain support: "example.com", subdomain support: ".example.com"
  services.googleAnalytics.domainName =
    # cat=plugin.metaseo.services/page/08; type=boolean; label= Google Analytics Anonymize IP: Enable anonymize IP
  services.googleAnalytics.anonymizeIp = 0
    # cat=plugin.metaseo.services/page/09; type=boolean; label= Google Analytics Track Downloads: Track downloads (with javascript) (BETA!)
  services.googleAnalytics.trackDownloads = 0

    # cat=plugin.metaseo.services/page/10; type=string; label= Piwik URL: Url to your piwik installation (eg. www.example.com/piwik/ - don't use http:// or https:// as prefix!)
  services.piwik.url =
    # cat=plugin.metaseo.services/page/11; type=string; label= Piwik Id: Id of your website
  services.piwik.id =
    # cat=plugin.metaseo.services/page/12; type=string; label= Piwik Download & Click Domain Name: single domain support: "example.com", subdomain support: ".example.com"
  services.piwik.domainName =
    # cat=plugin.metaseo.services/page/13; type=string; label= Piwik Cookie Domain Name: single domain support: "example.com", subdomain support: ".example.com"
  services.piwik.cookieDomainName =
    # cat=plugin.metaseo.services/page/14; type=boolean; label= Piwik DoNotTrack: Opt Out users with Mozilla's DoNotTrack browser setting
  services.piwik.doNotTrack = 1

    # cat=plugin.metaseo.social/page/1; type=string; label= Google+ Direct Connect: Your Google+ Profile Page ID (see https://developers.google.com/+/plugins/badge/)
  social.googleplus.profilePageId =

    # cat=plugin.metaseo.pageTitle/enable/01; type=boolean; label= Apply Tmpl-Sitetitle to absolute <title>: This enables the addition of the template-sitetitle to the rendered page-title (in absolute <title>-mode)
  pageTitle.applySitetitleToPagetitle = 1
    # cat=plugin.metaseo.pageTitle/enable/02; type=boolean; label= Apply Tmpl-Sitetitle to prefix/suffix: This enables the addition of the template-sitetitle to the rendered page-title (in pagetitle-prefix/suffix-mode)
  pageTitle.applySitetitleToPrefixSuffix = 1
    # cat=plugin.metaseo.pageTitle/enable/03; type=string; label= Sitetitle glue: String between titel and sitetitle (from template)
  pageTitle.sitetitleGlue = -
    # cat=plugin.metaseo.pageTitle/enable/04; type=boolean; label= Sitetitle glue spacer (before): Add spacer between title and glue (from template)
  pageTitle.sitetitleGlueSpaceBefore = 1
    # cat=plugin.metaseo.pageTitle/enable/05; type=boolean; label= Sitetitle glue spacer (after): Add spacer between glue and sitetitle (from template)
  pageTitle.sitetitleGlueSpaceAfter = 1
    # cat=plugin.metaseo.pageTitle/enable/06; type=options[Sitetitle-Pagetitle=0, Pagetitle-Sitetitle=1]; label= Sitetitle position: Position of template-sitetitle in title
  pageTitle.sitetitlePosition = 0

    # cat=plugin.metaseo.sitemap/page/03; type=options[,Always=1,Hourly=2,Daily=3,Weekly=4,Monthly=5,Yearly=6,Never (archive)=7]; label= Default change frequency: Default change frequency for sitemap cache (will be cached!)
  sitemap.changeFrequency =
}