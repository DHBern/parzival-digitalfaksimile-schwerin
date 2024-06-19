function checkHand() {


if (zoom==50) {
	if (curSlide<69) {schreiber="Schreiber I"; return;}
	if (curSlide == 69) {schreiber="Schreiber I/II"; return;}
	if (curSlide>69) {schreiber="Schreiber II"; return;}
	}



if (zoom!=50) {
	if (curSlide<1) {schreiber=""; return;}
	if (curSlide<69) {schreiber="Schreiber I"; return;}
	if (curSlide>=69) {schreiber="Schreiber II";}
	if (curSlide>206) {schreiber=""; return;}

	return;
	}

}