const router = require('express').Router();
const {
  signUp,
  login,
  logout,
  findId,
} = require('../../controllers/auth/authController');

router.post('/sign_up', signUp);
router.post('/login', login);
router.post('/logout', logout);
router.post('/find_id', findId);

module.exports = router;
