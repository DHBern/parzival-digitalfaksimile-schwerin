function checkVers() {
	/*werk = werk.toLowerCase();
	if (werk.indexOf("wigalois") == -1) {
		alert(werk + " hammanich");
	}

var versEingabe = document.form1.Vers.value;

//Auf Zweistelligkeit hinter Komma prüfen
var p = versEingabe.search(/\./);

if (p!=-1) {
var punkt = versEingabe.indexOf(".");
var einer = versEingabe.substring(punkt+1);
	
	if (einer.length!=2) {
	alert("Versangaben müssen nach der Abschnittangabe (abgetrennt durch Punkt) stets zweistellig eingegeben werden (z.B. 114.05, 469.07, 795.20). Es kann aber auch nur der Abschnitt allein eingegeben werden (z.B. 114, 469, 795).");
	document.form1.Vers.value="";
	return;
	}
}
*/
var versEingabe = document.form1.Vers.value;
vers = parseFloat(versEingabe);
//werk = werk.toLowerCase();
//alert(werk);

if (werk.toLowerCase() == "parzival") {

		if (vers =="" || isNaN(vers) == true || vers == "null" || vers == 0) {
			document.form1.Vers.value="";
		}

		if (vers > 803.07) {alert("Der letzte Vers der Parzival-Handschrift Schwerin (Hs. M) ist 803.07."); document.form1.Vers.value=""; return;}

		//Fehlende Verse abfangen
		if (vers==63.19) {alert("Der Vers 63.19 fehlt.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers==121.29) {alert("Der Vers 121.29 fehlt.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers==190.07) {alert("Der Vers 190.07 fehlt.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers==205.08) {alert("Der Vers 205.08 fehlt.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers >=294.21 && vers <=294.22) {alert("Die Verse 294.21-294.22 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers >=336.00 && vers <=337.30) {alert("Die Verse 336.01-337.30 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers==351.08) {alert("Der Vers 351.08 fehlt.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers >=413.21 && vers <=413.26) {alert("Die Verse 413.21-413.26 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers==432.17) {alert("Der Vers 432.17 fehlt.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers==437.10) {alert("Der Vers 437.10 fehlt.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers==478.16) {alert("Der Vers 478.16 fehlt.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers >=478.24 && vers <=478.27) {alert("Die Verse 478.24-478.27 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers==483.16) {alert("Der Vers 483.16 fehlt.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers >=484.09 && vers <=484.12) {alert("Die Verse 484.9-484.12 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers==498.29) {alert("Der Vers 498.29 fehlt.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers >=521.29 && vers <=521.30) {alert("Die Verse 521.29-521.30 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers==526.22) {alert("Der Vers 526.22 fehlt.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers==553.05) {alert("Der Vers 553.05 fehlt.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers >=715.18 && vers <=715.19) {alert("Die Verse 715.18-715.19 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers==720.30) {alert("Der Vers 720.30 fehlt.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers==728.04) {alert("Der Vers 728.04 fehlt.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers >=770.05 && vers <=770.30) {alert("Die Verse 770.5-770.30 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers >=772.03 && vers <=772.22) {alert("Die Verse 772.3-772.22 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers==778.19) {alert("Der Vers 778.19 fehlt.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers >=796.05 && vers <=796.06) {alert("Die Verse 796.05-796.06 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers >=797.23 && vers <=797.24) {alert("Die Verse 797.23-797.24 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}

		//Seite laden gemäss Verseingabe

		if (vers >=1 && vers <=2.19) {curSlide=69; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=2.20 && vers <=4.06) {curSlide=69; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=4.07 && vers <=5.21) {curSlide=69; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=5.22 && vers <=7.07) {curSlide=69; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=7.08 && vers <=8.20) {curSlide=70; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=8.21 && vers <=10.05) {curSlide=70; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=10.06 && vers <=11.23) {curSlide=70; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=11.24 && vers <=13.10) {curSlide=70; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=13.11 && vers <=14.29) {curSlide=71; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=14.30 && vers <=16.17) {curSlide=71; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=16.18 && vers <=18.06) {curSlide=71; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=18.07 && vers <=19.26) {curSlide=71; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=19.27 && vers <=21.17) {curSlide=72; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=21.18 && vers <=23.10) {curSlide=72; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=23.11 && vers <=24.28) {curSlide=72; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=24.29 && vers <=26.15) {curSlide=72; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=26.16 && vers <=28.04) {curSlide=73; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=28.05 && vers <=29.23) {curSlide=73; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=29.24 && vers <=31.11) {curSlide=73; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=31.12 && vers <=32.27) {curSlide=73; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=32.28 && vers <=34.15) {curSlide=74; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=34.16 && vers <=36.02) {curSlide=74; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=36.03 && vers <=37.22) {curSlide=74; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=37.23 && vers <=39.11) {curSlide=74; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=39.12 && vers <=40.26) {curSlide=75; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=40.27 && vers <=42.14) {curSlide=75; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=42.15 && vers <=44.05) {curSlide=75; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=44.06 && vers <=45.24) {curSlide=75; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=45.25 && vers <=47.10) {curSlide=76; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=47.11 && vers <=48.25) {curSlide=76; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=48.26 && vers <=50.09) {curSlide=76; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=50.10 && vers <=51.28) {curSlide=76; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=51.29 && vers <=53.16) {curSlide=77; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=53.17 && vers <=55.02) {curSlide=77; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=55.03 && vers <=56.18) {curSlide=77; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=56.19 && vers <=58.05) {curSlide=77; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=58.06 && vers <=59.21) {curSlide=78; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=59.22 && vers <=61.07) {curSlide=78; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=61.08 && vers <=62.24) {curSlide=78; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=62.25 && vers <=64.11) {curSlide=78; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=64.12 && vers <=65.27) {curSlide=79; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=65.28 && vers <=67.14) {curSlide=79; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=67.15 && vers <=68.29) {curSlide=79; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=68.30 && vers <=70.21) {curSlide=79; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=70.22 && vers <=71.29) {curSlide=80; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=71.30 && vers <=73.14) {curSlide=80; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=73.15 && vers <=74.29) {curSlide=80; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=74.30 && vers <=76.14) {curSlide=80; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=76.15 && vers <=77.30) {curSlide=81; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=77.31 && vers <=79.14) {curSlide=81; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=79.15 && vers <=80.27) {curSlide=81; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=80.28 && vers <=82.10) {curSlide=81; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=82.11 && vers <=83.25) {curSlide=82; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=83.26 && vers <=85.11) {curSlide=82; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=85.12 && vers <=86.24) {curSlide=82; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=86.25 && vers <=88.08) {curSlide=82; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=88.09 && vers <=89.22) {curSlide=83; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=89.23 && vers <=91.07) {curSlide=83; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=91.08 && vers <=92.22) {curSlide=83; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=92.23 && vers <=94.08) {curSlide=83; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=94.09 && vers <=95.23) {curSlide=84; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=95.24 && vers <=97.09) {curSlide=84; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=97.10 && vers <=98.25) {curSlide=84; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=98.26 && vers <=100.10) {curSlide=84; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=100.11 && vers <=101.23) {curSlide=85; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=101.24 && vers <=103.08) {curSlide=85; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=103.09 && vers <=104.23) {curSlide=85; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=104.24 && vers <=106.09) {curSlide=85; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=106.10 && vers <=107.26) {curSlide=86; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=107.27 && vers <=109.13) {curSlide=86; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=109.14 && vers <=110.27) {curSlide=86; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=110.28 && vers <=112.11) {curSlide=86; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=112.12 && vers <=113.25) {curSlide=87; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=113.26 && vers <=115.09) {curSlide=87; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=115.10 && vers <=116.22) {curSlide=87; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=116.23 && vers <=118.07) {curSlide=87; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=118.08 && vers <=119.22) {curSlide=88; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=119.23 && vers <=121.08) {curSlide=88; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=121.09 && vers <=122.24) {curSlide=88; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=122.25 && vers <=124.10) {curSlide=88; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=124.11 && vers <=125.25) {curSlide=89; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=125.26 && vers <=127.11) {curSlide=89; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=127.12 && vers <=128.26) {curSlide=89; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=128.27 && vers <=130.12) {curSlide=89; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=130.13 && vers <=131.27) {curSlide=90; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=131.28 && vers <=133.14) {curSlide=90; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=133.15 && vers <=134.30) {curSlide=90; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=134.31 && vers <=136.15) {curSlide=90; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=136.16 && vers <=137.29) {curSlide=91; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=137.30 && vers <=139.14) {curSlide=91; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=139.15 && vers <=141.04) {curSlide=91; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=141.05 && vers <=142.20) {curSlide=91; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=142.21 && vers <=144.06) {curSlide=92; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=144.07 && vers <=145.24) {curSlide=92; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=145.25 && vers <=147.09) {curSlide=92; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=147.10 && vers <=148.24) {curSlide=92; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=148.25 && vers <=150.09) {curSlide=93; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=150.10 && vers <=151.24) {curSlide=93; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=151.25 && vers <=153.10) {curSlide=93; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=153.11 && vers <=154.26) {curSlide=93; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=154.27 && vers <=156.11) {curSlide=94; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=156.12 && vers <=157.27) {curSlide=94; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=157.28 && vers <=159.15) {curSlide=94; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=159.16 && vers <=161.01) {curSlide=94; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=161.02 && vers <=162.16) {curSlide=95; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=162.17 && vers <=164.06) {curSlide=95; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=164.07 && vers <=165.23) {curSlide=95; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=165.24 && vers <=167.11) {curSlide=95; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=167.12 && vers <=168.27) {curSlide=96; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=168.28 && vers <=170.14) {curSlide=96; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=170.15 && vers <=171.30) {curSlide=96; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=171.31 && vers <=173.16) {curSlide=96; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=173.17 && vers <=175.01) {curSlide=97; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=175.02 && vers <=176.18) {curSlide=97; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=176.19 && vers <=178.02) {curSlide=97; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=178.03 && vers <=179.18) {curSlide=97; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=179.19 && vers <=181.03) {curSlide=98; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=181.04 && vers <=182.19) {curSlide=98; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=182.20 && vers <=184.05) {curSlide=98; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=184.06 && vers <=185.21) {curSlide=98; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=185.22 && vers <=187.08) {curSlide=99; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=187.09 && vers <=188.26) {curSlide=99; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=188.27 && vers <=190.14) {curSlide=99; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=190.15 && vers <=191.30) {curSlide=99; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=191.31 && vers <=193.16) {curSlide=100; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=193.17 && vers <=195.03) {curSlide=100; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=195.04 && vers <=196.21) {curSlide=100; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=196.22 && vers <=198.07) {curSlide=100; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=198.08 && vers <=199.23) {curSlide=101; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=199.24 && vers <=201.10) {curSlide=101; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=201.11 && vers <=202.27) {curSlide=101; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=202.28 && vers <=204.14) {curSlide=101; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=204.15 && vers <=206.01) {curSlide=102; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=206.02 && vers <=207.17) {curSlide=102; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=207.18 && vers <=209.05) {curSlide=102; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=209.06 && vers <=210.20) {curSlide=102; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=209.26 && vers <=211.09) {curSlide=103; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=211.10 && vers <=212.21) {curSlide=103; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=212.22 && vers <=214.04) {curSlide=103; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=214.05 && vers <=215.17) {curSlide=103; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=215.18 && vers <=216.29) {curSlide=104; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=216.30 && vers <=218.12) {curSlide=104; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=218.13 && vers <=219.26) {curSlide=104; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=219.27 && vers <=221.10) {curSlide=104; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=221.11 && vers <=222.27) {curSlide=105; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=222.28 && vers <=224.14) {curSlide=105; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=224.15 && vers <=226.01) {curSlide=105; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=226.02 && vers <=227.16) {curSlide=105; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=227.17 && vers <=229.02) {curSlide=106; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=229.03 && vers <=230.17) {curSlide=106; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=230.18 && vers <=232.03) {curSlide=106; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=232.04 && vers <=233.18) {curSlide=106; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=233.19 && vers <=235.03) {curSlide=107; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=235.04 && vers <=236.18) {curSlide=107; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=236.19 && vers <=238.05) {curSlide=107; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=238.06 && vers <=239.22) {curSlide=107; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=239.23 && vers <=241.06) {curSlide=108; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=241.07 && vers <=242.22) {curSlide=108; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=242.23 && vers <=244.08) {curSlide=108; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=244.09 && vers <=245.23) {curSlide=108; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=245.24 && vers <=247.08) {curSlide=109; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=247.09 && vers <=248.24) {curSlide=109; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=248.25 && vers <=250.09) {curSlide=109; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=250.10 && vers <=251.25) {curSlide=109; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=251.26 && vers <=253.09) {curSlide=110; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=253.10 && vers <=254.24) {curSlide=110; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=254.25 && vers <=256.10) {curSlide=110; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=256.11 && vers <=257.26) {curSlide=110; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=257.27 && vers <=259.11) {curSlide=111; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=259.12 && vers <=260.28) {curSlide=111; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=260.29 && vers <=262.15) {curSlide=111; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=262.16 && vers <=263.28) {curSlide=111; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=263.29 && vers <=265.16) {curSlide=112; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=265.17 && vers <=267.02) {curSlide=112; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=267.03 && vers <=268.19) {curSlide=112; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=268.20 && vers <=270.06) {curSlide=112; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=270.07 && vers <=271.21) {curSlide=113; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=271.22 && vers <=273.07) {curSlide=113; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=273.08 && vers <=274.22) {curSlide=113; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=274.23 && vers <=276.06) {curSlide=113; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=276.07 && vers <=277.22) {curSlide=114; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=277.23 && vers <=279.07) {curSlide=114; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=279.08 && vers <=280.23) {curSlide=114; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=280.24 && vers <=282.07) {curSlide=114; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=282.08 && vers <=283.23) {curSlide=115; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=283.24 && vers <=285.06) {curSlide=115; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=285.07 && vers <=286.17) {curSlide=115; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=286.18 && vers <=287.30) {curSlide=115; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=287.31 && vers <=289.16) {curSlide=116; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=289.17 && vers <=291.03) {curSlide=116; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=291.04 && vers <=292.17) {curSlide=116; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=292.18 && vers <=294.02) {curSlide=116; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=294.03 && vers <=295.20) {curSlide=117; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=295.21 && vers <=297.06) {curSlide=117; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=297.07 && vers <=298.21) {curSlide=117; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=298.22 && vers <=300.05) {curSlide=117; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=300.06 && vers <=301.20) {curSlide=118; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=301.21 && vers <=303.03) {curSlide=118; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=303.04 && vers <=304.18) {curSlide=118; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=304.19 && vers <=306.02) {curSlide=118; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=306.03 && vers <=307.17) {curSlide=119; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=307.18 && vers <=309.02) {curSlide=119; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=309.03 && vers <=310.16) {curSlide=119; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=310.17 && vers <=312.01) {curSlide=119; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=312.02 && vers <=313.14) {curSlide=120; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=313.15 && vers <=314.27) {curSlide=120; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=314.28 && vers <=316.10) {curSlide=120; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=316.11 && vers <=317.24) {curSlide=120; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=317.25 && vers <=319.12) {curSlide=121; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=319.13 && vers <=320.26) {curSlide=121; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=320.27 && vers <=322.08) {curSlide=121; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=322.09 && vers <=323.23) {curSlide=121; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=323.24 && vers <=325.06) {curSlide=122; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=325.07 && vers <=326.21) {curSlide=122; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=326.22 && vers <=328.06) {curSlide=122; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=328.07 && vers <=329.22) {curSlide=122; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=329.23 && vers <=331.05) {curSlide=123; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=331.06 && vers <=332.19) {curSlide=123; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=332.20 && vers <=334.04) {curSlide=123; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=334.05 && vers <=335.19) {curSlide=123; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=335.20 && vers <=339.05) {curSlide=124; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=339.06 && vers <=340.19) {curSlide=124; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=340.20 && vers <=342.04) {curSlide=124; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=342.05 && vers <=343.19) {curSlide=124; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=343.20 && vers <=345.03) {curSlide=125; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=345.04 && vers <=346.16) {curSlide=125; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=346.17 && vers <=348.01) {curSlide=125; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=348.02 && vers <=349.16) {curSlide=125; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=349.17 && vers <=351.01) {curSlide=126; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=351.02 && vers <=352.17) {curSlide=126; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=352.18 && vers <=354.04) {curSlide=126; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=354.03 && vers <=355.20) {curSlide=126; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=355.21 && vers <=357.06) {curSlide=127; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=357.07 && vers <=358.21) {curSlide=127; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=358.22 && vers <=360.04) {curSlide=127; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=360.05 && vers <=361.18) {curSlide=127; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=361.19 && vers <=363.03) {curSlide=128; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=363.04 && vers <=364.17) {curSlide=128; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=364.18 && vers <=366.02) {curSlide=128; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=366.03 && vers <=367.18) {curSlide=128; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=367.19 && vers <=369.02) {curSlide=129; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=369.03 && vers <=370.19) {curSlide=129; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=370.20 && vers <=372.05) {curSlide=129; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=372.06 && vers <=373.21) {curSlide=129; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=373.22 && vers <=375.03) {curSlide=130; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=375.04 && vers <=376.17) {curSlide=130; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=376.18 && vers <=377.30) {curSlide=130; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=377.31 && vers <=379.16) {curSlide=130; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=379.17 && vers <=380.29) {curSlide=131; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=380.30 && vers <=382.12) {curSlide=131; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=382.13 && vers <=383.27) {curSlide=131; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=383.28 && vers <=385.08) {curSlide=131; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=385.09 && vers <=386.21) {curSlide=132; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=386.22 && vers <=388.03) {curSlide=132; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=388.04 && vers <=389.16) {curSlide=132; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=389.17 && vers <=391.01) {curSlide=132; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=391.02 && vers <=392.17) {curSlide=133; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=392.18 && vers <=394.02) {curSlide=133; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=394.03 && vers <=395.16) {curSlide=133; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=395.17 && vers <=396.28) {curSlide=133; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=396.29 && vers <=398.12) {curSlide=134; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=398.13 && vers <=399.28) {curSlide=134; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=399.29 && vers <=401.14) {curSlide=134; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=401.15 && vers <=402.29) {curSlide=134; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=402.30 && vers <=404.15) {curSlide=135; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=404.16 && vers <=405.30) {curSlide=135; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=405.31 && vers <=407.17) {curSlide=135; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=407.18 && vers <=409.02) {curSlide=135; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=409.03 && vers <=410.19) {curSlide=136; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=410.20 && vers <=412.05) {curSlide=136; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=412.06 && vers <=413.20) {curSlide=136; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=413.27 && vers <=415.10) {curSlide=136; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=415.11 && vers <=416.26) {curSlide=137; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=416.27 && vers <=418.10) {curSlide=137; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=418.11 && vers <=419.26) {curSlide=137; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=419.27 && vers <=421.12) {curSlide=137; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=421.13 && vers <=422.28) {curSlide=138; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=422.29 && vers <=424.15) {curSlide=138; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=424.16 && vers <=426.03) {curSlide=138; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=426.04 && vers <=427.20) {curSlide=138; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=427.21 && vers <=429.06) {curSlide=139; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=429.07 && vers <=430.22) {curSlide=139; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=430.23 && vers <=432.09) {curSlide=139; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=432.10 && vers <=433.25) {curSlide=139; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=433.26 && vers <=435.11) {curSlide=140; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=435.12 && vers <=436.27) {curSlide=140; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=436.28 && vers <=438.13) {curSlide=140; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=438.14 && vers <=439.30) {curSlide=140; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=439.31 && vers <=441.14) {curSlide=141; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=441.15 && vers <=443.02) {curSlide=141; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=443.03 && vers <=444.19) {curSlide=141; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=444.20 && vers <=446.05) {curSlide=141; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=446.06 && vers <=447.21) {curSlide=142; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=447.22 && vers <=449.06) {curSlide=142; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=449.07 && vers <=450.19) {curSlide=142; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=450.20 && vers <=452.03) {curSlide=142; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=452.04 && vers <=453.19) {curSlide=143; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=453.20 && vers <=455.03) {curSlide=143; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=455.03 && vers <=456.14) {curSlide=143; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=456.15 && vers <=457.25) {curSlide=143; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=457.26 && vers <=459.10) {curSlide=144; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=459.11 && vers <=460.26) {curSlide=144; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=460.27 && vers <=462.12) {curSlide=144; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=462.13 && vers <=463.30) {curSlide=144; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=463.31 && vers <=465.15) {curSlide=145; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=465.16 && vers <=466.28) {curSlide=145; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=466.29 && vers <=468.12) {curSlide=145; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=468.13 && vers <=469.24) {curSlide=145; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=469.25 && vers <=471.07) {curSlide=146; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=471.08 && vers <=472.20) {curSlide=146; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=472.21 && vers <=474.03) {curSlide=146; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=474.04 && vers <=475.15) {curSlide=146; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=475.16 && vers <=476.27) {curSlide=147; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=476.28 && vers <=478.10) {curSlide=147; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=478.11 && vers <=479.26) {curSlide=147; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=479.27 && vers <=481.10) {curSlide=147; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=481.11 && vers <=482.21) {curSlide=148; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=482.22 && vers <=484.04) {curSlide=148; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=484.05 && vers <=485.20) {curSlide=148; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=485.21 && vers <=487.02) {curSlide=148; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=487.04 && vers <=488.15) {curSlide=149; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=488.16 && vers <=489.27) {curSlide=149; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=489.28 && vers <=491.09) {curSlide=149; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=491.10 && vers <=492.22) {curSlide=149; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=492.23 && vers <=494.04) {curSlide=150; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=494.05 && vers <=495.16) {curSlide=150; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=495.17 && vers <=496.28) {curSlide=150; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=496.29 && vers <=498.10) {curSlide=150; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=498.11 && vers <=499.22) {curSlide=151; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=499.23 && vers <=501.05) {curSlide=151; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=501.06 && vers <=502.20) {curSlide=151; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=502.21 && vers <=504.04) {curSlide=151; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=504.05 && vers <=505.15) {curSlide=152; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=505.16 && vers <=506.26) {curSlide=152; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=506.27 && vers <=508.09) {curSlide=152; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=508.10 && vers <=509.21) {curSlide=152; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=509.22 && vers <=511.05) {curSlide=153; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=511.06 && vers <=512.18) {curSlide=153; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=512.19 && vers <=514.03) {curSlide=153; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=514.04 && vers <=515.16) {curSlide=153; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=515.17 && vers <=516.29) {curSlide=154; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=516.30 && vers <=518.11) {curSlide=154; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=518.12 && vers <=519.23) {curSlide=154; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=519.24 && vers <=521.05) {curSlide=154; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=521.06 && vers <=522.18) {curSlide=155; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=522.19 && vers <=523.30) {curSlide=155; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=523.31 && vers <=525.11) {curSlide=155; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=525.12 && vers <=526.21) {curSlide=155; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=526.23 && vers <=528.02) {curSlide=156; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=528.03 && vers <=529.12) {curSlide=156; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=529.13 && vers <=530.23) {curSlide=156; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=530.24 && vers <=532.04) {curSlide=156; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=532.05 && vers <=533.15) {curSlide=157; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=533.16 && vers <=534.26) {curSlide=157; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=534.27 && vers <=536.05) {curSlide=157; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=536.06 && vers <=537.15) {curSlide=157; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=537.16 && vers <=538.25) {curSlide=158; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=538.26 && vers <=540.06) {curSlide=158; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=540.07 && vers <=541.17) {curSlide=158; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=541.18 && vers <=542.26) {curSlide=158; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=542.27 && vers <=544.07) {curSlide=159; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=544.08 && vers <=545.18) {curSlide=159; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=545.19 && vers <=546.28) {curSlide=159; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=546.29 && vers <=548.08) {curSlide=159; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=548.09 && vers <=549.18) {curSlide=160; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=549.19 && vers <=550.29) {curSlide=160; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=550.30 && vers <=552.09) {curSlide=160; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=552.10 && vers <=553.18) {curSlide=160; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=553.19 && vers <=554.30) {curSlide=161; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=554.31 && vers <=556.09) {curSlide=161; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=556.10 && vers <=557.17) {curSlide=161; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=557.18 && vers <=558.27) {curSlide=161; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=558.28 && vers <=560.07) {curSlide=162; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=560.08 && vers <=561.15) {curSlide=162; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=561.16 && vers <=562.25) {curSlide=162; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=562.26 && vers <=564.04) {curSlide=162; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=564.05 && vers <=565.12) {curSlide=163; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=565.13 && vers <=566.22) {curSlide=163; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=566.23 && vers <=568.01) {curSlide=163; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=568.02 && vers <=569.11) {curSlide=163; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=569.12 && vers <=570.20) {curSlide=164; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=570.21 && vers <=571.30) {curSlide=164; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=571.31 && vers <=573.10) {curSlide=164; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=573.11 && vers <=574.20) {curSlide=164; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=574.21 && vers <=575.30) {curSlide=165; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=575.31 && vers <=577.10) {curSlide=165; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=577.11 && vers <=578.20) {curSlide=165; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=578.21 && vers <=579.29) {curSlide=165; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=579.30 && vers <=581.08) {curSlide=166; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=581.09 && vers <=582.16) {curSlide=166; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=582.17 && vers <=583.24) {curSlide=166; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=583.25 && vers <=585.06) {curSlide=166; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=585.07 && vers <=586.13) {curSlide=167; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=586.14 && vers <=587.22) {curSlide=167; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=587.23 && vers <=588.29) {curSlide=167; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=588.30 && vers <=590.09) {curSlide=167; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=590.10 && vers <=591.17) {curSlide=168; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=591.18 && vers <=592.26) {curSlide=168; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=592.27 && vers <=594.04) {curSlide=168; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=594.05 && vers <=595.15) {curSlide=168; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=595.16 && vers <=596.25) {curSlide=169; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=596.26 && vers <=598.09) {curSlide=169; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=598.10 && vers <=599.16) {curSlide=169; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=599.17 && vers <=600.27) {curSlide=169; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=600.28 && vers <=602.07) {curSlide=170; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=602.08 && vers <=603.17) {curSlide=170; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=603.18 && vers <=604.28) {curSlide=170; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=604.29 && vers <=606.07) {curSlide=170; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=606.08 && vers <=607.17) {curSlide=171; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=607.18 && vers <=608.26) {curSlide=171; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=608.27 && vers <=610.06) {curSlide=171; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=610.07 && vers <=611.18) {curSlide=171; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=611.19 && vers <=612.27) {curSlide=172; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=612.28 && vers <=614.08) {curSlide=172; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=614.09 && vers <=615.21) {curSlide=172; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=615.22 && vers <=617.02) {curSlide=172; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=617.03 && vers <=618.14) {curSlide=173; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=618.15 && vers <=619.24) {curSlide=173; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=619.25 && vers <=621.03) {curSlide=173; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=621.04 && vers <=622.15) {curSlide=173; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=622.16 && vers <=623.25) {curSlide=174; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=623.26 && vers <=625.05) {curSlide=174; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=625.06 && vers <=626.15) {curSlide=174; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=626.16 && vers <=627.25) {curSlide=174; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=627.26 && vers <=629.04) {curSlide=175; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=629.05 && vers <=630.15) {curSlide=175; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=630.16 && vers <=631.25) {curSlide=175; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=631.26 && vers <=633.05) {curSlide=175; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=633.06 && vers <=634.16) {curSlide=176; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=634.17 && vers <=635.25) {curSlide=176; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=635.26 && vers <=637.05) {curSlide=176; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=637.06 && vers <=638.15) {curSlide=176; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=638.16 && vers <=639.26) {curSlide=177; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=639.27 && vers <=641.07) {curSlide=177; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=641.08 && vers <=642.18) {curSlide=177; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=642.19 && vers <=643.29) {curSlide=177; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=643.30 && vers <=645.10) {curSlide=178; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=645.11 && vers <=646.21) {curSlide=178; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=646.22 && vers <=648.01) {curSlide=178; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=648.02 && vers <=649.11) {curSlide=178; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=649.12 && vers <=650.22) {curSlide=179; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=650.23 && vers <=652.03) {curSlide=179; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=652.04 && vers <=653.17) {curSlide=179; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=653.18 && vers <=655.01) {curSlide=179; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=655.02 && vers <=656.11) {curSlide=180; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=656.12 && vers <=657.22) {curSlide=180; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=657.23 && vers <=659.01) {curSlide=180; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=659.02 && vers <=660.12) {curSlide=180; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=660.13 && vers <=661.24) {curSlide=181; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=661.25 && vers <=663.07) {curSlide=181; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=663.08 && vers <=664.18) {curSlide=181; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=664.19 && vers <=665.29) {curSlide=181; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=665.30 && vers <=667.11) {curSlide=182; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=667.12 && vers <=668.23) {curSlide=182; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=668.24 && vers <=670.04) {curSlide=182; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=670.05 && vers <=671.16) {curSlide=182; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=671.17 && vers <=672.27) {curSlide=183; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=672.28 && vers <=674.10) {curSlide=183; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=674.11 && vers <=675.21) {curSlide=183; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=675.22 && vers <=677.04) {curSlide=183; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=677.05 && vers <=678.16) {curSlide=184; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=678.17 && vers <=679.27) {curSlide=184; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=679.28 && vers <=681.07) {curSlide=184; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=681.08 && vers <=682.18) {curSlide=184; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=682.19 && vers <=683.28) {curSlide=185; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=683.29 && vers <=685.08) {curSlide=185; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=685.09 && vers <=686.19) {curSlide=185; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=686.20 && vers <=688.01) {curSlide=185; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=688.02 && vers <=689.11) {curSlide=186; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=689.12 && vers <=690.21) {curSlide=186; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=690.22 && vers <=692.01) {curSlide=186; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=692.02 && vers <=693.11) {curSlide=186; rectoVerso="v"; spalte="b"; seiteKorrektur();} 
		if (vers >=693.12 && vers <=694.19) {curSlide=187; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=694.20 && vers <=695.27) {curSlide=187; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=695.28 && vers <=697.05) {curSlide=187; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=697.06 && vers <=698.14) {curSlide=187; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=698.15 && vers <=699.26) {curSlide=188; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=699.27 && vers <=701.02) {curSlide=188; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=701.03 && vers <=702.11) {curSlide=188; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=702.12 && vers <=703.21) {curSlide=188; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=703.22 && vers <=704.29) {curSlide=189; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=704.30 && vers <=706.08) {curSlide=189; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=706.09 && vers <=707.18) {curSlide=189; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=707.19 && vers <=708.27) {curSlide=189; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=708.28 && vers <=710.06) {curSlide=190; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=710.07 && vers <=711.16) {curSlide=190; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=711.17 && vers <=712.25) {curSlide=190; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=712.26 && vers <=714.04) {curSlide=190; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=714.05 && vers <=715.14) {curSlide=191; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=715.15 && vers <=716.26) {curSlide=191; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=716.27 && vers <=718.08) {curSlide=191; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=718.09 && vers <=719.19) {curSlide=191; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=719.20 && vers <=721.01) {curSlide=192; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=721.02 && vers <=722.11) {curSlide=192; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=722.12 && vers <=723.21) {curSlide=192; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=723.22 && vers <=725.02) {curSlide=192; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=725.03 && vers <=726.11) {curSlide=193; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=726.12 && vers <=727.20) {curSlide=193; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=727.21 && vers <=728.30) {curSlide=193; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=728.31 && vers <=730.10) {curSlide=193; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=730.11 && vers <=731.21) {curSlide=194; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=731.22 && vers <=733.03) {curSlide=194; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=733.04 && vers <=734.15) {curSlide=194; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=734.16 && vers <=735.26) {curSlide=194; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=735.27 && vers <=737.12) {curSlide=195; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=737.13 && vers <=738.22) {curSlide=195; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=738.23 && vers <=740.02) {curSlide=195; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=740.03 && vers <=741.13) {curSlide=195; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=741.14 && vers <=742.25) {curSlide=196; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=742.26 && vers <=744.07) {curSlide=196; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=744.08 && vers <=745.17) {curSlide=196; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=745.18 && vers <=746.27) {curSlide=196; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=746.28 && vers <=748.06) {curSlide=197; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=748.07 && vers <=749.17) {curSlide=197; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=749.18 && vers <=750.28) {curSlide=197; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=750.29 && vers <=752.08) {curSlide=197; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=752.09 && vers <=753.20) {curSlide=198; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=753.21 && vers <=755.01) {curSlide=198; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=755.02 && vers <=756.10) {curSlide=198; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=756.11 && vers <=757.19) {curSlide=198; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=757.20 && vers <=758.29) {curSlide=199; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=758.30 && vers <=760.10) {curSlide=199; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=760.11 && vers <=761.20) {curSlide=199; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=761.21 && vers <=763.01) {curSlide=199; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=763.02 && vers <=764.13) {curSlide=200; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=764.14 && vers <=765.24) {curSlide=200; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=765.25 && vers <=767.05) {curSlide=200; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=767.06 && vers <=768.16) {curSlide=200; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=768.17 && vers <=769.29) {curSlide=201; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=769.30 && vers <=772.28) {curSlide=201; rectoVerso="r"; spalte="b"; seiteKorrektur();} 
		if (vers >=772.29 && vers <=774.10) {curSlide=201; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=774.11 && vers <=775.21) {curSlide=201; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=775.22 && vers <=777.04) {curSlide=202; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=777.05 && vers <=778.17) {curSlide=202; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=778.18 && vers <=779.29) {curSlide=202; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=779.30 && vers <=781.09) {curSlide=202; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=781.10 && vers <=782.17) {curSlide=203; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=782.18 && vers <=783.26) {curSlide=203; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=783.27 && vers <=785.08) {curSlide=203; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=785.09 && vers <=786.19) {curSlide=203; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=786.20 && vers <=787.29) {curSlide=204; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=787.30 && vers <=789.10) {curSlide=204; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=789.11 && vers <=790.22) {curSlide=204; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=790.23 && vers <=792.03) {curSlide=204; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=792.04 && vers <=793.14) {curSlide=205; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=793.15 && vers <=794.27) {curSlide=205; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=794.28 && vers <=796.09) {curSlide=205; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=796.10 && vers <=797.19) {curSlide=205; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=797.20 && vers <=799.01) {curSlide=206; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=799.02 && vers <=800.12) {curSlide=206; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=800.13 && vers <=801.25) {curSlide=206; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=801.26 && vers <=803.07) {curSlide=206; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		
		
		
	} else if (werk.toLowerCase() == "wigalois") {

		if (vers =="" || isNaN(vers) == true || vers == "null" || vers == 0) {
			document.form1.Vers.value="";
		}
		if (vers < 1861) {alert("Der erste Vers der Wigalois-Handschrift Schwerin (Hs. M) ist 1861."); document.form1.Vers.value=""; return;}
		if (vers > 11708) {alert("Der letzte Vers der Wigalois-Handschrift Schwerin (Hs. M) ist 11708."); document.form1.Vers.value=""; return;}

		//Fehlende Verse abfangen
		if (vers >=6119 && vers <=6120) {alert("Die Verse 6119 und 6120 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers >=6151 && vers <=6152) {alert("Die Verse 6151 und 6152 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers >=6980 && vers <=6986) {alert("Die Verse 6980-6986 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		if (vers >=7879 && vers <=7903) {alert("Die Verse 7879-7903 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.");}
		
		//Verteilung der Verse auf Seiten
		
		if (vers >=1861 && vers <=1894) {curSlide=1; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=1895 && vers <=1928) {curSlide=1; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=1929 && vers <=1962) {curSlide=1; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=1963 && vers <=1997) {curSlide=1; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=1998 && vers <=2030) {curSlide=2; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=2031 && vers <=2064) {curSlide=2; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=2065 && vers <=2097) {curSlide=2; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=2098 && vers <=2130) {curSlide=2; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=2131 && vers <=2163) {curSlide=3; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=2164 && vers <=2195) {curSlide=3; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=2196 && vers <=2225) {curSlide=3; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=2226 && vers <=2259) {curSlide=3; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=2260 && vers <=2293) {curSlide=4; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=2294 && vers <=2328) {curSlide=4; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=2329 && vers <=2365) {curSlide=4; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=2366 && vers <=2395) {curSlide=4; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=2396 && vers <=2426) {curSlide=5; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=2427 && vers <=2459) {curSlide=5; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=2460 && vers <=2494) {curSlide=5; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=2495 && vers <=2527) {curSlide=5; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=2528 && vers <=2559) {curSlide=6; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=2560 && vers <=2592) {curSlide=6; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=2593 && vers <=2625) {curSlide=6; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=2626 && vers <=2658) {curSlide=6; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=2659 && vers <=2692) {curSlide=7; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=2693 && vers <=2726) {curSlide=7; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=2727 && vers <=2761) {curSlide=7; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=2762 && vers <=2793) {curSlide=7; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=3057 && vers <=3090) {curSlide=8; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=3091 && vers <=3126) {curSlide=8; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=3127 && vers <=3159) {curSlide=8; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=3160 && vers <=3190) {curSlide=8; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=3191 && vers <=3222) {curSlide=9; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=3223 && vers <=3254) {curSlide=9; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=3255 && vers <=3287) {curSlide=9; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=3288 && vers <=3321) {curSlide=9; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=3322 && vers <=3355) {curSlide=10; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=3356 && vers <=3387) {curSlide=10; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=3388 && vers <=3399) {curSlide=10; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=2794 && vers <=2827) {curSlide=11; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=2828 && vers <=2861) {curSlide=11; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=2862 && vers <=2895) {curSlide=11; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=2896 && vers <=2926) {curSlide=11; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=3400 && vers <=3431) {curSlide=12; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=3432 && vers <=3463) {curSlide=12; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=3464 && vers <=3495) {curSlide=12; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=3496 && vers <=3527) {curSlide=12; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=3528 && vers <=3560) {curSlide=13; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=3561 && vers <=3592) {curSlide=13; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=3593 && vers <=3626) {curSlide=13; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=3627 && vers <=3658) {curSlide=13; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=3659 && vers <=3688) {curSlide=14; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=3689 && vers <=3721) {curSlide=14; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=3722 && vers <=3752) {curSlide=14; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=3753 && vers <=3783) {curSlide=14; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=3784 && vers <=3815) {curSlide=15; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=3816 && vers <=3845) {curSlide=15; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=3846 && vers <=3879) {curSlide=15; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=3880 && vers <=3912) {curSlide=15; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=3913 && vers <=3945) {curSlide=16; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=3946 && vers <=3976) {curSlide=16; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=3977 && vers <=4011) {curSlide=16; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=4012 && vers <=4044) {curSlide=16; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=4045 && vers <=4077) {curSlide=17; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=4078 && vers <=4111) {curSlide=17; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=4112 && vers <=4145) {curSlide=17; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=4146 && vers <=4177) {curSlide=17; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=4178 && vers <=4210) {curSlide=18; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=4211 && vers <=4242) {curSlide=18; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=4243 && vers <=4244) {curSlide=18; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=4245 && vers <=4276) {curSlide=19; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=4277 && vers <=4310) {curSlide=19; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=4311 && vers <=4344) {curSlide=19; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=4345 && vers <=4375) {curSlide=19; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=4376 && vers <=4409) {curSlide=20; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=4410 && vers <=4442) {curSlide=20; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=4443 && vers <=4472) {curSlide=20; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=4473 && vers <=4502) {curSlide=20; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=4503 && vers <=4535) {curSlide=21; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=4536 && vers <=4568) {curSlide=21; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=4569 && vers <=4597) {curSlide=21; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=4598 && vers <=4628) {curSlide=21; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=4629 && vers <=4659) {curSlide=22; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=4660 && vers <=4692) {curSlide=22; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=4693 && vers <=4726) {curSlide=22; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=4727 && vers <=4760) {curSlide=22; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=4761 && vers <=4796) {curSlide=23; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=4797 && vers <=4827) {curSlide=23; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=4828 && vers <=4861) {curSlide=23; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=4862 && vers <=4894) {curSlide=23; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=4895 && vers <=4925) {curSlide=24; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=4926 && vers <=4958) {curSlide=24; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=4959 && vers <=4993) {curSlide=24; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=4994 && vers <=5030) {curSlide=24; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=5031 && vers <=5062) {curSlide=25; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=5063 && vers <=5095) {curSlide=25; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=5096 && vers <=5125) {curSlide=25; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=5126 && vers <=5158) {curSlide=25; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=5159 && vers <=5190) {curSlide=26; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=5191 && vers <=5222) {curSlide=26; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=5223 && vers <=5255) {curSlide=26; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=5256 && vers <=5286) {curSlide=26; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=5287 && vers <=5316) {curSlide=27; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=5317 && vers <=5349) {curSlide=27; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=5350 && vers <=5383) {curSlide=27; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=5384 && vers <=5416) {curSlide=27; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=5417 && vers <=5448) {curSlide=28; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=5449 && vers <=5481) {curSlide=28; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=5482 && vers <=5513) {curSlide=28; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=5514 && vers <=5545) {curSlide=28; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=5546 && vers <=5577) {curSlide=29; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=5578 && vers <=5610) {curSlide=29; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=5611 && vers <=5643) {curSlide=29; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=5644 && vers <=5673) {curSlide=29; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=5674 && vers <=5704) {curSlide=30; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=5705 && vers <=5736) {curSlide=30; rectoVerso="r"; spalte="b"; seiteKorrektur();} 
		if (vers >=5737 && vers <=5769) {curSlide=30; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=5770 && vers <=5801) {curSlide=30; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=5802 && vers <=5833) {curSlide=31; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=5834 && vers <=5864) {curSlide=31; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=5865 && vers <=5897) {curSlide=31; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=5898 && vers <=5929) {curSlide=31; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=5930 && vers <=5960) {curSlide=32; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=5961 && vers <=5993) {curSlide=32; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=5994 && vers <=6026) {curSlide=32; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=6027 && vers <=6058) {curSlide=32; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=6059 && vers <=6090) {curSlide=33; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=6091 && vers <=6120) {curSlide=33; rectoVerso="r"; spalte="b"; seiteKorrektur();}	//Fehlstelle 6116 bis 6120
		if (vers >=6121 && vers <=6152) {curSlide=33; rectoVerso="v"; spalte="a"; seiteKorrektur();}	//Fehlstelle 6149 bis 6152
		if (vers >=6153 && vers <=6183) {curSlide=33; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=6184 && vers <=6211) {curSlide=34; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=6212 && vers <=6244) {curSlide=34; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=6245 && vers <=6277) {curSlide=34; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=6278 && vers <=6309) {curSlide=34; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=6310 && vers <=6341) {curSlide=35; rectoVerso="r"; spalte="a"; seiteKorrektur();}	//vertauschte Verse 6310/6311
		if (vers >=6342 && vers <=6372) {curSlide=35; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=6373 && vers <=6405) {curSlide=35; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=6406 && vers <=6446) {curSlide=35; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=6447 && vers <=6479) {curSlide=36; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=6480 && vers <=6509) {curSlide=36; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=6510 && vers <=6543) {curSlide=36; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=6544 && vers <=6576) {curSlide=36; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=6577 && vers <=6608) {curSlide=37; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=6609 && vers <=6640) {curSlide=37; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=6641 && vers <=6672) {curSlide=37; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=6673 && vers <=6705) {curSlide=37; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=6706 && vers <=6740) {curSlide=38; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=6741 && vers <=6774) {curSlide=38; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=6775 && vers <=6807) {curSlide=38; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=6808 && vers <=6837) {curSlide=38; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=6838 && vers <=6869) {curSlide=39; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=6870 && vers <=6911) {curSlide=39; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=6912 && vers <=6945) {curSlide=39; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=6946 && vers <=6979) {curSlide=39; rectoVerso="v"; spalte="b"; seiteKorrektur();}		//Zusatzvers nach 6979
		if (vers >=6980 && vers <=7026) {curSlide=40; rectoVerso="r"; spalte="a"; seiteKorrektur();}		//Fehlstelle 6980-6986
		if (vers >=7027 && vers <=7065) {curSlide=40; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=7066 && vers <=7101) {curSlide=40; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=7102 && vers <=7136) {curSlide=40; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=7137 && vers <=7173) {curSlide=41; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=7174 && vers <=7207) {curSlide=41; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=7208 && vers <=7256) {curSlide=41; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=7257 && vers <=7286) {curSlide=41; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=7287 && vers <=7330) {curSlide=42; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=7331 && vers <=7380) {curSlide=42; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=7381 && vers <=7433) {curSlide=42; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=7434 && vers <=7481) {curSlide=42; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=7482 && vers <=7641) {curSlide=43; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=7642 && vers <=7672) {curSlide=43; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=7673 && vers <=7746) {curSlide=43; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=7747 && vers <=7778) {curSlide=43; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=7779 && vers <=7845) {curSlide=44; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=7846 && vers <=7878) {curSlide=44; rectoVerso="r"; spalte="b"; seiteKorrektur();}		//Fehlstelle 7879-7903
		if (vers >=7879 && vers <=7935) {curSlide=44; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=7936 && vers <=8000) {curSlide=44; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=8001 && vers <=8032) {curSlide=45; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=8033 && vers <=8119) {curSlide=45; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=8120 && vers <=8152) {curSlide=45; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=8153 && vers <=8239) {curSlide=45; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=8240 && vers <=8272) {curSlide=46; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=8273 && vers <=8305) {curSlide=46; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=8306 && vers <=8338) {curSlide=46; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=8339 && vers <=8369) {curSlide=46; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=8370 && vers <=8403) {curSlide=47; rectoVerso="r"; spalte="a"; seiteKorrektur();}		//Zusatzvers nach 8403
		if (vers >=8404 && vers <=8482) {curSlide=47; rectoVerso="r"; spalte="b"; seiteKorrektur();}		//Versverlust 8404-8416
		if (vers >=8483 && vers <=8513) {curSlide=47; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=8514 && vers <=8553) {curSlide=47; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=8554 && vers <=8590) {curSlide=48; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=8591 && vers <=8677) {curSlide=48; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=8678 && vers <=8711) {curSlide=48; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=8712 && vers <=8743) {curSlide=48; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=8744 && vers <=8774) {curSlide=49; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=8775 && vers <=8843) {curSlide=49; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=8844 && vers <=8944) {curSlide=49; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=8945 && vers <=8976) {curSlide=49; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=8977 && vers <=9008) {curSlide=50; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=9009 && vers <=9061) {curSlide=50; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=9062 && vers <=9096) {curSlide=50; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=9097 && vers <=9125) {curSlide=50; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=9126 && vers <=9157) {curSlide=51; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=9158 && vers <=9190) {curSlide=51; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=9191 && vers <=9222) {curSlide=51; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=9223 && vers <=9250) {curSlide=51; rectoVerso="v"; spalte="b"; seiteKorrektur();}		//Zusatzvers nach 9250
		if (vers >=9251 && vers <=9282) {curSlide=52; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=9283 && vers <=9315) {curSlide=52; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=9316 && vers <=9442) {curSlide=52; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=9443 && vers <=9472) {curSlide=52; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=9473 && vers <=9506) {curSlide=53; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=9507 && vers <=9539) {curSlide=53; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=9540 && vers <=9574) {curSlide=53; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=9575 && vers <=9606) {curSlide=53; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=9607 && vers <=9639) {curSlide=54; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=9640 && vers <=9672) {curSlide=54; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=9673 && vers <=9798) {curSlide=54; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=9799 && vers <=9830) {curSlide=54; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=9831 && vers <=9859) {curSlide=55; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=9860 && vers <=9891) {curSlide=55; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=9892 && vers <=9923) {curSlide=55; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=9924 && vers <=9956) {curSlide=55; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=9957 && vers <=9990) {curSlide=56; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=9991 && vers <=10022) {curSlide=56; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=10023 && vers <=10055) {curSlide=56; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=10056 && vers <=10087) {curSlide=56; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=10088 && vers <=10120) {curSlide=57; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=10121 && vers <=10152) {curSlide=57; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=10153 && vers <=10185) {curSlide=57; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=10186 && vers <=10218) {curSlide=57; rectoVerso="v"; spalte="b"; seiteKorrektur();}		//vertauschte Verse 10218/10219
		if (vers >=10219 && vers <=10251) {curSlide=58; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=10252 && vers <=10286) {curSlide=58; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=10287 && vers <=10319) {curSlide=58; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=10320 && vers <=10353) {curSlide=58; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=10354 && vers <=10453) {curSlide=59; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=10454 && vers <=10485) {curSlide=59; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=10486 && vers <=10518) {curSlide=59; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=10519 && vers <=10550) {curSlide=59; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=10551 && vers <=10583) {curSlide=60; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=10584 && vers <=10617) {curSlide=60; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=10618 && vers <=10652) {curSlide=60; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=10653 && vers <=10687) {curSlide=60; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=10688 && vers <=10719) {curSlide=61; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=10720 && vers <=10752) {curSlide=61; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=10753 && vers <=10786) {curSlide=61; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=10787 && vers <=10819) {curSlide=61; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=10820 && vers <=10853) {curSlide=62; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=10854 && vers <=10887) {curSlide=62; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=10888 && vers <=10921) {curSlide=62; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=10922 && vers <=10953) {curSlide=62; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=10954 && vers <=10984) {curSlide=63; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=10985 && vers <=11017) {curSlide=63; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=11018 && vers <=11051) {curSlide=63; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=11052 && vers <=11084) {curSlide=63; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=11085 && vers <=11116) {curSlide=64; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=11117 && vers <=11150) {curSlide=64; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=11151 && vers <=11183) {curSlide=64; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=11184 && vers <=11218) {curSlide=64; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=11219 && vers <=11253) {curSlide=65; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=11254 && vers <=11287) {curSlide=65; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=11288 && vers <=11321) {curSlide=65; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=11322 && vers <=11356) {curSlide=65; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=11357 && vers <=11389) {curSlide=66; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=11390 && vers <=11424) {curSlide=66; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=11425 && vers <=11458) {curSlide=66; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=11459 && vers <=11492) {curSlide=66; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=11493 && vers <=11526) {curSlide=67; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=11527 && vers <=11560) {curSlide=67; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=11561 && vers <=11594) {curSlide=67; rectoVerso="v"; spalte="a"; seiteKorrektur();}
		if (vers >=11595 && vers <=11627) {curSlide=67; rectoVerso="v"; spalte="b"; seiteKorrektur();}
		if (vers >=11628 && vers <=11661) {curSlide=68; rectoVerso="r"; spalte="a"; seiteKorrektur();}
		if (vers >=11662 && vers <=11693) {curSlide=68; rectoVerso="r"; spalte="b"; seiteKorrektur();}
		if (vers >=11694 && vers <=11708) {curSlide=68; rectoVerso="v"; spalte="a"; seiteKorrektur();}
	}
	
	else if (werk == "Wigalois / Parzival") {
		if (vers >= 1 && vers <= 804) {
			werk = "parzival";
			checkVers();
		} else if (vers > 1860 && vers <= 11708) {
			werk = "wigalois";
			checkVers();
		} else {
			alert("Der Parzival umfasst die Verse 1.01 bis 803.07, der Wigalois die Verse 1861 bis 11708.");
		}
	}
}

function seiteKorrektur() {
	if (zoom==50 && rectoVerso=="v") {curSlide++;}
	blattNr = curSlide+rectoVerso;
	showSlide();
}