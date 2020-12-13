const router = require('express').Router();
const { validate } = require('express-validation');

const { all } = require('../validations/userView');

/**
 * Controllers
 */
const USER_VIEW = require('../controllers/userView');

router.get('/', validate(all), USER_VIEW.all);

module.exports = router;