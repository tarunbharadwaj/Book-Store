// const { urlencoded } = require('body-parser');
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// const bodyParser = require('body-parser');
// const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', bookController.getAllBooks);
// router.get('/list', bookController.getBooksList);
// router.post('/list', urlencodedParser, bookController.getBooksList);
router.get('/about', bookController.aboutPage);

module.exports = router;
