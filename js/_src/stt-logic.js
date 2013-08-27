/*

  Seg-Tac-Toe
    by John "Seg" Seggerson
    http://theseg.github.io/

*/


/**
 * Initializes the Logic system.
 */
function sttInitLogic()
{
	
}

/**
 * Resets the Logic system.
 */
function sttResetLogic()
{
	
}

/**
 * Returns the ID string of a cell, given the X Y coordinates.
 * 
 * @param inputXY array
 * 		Array in x,y format.
 * @return string
 * 		String of ID name of requested cell.
 */
function sttCellXYtoID( inputXY )
{
	return playField.coreCellIDName + inputXY.x + "-" + inputXY.y;
}

/**
 * Main logic engine to determine win/loose/draw state.
 * 
 * @param targetID
 * 		Array in x,y format.
 * @return object
 * 		Returns object of results.
 */
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

/**
 * Runs logic engine to check win conditions, then reports to state variables on results.
 * 
 * @return bool
 * 		TRUE on successful compliation.
 */
function sttSetWinStatus()
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
		
		// Are we at a full board?
		if ( ( returnVar.state === gamePlayStatusTypes.inprogress ) && ( $(".input-claimed").length >= $(".stt-cell").length ) ) {
			// All squares filled.
			returnVar.state = gamePlayStatusTypes.draw;
		}
		
	} else {
		// The defacto returnVar of 0:null state is already defined.
	}
	
	// Set Current Conditions.
	currentStatus.state = returnVar.state;
	currentStatus.winner = returnVar.winner;
	currentStatus.winCondition = returnVar.winCondition;
	
	sttLogicEOG();
	
	return true;
}

/**
 * Checks if game is no longer in progress. Runs EOG procedure if there is an outcome.
 */
function sttLogicEOG() {
	// Check the status and launches end of game acordingly.
	if ( currentStatus.state > gamePlayStatusTypes.inprogress ) {
		// Run EOG functions.
		sttUIEOF();
	}
	
	return true;
}
