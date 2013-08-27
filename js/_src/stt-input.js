/*

  Seg-Tac-Toe
    by John "Seg" Seggerson
    http://theseg.github.io/

*/

// Variables


// Global functions
function sttInitInput()
{
	$(".stt-cell").click( function() {
		sttInputBind( this );
	});
}

function sttResetInput()
{
	
}

function sttInputAdvancePlayer()
{
	
	var nextIndex = ( $.inArray( currentStatus.currentPlayer , players ) + 1 );
	if ( nextIndex < 0 ) {
		console.error( "Players array is incorrect.", "sttInputAdvancePlayer();");
	} else if ( nextIndex >= players.length ) {
		currentStatus.currentPlayer = players[0];
	} else {
		currentStatus.currentPlayer = players[ nextIndex ];
	}
	
}

function sttInputEndTurn() {
	sttGetWinStatus();
}

function sttInputBind( targetElement ) {
	
	if ( currentStatus.state === gamePlayStatusTypes.inprogress ) {
		sttUIMarkcell( $(targetElement) , currentStatus.currentPlayer );
		sttInputAdvancePlayer();
		sttInputEndTurn();
	}
	
}
