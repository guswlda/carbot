const database = require('../../database/database'); // database 가져오기
const nodemailer = require('nodemailer'); // nodemailer
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');

dotenv.config();

// 이메일 인증 구현
const smtpTransporter = nodemailer.createTransport({
  host: 'smtp.naver.com', // naver smtp 사용
  port: 587, // 포트 587
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER, // 사용자 이메일
    pass: process.env.EMAIL_PASS, // 사용자 이메일 비밀번호
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const authNumbers = {}; // 인증번호 보관

const emailAuth = async (req, res) => {
  const email = req.body.customor_email;
  // 6자리 랜덤 인증번호 생성
  const emailRandomNumber = Math.floor(Math.random() * 899999) + 100000;
  console.log('생성된 인증번호:', emailRandomNumber);

  const mailOption = {
    from: process.env.EMAIL_USER, // 발신자 이메일
    to: email, // 수신자 이메일
    subject: '카봇 이메일 인증',
    html: `<h1>인증번호를 입력하세요:</h1> <p>${emailRandomNumber}</p>`,
  };

  smtpTransporter.sendMail(mailOption, (error, info) => {
    if (error) {
      console.log('이메일 전송 오류:', error);
      res.status(500).send('메일 전송 실패');
    } else {
      console.log('메일 전송 성공:', info.response);
      res.status(200).send('메일 전송 성공');
      authNumbers[email] = {
        code: emailRandomNumber,
        expires: Date.now() + 5 * 60000,
      }; // 인증번호 5분 유지
    }
  });
};

const verifyNumber = (req, res) => {
  const { email, code } = req.body; // code가 요청에서 제대로 전달되었는지 확인

  if (!authNumbers[email]) {
    return res.status(400).send('인증번호가 존재하지 않거나 만료되었습니다.');
  }

  // 인증번호 만료 확인
  if (Date.now() > authNumbers[email].expires) {
    delete authNumbers[email];
    return res.status(400).send('인증번호가 만료되었습니다.');
  }

  // 인증번호 일치 여부 확인
  if (String(authNumbers[email].code) === String(code)) {
    delete authNumbers[email];
    return res.status(200).send('인증 성공');
  } else {
    return res.status(400).send('인증번호가 일치하지 않습니다.');
  }
};

// 비밀번호 찾기 하기 전 아이디 이메일 확인
const verifyUser = async (req, res) => {
  const { customer_id, customer_email } = req.body;
  const checking = `SELECT * FROM customers WHERE customer_id = $1 AND customer_email = $2`;
  const values = [customer_id, customer_email];

  try {
    const { rows } = await database.query(checking, values);

    if (rows.length > 0) {
      return res.status(200).json({ success: true, user: rows[0] });
    } else {
      return res
        .status(404)
        .json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error' });
  }
};

// 비밀번호 찾기
const updatePassword = async (req, res) => {
  const { new_password, customer_id } = req.body; // 요청 본문에서 데이터 추출

  try {
    const salt = 10;
    const newhashedPassword = await bcrypt.hash(new_password, salt); // 비밀번호 해시화

    // 데이터베이스 쿼리
    const changes = `UPDATE customers SET customer_pw = $1, customer_updated_at = NOW() WHERE customer_id = $2`;
    const pw_values = [newhashedPassword, customer_id];
    await database.query(changes, pw_values);

    // 응답으로 성공 메시지 반환
    res
      .status(200)
      .json({ success: true, message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error:', error); // 오류 로깅
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = { emailAuth, verifyNumber, verifyUser, updatePassword };
