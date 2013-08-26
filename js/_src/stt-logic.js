/*

  Seg-Tac-Toe
    by John "Seg" Seggerson
    http://theseg.github.io/

*/

function MainLogic() {
    console.log("MainLogic();");
}

function sttGetWinStatus() {
	console.log("sttGetWinStatus();");
	
	// Variable declars
	var doEval = false;
	var returnVar = {
		"state":0,
		"winner":null
	};
	
	// Does any one player have more than three owned squares? If so, we can eval.
	for ( var targetPlayer in playerProps ) {
		if ( $("."+playerProps[targetPlayer].cellClass).length >= 3 ) {
			doEval = true;
		}
	}
	
	// May we evaluate?
	if ( doEval === true ) {
		console.log( "\tOne more more players has 3+ squares." );
		
		
		
		
	} else {
		console.log( "\tNo player has enough squares yet." );
	}
	
	return returnVar;
}

function sttGameStateToString() {
	var currentState = sttGetWinStatus();
	var returnString;
	
	switch( currentState.state )
	{
		case 0:
			returnString = "Game is still in progress.";
			break;
		case 1:
			returnString = "Game was won by player "+currentState.winner+"!";
			break;
		case 2:
			returnString = "Game has ended in a draw.";
			break;
		default:
			returnString = "Game is still in progress.";
	}
	
	return returnString;
}

function sttResetLogic() {
	
}

function sttInitLogic() {
	
}

