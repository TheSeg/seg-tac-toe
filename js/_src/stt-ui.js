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
	sttUICurrentPlayer();
}

function sttUIGetPlayerIcon( targetPlayer )
{
	// Returns HTML of the target player's icon.
	var returnString = '<span class="glyphicon ' + playerProps[ targetPlayer.toUpperCase() ].faIconClass + '"></span>';
	
	return returnString;
}

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
		console.warn( "The cell '"+targetCell.attr("id")+"' is already claimed!" );
	}
	
	return returnVar;
}

function sttUIUnMarkCell( targetCell )
{
	targetCell.removeClass( targetMarkCellClasses.join(" ") );
	$( "#"+targetCell.attr("id")+" .stt-icon-current-state").html( '' );
}

function sttUIUnMarkCellAll()
{
	$(".stt-cell").each(function(i,a) {
		sttUIUnMarkCell( $(this) );
	});
}

function sttUIEOFModelDress( inputTitle , inputBody, inputIcon )
{
	$('#model-eog .modal-title').html( inputTitle );
	
	var compiledBody = '<div class="featured-icon">'+inputIcon+'</div>\n<p>'+inputBody+'</p>';
	
	$('#model-eog .modal-body').html( compiledBody );
}

function sttUIEOF() {
	// End of Game Display
	
	// If we're still in progress, don't do anything.
	if ( currentStatus.state === gamePlayStatusTypes.inprogress ) {
		return false;
	}
	
	// Closing Pre-animations
	
	// Dress the Model.
	switch( currentStatus.state )
	{
		case gamePlayStatusTypes.winner:
			sttUIEOFModelDress(
				"Congratulations!!!" ,
				"Game was won by player "+ sttUIGetPlayerIcon( currentStatus.winner ) +"!",
				sttUIGetPlayerIcon( currentStatus.winner )
			);
			break;
		case gamePlayStatusTypes.draw:
			sttUIEOFModelDress(
				"DRAW!" , 
				"The game ended in a draw.<br>Why not try a <strong>New Game</strong>?",
				'<i class="icon-question-sign"></i>'
			);
			break;
	}
	
	// Show Model
	$('#model-eog').modal('show');
}

function sttUICurrentPlayer() {
	// Sets up playfield style for active player.
	
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
