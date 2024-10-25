const router = require('express').Router();
const { getCarType } = require('../controllers/getData');

router.get('/get_car_type', getCarType);
