/*

  Seg-Tac-Toe
    by John "Seg" Seggerson
    http://theseg.github.io/

*/

// @codekit-prepend "stt-vars.js";
// @codekit-prepend "stt-logic.js";
// @codekit-prepend "stt-ui.js";


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
	sttUIMarkcell($("#stt-main-cell-0-0"),"X");
	sttUIMarkcell($("#stt-main-cell-0-1"),"O");
	sttUIMarkcell($("#stt-main-cell-1-1"),"X");
	sttUIMarkcell($("#stt-main-cell-2-0"),"O");
	sttUIMarkcell($("#stt-main-cell-2-2"),"X");

});
