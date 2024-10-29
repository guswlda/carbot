const router = require('express').Router();

const { custom_car } = require('../../controllers/user/userController');

router.post('/custom_car', custom_car);

module.exports = router;
