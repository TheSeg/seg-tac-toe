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
		$( "#"+targetCell.attr("id")+" .stt-icon-current-state").html(
			'<i class="glyphicon '+playerProps[targetPlayer].faIconClass+'"></i>'
		);
	} else {
		console.warn( "The cell '"+targetCell.attr("id")+"' is already claimed!" );
	}
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

function sttUIEOFModelDress( inputTitle , inputBody )
{
	$('#model-eog .modal-title').html( inputTitle );
	$('#model-eog .modal-body').html( inputBody );
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
			sttUIEOFModelDress( "Congradulations Player "+currentStatus.winner+"!!!" , "Game was won by player "+currentStatus.winner+" with the #"+currentStatus.winCondition+" win condition!" );
			break;
		case gamePlayStatusTypes.draw:
			sttUIEOFModelDress( "DRAW!" , "The game ended in a draw." );
			break;
	}
	
	// Show Model
	$('#model-eog').modal('show');
}