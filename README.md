# Pitch Takeover 1.0
Max4Live MIDI effect - Force note pitches from one track onto another.

> Ready-to-use single file version in `/dist/`

### How to use :

- Place a first instance on a source MIDI track, leave in `Send` mode
- Place a second instance on a destination MIDI track, activate `Receive` mode
  
MIDI notes played on destination track will have their pitch overriden by notes / chords maintained on source track.

### Options :

- Multiple internal channels can be used for independant S/R pairs (`From` menu in Send mode, `To` numberbox in Receive mode).
  
- `MIDI Thru On/Off` (Send mode) : toggles whether MIDI signal goes through on source track.
  
- `Fallback Silence/Local` (Receive mode) : toggles whether notes played on destination track should be triggered (at their original pitch) when source track is silent.
