/*

  Seg-Tac-Toe
    by John "Seg" Seggerson
    http://theseg.github.io/

*/

/**
 * Variables
 */
var targetMarkCellClasses;

/**
 * Initializes the UI.
 */
function sttInitUI()
{
	targetMarkCellClasses = [
		"input-claimed"
	];
	for ( var playerName in playerProps ) {
		targetMarkCellClasses.push( playerProps[playerName].cellClass );
	}
	sttResetUI();
}

/**
 * Resets UI to inital states.
 */
function sttResetUI()
{
	sttUIUnMarkCellAll();
	sttUICurrentPlayer();
}

/**
 * Generates HTML code of player icon.
 */
function sttUIGetPlayerIcon( targetPlayer )
{
	// Returns HTML of the target player's icon.
	var returnString = '<span class="glyphicon ' + playerProps[ targetPlayer.toUpperCase() ].faIconClass + '"></span>';
	
	return returnString;
}

/**
 * Marks target cell to the target player.
 * 
 * @param targetCell object
 * 		jQuery element of cell to mark.
 * @param targetPlayer string
 * 		String of player to tag cell.
 * @return bool
 * 		TRUE if targetCell was marked with targetPlayer.
 */
function sttUIMarkcell( targetCell , targetPlayer )
{
	var returnVar = false;
	// Check to make sure square isn't already assigned.
	if ( targetCell.hasClass("input-claimed") === false ) {
		// Assign player's CSS class to target element.
		targetCell.addClass( "input-claimed " + playerProps[targetPlayer].cellClass);
		$( "#"+targetCell.attr("id")+" .stt-icon-current-state").html(
			'<i class="glyphicon '+playerProps[targetPlayer].faIconClass+'"></i>'
		);
		returnVar = true;
	} else {
		// The cell is already claimed.
	}
	
	return returnVar;
}


/**
 * Umarks target cell of all players.
 * 
 * @param targetCell object
 * 		jQuery element of cell to unmark.
 */
function sttUIUnMarkCell( targetCell )
{
	targetCell.removeClass( targetMarkCellClasses.join(" ") );
	$( "#"+targetCell.attr("id")+" .stt-icon-current-state").html( '' );
}

/**
 * Umarks all cells of all players.
 */
function sttUIUnMarkCellAll()
{
	$(".stt-cell").each(function(i,a) {
		sttUIUnMarkCell( $(this) );
	});
}

/**
 * Dresses End Of Game modal with target text.
 * 
 * @param inputTitle string
 * 		HTML string of message title.
 * @param inputBody string
 * 		HTML string of message body.
 * @param inputIcon string
 * 		HTML string of icon to feature.
 */
function sttUIEOFModalDress( inputTitle , inputBody, inputIcon )
{
	$('#model-eog .modal-title').html( inputTitle );
	
	var compiledBody = '<div class="featured-icon">'+inputIcon+'</div>\n<p>'+inputBody+'</p>';
	
	$('#model-eog .modal-body').html( compiledBody );
}

/**
 * Displays End Of Game modal screen. Includes updating based on current state.
 * 
 * @return bool
 * 		FALSE if currentStatus.state is inprogress.
 */
function sttUIEOF() {
	// End of Game Display
	
	// If we're still in progress, don't do anything.
	if ( currentStatus.state === gamePlayStatusTypes.inprogress ) {
		return false;
	}
	
	// Closing Pre-animations
	
	// Dress the Modal.
	switch( currentStatus.state )
	{
		case gamePlayStatusTypes.winner:
			sttUIEOFModalDress(
				"Congratulations!!!" ,
				"Player "+ sttUIGetPlayerIcon( currentStatus.winner ) +" won the game!",
				sttUIGetPlayerIcon( currentStatus.winner )
			);
			break;
		case gamePlayStatusTypes.draw:
			sttUIEOFModalDress(
				"DRAW!" , 
				"The game ended in a draw.<br>Why not try a <strong>New Game</strong>?",
				'<i class="icon-question-sign"></i>'
			);
			break;
	}
	
	// Show Modal
	$('#model-eog').modal('show');
	
	return true;
}

/**
 * Sets up playfield style for the active player.
 * 
 * @return bool
 * 		FALSE if game is currently NOT inprogress.
 */
function sttUICurrentPlayer() {
	// Clean up current settings.
	$("#stt-main-playfield").removeClass("stt-current-player-X stt-current-player-O");
	
	// Don't do anything if we're not in progress of a game.
	if ( currentStatus.state !== gamePlayStatusTypes.inprogress ) {
		return false;
	}
	
	// Set the proper classes.
	$("#stt-main-playfield").addClass( "stt-current-player-" + currentStatus.currentPlayer.toUpperCase() );
	
	return true;
}
