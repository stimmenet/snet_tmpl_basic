### baseURL Verwaltung
#Default: Take the value from config
config.baseURL = {$snet_tmpl_basic.protocol.prefix.unsecure}{$snet_tmpl_basic.config.baseURL}/
config.absRefPrefix = {$snet_tmpl_basic.protocol.prefix.unsecure}{$snet_tmpl_basic.config.baseURL}/

#ssl: prepend {$snet_tmpl_basic.protocol.prefix.secure}

[globalString = _SERVER|HTTPS=on]
	config.baseURL = {$snet_tmpl_basic.protocol.prefix.secure}{$snet_tmpl_basic.config.baseURL}/
	config.absRefPrefix = {$snet_tmpl_basic.protocol.prefix.secure}{$snet_tmpl_basic.config.baseURL}/
[global]

#Mittwald: Build the pnumber url from config - no https for pnumber
[globalString = IENV:HTTP_HOST = {$snet_tmpl_basic.config.pnummer}.{$snet_tmpl_basic.helper.mwUrlString}]
    config.baseURL = {$snet_tmpl_basic.protocol.prefix.unsecure}{$snet_tmpl_basic.config.pnummer}.{$snet_tmpl_basic.helper.mwUrlString}/
    config.absRefPrefix = {$snet_tmpl_basic.protocol.prefix.unsecure}{$snet_tmpl_basic.config.pnummer}.{$snet_tmpl_basic.helper.mwUrlString}/
[global]
[globalString = IENV:HTTP_HOST = mogg.local]
    config.baseURL = {$snet_tmpl_basic.protocol.prefix.unsecure}mogg.local/
    config.absRefPrefix= {$snet_tmpl_basic.protocol.prefix.unsecure}mogg.local/
[global]
[globalString = IENV:HTTP_HOST = mogg.local] && [globalString = _SERVER|HTTPS=on]
    config.baseURL = {$snet_tmpl_basic.protocol.prefix.secure}mogg.local/
    config.absRefPrefix = {$snet_tmpl_basic.protocol.prefix.secure}mogg.local/
[global]
[globalString = IENV:HTTP_HOST = mogg2.local]
    config.baseURL = {$snet_tmpl_basic.protocol.prefix.unsecure}mogg2.local/
    config.absRefPrefix= {$snet_tmpl_basic.protocol.prefix.unsecure}mogg2.local/
[global]
[globalString = IENV:HTTP_HOST = mogg2.local] && [globalString = _SERVER|HTTPS=on]
    config.baseURL = {$snet_tmpl_basic.protocol.prefix.secure}mogg2.local/
    config.absRefPrefix = {$snet_tmpl_basic.protocol.prefix.secure}mogg2.local/
[global]