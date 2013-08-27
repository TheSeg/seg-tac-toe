/*

  Seg-Tac-Toe
    by John "Seg" Seggerson
    http://theseg.github.io/

*/

var playField = {
    "width":3,
    "height":3,
	"winLength":3,
	"coreCellIDName":"stt-main-cell-",
	"winConditions": [
		{
			"winAnimationClass":"winCondition-diag-00",
			"cells":[
				{"x":0,"y":0},
				{"x":1,"y":1},
				{"x":2,"y":2},
			],
		},
		{
			"winAnimationClass":"winCondition-diag-01",
			"cells":[
				{"x":0,"y":2},
				{"x":1,"y":1},
				{"x":2,"y":0},
			],
		},
		{
			"winAnimationClass":"winCondition-hor-00",
			"cells":[
				{"x":0,"y":0},
				{"x":0,"y":1},
				{"x":0,"y":2},
			],
		},
		{
			"winAnimationClass":"winCondition-hor-01",
			"cells":[
				{"x":1,"y":0},
				{"x":1,"y":1},
				{"x":1,"y":2},
			],
		},
		{
			"winAnimationClass":"winCondition-hor-02",
			"cells":[
				{"x":2,"y":0},
				{"x":2,"y":1},
				{"x":2,"y":2},
			],
		},
		{
			"winAnimationClass":"winCondition-ver-00",
			"cells":[
				{"x":0,"y":0},
				{"x":1,"y":0},
				{"x":2,"y":0},
			],
		},
		{
			"winAnimationClass":"winCondition-ver-01",
			"cells":[
				{"x":0,"y":1},
				{"x":1,"y":1},
				{"x":2,"y":1},
			],
		},
		{
			"winAnimationClass":"winCondition-ver-02",
			"cells":[
				{"x":0,"y":2},
				{"x":1,"y":2},
				{"x":2,"y":2},
			],
		},
	],
};

var gamePlayStatusTypes = {
	"inprogress":0,
	"winner":1,
	"draw":2,
};

var players = ["X","O"];

var playerProps = {
    "X": {
        "shortname": "X",
        "faIconClass": "glyphicon-remove-circle",
		"cellClass": "input-claimed-x",
    },
    "O": {
        "shortname": "O",
        "faIconClass": "glyphicon-record",
		"cellClass": "input-claimed-o",
    }
};

var initalStatus = {
	"currentPlayer":"X",
	"state":gamePlayStatusTypes.inprogress,
	"winner":null,
	"winCondition":null,
};

var currentStatus = $.extend( {}, initalStatus );

function sttResetVars() {
	currentStatus = $.extend( {}, initalStatus );
}

function sttInitVars() {
	sttResetVars();
}
