const notes = require('../constants/notes')

// source: ChatGPT
const generateMajorChord = (root) => {
    const rootIndex = notes.indexOf(root);
    const chordIntervals = [0, 4, 7];  // Root, Major 3rd, Perfect 5th
    const chord = chordIntervals.map(interval => notes[(rootIndex + interval) % notes.length]);
    return chord;
};

module.exports = generateMajorChord
