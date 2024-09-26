
const notes = require('../constants/notes')

const generateMajorScale = (root) => {
    const major_scale = [2, 2, 1, 2, 2, 2, 1]

    let position = notes.findIndex(note => note === root)
    const newScale = [notes[position]]
    major_scale.map(interval => {
      position += interval
  
      position = position % notes.length;
  
      newScale.push(notes[position])
  
      return notes[position]
    })
  
    return newScale
  }

module.exports = generateMajorScale