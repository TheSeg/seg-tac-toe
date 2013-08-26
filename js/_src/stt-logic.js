/*

  Seg-Tac-Toe
    by John "Seg" Seggerson
    http://theseg.github.io/

*/

function MainLogic()
{
    console.log("MainLogic();");
}

function sttCellIDtoXY( inputString )
{
	var returnXY = {
		"x":null,
		"y":null,
	};
	// stt-main-cell-0-0
	var targetArray = inputString.substr(14).split("-");
	
	returnXY.x = targetArray[0];
	returnXY.y = targetArray[1];
	
	return returnXY;
}

function sttGetWinStatus()
{
	console.log("sttGetWinStatus();");
	
	// Variable declars
	var doEval = false;
	var returnVar = {
		"state":0,
		"winner":null
	};
	var playerSquares = {};
	
	// Does any one player have more than three owned squares? If so, we can eval.
	for ( var targetPlayer in playerProps ) {
		// Grab the claimed cells for each player.
		playerSquares[targetPlayer] = $("."+playerProps[targetPlayer].cellClass);
		
		// Check if there's at least enough claimed squares for evaluation.
		if ( playerSquares[targetPlayer].length >= 3 ) {
			doEval = true;
		}
	}
	
	// May we evaluate?
	if ( doEval === true ) {
		console.log( "\tOne more more players has 3+ squares." );
		
		// Cycle though each claimed cell to see if we have a row.
		for ( var targetPlayerCells in playerSquares ) {
			for ( var targetCell in targetPlayerCells ) {
				var currentCell = sttCellIDtoXY( playerSquares[targetPlayerCells][targetCell].id );
				console.log( currentCell );
			}
		}
		
	} else {
		console.log( "\tNo player has enough squares yet." );
		// The defacto returnVar of 0:null state is already defined.
	}
	
	return returnVar;
}

function sttGameStateToString()
{
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

function sttResetLogic()
{
	
}

function sttInitLogic()
{
	
}

