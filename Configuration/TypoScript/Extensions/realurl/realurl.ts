### Real URL ###
################
config {
    simulateStaticDocuments = 0
	# bei Onlinegang aktivieren - auf 1 setzen
    tx_realurl_enable = {$snet_tmpl_basic.config.enableRealUrl}

    ### Falls auf eines der Schluesselwörter gesetzt, bekommen im Inhalt alle Anker in Links den Pfad des Skriptes vorangestellt.
    ### Das bedeutet also, dass aus <a href="#"> <a href="pfad/pfad/skript?parameter#"> werden wuerde. Diese Prozedur ist notwendig,
    ### wenn im Skript das <base>-Tag gesetzt ist (wenn z.B.die realurl-Erweiterung zum Erstellen von Speaking URLs verwendet wird).
    ### Schluesselwoerter:
    # all = der Inhalt wird grundsätzlich voher verarbeitet.
    # cached = nur, wenn die Seite in den Cache geschrieben wird.
    # output = nur der Ausgabecode genau bevor er ausgegeben wird.
    ################################################################################################################################
    prefixLocalAnchors = {$snet_tmpl_basic.config.prefixLocalAnchor}
}