# Digitalfaksimile Schwerin, Landesbibliothek Mecklenburg-Vorpommern Günther Uecker, ohne Signatur (`schwerin`)

## [Web publication](https://dhbern.github.io/parzival-digitalfaksimile-schwerin)

## Origin

* (TBD)

*Archival version (as-is): Data Science Lab, pdaengeli, 2024-06-02*

## License

---

<details><summary>Clean-up (before initial commit)</summary>

General approach: remove all spurious files (copies, obsolete notes, process artefacts), primarily based on file names (visual check).

PWD: root directory of this repository

* purge OS junk and ftp log files:
  * `find . -type f -name "Thumbs.db" -delete`
  * `find . -type f -name \.DS_Store -delete`
  * `find . -type f -name "WS_FTP.LOG" -delete`

* (re)moved:
  * `Extras` (supplemental material on CD ROM: mediaevum ttf, old Firefox + Camino binary)

* (re)moved after `grep` testing:
  * `Daten/*_save*`
  * `Daten/*_bak*`
  * `Daten/*_before*`
  * `Daten/JS/BildAnzeige_alt.js`
  * `Daten/Lagensymbole/*_alt.gif`

* created symlink to provide for case insensitive linking:
  * `ln -s MBilder Mbilder`

</details>
