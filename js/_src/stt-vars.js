/*

  Seg-Tac-Toe
    by John "Seg" Seggerson
    http://theseg.github.io/

*/

/**
 * Playfield settings.
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

/**
 * Define types of gameplay status.
 */
var gamePlayStatusTypes = {
	"inprogress":0,
	"winner":1,
	"draw":2,
};

/**
 * Lists order and existance of players.
 */
var players = ["X","O"];

/**
 * Properties related to player types.
 */
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

/**
 * Inital status; Reset functions always revert to this set.
 */
var initalStatus = {
	"currentPlayer":"X",
	"state":gamePlayStatusTypes.inprogress,
	"winner":null,
	"winCondition":null,
};

/**
 * All functions use currentStatus for state information.
 */
var currentStatus = $.extend( {}, initalStatus );

/**
 * Reset all variables.
 */
function sttResetVars() {
	currentStatus = $.extend( {}, initalStatus );
}

/**
 * Initalize all variables.
 */
function sttInitVars() {
	sttResetVars();
}
