inlets = 2;
outlets = 2;

// inlet 0 : messages from global_bus (channel id + notes)
// inlet 1 : selected channel (from umenu)

// outlet 0 : filtered notes (received from selected channel only)
// outlet 1 : umenu refresh messages

var selectedChannel = null;
var channels = [];

function addChannel(ch) {

    if (channels.indexOf(ch) === -1) {
        channels.push(ch);
       
        outlet(1, "clear");
        for (var i = 0; i < channels.length; i++) {
            outlet(1, ["append", channels[i]]);
        }
    }
}

function anything() {

    if (this.inlet === 0) {

        var ch = messagename;              
        var notes = arrayfromargs(arguments);

        ch = ch.split("_")[1];

        addChannel(ch);

        if (selectedChannel === null) {
            selectedChannel = ch;
        }

        if (selectedChannel === ch) {
            outlet(0, notes);
        }

    } else if (this.inlet === 1) {
        selectedChannel = messagename;
    }
}