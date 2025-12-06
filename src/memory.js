// inlet : pitch + velocity from (sending side) notein
// outlet : pitches currently playing on sending side

var current_pitches = [];

function list(pitch, velocity) {

	if (velocity > 0) {
		if (current_pitches.indexOf(pitch) == -1) {
			current_pitches.push(pitch);
		}
	} else {
		if (current_pitches.indexOf(pitch) != -1) {
			current_pitches.splice(current_pitches.indexOf(pitch),1);
		}
	}

	if (current_pitches.length > 0) {
    	outlet(0, current_pitches);
	} else {
    	outlet(0, "empty");
	}

}