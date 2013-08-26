/*

  Seg-Tac-Toe
    by John "Seg" Seggerson
    http://theseg.github.io/

*/

var playField = {
    "width":3,
    "height":3,
};

var gamePlayStatusTypes = {
	"inprogress":0,
	"winner":1,
	"draw":2,
};

var playerProps = {
    "X": {
        "shortname": "X",
        "faIconClass": "icon-remove-circle",
		"cellClass": "input-claimed-x",
    },
    "O": {
        "shortname": "O",
        "faIconClass": "icon-circle-blank",
		"cellClass": "input-claimed-o",
    }
};

var initalStatus = {
	"currentPlayer":"X",
	"gamePlayStatus":gamePlayStatusTypes.inprogress,
};

var currentStatus = initalStatus;

function sttResetVars() {
	currentStatus = initalStatus;
}

function sttInitVars() {
	sttResetVars();
}
