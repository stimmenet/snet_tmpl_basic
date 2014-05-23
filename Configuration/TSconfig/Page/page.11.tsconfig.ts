# Nur Datensaetze fuer News und Newskategorie erlauben
mod.web_list.allowedNewTables = tx_news_domain_model_category, tx_news_domain_model_file, tx_news_domain_model_link, tx_news_domain_model_media, tx_news_domain_model_news, tx_news_domain_model_news_category_mm, tx_news_domain_model_news_related_mm, tx_news_domain_model_news_tag_mm, tx_news_domain_model_news_ttcontent_mm, tx_news_domain_model_tag

### Fuer Speichern u. Vorschau die Detailseite definieren
tx_news.singlePid = 13

### Seitencache von Ausgabeseiten löschen ###
TCEMAIN.clearCacheCmd = 12,13