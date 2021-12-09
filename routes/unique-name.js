// Packages
var express = require('express')
var router = express.Router()
const { uniqueNamesGenerator, animals, NumberDictionary } = require("unique-names-generator");

router.get("/", (req, res)=>{
	    // Prefixes For A Unique Befaviour Of Animal
    const behaviour = [
        'Dangerous',
        'Safety',
        'Curious',
        'Clear',
        'Angry',
        'Mad',
        'Big',
        'Small',
        'Winner',
        'Thinner',
        'Ruiner',
        "Crying",
        "Laughing",
        "Irritating",
        "Runner",
        "Fighter",
        "Slower",
        "Hanging"
    ]

    // Random Number Generator
    const numberDictionary = NumberDictionary.generate({ min: 100, max: 1999 });

    // Generating Random Username
    const randomUserName = uniqueNamesGenerator({
        dictionaries: [behaviour, animals, numberDictionary],
        length: 3,
        style: 'capital',
        separator: ''
    })

    res.status(200).json({ userName: randomUserName });
})

module.exports = router;