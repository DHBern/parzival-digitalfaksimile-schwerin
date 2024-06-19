var geladeneSeitePZ;

document.addEventListener("DOMContentLoaded", function() {
  const myBody = document.getElementById("myBody");
  const page = myBody.getAttribute("data");
  faksimilePZ(page);
  setLinks();
});


// setting styles
// generic event listener for all seitenangabe elements
function setLinks() {
	const faksimileLinks = document.querySelectorAll('.faksimilePZ');
	faksimileLinks.forEach(function(faksimileLink) {
    	faksimileLink.style.cursor = "pointer";
    });
	
    document.addEventListener("click", function(event) {
        const faksimileLink = event.target.closest('.faksimilePZ');
        if (faksimileLink) {
        	const page = faksimileLink.getAttribute("data");
        	faksimilePZ(page);
           }
    });
}



function faksimilePZ(seite) {

if (geladeneSeitePZ != seite) {
	var zusatz ="";
	var x = parseInt(seite);

	if (x < 10) {zusatz = "00";}
	if (x >= 10 && x < 100) {zusatz = "0";}
	if (x > 100) {zusatz = "";}

	var Pfad=self.document.URL
	if (Pfad.search(/http:/)!=-1) {
		var lastSlash=Pfad.lastIndexOf("/")
		var relPfad1=Pfad.substring(0,lastSlash)
		lastSlash=relPfad1.lastIndexOf("/")
		var relPfad2=relPfad1.substring(0,lastSlash)
		lastSlash=relPfad2.lastIndexOf("/")
		var relPfad3=relPfad2.substring(0,lastSlash)
		bildURL= relPfad3 + "/Mbilder/M150/M" + zusatz + seite + ".jpg";
		}
	else {bildURL="../../MBilder/M150/M" + zusatz + seite + ".jpg";}

	var content='<html>'
	content+='\n<head>'
	content+='<title>Parzival-Handschrift Schwerin (Hs. M), Bl. ' + seite + '</title>'
	content+='\n<script type="text/javascript">'
	content+='\n'
	content+='\nfunction Vollbild() {'
	content+='\n'
	content+='\nvar content2=\'<html><body marginwidth=\"0\" marginheight=\"0\" topmargin=\"0\" leftmargin=\"0\"><img src=\"' + bildURL + '\" onClick=\"self.close()\"></body></html>\''
	content+='\nvar breite=screen.availWidth;'
	content+='\nvar hoehe=screen.availHeight;'
	content+='\nvar ff=window.open("","","width=breite,height=hoehe,scrollbars,resizable,")'
	content+='\nff.document.open()'
	content+='\nff.document.write(content2)'
	content+='\nff.document.close()'
	content+='\n}'
	content+='\n</script>'
	content+='\n'
	content+='\n'
	content+='\n</head>'
	content+='\n<body marginwidth=\"0\" marginheight=\"0\" topmargin=\"0\" leftmargin=\"0\">'
	content+='\n<img src="' + bildURL + '"'
	content+=' onClick="Vollbild()">'
	content+='\n</body>'
	content+='\n</html>';
	parent.frames['rechts'].document.open();
	parent.frames['rechts'].document.write(content);
	parent.frames['rechts'].document.close();
	statusZeileNL(seite);
	geladeneSeitePZ = seite;
	}
}

function statusZeileNL(seite) {
window.defaultStatus="Rechts: Parzival-Handschrift Schwerin (Hs. M), Bl. " + seite; 
window.status="Rechts: Parzival-Handschrift Schwerin (Hs. M), Bl. " + seite; 
return true;
}