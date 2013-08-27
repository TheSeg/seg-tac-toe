/*

  Seg-Tac-Toe
    by John "Seg" Seggerson
    http://theseg.github.io/

*/

// @codekit-prepend "stt-vars.js";
// @codekit-prepend "stt-ui.js";
// @codekit-prepend "stt-input.js";
// @codekit-prepend "stt-logic.js";

/**
 * Runs all Initalizing functions.
 */
function sttInit() {
	sttInitVars();
	sttInitLogic();
	sttInitUI();
	sttInitInput();
}

/**
 * Runs all Reset functions.
 */
function sttReset() {
	sttResetVars();
	sttResetLogic();
	sttResetUI();
	sttResetInput();
}

/**
 * Starts application when document is loaded.
 */
$( document ).ready(function() {
	sttInit();
});
