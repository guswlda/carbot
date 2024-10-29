const router = require('express').Router();
const {
  emailAuth,
  verifyNumber,
  updatePassword,
  verifyUser,
} = require('../../controllers/auth/authController');

router.post('/send_email', emailAuth);
router.post('/verify_email', verifyNumber);
router.post('/update_pass', updatePassword);
router.post('/verify_user', verifyUser);

module.exports = router;
