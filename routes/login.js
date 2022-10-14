const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')


const findUser = require('../controllers/findUser.js')
const createUser = require('../controllers/createUser.js')
const renderIndex = require('../controllers/renderIndex.js')
const authenticate = require('../controllers/authenticate')

/* GET user listing. */
router.get('/:userName', findUser)

/* POST user listing. */
router.post('/', createUser);
/* POST users listing. */
router.post('/authenticate',authenticate)

/* GET index listing. */
router.get('/', renderIndex)

module.exports = router;
