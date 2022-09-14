const express = require('express');
const router = express.Router();

const Contact = require('../../models/Contact');
const Company = require('../../models/Company');

// @route GET /api/contacts
// @desc get all contacts

router.get('/', async (req, res) => {
})



module.exports = router;