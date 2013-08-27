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
	
});
