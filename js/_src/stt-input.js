/*

  Seg-Tac-Toe
    by John "Seg" Seggerson
    http://theseg.github.io/

*/

/**
 * Initializes the Input system.
 */
function sttInitInput()
{
	$(".stt-cell").click( function() {
		sttInputBind( this );
	}).hover(
		function() {
			sttInputOnHover( this );
		},
		function() {
			sttInputOnHoverOut( this );
		}
	);
	$(".stt-reset-function").click( function() {
		sttReset();
	});
}

/**
 * Resets the Input system.
 */
function sttResetInput()
{
	
}

/**
 * Advances the current player's turn.
 */
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

/**
 * Functions to run when a turn is made by a player.
 */
function sttInputEndTurn()
{
	sttSetWinStatus();
	sttUICurrentPlayer();
}

/**
 * Binding input function on a cell.
 * 
 * @param targetElement object
 * 		jQuery object of target cell to mark.
 */
function sttInputBind( targetElement )
{
	
	if ( currentStatus.state === gamePlayStatusTypes.inprogress ) {
		if ( sttUIMarkcell( $(targetElement) , currentStatus.currentPlayer ) ) {
			// Returns TRUE only if cell is previously unclaimed.
			sttInputAdvancePlayer();
			sttInputEndTurn();
		}
	}
	
}

/**
 * Binding OnHover function on a cell.
 * 
 * @param targetElement object
 * 		jQuery object of target cell to mark.
 * @return bool
 * 		TRUE on successful call.
 */
function sttInputOnHover( targetElement )
{
	var targetParent = $(targetElement);
	if ( currentStatus.state === gamePlayStatusTypes.inprogress && ( targetParent.hasClass("input-claimed") === false ) ) {
		var target = "#"+targetParent.attr("id")+" .stt-icon-current-state";
		$(target).html('<i class="glyphicon '+playerProps[currentStatus.currentPlayer].faIconClass+'"></i>');
	}
	
	return true;
}

/**
 * Binding OnHoverOut function on a cell.
 * 
 * @param targetElement object
 * 		jQuery object of target cell to mark.
 * @return bool
 * 		TRUE on successful call.
 */
function sttInputOnHoverOut( targetElement )
{
	var targetParent = $(targetElement);
	if ( currentStatus.state === gamePlayStatusTypes.inprogress && ( targetParent.hasClass("input-claimed") === false ) ) {
		var target = "#"+targetParent.attr("id")+" .stt-icon-current-state";
		$(target).html("");
	}
	
	return true;
}