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

function sttInputEndTurn()
{
	sttSetWinStatus();
	sttUICurrentPlayer();
}

function sttInputBind( targetElement )
{
	
	if ( currentStatus.state === gamePlayStatusTypes.inprogress ) {
		if ( sttUIMarkcell( $(targetElement) , currentStatus.currentPlayer ) ) {
			sttInputAdvancePlayer();
			sttInputEndTurn();
		}
	}
	
}

function sttInputOnHover( targetElement )
{
	var targetParent = $(targetElement);
	if ( currentStatus.state === gamePlayStatusTypes.inprogress && ( targetParent.hasClass("input-claimed") === false ) ) {
		var target = "#"+targetParent.attr("id")+" .stt-icon-current-state";
		$(target).html('<i class="glyphicon '+playerProps[currentStatus.currentPlayer].faIconClass+'"></i>');
	}
	
	return true;
}

function sttInputOnHoverOut( targetElement )
{
	var targetParent = $(targetElement);
	if ( currentStatus.state === gamePlayStatusTypes.inprogress && ( targetParent.hasClass("input-claimed") === false ) ) {
		var target = "#"+targetParent.attr("id")+" .stt-icon-current-state";
		$(target).html("");
	}
	
	return true;
}