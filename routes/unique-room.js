// Packages
var express = require('express')
var router = express.Router()
const { v4: uuidv4 } = require('uuid');

router.get("/", (req, res)=>{
    let uniqueRoom = uuidv4(); //'9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

    res.status(200).json({ roomName: uniqueRoom });
})

module.exports = router;