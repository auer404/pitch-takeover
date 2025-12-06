inlets = 2;
outlets = 2;

// inlet 0 : remote track pitches list / "empty"
// inlet 1 : receiving track notein pitch + vel

// outlet 0 : pitch + vel for one currently held note (loops when receiving a chord)
// outlet 1 : complete list of currently held pitches

var chord = [];
var gateOn = false; // note playing on receiving track

function list() {

    if (this.inlet === 0) {

        for (var i = 0; i < chord.length; i++) {
            outlet(0, [ chord[i], 0 ]);
        }

        chord = arrayfromargs(arguments);
        outlet(1, chord);
        
    } else if (this.inlet === 1) {

        var args = arrayfromargs(arguments);
        var pitch = args[0];
        var vel   = args[1];

        if (chord.length === 0) {
            gateOn = (vel > 0);
            return;
        }

        if (vel > 0) {

            gateOn = true;
            for (var i = 0; i < chord.length; i++) {
                outlet(0, [ chord[i], vel ]); // note ON
            }
        } else {

            for (var i = 0; i < chord.length; i++) {
                outlet(0, [ chord[i], 0 ]); // note OFF
            }
            gateOn = false;
        }
    }
}

function anything() {

    if (this.inlet === 0 && messagename === "empty") {

        for (var i = 0; i < chord.length; i++) {
             outlet(0, [ chord[i], 0 ]); // note OFF
        }

        chord = [];
        outlet(1, "empty");

    }
}