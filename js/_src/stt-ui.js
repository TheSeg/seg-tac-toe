/*

  Seg-Tac-Toe
    by John "Seg" Seggerson
    http://theseg.github.io/

*/

var targetMarkCellClasses;

function sttInitUI()
{
	console.log("sttInitUI();");
	targetMarkCellClasses = [
		"input-claimed"
	];
	for ( var playerName in playerProps ) {
		targetMarkCellClasses.push( playerProps[playerName].cellClass );
	}
	sttResetUI();
}

function sttResetUI()
{
	console.log("sttResetUI();");
	sttUIUnMarkCellAll();
}

function sttUIMarkcell( targetCell , targetPlayer )
{
	// Check to make sure square isn't already assigned.
	if ( targetCell.hasClass("input-claimed") === false ) {
		// Assign player's CSS class to target element.
		targetCell.addClass( "input-claimed " + playerProps[targetPlayer].cellClass);
	} else {
		console.warn( "The cell '"+targetCell.id+"' is already claimed!" );
	}
}

function sttUIUnMarkCell( targetCell )
{
	targetCell.removeClass( targetMarkCellClasses.join(" ") );
}

function sttUIUnMarkCellAll()
{
	$(".stt-cell").each(function(i,a) {
		sttUIUnMarkCell( $(this) );
	});
}