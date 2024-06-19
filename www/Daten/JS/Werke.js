function checkURLParam(werk) {

if (window.location.search != "") {
			
	var param=window.location.search;
	
	if (param.search(/&/)!=-1) {
    	infoWerk = 'Wigalois';
	
		var amp=param.indexOf("&");
		var param1=param.substring(1,amp)
		curSlide=parseFloat(param1);
		var param2=param.substring(amp+1)
		zoom=param2
		if (zoom!=50) {doppelSeite=false}
		document.form1.Eingabe.focus();
		showSlide();
		}
	
		else {	
			curSlide=parseFloat(param.substring(1));
			document.form1.Eingabe.focus();
			showSlide();
        	if (curSlide > 68) {
 		    	infoWerk = 'Parzival';
        	} else {
    			infoWerk = 'Wigalois';
    		}
		}
	}

else {
	if (werk == "Parzival") {
		curSlide = 69;
		document.form1.Eingabe.focus();
		showSlide();	
	}

}

}	
