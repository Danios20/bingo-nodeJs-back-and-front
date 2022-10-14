const express = require('express');
const router = express.Router();
const renderLobby = require('../controllers/renderLobby.js')
const renderGame = require('../controllers/renderGame.js')
const setWinner = require('../controllers/setWinner.js')
const renderWinner = require('../controllers/renderWinner.js')
const findUser = require('../controllers/findUser.js')


/* GET renderLobby listing. */
router.get('/:id/lobby', renderLobby)
/* GET findUser listing. */
router.get('/play/:id', findUser)
/* GET renderGame listing. */
router.get('/play/:id/:userName', renderGame)
/* GET setWinner listing. */
router.get('/winner/:id', setWinner)
/* GET renderWinner listing. */
router.get('/:userName/winner', renderWinner)

module.exports = router;
