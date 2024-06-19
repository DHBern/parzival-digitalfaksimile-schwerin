var zoom = 50;
var Zusatz = "00";
var werk = "Parzival";
var schreiber = "";
var lagenNr = "";
var lagenSymb = "";
var lagenName = "";
var oesz=unescape("%F6%DF");
var lSeitenAngabe = "";
var rSeitenAngabe = "";
var rectoVerso = "";
var infoWerk;
linkeSeite = "";
rechteSeite = "";
curSlide = 1;


window.addEventListener('load', function() {
  setVars();
});

function setVars() {
	zoom = 50;
    Zusatz = "00";
	werk = "Parzival";
	schreiber = "";
	lagenNr = "";
	lagenSymb = "";
	lagenName = "";
	oesz=unescape("%F6%DF");
	lSeitenAngabe = "";
	rSeitenAngabe = "";
	rectoVerso = "";
	linkeSeite = "";
	rechteSeite = "";
	curSlide = 1;

	infoButton = document.getElementById('infoButton');
	infoButton.addEventListener("click", function() {
    console.log(infoWerk);
    	if (infoWerk === 'Wigalois') {
        	infoFenster('info/infoWigalois.html');
        } else {
        	infoFenster('info/infoParzival.html');
        }
	});

	backButton = document.getElementById('prevButton');
	backButton.addEventListener('click', goPrev);

	nextButton = document.getElementById('nextButton');
	nextButton.addEventListener('click', goNext);

	button150 = document.getElementById('button150');
	button150.addEventListener('click', zoom150);

	button100 = document.getElementById('button100');
	button100.addEventListener('click', zoom100);

	button50 = document.getElementById('button50');
	button50.addEventListener('click', zoom50);

	werkSelect = document.getElementById("werkSelect");
	werkSelect.addEventListener("change", werkWechsel);

	buchSelect = document.getElementById("buchSelect");
	buchSelect.addEventListener("change", MM_jumpMenuParts);

	verseingabeInput = document.getElementById("verseingabe");
	verseingabeInput.addEventListener("keypress", function(event) {
  		if (event.key === "Enter") {
    		submitenter2(verseingabeInput, event);
  		}
	});

	versFindenButton = document.getElementById('versFindenButton');
	versFindenButton.addEventListener("click", function() {
    	checkVers();
	});

	blattEingabe = document.getElementById("blattEingabe");
	blattEingabe.addEventListener("keypress", function(event) {
  		if (event.key === "Enter") {
    		submitenter(blattEingabe, event);
  		}
	});

	blattFindenButton = document.getElementById('blattFindenButton');
	blattFindenButton.addEventListener("click", function() {
  		goPage();
	});

	backButton2 = document.getElementById('backButton2');
	backButton2.addEventListener('click', goPrev);

	nextButton2 = document.getElementById('nextButton2');
	nextButton2.addEventListener('click', goNext);

	checkURLParam(werk);
}

//Beginn ------------------------------------------

// Absenden mit Enter (Seite)
function submitenter(myfield,e)
{
var keycode;
if (window.event) keycode = window.event.keyCode;
else if (e) keycode = e.which;
else return true;

if (keycode == 13)
   {
   	seitenEingabe = document.form1.Eingabe.value;
		
		if(!window.seitenEingabe) {return;}
				
		else {
		
		var korrekt = checkSeitenEingabe();
			
			if (korrekt==0) {return;}
		
			else {
			showSlide();
			}
			
		
   return false;
   }
   }
else
   return true;
}

//Seiteneingabe mit Klick of Ok
function goPage() {
				
		seitenEingabe = document.form1.Eingabe.value;
		
		if(!window.seitenEingabe) {document.form1.Eingabe.focus(); return;}
				
		else {
		var korrekt = checkSeitenEingabe();
			
			if (korrekt==0) {return;}
		
			else {
			showSlide();
			}
		
   return false;
   }
		
}

// Absenden mit Enter (Vers)
function submitenter2(myfield,e) {
	var keycode;
	if (window.event) keycode = window.event.keyCode;
	else if (e) keycode = e.which;
	else return true;

	if (keycode == 13) {
   		checkVers();
   		return false;
   	} else {
   		return true;
    }
}

//Browser-Kompatibilit�t
if(document.all && !document.getElementById) {
    document.getElementById = function(id) {
         return document.all[id];
    }
}


// Browsertest
var browserName = navigator.appName;
var browserVer = parseInt(navigator.appVersion);
var browserOK = (((browserName == "Netscape") && (browserVer >= 5)) || 
	((browserName == "Microsoft Internet Explorer") && (browserVer >= 4)));



function showSlide() {

	if (browserOK) {
				
				
		if (isNaN(curSlide) == true) {
		document.form1.Eingabe.value="";
		return;
		}
						
		
		
		if (curSlide < 0 || (curSlide==0 && rectoVerso=="r")) {
		curSlide=0;
		rectoVerso="v";
		}
		
		if(curSlide==208 && zoom==50) {
		curSlide=207;
		}
				
		bildAnzeige();
		if (zoom == 50) {
			abschnittMenu50();
		} else {
			abschnittMenu100();
		}
		spalte = "";
		document.form1.Vers.value="";
		
		
	} else {
		
		alert("Sie verwenden den Browser " + browserName + " " + browserVer + ". Diese Anwendung ben�tigt Internet Explorer ab Version 5 bzw. Netscape ab Version 7 (unter Windows) oder Camino bzw. Netscape ab Version 7 (unter Macintosh).");
	}
}



function goNext() {

	if (zoom == 50) {
	
		//Stopp das Vorw�rtsbl�ttern am Ende der Hs.
		if (curSlide==207) {return;}
		
		curSlide++;
		showSlide();
		
		
	}
	
	else {
		//Stopp das Vorw�rtsbl�ttern am Ende der Hs.
		if (curSlide==207) {return;}
		
		if (linkeSeite=="Vorsatz") {
		curSlide=1;
		rectoVerso="r";
		showSlide();
		return
		}
		
		if (rectoVerso=="v") {
		curSlide++;
		rectoVerso = "r";
		linkeSeite = curSlide + rectoVerso;
		showSlide();
		return;
		}
		
		if (rectoVerso=="r") {
		rectoVerso = "v";
		linkeSeite = curSlide + rectoVerso;
		showSlide();
		return;
		}
	
	showSlide();
	}
	
}



function goPrev() {
	
		if (zoom == 50) {
		//Stopp das Zur�ckbl�ttern am Anfang der Hs.
		if (curSlide==1) {return;}
		curSlide--;
		showSlide();
		}

		else {
			//Stopp das Zur�ckbl�ttern am Anfang der Hs.
			if (curSlide==1 && rectoVerso=="r") {return;}
			
			if (rectoVerso=="v") {
			rectoVerso = "r";
			linkeSeite = curSlide + rectoVerso;
			showSlide();
			return;
			}
		
			if (rectoVerso=="r") {
			curSlide--;
			rectoVerso = "v";
			linkeSeite = curSlide + rectoVerso;
			showSlide();
			return;
			}
			
			showSlide();
		}
	

}
		

function zoom150() {
		
		if (zoom==50) {
			if (curSlide == 1) {
				rectoVerso = "r";
			} else {
				rectoVerso = "v";
				curSlide--;
			}
			linkeSeite = curSlide + rectoVerso;
			zoom = 150;
			showSlide();	
		}
						
		if (zoom==100) {
		zoom = 150;
		showSlide();	
		}
		
		if (zoom==150) {
		return;
		}
}

function zoom100() {
		
		if (zoom==50) {
			if (curSlide == 1) {
				rectoVerso = "r";
			} else {
				rectoVerso = "v";
				curSlide--;
			}
			linkeSeite = curSlide + rectoVerso;
			zoom = 100;
			showSlide();	
		}
		
		if (zoom==100) {
		return;
		}
		
		if (zoom==150) {
		zoom = 100;
		showSlide();	
		}
}

function zoom50() {
		
		if (zoom==50) {
		return;
		}
		
		if (zoom!=50) {
			if (rectoVerso=="v") {
			curSlide++;
			}
		
		zoom = 50;
		showSlide();
		}	
}






//Menu Werk w�hlen
function werkWechsel(){ 
if (document.form1.menu1.value != "javascript:") {
var wWerk = document.form1.menu1.value;
//alert(wWerk);
rectoVerso = wWerk.substring(0,1);
console.log(wWerk);
if (wWerk === 'r1') {
	infoWerk = 'Wigalois';
} else {
	infoWerk = 'Parzival';
}
curSlide = parseInt(wWerk.substring(1));
document.form1.menu1.selectedIndex = 0;

	if (zoom==50) {
		if (rectoVerso=="v") {curSlide++;}
	}
	
	else {
	linkeSeite = curSlide+rectoVerso;
	}
	
showSlide();
}

}

//Menu Abschnitte w�hlen
function MM_jumpMenuParts(){ 
if (document.form1.menu2.value != "javascript:") {
var buch = document.form1.menu2.value;
rectoVerso = buch.substring(0,1);
curSlide = parseInt(buch.substring(1));
document.form1.menu2.selectedIndex = 0;

	if (zoom==50) {
		if (rectoVerso=="v") {curSlide++;}
	}
	
	else {
	linkeSeite = curSlide+rectoVerso;
	}
	
showSlide();
}
}


document.onkeydown = TasteGedrueckt;

function TasteGedrueckt(Ereignis) {
    var zoom = parent.navigation.zoom;
    if (navigator.appName == "Netscape") {
        if (parseInt(zoom) != 150) {
            if (Ereignis.which == 37) {
                goPrev();
            }
            if (Ereignis.which == 39) {
                goNext();
            }
            return true;
        }
    }
    if (navigator.appName == "Microsoft Internet Explorer") {
        //zoom *= 1;
        //alert (typeof zoom);
        if (parseInt(zoom) != 150) {
            if (window.event.keyCode == 37) {
                goPrev();
                return true;
            }
            if (window.event.keyCode == 39) {
                goNext();
                return true;
            }
        }
    }
}

