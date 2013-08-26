/*

  Seg-Tac-Toe
    by John "Seg" Seggerson
    http://theseg.github.io/

*/

// @codekit-prepend "stt-vars.js";
// @codekit-prepend "stt-ui.js";
// @codekit-prepend "stt-logic.js";



function sttInit() {
	sttInitVars();
	sttInitLogic();
	sttInitUI();
}

function sttReset() {
	sttResetVars();
	sttResetLogic();
	sttResetUI();
}

$( document ).ready(function() {
    console.log("document.ready");
	
	sttInit();
	
	if ( true ) {
		sttUIMarkcell($("#stt-main-cell-0-0"),"X");
		sttUIMarkcell($("#stt-main-cell-1-1"),"O");
		sttUIMarkcell($("#stt-main-cell-0-1"),"X");
		sttUIMarkcell($("#stt-main-cell-2-0"),"O");
		sttUIMarkcell($("#stt-main-cell-0-2"),"X");
		//sttUIMarkcell($("#stt-main-cell-0-2"),"O");
	} else {
		sttUIMarkcell($("#stt-main-cell-0-0"),"X");
		sttUIMarkcell($("#stt-main-cell-0-1"),"O");
		sttUIMarkcell($("#stt-main-cell-1-1"),"X");
		sttUIMarkcell($("#stt-main-cell-2-0"),"O");
		sttUIMarkcell($("#stt-main-cell-1-2"),"X");
		sttUIMarkcell($("#stt-main-cell-0-2"),"O");
	}

	var returnString = sttGameStateToString();
	console.log( "-- Final Result --");
	console.log( returnString );
});
