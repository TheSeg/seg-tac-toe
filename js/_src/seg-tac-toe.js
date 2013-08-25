/*

  Seg-Tac-Toe
    by John "Seg" Seggerson
    http://theseg.github.io/

*/

// @codekit-prepend "stt-vars.js";
// @codekit-prepend "stt-logic.js";
// @codekit-prepend "stt-ui.js";


function stt_init() {
	stt_init_vars();
	stt_init_logic();
	stt_init_ui();
}

function stt_reset() {
	stt_reset_vars();
	stt_reset_logic();
	stt_reset_ui();
}

$( document ).ready(function() {
    console.log("document.ready");
});
