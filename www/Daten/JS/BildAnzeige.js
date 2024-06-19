function bildAnzeige() {
var LagenAngabe="";
var sz=unescape("%DF");
var spezKonkordanz="";
var lageTxt = ". Lage, "
var blattTxt = "Bl. ";

if (zoom==50) {
	if (curSlide <= 9) {Zusatz = "00";}
	if (curSlide > 9) {Zusatz = "0";}
	if (curSlide > 99) {Zusatz = "";}
	
	if (curSlide == 1) {
		seitenAngabe = curSlide + "r";
	} else if (curSlide == 207) {
		seitenAngabe = (curSlide-1) + "v";
	} else {
		seitenAngabe = (curSlide-1) + "v / " + curSlide + "r";
	}
		
	checkKonkordDoppelt();
	checkHand();
	checkLageDoppelt();
	
	
	//Werk Anzeige
	if (curSlide<1) {werk=""; lageTxt=""; werkHs="Wigalois-Handschrift Schwerin (Hs. l)";}
	if (curSlide<69) {werk="Wigalois"; werkHs="Wigalois-Handschrift Schwerin (Hs. l)";}
	if (curSlide==69) {werk="Wigalois / Parzival"; werkHs="Parzival-Handschrift Schwerin (Hs. M)";}
	if (curSlide>69) {werk="Parzival"; werkHs="Parzival-Handschrift Schwerin (Hs. M)";}
	if (curSlide>206) {werk=""; werkHs="Parzival-Handschrift Schwerin (Hs. M)";}
	
	
	//Info Button
	if (curSlide<69) {document.getElementById('infoButton').href = "javascript:infoFenster('info/infoWigalois.html')";}
	if (curSlide>=69) {document.getElementById('infoButton').href = "javascript:infoFenster('info/infoParzival.html')";}
	
	
					
	document.images["bild"].src = "../MBilder/M" + zoom + "/M" + Zusatz + curSlide + ".jpg";
	//alert("Seite: " + curSlide + "; Bild: " + "../MBilder/M" + zoom + "/M" + Zusatz + curSlide + ".jpg");
	document.form1.Eingabe.value = "";
	document.getElementById('werkAnzeige').innerHTML = werkHs;
	document.getElementById('Seite').innerHTML = "Bl. " + seitenAngabe;
	document.getElementById('Konkordanz').innerHTML = werk + " " + konkordanz;
	document.getElementById('Schreiber').innerHTML = schreiber;
	document.getElementById('Lage').innerHTML = lagenNr + lageTxt + lagenName;
	document.images["Lagensymbol"].src = "LagensymboleDoppelt/" + lagenSymb + ".gif";
	
	window.defaultStatus = "Parzival Hs. M, Bl. " + seitenAngabe + "  |  Bildgr" + oesz +"e: " + zoom + "%";return true;
		
	
	}
		
	else {
	
	if (curSlide <= 9) {Zusatz = "00";}
	if (curSlide > 9) {Zusatz = "0";}
	if (curSlide > 99) {Zusatz = "";}
	
	checkKonkord();
	checkHand();
	checkLage();
	
	//Werk Anzeige
	if (curSlide<1) {werk=""; lageTxt=""; werkHs="Wigalois-Handschrift Schwerin (Hs. l)";}
	if (curSlide<69) {werk="Wigalois"; werkHs="Wigalois-Handschrift Schwerin (Hs. l)";}
	if (curSlide>=69) {werk="Parzival"; werkHs="Parzival-Handschrift Schwerin (Hs. M)";}
	if (curSlide>206) {werk=""; lageTxt=""; werkHs="Parzival-Handschrift Schwerin (Hs. M)";}
	
	
	//Info Button
	if (curSlide<69) {document.getElementById('infoButton').href = "javascript:infoFenster('info/infoWigalois.html')";}
	if (curSlide>=69) {document.getElementById('infoButton').href = "javascript:infoFenster('info/infoParzival.html')";}
	
	document.images["bild"].src = "../MBilder/M" + zoom + "/M" + Zusatz + curSlide + rectoVerso + ".jpg";
	//document.images["bild"].src = "../MBilder/M" + zoom + "/M" + Zusatz + linkeSeite + ".jpg";
	//alert("rectoVerso: " + rectoVerso + "; Bild: " + "../MBilder/M" + zoom + "/M" + Zusatz + curSlide + rectoVerso + ".jpg");
	document.form1.Eingabe.value = "";
	document.getElementById('werkAnzeige').innerHTML = werkHs;
	document.getElementById('Seite').innerHTML = "Bl. " + curSlide + rectoVerso;
	//document.getElementById('Seite').innerHTML = "Bl. " + linkeSeite;
	document.getElementById('Konkordanz').innerHTML = werk + " " + konkordanz;
	document.getElementById('Schreiber').innerHTML = schreiber;
	document.getElementById('Lage').innerHTML = lagenNr + lageTxt + lagenName;
	document.images["Lagensymbol"].src = "Lagensymbole/" + lagenSymb + ".gif";
	
	window.defaultStatus = "Parzival Hs. M, Bl. " + curSlide + rectoVerso + "  |  Bildgr" + oesz +"e: " + zoom + "%";return true;
	//window.defaultStatus = "Parzival Hs. M, Bl. " + linkeSeite + "  |  Bildgr" + oesz +"e: " + zoom + "%";return true;
	 
	}
	
}

