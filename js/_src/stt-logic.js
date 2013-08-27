/*

  Seg-Tac-Toe
    by John "Seg" Seggerson
    http://theseg.github.io/

*/


function sttResetLogic()
{
	
}

function sttInitLogic()
{
	
}

function sttCellXYtoID( inputXY )
{
	return playField.coreCellIDName + inputXY.x + "-" + inputXY.y;
}

function sttGetRowStatus( targetID )
{
	// Variable declars
	var returnVar = {
		"state":gamePlayStatusTypes.inprogress,
		"winner":null,
		"winCondition":null,
	};
	var targetPlayer = null;
	var targetElement = $(targetID);
	
	// What player are we looking at?
	for ( var targetClass in playerProps ) {
		if ( targetElement.hasClass(playerProps[targetClass].cellClass) ) {
			targetPlayer = targetClass;
		}
	}
	
	if ( targetPlayer !== null ) {
		for ( var targetCondition in playField.winConditions ) {
			var cellCount = 0;
			for ( var targetCell in playField.winConditions[targetCondition].cells ) {
				var targetXY = playField.winConditions[targetCondition].cells[targetCell];
				var targetStatus = $( "#"+sttCellXYtoID( targetXY ) ).hasClass( playerProps[targetPlayer].cellClass );
				if ( targetStatus === true ) {
					cellCount++;
				}
			}
			if ( cellCount >= playField.winLength ) {
				// PLAYER HAS WON!
				returnVar.state = gamePlayStatusTypes.winner;
				returnVar.winner = targetPlayer;
				returnVar.winCondition = targetCondition;
				break;
			}
		}
		
	} else {
		// Unclaimed square;
		returnVar.state = gamePlayStatusTypes.inprogress;
		returnVar.winner = null;
	}
	
	return returnVar;
	
}

function sttGetWinStatus()
{
	
	// Variable declars
	var doEval = false;
	var returnVar = {
		"state":0,
		"winner":null,
		"winCondition":null,
	};
	var playerSquares = {};
	
	// Does any one player have more than three owned squares? If so, we can eval.
	for ( var targetPlayer in playerProps ) {
		// Grab the claimed cells for each player.
		playerSquares[targetPlayer] = $("."+playerProps[targetPlayer].cellClass);
		
		// Check if there's at least enough claimed squares for evaluation.
		if ( playerSquares[targetPlayer].length >= playField.winLength ) {
			doEval = true;
		}
	}
	
	// May we evaluate?
	if ( doEval === true ) {
		// Cycle though each claimed cell to see if we have a row.
		for ( var targetPlayerCells in playerSquares ) {
			for ( var targetCell=0; targetCell < playerSquares[targetPlayerCells].length; targetCell++ ) {
				var returnRowStatus = sttGetRowStatus( playerSquares[targetPlayerCells][targetCell] );
				if ( returnRowStatus.state !== gamePlayStatusTypes.inprogress ) {
					returnVar = returnRowStatus;
					break;
				}
			}
			if ( returnVar.state !== gamePlayStatusTypes.inprogress ) {
				break;
			}
		}
		
	} else {
		// The defacto returnVar of 0:null state is already defined.
	}
	
	currentStatus.state = returnVar.state;
	currentStatus.winner = returnVar.winner;
	currentStatus.winCondition = returnVar.winCondition;
	
	return true;
}

function sttGameStateToString()
{
	// Variable declars
	var returnString;
	
	// Set Global current status
	sttGetWinStatus();
	
	// Respond back with string of status.
	switch( currentStatus.state )
	{
		case 0:
			returnString = "Game is still in progress.";
			break;
		case 1:
			returnString = "Game was won by player "+currentStatus.winner+" with the #"+currentStatus.winCondition+" win condition!";
			break;
		case 2:
			returnString = "Game has ended in a draw.";
			break;
		default:
			returnString = "Game is still in progress.";
	}
	
	return returnString;
}
