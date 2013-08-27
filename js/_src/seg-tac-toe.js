/*

  Seg-Tac-Toe
    by John "Seg" Seggerson
    http://theseg.github.io/

*/

// @codekit-prepend "stt-vars.js";
// @codekit-prepend "stt-ui.js";
// @codekit-prepend "stt-input.js";
// @codekit-prepend "stt-logic.js";


function sttInit() {
	sttInitVars();
	sttInitLogic();
	sttInitUI();
	sttInitInput();
}

function sttReset() {
	sttResetVars();
	sttResetLogic();
	sttResetUI();
	sttResetInput();
}

$( document ).ready(function() {
    console.log("document.ready");
	
	sttInit();
	
	// Use to quickly set given situation.
	if ( false ) {
		sttUIMarkcell($("#stt-main-cell-0-0"),"X");
		sttUIMarkcell($("#stt-main-cell-1-1"),"O");
		sttUIMarkcell($("#stt-main-cell-0-1"),"X");
		sttUIMarkcell($("#stt-main-cell-2-0"),"O");
		sttUIMarkcell($("#stt-main-cell-0-2"),"X");
		//sttUIMarkcell($("#stt-main-cell-0-2"),"O");
	} else if ( false ) {
		sttUIMarkcell($("#stt-main-cell-0-0"),"X");
		sttUIMarkcell($("#stt-main-cell-0-1"),"O");
		sttUIMarkcell($("#stt-main-cell-1-1"),"X");
		sttUIMarkcell($("#stt-main-cell-2-0"),"O");
		sttUIMarkcell($("#stt-main-cell-1-2"),"X");
		sttUIMarkcell($("#stt-main-cell-0-2"),"O");
	}

});
