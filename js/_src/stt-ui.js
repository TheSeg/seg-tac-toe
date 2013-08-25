/*

  Seg-Tac-Toe
    by John "Seg" Seggerson
    http://theseg.github.io/

*/

function sttInitUI() {
	console.log("sttInitUI();");
}

function sttResetUI() {
	console.log("sttResetUI();");
}

function sttUIMarkcell( targetCell , targetPlayer ) {
	console.log( "sttUIMarkcell( "+ targetCell + " , "+ targetPlayer +" );" );
	
	// Check to make sure square isn't already assigned.
	
	// Assign player's CSS class to target element.
	targetCell.addClass(playerProps[targetPlayer].cellClass);
	
}