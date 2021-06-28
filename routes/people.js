const express = require('express');
const {people} = require('../data');
const {getPeople,
    CreatePerson,
    CreatePersonPostman,
    UpdatePerson,
    deleteperson} = require('../controllers/people');
const router = express.Router();
router.route('/').get(getPeople).post(CreatePerson);
router.post('/postman',CreatePersonPostman)
router.put('/:id',UpdatePerson)
router.delete('/:id',deleteperson)
module.exports = router;