// import { generateMajorScale } from '../controllers/scaleController';

const express = require('express');
const generateMajorScale = require('../controllers/scaleController');
const generateMajorChord = require('../controllers/chordController');
const router = express.Router();

router.get('/scale/:root', (req, res) => {
    // Logic for generating a scale
    const root = req.params.root ?? 'C'
    const scale = generateMajorScale(root)
    
    res.json({ scale });
});

router.get('/chord/:root', (req, res) => {
    // Logic for generating a chord
    const root = req.params.root ?? 'C'
    const chord = generateMajorChord(root)

    res.json({ chord });
});

module.exports = router;