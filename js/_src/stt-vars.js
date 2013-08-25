/*

  Seg-Tac-Toe
    by John "Seg" Seggerson
    http://theseg.github.io/

*/

var playField = {
    "width":3,
    "height":3,
};

var playerProps = {
    "X": {
        "shortname": "X",
        "faIconClass": "icon-remove-circle",
    },
    "O": {
        "shortname": "O",
        "faIconClass": "icon-circle-blank",
    }
};

var initalStatus = {
	"currentPlayer":"X",
};

var currentStatus = initalStatus;

function stt_reset_vars() {
	currentStatus = initalStatus;
}

function stt_init_vars() {
	stt_reset_vars();
}
